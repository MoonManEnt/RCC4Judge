import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import {
  checkRateLimit,
  sanitizeHeaderValue,
  isValidEmail,
  truncate,
} from "@/lib/rate-limit";

const VALID_HELP_OPTIONS = [
  "Door-to-Door Canvassing",
  "Phone Banking",
  "Event Setup & Support",
  "Social Media & Digital",
  "Yard Sign Distribution",
  "Drive Voters to Polls",
  "Host a House Party",
  "Church & Community Outreach",
];

const VALID_AVAILABILITY = ["Weekdays", "Weekends", "Both", "Flexible"];

export async function POST(request: Request) {
  // Rate limit: 5 volunteer submissions per minute per IP
  const rateLimitResponse = await checkRateLimit(request, "volunteer", 5, "60 s");
  if (rateLimitResponse) return rateLimitResponse;

  let body: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    zip?: string;
    message?: string;
    helpWith?: string[];
    availability?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Sanitize and truncate
  const firstName = truncate(sanitizeHeaderValue(body.firstName ?? ""), 100);
  const lastName = truncate(sanitizeHeaderValue(body.lastName ?? ""), 100);
  const email = (body.email ?? "").trim().toLowerCase();
  const phone = truncate(sanitizeHeaderValue(body.phone ?? ""), 20);
  const zip = truncate(sanitizeHeaderValue(body.zip ?? ""), 10);
  const message = truncate((body.message ?? "").trim(), 5000);

  // Validate required fields
  if (!firstName || !lastName || !email || !zip) {
    return NextResponse.json(
      { error: "First name, last name, email, and ZIP code are required" },
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

  // Whitelist helpWith options
  const helpWith = Array.isArray(body.helpWith)
    ? body.helpWith.filter((h): h is string =>
        typeof h === "string" && VALID_HELP_OPTIONS.includes(h)
      )
    : [];

  // Whitelist availability
  const availability =
    typeof body.availability === "string" &&
    VALID_AVAILABILITY.includes(body.availability)
      ? body.availability
      : "Not specified";

  const supportEmail =
    process.env.CAMPAIGN_SUPPORT_EMAIL ?? "Support@RCC4Judge.com";
  const fromAddress =
    process.env.CAMPAIGN_FROM_SUPPORT ?? "support@rcc4judge.com";
  const fullName = `${firstName} ${lastName}`;

  try {
    const resend = getResend();

    await resend.emails.send({
      from: fromAddress,
      to: [supportEmail],
      replyTo: email,
      subject: `[New Volunteer] ${sanitizeHeaderValue(fullName)} — ${zip}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
          <div style="background-color: #285238; padding: 24px 32px; border-radius: 0 0 8px 8px;">
            <p style="color: #BBCE8A; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 4px;">
              RCC for Chancery 2026 — Volunteers
            </p>
            <p style="color: #FFFFFF; font-size: 20px; font-weight: bold; margin: 0;">
              New Volunteer Signup
            </p>
          </div>
          <div style="background-color: #FFFFFF; border: 1px solid #EDE9DF; border-radius: 12px; padding: 24px 32px; margin: 24px 0;">
            <p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Name:</strong> ${escapeHtml(fullName)}</p>
            <p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            ${phone ? `<p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
            <p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">ZIP Code:</strong> ${escapeHtml(zip)}</p>
            <p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Availability:</strong> ${escapeHtml(availability)}</p>
            ${
              helpWith.length > 0
                ? `<hr style="border: none; border-top: 1px solid #EDE9DF; margin: 16px 0;" />
                   <p style="color: #5E4C5A; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: bold;">
                     Interested In
                   </p>
                   <ul style="color: #2C2C2C; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0;">
                     ${helpWith.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
                   </ul>`
                : ""
            }
            ${
              message
                ? `<hr style="border: none; border-top: 1px solid #EDE9DF; margin: 16px 0;" />
                   <p style="color: #5E4C5A; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: bold;">
                     Additional Message
                   </p>
                   <p style="color: #2C2C2C; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</p>`
                : ""
            }
          </div>
          <p style="color: #5E4C5A; font-size: 11px; text-align: center;">
            This volunteer signup was submitted via rcc4judge.com/volunteer.
            Reply directly to reach the volunteer.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send volunteer email:", err);
    return NextResponse.json(
      { error: "Failed to submit volunteer signup. Please try again." },
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
