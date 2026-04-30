import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import { getAuthNetConfig, callAuthNet } from "@/lib/stripe";
import { getResend } from "@/lib/resend";
import { Redis } from "@upstash/redis";
import { render } from "@react-email/render";
import DonorReceipt from "@/emails/DonorReceipt";
import DonorNotification from "@/emails/DonorNotification";

const KV_KEY = "rcc4judge:donor_count";
const DONATIONS_KEY = "rcc4judge:donations";

function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export async function POST(request: Request) {
  const body = await request.text();

  const signatureKey = process.env.AUTHORIZENET_SIGNATURE_KEY;
  if (signatureKey) {
    const sigHeader = request.headers.get("X-ANET-Signature");
    if (!sigHeader) {
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }
    const [, sigHex] = sigHeader.split("=");
    const expected = createHmac("sha512", signatureKey)
      .update(body)
      .digest("hex")
      .toUpperCase();
    if (expected !== (sigHex ?? "").toUpperCase()) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  }

  let event: Record<string, unknown>;
  try {
    event = JSON.parse(body) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const eventType = event.eventType as string;
  if (eventType !== "net.authorize.payment.authcapture.created") {
    return NextResponse.json({ received: true });
  }

  const payload = event.payload as Record<string, unknown>;
  const transactionId = String(payload.id ?? "");
  if (!transactionId) return NextResponse.json({ received: true });

  let config;
  try {
    config = getAuthNetConfig();
  } catch {
    console.error("Authorize.net not configured for webhook");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  let tx: Record<string, unknown>;
  try {
    const result = await callAuthNet(config, {
      getTransactionDetailsRequest: {
        merchantAuthentication: {
          name: config.loginId,
          transactionKey: config.transactionKey,
        },
        transId: transactionId,
      },
    });
    const messages = result.messages as { resultCode: string } | undefined;
    if (messages?.resultCode !== "Ok") {
      console.error("Failed to fetch transaction details:", result);
      return NextResponse.json({ received: true });
    }
    tx = result.transaction as Record<string, unknown>;
  } catch (err) {
    console.error("Failed to fetch transaction details:", err);
    return NextResponse.json({ received: true });
  }

  const userFieldArray = (
    (tx.userFields as Record<string, unknown>)?.userField ?? []
  ) as Array<{ name: string; value: string }>;
  const userFields: Record<string, string> = {};
  for (const f of userFieldArray) userFields[f.name] = f.value;

  const isRecurring = userFields.isRecurring === "true";
  const contributorType = (userFields.contributorType ?? "individual") as
    | "individual"
    | "corporate";
  const tierName = userFields.tierName ?? "Custom";

  const billTo = (tx.billTo ?? {}) as Record<string, string>;
  const customer = (tx.customer ?? {}) as Record<string, string>;
  const donorName =
    `${billTo.firstName ?? ""} ${billTo.lastName ?? ""}`.trim();
  const donorEmail = customer.email ?? "";
  const amount = Math.round(
    parseFloat(String(tx.authAmount ?? tx.settleAmount ?? "0"))
  );
  const transactionDate = new Date().toISOString();

  if (isRecurring) {
    const profile = tx.profile as Record<string, string> | undefined;
    if (profile?.customerProfileId && profile?.customerPaymentProfileId) {
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() + 1);
      const startDateStr = startDate.toISOString().split("T")[0];

      try {
        await callAuthNet(config, {
          ARBCreateSubscriptionRequest: {
            merchantAuthentication: {
              name: config.loginId,
              transactionKey: config.transactionKey,
            },
            subscription: {
              name: "RCC for Chancery 2026 — Monthly",
              paymentSchedule: {
                interval: { length: "1", unit: "months" },
                startDate: startDateStr,
                totalOccurrences: "9999",
                trialOccurrences: "0",
              },
              amount: amount.toFixed(2),
              trialAmount: "0.00",
              profile: {
                customerProfileId: profile.customerProfileId,
                customerPaymentProfileId: profile.customerPaymentProfileId,
              },
            },
          },
        });
      } catch (err) {
        console.error("Failed to create ARB subscription:", err);
      }
    }
  }

  const redis = getRedis();
  if (redis) {
    await Promise.all([
      redis.incr(KV_KEY),
      redis.lpush(
        DONATIONS_KEY,
        JSON.stringify({
          amount,
          contributorType,
          name: donorName,
          email: donorEmail,
          recurring: isRecurring,
          status: "confirmed",
          transactionId,
          timestamp: transactionDate,
        })
      ),
    ]);
  }

  try {
    const resend = getResend();
    const fromAddress =
      process.env.CAMPAIGN_FROM_DONATE ?? "donate@rcc4judge.com";
    const notifyEmails = (
      process.env.CAMPAIGN_DONATION_NOTIFY_EMAILS ?? ""
    )
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    const receiptHtml = await render(
      DonorReceipt({
        donorName,
        amount,
        tierName,
        isRecurring,
        contributorType,
        transactionDate,
        transactionId,
      })
    );

    const notificationHtml = await render(
      DonorNotification({
        donorName,
        donorEmail,
        donorPhone: userFields.donorPhone ?? "",
        amount,
        tierName,
        isRecurring,
        contributorType,
        address: userFields.donorAddress ?? "",
        employer: userFields.employer ?? "",
        occupation: userFields.occupation ?? "",
        corporateName: userFields.corporateName ?? "",
        corporateAuthorizer: userFields.corporateAuthorizer ?? "",
        transactionId,
        transactionDate,
      })
    );

    const emailPromises: Promise<unknown>[] = [];

    if (donorEmail) {
      emailPromises.push(
        resend.emails.send({
          from: fromAddress,
          to: [donorEmail],
          replyTo: process.env.CAMPAIGN_REPLY_TO ?? "Support@RCC4Judge.com",
          subject: `Thank you for your ${isRecurring ? "monthly " : ""}contribution to RCC for Chancery 2026`,
          html: receiptHtml,
        })
      );
    }

    if (notifyEmails.length > 0) {
      emailPromises.push(
        resend.emails.send({
          from: fromAddress,
          to: notifyEmails,
          subject: `[${isRecurring ? "RECURRING" : "ONE-TIME"}] New $${amount} donation — ${donorName}`,
          html: notificationHtml,
        })
      );
    }

    await Promise.all(emailPromises);
  } catch (emailErr) {
    console.error("Failed to send donation emails:", emailErr);
  }

  return NextResponse.json({ received: true });
}
