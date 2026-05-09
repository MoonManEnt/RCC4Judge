// Anedot outbound webhook handler.
//
// Receives donation events from Anedot, verifies HMAC signature, persists a
// canonical donation row to Upstash Redis, sends the donor receipt + treasurer
// notification via Resend, and (during the late-cycle window) fires the
// Mississippi 48-Hour Report alerter required by Miss. Code Ann. § 23-15-807(f).
//
// FEATURE FLAG: this route returns 501 Not Implemented until ANEDOT_WEBHOOK_SECRET
// is set. That keeps it safely deployable before cutover from Authorize.net.
//
// Open items to fill in once we have a real payload sample from Anedot:
//   1. ANEDOT_SIGNATURE_HEADER constant — the exact header Anedot signs with
//   2. ANEDOT_SIGNATURE_ALGO       — sha256 vs sha512 (FEC-style processors typically sha256)
//   3. The body of mapAnedotPayload() — field path mapping to AnedotDonationRow

import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";
import { Redis } from "@upstash/redis";
import { getResend } from "@/lib/resend";
import { render } from "@react-email/render";
import DonorReceipt from "@/emails/DonorReceipt";
import DonorNotification from "@/emails/DonorNotification";

const KV_KEY_DONOR_COUNT = "rcc4judge:donor_count";
const KV_KEY_DONATIONS = "rcc4judge:donations";
const KV_KEY_PROCESSED_EVENTS = "rcc4judge:anedot:processed_events";
const KV_TTL_PROCESSED_EVENT_SECONDS = 60 * 60 * 24 * 90; // 90 days idempotency

// TODO: confirm the exact signature header Anedot sends (e.g. "X-Anedot-Signature").
const ANEDOT_SIGNATURE_HEADER = "X-Anedot-Signature";
const ANEDOT_SIGNATURE_ALGO: "sha256" | "sha512" = "sha256";

// Mississippi 48-Hour Report window per Miss. Code Ann. § 23-15-807(f):
// any contribution > $200 received after the 10th day before the election
// but more than 48 hours before 12:01 a.m. on Election Day must be reported
// to the appropriate filing office within 48 hours of receipt.
//
// Election Day: November 3, 2026. 10 days before = Oct 23, 2026 at 00:00 CT.
// 48 hours before = Nov 1, 2026 at 00:01 CT.
const FORTY_EIGHT_HOUR_WINDOW_START = new Date("2026-10-23T05:00:00.000Z"); // 00:00 CDT (UTC-5)
const FORTY_EIGHT_HOUR_WINDOW_END = new Date("2026-11-01T05:01:00.000Z");
const FORTY_EIGHT_HOUR_AMOUNT_THRESHOLD_CENTS = 20000; // $200.00

type AnedotDonorType =
  | "individual"
  | "llc"
  | "corporation"
  | "pac"
  | "other";

type AnedotPaymentMethod =
  | "card"
  | "ach"
  | "apple_pay"
  | "google_pay"
  | "paypal"
  | "other";

type AnedotDonationStatus =
  | "succeeded"
  | "pending"
  | "failed"
  | "refunded";

interface AnedotDonationRow {
  // Anedot reconciliation
  anedot_donation_id: string;
  anedot_form_id: string;
  webhook_event_id: string;
  webhook_event_type: string;

  // Identification (Miss. Code Ann. § 23-15-801(g))
  donor_type: AnedotDonorType;
  first_name: string;
  last_name: string;
  entity_name: string | null;
  occupation: string | null;
  employer: string | null;

  // Address (required by statute)
  address_street: string;
  address_city: string;
  address_state: string;
  address_zip: string;

  // Contact
  email: string;
  phone: string | null;

  // Attestations (legal record — version-stamped to current attestation doc)
  attest_citizen_or_lpr: boolean;
  attest_own_funds: boolean;
  attest_not_party_or_party_pac: boolean;
  attest_not_government_contractor: boolean;
  attestation_text_version: string;

  // Transaction
  amount_cents: number;
  currency: string;
  recurring: boolean;
  recurring_interval: string | null;
  payment_method: AnedotPaymentMethod;
  status: AnedotDonationStatus;
  is_in_kind: boolean;

  // Time
  donated_at: string;
  received_at: string;

  // Audit / attribution
  ip_address: string | null;
  user_agent: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;

  // Raw audit
  raw_payload: unknown;
}

function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function verifyAnedotSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string,
): boolean {
  if (!signatureHeader) return false;

  // Anedot signature format TBD — common patterns:
  //   "sha256=<hex>"
  //   "<hex>"
  //   "t=<timestamp>,v1=<hex>" (Stripe-style)
  // Adjust this parser once we see a real header.
  const expectedHex = createHmac(ANEDOT_SIGNATURE_ALGO, secret)
    .update(rawBody)
    .digest("hex");

  const providedHex = signatureHeader.includes("=")
    ? (signatureHeader.split("=").pop() ?? "")
    : signatureHeader;

  const expected = Buffer.from(expectedHex, "hex");
  const provided = Buffer.from(providedHex, "hex");

  if (expected.length !== provided.length) return false;
  return timingSafeEqual(expected, provided);
}

