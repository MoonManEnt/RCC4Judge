import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getResend } from "@/lib/resend";
import { Redis } from "@upstash/redis";
import { render } from "@react-email/render";
import DonorReceipt from "@/emails/DonorReceipt";
import DonorNotification from "@/emails/DonorNotification";
import type Stripe from "stripe";

const KV_KEY = "rcc4judge:donor_count";
const DONATIONS_KEY = "rcc4judge:donations";

function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not configured");
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 }
    );
  }

  // Read raw body for signature verification
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let stripe: Stripe;
  try {
    stripe = getStripe();
  } catch {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // For subscriptions, first payment confirmation comes here too
    if (session.payment_status !== "paid" && session.mode !== "subscription") {
      return NextResponse.json({ received: true });
    }

    const metadata = (session.metadata ?? {}) as Record<string, string>;
    const donorName =
      `${metadata.donorFirstName ?? ""} ${metadata.donorLastName ?? ""}`.trim();
    const amount = Math.round((session.amount_total ?? 0) / 100);
    const isRecurring = metadata.isRecurring === "true";
    const contributorType = (metadata.contributorType ?? "individual") as
      | "individual"
      | "corporate";
    const tierName = metadata.tierName ?? "Custom";
    const transactionDate = new Date().toISOString();
    const stripePaymentId = session.id;

    // Record in Redis
    const redis = getRedis();
    if (redis) {
      const donation = {
        amount,
        contributorType,
        name: donorName,
        email: metadata.donorEmail,
        recurring: isRecurring,
        status: "confirmed",
        stripePaymentId,
        timestamp: transactionDate,
      };
      await Promise.all([
        redis.incr(KV_KEY),
        redis.lpush(DONATIONS_KEY, JSON.stringify(donation)),
      ]);
    }

    // Send emails
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
          stripePaymentId,
        })
      );

      const notificationHtml = await render(
        DonorNotification({
          donorName,
          donorEmail: metadata.donorEmail ?? "",
          donorPhone: metadata.donorPhone ?? "",
          amount,
          tierName,
          isRecurring,
          contributorType,
          address: metadata.donorAddress ?? "",
          employer: metadata.employer ?? "",
          occupation: metadata.occupation ?? "",
          corporateName: metadata.corporateName ?? "",
          corporateAuthorizer: metadata.corporateAuthorizer ?? "",
          stripePaymentId,
          transactionDate,
        })
      );

      const emailPromises: Promise<unknown>[] = [];

      // Donor receipt
      if (metadata.donorEmail) {
        emailPromises.push(
          resend.emails.send({
            from: fromAddress,
            to: [metadata.donorEmail],
            replyTo: process.env.CAMPAIGN_REPLY_TO ?? "Support@RCC4Judge.com",
            subject: `Thank you for your ${isRecurring ? "monthly " : ""}contribution to RCC for Chancery 2026`,
            html: receiptHtml,
          })
        );
      }

      // Team notification
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
      // Log but don't fail the webhook — payment is already confirmed
      console.error("Failed to send donation emails:", emailErr);
    }
  }

  // For recurring subscription renewals after the first
  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as Stripe.Invoice;

    // Skip the first invoice — already handled by checkout.session.completed
    if (invoice.billing_reason === "subscription_create") {
      return NextResponse.json({ received: true });
    }

    const amount = Math.round((invoice.amount_paid ?? 0) / 100);
    let metadata: Record<string, string> = {};

    // In the newer Stripe API, subscription lives under invoice.parent.subscription_details
    const subscriptionRef =
      invoice.parent?.subscription_details?.subscription;
    if (subscriptionRef) {
      try {
        const subscriptionId =
          typeof subscriptionRef === "string"
            ? subscriptionRef
            : subscriptionRef.id;
        const subscription =
          await stripe.subscriptions.retrieve(subscriptionId);
        metadata = (subscription.metadata ?? {}) as Record<string, string>;
      } catch {
        console.error("Failed to retrieve subscription metadata");
      }
    }

    if (metadata.donorEmail) {
      const donorName =
        `${metadata.donorFirstName ?? ""} ${metadata.donorLastName ?? ""}`.trim();
      const transactionDate = new Date().toISOString();

      // Record in Redis
      const redis = getRedis();
      if (redis) {
        await Promise.all([
          redis.incr(KV_KEY),
          redis.lpush(
            DONATIONS_KEY,
            JSON.stringify({
              amount,
              contributorType: metadata.contributorType ?? "individual",
              name: donorName,
              email: metadata.donorEmail,
              recurring: true,
              status: "confirmed",
              stripePaymentId: invoice.id,
              timestamp: transactionDate,
            })
          ),
        ]);
      }

      // Send renewal receipt
      try {
        const resend = getResend();
        const fromAddress =
          process.env.CAMPAIGN_FROM_DONATE ?? "donate@rcc4judge.com";

        const receiptHtml = await render(
          DonorReceipt({
            donorName,
            amount,
            tierName: metadata.tierName ?? "Custom",
            isRecurring: true,
            contributorType: (metadata.contributorType ?? "individual") as
              | "individual"
              | "corporate",
            transactionDate,
            stripePaymentId: invoice.id ?? "",
          })
        );

        await resend.emails.send({
          from: fromAddress,
          to: [metadata.donorEmail],
          replyTo: process.env.CAMPAIGN_REPLY_TO ?? "Support@RCC4Judge.com",
          subject:
            "Your monthly contribution to RCC for Chancery 2026 has been processed",
          html: receiptHtml,
        });
      } catch (emailErr) {
        console.error("Failed to send renewal receipt:", emailErr);
      }
    }
  }

  // Always return 200 to prevent Stripe retries
  return NextResponse.json({ received: true });
}
