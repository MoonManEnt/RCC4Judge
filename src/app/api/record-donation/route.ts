import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { checkRateLimit, sanitizeHeaderValue, isValidEmail, truncate } from "@/lib/rate-limit";
import { render } from "@react-email/render";
import DonorNotification from "@/emails/DonorNotification";
import { saveDonation } from "@/lib/db";
import type { DonationRecord } from "@/lib/db";
import { randomUUID } from "crypto";

const VALID_CONTRIBUTOR_TYPES = ["individual", "corporate"] as const;
type ContributorType = (typeof VALID_CONTRIBUTOR_TYPES)[number];

const TIER_NAMES: Record<number, string> = {
  25: "Advocate",
  50: "Guardian",
  100: "Steward",
  250: "Champion",
  500: "Pillar",
  1000: "Founder",
  2500: "Legacy",
};

export async function POST(request: Request) {
  const rateLimitResponse = await checkRateLimit(request, "record-donation", 10, "60 s");
  if (rateLimitResponse) return rateLimitResponse;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { amount, isRecurring, contributorType, tierName, formData } = body as {
    amount: unknown;
    isRecurring: unknown;
    contributorType: unknown;
    tierName: unknown;
    formData: Record<string, string> | undefined;
  };

  if (
    typeof contributorType !== "string" ||
    !VALID_CONTRIBUTOR_TYPES.includes(contributorType as ContributorType)
  ) {
    return NextResponse.json({ error: "Invalid contributor type" }, { status: 400 });
  }

  if (typeof amount !== "number" || !Number.isInteger(amount) || amount < 1) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  if (!formData || typeof formData !== "object") {
    return NextResponse.json({ error: "Donor information is required" }, { status: 400 });
  }

  const donorEmail = (formData.email ?? "").trim();
  if (!donorEmail || !isValidEmail(donorEmail)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const s = (val: string | undefined) => truncate(sanitizeHeaderValue(val ?? ""), 200);

  const donorName = `${s(formData.firstName)} ${s(formData.lastName)}`.trim();
  const resolvedTierName =
    s(typeof tierName === "string" ? tierName : undefined) ||
    TIER_NAMES[amount] ||
    "Custom";
  const transactionDate = new Date().toISOString();
  const address = [formData.address, formData.city, formData.state, formData.zip]
    .filter(Boolean)
    .join(", ");

  // Send treasurer notification — fire and forget if Resend not yet configured
  try {
    const resend = getResend();

    const notifyEmails = (
      process.env.CAMPAIGN_DONATION_NOTIFY_EMAILS ?? ""
    )
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    const fromAddress =
      process.env.CAMPAIGN_FROM_DONATE ?? "donate@rcc4judge.com";
    const replyTo =
      process.env.CAMPAIGN_REPLY_TO ?? "Support@RCC4Judge.com";

    const html = await render(
      DonorNotification({
        donorName,
        donorEmail,
        donorPhone: s(formData.phone),
        amount,
        tierName: resolvedTierName,
        isRecurring: !!isRecurring,
        contributorType: contributorType as ContributorType,
        address,
        employer: s(formData.employer),
        occupation: s(formData.occupation),
        corporateName: s(formData.corporateName),
        corporateAuthorizer: s(formData.corporateAuthorizer),
        transactionId: `PENDING-${Date.now()}`,
        transactionDate,
      })
    );

    if (notifyEmails.length > 0) {
      await resend.emails.send({
        from: fromAddress,
        to: notifyEmails,
        replyTo,
        subject: `[RCC2026] $${amount} ${resolvedTierName} contribution — ${donorName}`,
        html,
      });
    }
  } catch (err) {
    // Log but don't block — payment must still proceed
    console.error("Donor notification email failed:", err);
  }

  // Persist donation record for admin dashboard and campaign finance reporting
  try {
    const record: DonationRecord = {
      id: randomUUID(),
      timestamp: transactionDate,
      donorName,
      email: donorEmail,
      phone: s(formData.phone),
      address: s(formData.address),
      city: s(formData.city),
      state: s(formData.state),
      zip: s(formData.zip),
      amount,
      tierName: resolvedTierName,
      contributorType: contributorType as "individual" | "corporate",
      isRecurring: !!isRecurring,
      employer: s(formData.employer),
      occupation: s(formData.occupation),
      corporateName: s(formData.corporateName),
      corporateAuthorizer: s(formData.corporateAuthorizer),
    };
    await saveDonation(record);
  } catch (err) {
    console.error("Failed to persist donation record:", err);
  }

  return NextResponse.json({ ok: true });
}