// Map an Anedot webhook payload into our canonical AnedotDonationRow.
//
// TODO: fill in the field paths once we have a real sample payload from
// Anedot. The current implementation is a TYPED STUB — it compiles, but it
// returns null until we know the actual JSON shape. Until then, the route
// short-circuits with a 200 acknowledgment so Anedot doesn't retry.
function mapAnedotPayload(
  payload: Record<string, unknown>,
  webhookEventId: string,
  webhookEventType: string,
): AnedotDonationRow | null {
  // Reference (Anedot's actual field paths to be confirmed):
  //   payload.commitment.id              -> anedot_donation_id
  //   payload.commitment.action_page_id  -> anedot_form_id
  //   payload.commitment.amount          -> amount_cents (in cents? or dollars * 100?)
  //   payload.commitment.donor.first_name, last_name, email, phone
  //   payload.commitment.donor.address.street, city, state, zip
  //   payload.commitment.donor.employer, occupation, donor_type
  //   payload.commitment.compliance.* (citizenship, party_status, etc.)
  //   payload.commitment.payment_method, payment_status
  //   payload.commitment.created_at
  //   payload.commitment.recurring, recurring_interval

  void payload;
  void webhookEventId;
  void webhookEventType;

  return null;
}

function isFortyEightHourReportRequired(
  amount_cents: number,
  received_at: Date,
): boolean {
  return (
    amount_cents > FORTY_EIGHT_HOUR_AMOUNT_THRESHOLD_CENTS &&
    received_at >= FORTY_EIGHT_HOUR_WINDOW_START &&
    received_at <= FORTY_EIGHT_HOUR_WINDOW_END
  );
}

async function fireFortyEightHourAlert(
  row: AnedotDonationRow,
): Promise<void> {
  const resend = getResend();
  const treasurerEmail = process.env.CAMPAIGN_DONATION_NOTIFY_EMAILS
    ?.split(",")
    .map((e) => e.trim())
    .find((e) => e.toLowerCase().startsWith("treasurer@")) ??
    "Treasurer@RCC4Judge.com";
  const fromAddress =
    process.env.CAMPAIGN_FROM_DONATE ?? "donate@rcc4judge.com";

  const dueBy = new Date(
    new Date(row.received_at).getTime() + 48 * 60 * 60 * 1000,
  );
  const donorIdentity = row.entity_name
    ? `${row.entity_name} (${row.donor_type})`
    : `${row.first_name} ${row.last_name} — ${row.occupation ?? ""} at ${row.employer ?? ""}`;
  const formattedAmount = `$${(row.amount_cents / 100).toFixed(2)}`;

  await resend.emails.send({
    from: fromAddress,
    to: [treasurerEmail],
    subject: `[48-HOUR REPORT REQUIRED] ${formattedAmount} from ${row.first_name} ${row.last_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
        <div style="background-color: #b91c1c; padding: 20px 28px; border-radius: 0 0 8px 8px;">
          <p style="color: rgba(255,255,255,0.85); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 4px;">
            Mississippi 48-Hour Report Required
          </p>
          <p style="color: #FFFFFF; font-size: 22px; font-weight: bold; margin: 0;">
            File within 48 hours of receipt
          </p>
        </div>
        <div style="background-color: #FFFFFF; border: 1px solid #EDE9DF; border-radius: 12px; padding: 24px 32px; margin: 24px 0;">
          <p style="margin: 0 0 16px; font-size: 14px;">
            Per <strong>Miss. Code Ann. § 23-15-807(f)</strong>, the following contribution must be
            reported to the Mississippi Secretary of State's Office, Elections Division, within 48 hours
            of receipt because it exceeds $200 and was received during the late-cycle window
            (between the 10th day before the election and 48 hours before Election Day).
          </p>
          <hr style="border: none; border-top: 1px solid #EDE9DF; margin: 16px 0;" />
          <p style="margin: 0 0 8px;"><strong>Donor:</strong> ${donorIdentity}</p>
          <p style="margin: 0 0 8px;"><strong>Address:</strong> ${row.address_street}, ${row.address_city}, ${row.address_state} ${row.address_zip}</p>
          <p style="margin: 0 0 8px;"><strong>Amount:</strong> ${formattedAmount}</p>
          <p style="margin: 0 0 8px;"><strong>Date received:</strong> ${row.received_at}</p>
          <p style="margin: 0 0 8px;"><strong>Payment method:</strong> ${row.payment_method}</p>
          <p style="margin: 0 0 8px;"><strong>In-kind?</strong> ${row.is_in_kind ? "Yes" : "No"}</p>
          <p style="margin: 0 0 8px;"><strong>Anedot reference:</strong> ${row.anedot_donation_id}</p>
          <hr style="border: none; border-top: 1px solid #EDE9DF; margin: 16px 0;" />
          <p style="margin: 0 0 8px; color: #b91c1c; font-weight: bold;">
            File by: ${dueBy.toISOString()}
          </p>
          <p style="margin: 0; font-size: 12px;">
            File via email to <a href="mailto:CampaignFinance@sos.ms.gov">CampaignFinance@sos.ms.gov</a>,
            fax to (601) 576-2545, or hand delivery to 401 Mississippi Street, Jackson, MS 39201.
            Use the Forty-Eight Hour Report form available at sos.ms.gov.
          </p>
        </div>
      </div>
    `,
  });
}

