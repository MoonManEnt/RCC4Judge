import { NextResponse } from "next/server";
import { getAuthNetConfig, callAuthNet } from "@/lib/stripe";
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
  const rateLimitResponse = await checkRateLimit(request, "checkout", 10, "60 s");
  if (rateLimitResponse) return rateLimitResponse;

  let config;
  try {
    config = getAuthNetConfig();
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
    return NextResponse.json(
      { error: "Invalid contributor type. Must be 'individual' or 'corporate'." },
      { status: 400 }
    );
  }
  const validatedType = contributorType as ContributorType;

  if (typeof amount !== "number" || !Number.isInteger(amount) || amount < 1) {
    return NextResponse.json(
      { error: "Amount must be a whole dollar value of at least $1." },
      { status: 400 }
    );
  }

  const maxAllowed = validatedType === "corporate" ? 1000 : 2500;
  if (amount > maxAllowed) {
    return NextResponse.json(
      {
        error: `Amount must be between $1 and $${maxAllowed.toLocaleString()} for ${validatedType} contributors.`,
      },
      { status: 400 }
    );
  }

  if (!formData || typeof formData !== "object") {
    return NextResponse.json(
      { error: "Donor information is required." },
      { status: 400 }
    );
  }

  const donorEmail = (formData.email ?? "").trim();
  if (!donorEmail || !isValidEmail(donorEmail)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  const s = (val: string | undefined) =>
    truncate(sanitizeHeaderValue(val ?? ""), 40);

  const resolvedTierName =
    s(typeof tierName === "string" ? tierName : undefined) ||
    TIER_NAMES[amount] ||
    "Custom";

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rcc4judge.com";

  const transactionRequest: Record<string, unknown> = {
    transactionType: "authCaptureTransaction",
    amount: amount.toFixed(2),
    order: {
      description: truncate(
        `RCC4Judge - ${resolvedTierName} - ${validatedType}`,
        255
      ),
    },
    customer: {
      type: validatedType === "corporate" ? "business" : "individual",
      email: donorEmail,
    },
    billTo: {
      firstName: s(formData.firstName),
      lastName: s(formData.lastName),
      address: s(formData.address),
      city: s(formData.city),
      state: s(formData.state),
      zip: s(formData.zip),
      country: "US",
    },
    userFields: {
      userField: [
        { name: "isRecurring", value: String(!!isRecurring) },
        { name: "contributorType", value: validatedType },
        { name: "tierName", value: resolvedTierName },
        { name: "donorPhone", value: s(formData.phone) },
        {
          name: "donorAddress",
          value: s(
            [formData.address, formData.city, formData.state, formData.zip]
              .filter(Boolean)
              .join(", ")
          ),
        },
        { name: "employer", value: s(formData.employer) },
        { name: "occupation", value: s(formData.occupation) },
        { name: "corporateName", value: s(formData.corporateName) },
        { name: "corporateAuthorizer", value: s(formData.corporateAuthorizer) },
      ],
    },
  };

  if (isRecurring) {
    transactionRequest.profile = { createProfile: true };
  }

  try {
    const result = await callAuthNet(config, {
      getHostedPaymentPageRequest: {
        merchantAuthentication: {
          name: config.loginId,
          transactionKey: config.transactionKey,
        },
        transactionRequest,
        hostedPaymentSettings: {
          setting: [
            {
              settingName: "hostedPaymentReturnOptions",
              settingValue: JSON.stringify({
                showReceipt: false,
                url: `${siteUrl}/donate/thank-you`,
                urlText: "Return to Campaign",
                cancelUrl: `${siteUrl}/donate`,
                cancelUrlText: "Cancel",
              }),
            },
            {
              settingName: "hostedPaymentButtonOptions",
              settingValue: JSON.stringify({ text: "Complete Contribution" }),
            },
            {
              settingName: "hostedPaymentBillingAddressOptions",
              settingValue: JSON.stringify({ show: false, required: false }),
            },
            {
              settingName: "hostedPaymentShippingAddressOptions",
              settingValue: JSON.stringify({ show: false, required: false }),
            },
            {
              settingName: "hostedPaymentOrderOptions",
              settingValue: JSON.stringify({
                show: true,
                merchantName: "Cooper for Chancery Judge",
              }),
            },
          ],
        },
      },
    });

    const messages = result.messages as
      | { resultCode: string; message: Array<{ code: string; text: string }> }
      | undefined;
    const token = result.token as string | undefined;

    if (messages?.resultCode !== "Ok" || !token) {
      const errorText =
        messages?.message?.[0]?.text ?? "Failed to create payment session";
      console.error("Authorize.net error:", errorText);
      return NextResponse.json(
        { error: "Failed to create payment session. Please try again." },
        { status: 500 }
      );
    }

    const baseUrl = config.isSandbox
      ? "https://test.authorize.net/payment/payment"
      : "https://accept.authorize.net/payment/payment";

    return NextResponse.json({
      url: `${baseUrl}?token=${encodeURIComponent(token)}`,
    });
  } catch (err) {
    console.error("Authorize.net checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create payment session. Please try again." },
      { status: 500 }
    );
  }
}
