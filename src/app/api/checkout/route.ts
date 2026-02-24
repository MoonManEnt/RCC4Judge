import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

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
  let stripe;
  try {
    stripe = getStripe();
  } catch {
    return NextResponse.json(
      { error: "Payment processing is not configured" },
      { status: 503 }
    );
  }

  const body = await request.json();
  const { amount, isRecurring, contributorType, tierName, formData } = body;

  // Server-side enforcement of Mississippi contribution limits
  const maxAllowed = contributorType === "corporate" ? 1000 : 2500;
  if (!amount || amount < 1 || amount > maxAllowed) {
    return NextResponse.json(
      {
        error: `Amount must be between $1 and $${maxAllowed.toLocaleString()} for ${contributorType} contributors.`,
      },
      { status: 400 }
    );
  }

  // Embed all donor info into Stripe metadata for the webhook
  const metadata: Record<string, string> = {
    donorFirstName: formData.firstName || "",
    donorLastName: formData.lastName || "",
    donorEmail: formData.email || "",
    donorPhone: formData.phone || "",
    donorAddress: [formData.address, formData.city, formData.state, formData.zip]
      .filter(Boolean)
      .join(", "),
    contributorType,
    tierName: tierName || TIER_NAMES[amount] || "Custom",
    isRecurring: String(!!isRecurring),
    employer: formData.employer || "",
    occupation: formData.occupation || "",
    corporateName: formData.corporateName || "",
    corporateAuthorizer: formData.corporateAuthorizer || "",
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
                description: `Monthly campaign contribution — ${contributorType}`,
              },
            },
            quantity: 1,
          },
        ],
        metadata,
        customer_email: formData.email,
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
                description: `Campaign contribution — ${contributorType}`,
              },
            },
            quantity: 1,
          },
        ],
        metadata,
        customer_email: formData.email,
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
