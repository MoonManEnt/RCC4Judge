import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import {
  checkRateLimit,
  sanitizeHeaderValue,
  isValidEmail,
  truncate,
} from "@/lib/rate-limit";

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  volunteer: "Volunteering",
  endorsement: "Endorsement",
  donation: "Donation Question",
  media: "Media / Press Inquiry",
  event: "Event Request",
  other: "Other",
};

export async function POST(request: Request) {
  // Rate limit: 5 contact emails per minute per IP
  const rateLimitResponse = await checkRateLimit(request, "contact", 5, "60 s");
  if (rateLimitResponse) return rateLimitResponse;

  let body: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const name = truncate(sanitizeHeaderValue(body.name ?? ""), 200);
  const email = (body.email ?? "").trim().toLowerCase();
  const subject = body.subject ?? "";
  const message = truncate((body.message ?? "").trim(), 5000);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address" },
      { status: 400 }
    );
  }

  // Whitelist subject — only accept known keys, fall back to "Other"
  const subjectLabel = SUBJECT_LABELS[subject] ?? "Other";

  const supportEmail =
    process.env.CAMPAIGN_SUPPORT_EMAIL ?? "Support@RCC4Judge.com";
  const fromAddress =
    process.env.CAMPAIGN_FROM_SUPPORT ?? "support@rcc4judge.com";

  try {
    const resend = getResend();

    await resend.emails.send({
      from: fromAddress,
      to: [supportEmail],
      replyTo: email,
      subject: `[Website Contact] ${subjectLabel} — ${sanitizeHeaderValue(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
          <div style="background-color: #285238; padding: 24px 32px; border-radius: 0 0 8px 8px;">
            <p style="color: #BBCE8A; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 4px;">
              RCC for Chancery 2026 — Website Contact
            </p>
            <p style="color: #FFFFFF; font-size: 20px; font-weight: bold; margin: 0;">
              New Message Received
            </p>
          </div>
          <div style="background-color: #FFFFFF; border: 1px solid #EDE9DF; border-radius: 12px; padding: 24px 32px; margin: 24px 0;">
            <p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">From:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p style="margin: 0 0 16px;"><strong style="color: #5E4C5A;">Subject:</strong> ${escapeHtml(subjectLabel)}</p>
            <hr style="border: none; border-top: 1px solid #EDE9DF; margin: 16px 0;" />
            <p style="color: #2C2C2C; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <p style="color: #5E4C5A; font-size: 11px; text-align: center;">
            This message was submitted via rcc4judge.com/contact. Reply directly to respond to the sender.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