export async function POST(request: Request) {
  const secret = process.env.ANEDOT_WEBHOOK_SECRET;

  // Feature flag: route is inert until the secret is set.
  if (!secret) {
    return NextResponse.json(
      { error: "Anedot webhook handler not configured" },
      { status: 501 },
    );
  }

  const rawBody = await request.text();
  const signatureHeader = request.headers.get(ANEDOT_SIGNATURE_HEADER);

  if (!verifyAnedotSignature(rawBody, signatureHeader, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(rawBody) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const webhookEventId = String(payload.event_id ?? payload.id ?? "");
  const webhookEventType = String(payload.event_type ?? payload.type ?? "");

  if (!webhookEventId) {
    return NextResponse.json({ error: "Missing event id" }, { status: 400 });
  }

  // Idempotency check
  const redis = getRedis();
  if (redis) {
    const alreadyProcessed = await redis.get<string>(
      `${KV_KEY_PROCESSED_EVENTS}:${webhookEventId}`,
    );
    if (alreadyProcessed) {
      return NextResponse.json({ received: true, idempotent: true });
    }
  }

  // Map the Anedot payload into our canonical row.
  const row = mapAnedotPayload(payload, webhookEventId, webhookEventType);

  if (!row) {
    // Mapper not yet implemented for this event type — acknowledge so Anedot
    // doesn't retry. Log the payload for inspection.
    console.warn(
      "[anedot webhook] mapper returned null — payload not yet supported",
      { webhookEventId, webhookEventType },
    );
    return NextResponse.json({ received: true, mapped: false });
  }

  // Persist
  if (redis) {
    await Promise.all([
      redis.lpush(KV_KEY_DONATIONS, JSON.stringify(row)),
      redis.incr(KV_KEY_DONOR_COUNT),
      redis.set(
        `${KV_KEY_PROCESSED_EVENTS}:${webhookEventId}`,
        "1",
        { ex: KV_TTL_PROCESSED_EVENT_SECONDS },
      ),
    ]);
  }

  // 48-Hour Report alerter
  const receivedAt = new Date(row.received_at);
  if (isFortyEightHourReportRequired(row.amount_cents, receivedAt)) {
    try {
      await fireFortyEightHourAlert(row);
    } catch (err) {
      console.error("[anedot webhook] 48-hour alert failed", err);
    }
  }

  // Donor receipt + treasurer notification (mirrors the existing flow).
  // Only on the success event — refunds, failures, etc. should not trigger.
  if (row.status === "succeeded") {
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

      const donorName = row.entity_name
        ? row.entity_name
        : `${row.first_name} ${row.last_name}`.trim();
      const amountDollars = Math.round(row.amount_cents / 100);
      const contributorTypeForReceipt: "individual" | "corporate" =
        row.donor_type === "individual" ? "individual" : "corporate";

      const receiptHtml = await render(
        DonorReceipt({
          donorName,
          amount: amountDollars,
          tierName: "Custom",
          isRecurring: row.recurring,
          contributorType: contributorTypeForReceipt,
          transactionDate: row.donated_at,
          transactionId: row.anedot_donation_id,
        }),
      );

      const notificationHtml = await render(
        DonorNotification({
          donorName,
          donorEmail: row.email,
          donorPhone: row.phone ?? "",
          amount: amountDollars,
          tierName: "Custom",
          isRecurring: row.recurring,
          contributorType: contributorTypeForReceipt,
          address: `${row.address_street}, ${row.address_city}, ${row.address_state} ${row.address_zip}`,
          employer: row.employer ?? "",
          occupation: row.occupation ?? "",
          corporateName: row.entity_name ?? "",
          corporateAuthorizer: "",
          transactionId: row.anedot_donation_id,
          transactionDate: row.donated_at,
        }),
      );

      const emailPromises: Promise<unknown>[] = [];

      if (row.email) {
        emailPromises.push(
          resend.emails.send({
            from: fromAddress,
            to: [row.email],
            replyTo:
              process.env.CAMPAIGN_REPLY_TO ?? "Support@RCC4Judge.com",
            subject: `Thank you for your ${row.recurring ? "monthly " : ""}contribution to the Committee to Elect Rhonda C. Cooper`,
            html: receiptHtml,
          }),
        );
      }

      if (notifyEmails.length > 0) {
        emailPromises.push(
          resend.emails.send({
            from: fromAddress,
            to: notifyEmails,
            subject: `[${row.recurring ? "RECURRING" : "ONE-TIME"}] New $${amountDollars} donation — ${donorName}`,
            html: notificationHtml,
          }),
        );
      }

      await Promise.all(emailPromises);
    } catch (emailErr) {
      console.error("[anedot webhook] email send failed", emailErr);
    }
  }

  return NextResponse.json({ received: true });
}
