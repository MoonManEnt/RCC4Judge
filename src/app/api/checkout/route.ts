import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import {
  checkRateLimit,
  sanitizeHeaderValue,
  isValidEmail,
  truncate,
} from "@/lib/rate-limit";

const TIER_NAMES: Record<number, string> = {
  25: "Advocate",
  50: "Guardian",
  100: "Steward",
  250: "Champion",
  500: "Pillar",
  1000: "Founder",
  2500: "Legacy",
};

const VALID_CONTRIBUTOR_TYPES = ["individual", "corporate"] as const;
type ContributorType = (typeof VALID_CONTRIBUTOR_TYPES)[number];

export async function POST(request: Request) {
  // Rate limit: 10 checkout attempts per minute per IP
  const rateLimitResponse = await checkRateLimit(request, "checkout", 10, "60 s");
  if (rateLimitResponse) return rateLimitResponse;

  let stripe;
  try {
    stripe = getStripe();
  } catch {
    return NextResponse.json(
      { error: "Payment processing is not configured" },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const { amount, isRecurring, contributorType, tierName, formData } = body as {
    amount: unknown;
    isRecurring: unknown;
    contributorType: unknown;
    tierName: unknown;
    formData: Record<string, string> | undefined;
  };

  // Validate contributorType against whitelist
  if (
    typeof contributorType !== "string" ||
    !VALID_CONTRIBUTOR_TYPES.includes(contributorType as ContributorType)
  ) {
    return NextResponse.json(
      { error: "Invalid contributor type. Must be 'individual' or 'corporate'." },
      { status: 400 }
    );
  }
  const validatedType = contributorType as ContributorType;

  // Validate amount is a positive integer
  if (typeof amount !== "number" || !Number.isInteger(amount) || amount < 1) {
    return NextResponse.json(
      { error: "Amount must be a whole dollar value of at least $1." },
      { status: 400 }
    );
  }

  // Server-side enforcement of Mississippi contribution limits
  const maxAllowed = validatedType === "corporate" ? 1000 : 2500;
  if (amount > maxAllowed) {
    return NextResponse.json(
      {
        error: `Amount must be between $1 and $${maxAllowed.toLocaleString()} for ${validatedType} contributors.`,
      },
      { status: 400 }
    );
  }

  // Validate formData exists
  if (!formData || typeof formData !== "object") {
    return NextResponse.json(
      { error: "Donor information is required." },
      { status: 400 }
    );
  }

  // Validate email
  const donorEmail = (formData.email ?? "").trim();
  if (!donorEmail || !isValidEmail(donorEmail)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  // Sanitize and truncate all metadata values (Stripe max 500 chars per value)
  const s = (val: string | undefined) =>
    truncate(sanitizeHeaderValue(val ?? ""), 500);

  const metadata: Record<string, string> = {
    donorFirstName: s(formData.firstName),
    donorLastName: s(formData.lastName),
    donorEmail: s(formData.email),
    donorPhone: s(formData.phone),
    donorAddress: s(
      [formData.address, formData.city, formData.state, formData.zip]
        .filter(Boolean)
        .join(", ")
    ),
    contributorType: validatedType,
    tierName: s(typeof tierName === "string" ? tierName : undefined) ||
      TIER_NAMES[amount] ||
      "Custom",
    isRecurring: String(!!isRecurring),
    employer: s(formData.employer),
    occupation: s(formData.occupation),
    corporateName: s(formData.corporateName),
    corporateAuthorizer: s(formData.corporateAuthorizer),
  };

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rcc4judge.com";
  const productName = `RCC for Chancery 2026 — ${metadata.tierName}`;

  try {
    if (isRecurring) {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              recurring: { interval: "month" },
              unit_amount: amount * 100,
              product_data: {
                name: `${productName} Monthly`,
                description: `Monthly campaign contribution — ${validatedType}`,
              },
            },
            quantity: 1,
          },
        ],
        metadata,
        customer_email: donorEmail,
        success_url: `${siteUrl}/donate/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${siteUrl}/donate`,
      });
      return NextResponse.json({ url: session.url });
    } else {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: amount * 100,
              product_data: {
                name: productName,
                description: `Campaign contribution — ${validatedType}`,
              },
            },
            quantity: 1,
          },
        ],
        metadata,
        customer_email: donorEmail,
        success_url: `${siteUrl}/donate/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${siteUrl}/donate`,
      });
      return NextResponse.json({ url: session.url });
    }
  } catch (err) {
    console.error("Stripe checkout session error:", err);
    return NextResponse.json(
      { error: "Failed to create payment session. Please try again." },
      { status: 500 }
    );
  }
}
