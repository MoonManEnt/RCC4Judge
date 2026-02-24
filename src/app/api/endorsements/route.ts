import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(request: Request) {
  let body: {
    name?: string;
    title?: string;
    organization?: string;
    county?: string;
    email?: string;
    phone?: string;
    quote?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const { name, title, organization, county, email, phone, quote } = body;

  if (!name || !county || !email || !quote) {
    return NextResponse.json(
      { error: "Name, county, email, and endorsement statement are required" },
      { status: 400 }
    );
  }

  const chairmanEmail =
    process.env.CAMPAIGN_ENDORSEMENT_EMAIL ?? "Chairman@RCC4Judge.com";
  const fromAddress =
    process.env.CAMPAIGN_FROM_SUPPORT ?? "support@rcc4judge.com";

  try {
    const resend = getResend();

    await resend.emails.send({
      from: fromAddress,
      to: [chairmanEmail],
      replyTo: email,
      subject: `[New Endorsement] ${name}${title ? ` — ${title}` : ""} (${county} County)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
          <div style="background-color: #285238; padding: 24px 32px; border-radius: 0 0 8px 8px;">
            <p style="color: #BBCE8A; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 4px;">
              RCC for Chancery 2026 — Endorsements
            </p>
            <p style="color: #FFFFFF; font-size: 20px; font-weight: bold; margin: 0;">
              New Endorsement Submitted
            </p>
          </div>
          <div style="background-color: #FFFFFF; border: 1px solid #EDE9DF; border-radius: 12px; padding: 24px 32px; margin: 24px 0;">
            <p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Name:</strong> ${escapeHtml(name)}</p>
            ${title ? `<p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Title / Role:</strong> ${escapeHtml(title)}</p>` : ""}
            ${organization ? `<p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Organization:</strong> ${escapeHtml(organization)}</p>` : ""}
            <p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">County:</strong> ${escapeHtml(county)}</p>
            <p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            ${phone ? `<p style="margin: 0 0 8px;"><strong style="color: #5E4C5A;">Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
            <hr style="border: none; border-top: 1px solid #EDE9DF; margin: 16px 0;" />
            <p style="color: #5E4C5A; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: bold;">
              Endorsement Statement
            </p>
            <blockquote style="color: #2C2C2C; font-size: 16px; line-height: 1.7; font-style: italic; border-left: 3px solid #FFA21F; padding-left: 16px; margin: 0;">
              &ldquo;${escapeHtml(quote)}&rdquo;
            </blockquote>
          </div>
          <p style="color: #5E4C5A; font-size: 11px; text-align: center;">
            This endorsement was submitted via rcc4judge.com/endorsements. The endorser granted permission for publication.
            Reply directly to reach the endorser.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send endorsement email:", err);
    return NextResponse.json(
      { error: "Failed to submit endorsement. Please try again." },
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
