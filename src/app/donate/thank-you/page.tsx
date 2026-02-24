import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | RCC for Chancery 2026",
  description:
    "Your contribution to RCC for Chancery 2026 has been received.",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id ?? "";

  let donorName = "";
  let amount = 0;
  let isRecurring = false;

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const { default: Stripe } = await import("stripe");
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      donorName = (session.metadata?.donorFirstName ?? "").trim();
      amount = Math.round((session.amount_total ?? 0) / 100);
      isRecurring = session.mode === "subscription";
    } catch {
      // Non-critical — proceed with generic message
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center py-24">
        {/* Check icon */}
        <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest mb-4">
          {donorName ? `Thank You, ${donorName}.` : "Thank You."}
        </h1>

        {/* Amount confirmation */}
        {amount > 0 && (
          <div className="inline-block bg-forest/10 rounded-2xl px-8 py-4 mb-6">
            <p className="font-heading text-3xl font-bold text-forest">
              ${amount.toLocaleString()}
              {isRecurring && (
                <span className="text-lg text-mauve font-body">/month</span>
              )}
            </p>
            <p className="font-body text-sm text-mauve mt-1">
              {isRecurring
                ? "Monthly recurring contribution confirmed"
                : "One-time contribution confirmed"}
            </p>
          </div>
        )}

        {/* Message */}
        <p className="font-body text-lg text-charcoal-light leading-relaxed mb-4 max-w-lg mx-auto">
          Your contribution to{" "}
          <strong className="text-forest">RCC for Chancery 2026</strong> has
          been received. A receipt has been sent to your email address.
        </p>
        <p className="font-body text-base text-charcoal-light leading-relaxed mb-10 max-w-lg mx-auto">
          Every dollar brings Rhonda C. Cooper one step closer to the bench —
          and every family in the 11th Chancery District one step closer to the
          accountable justice they deserve.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/volunteer"
            className="px-8 py-4 bg-amber text-white font-bold font-body rounded-full shadow-lg hover:bg-amber-dark transition-all hover:scale-[1.02]"
          >
            Volunteer With Us
          </Link>
          <Link
            href="/"
            className="px-8 py-4 border-2 border-forest text-forest font-semibold font-body rounded-full hover:bg-forest hover:text-white transition-all"
          >
            Return Home
          </Link>
        </div>

        {/* Legal */}
        <p className="mt-12 text-xs font-body text-mauve/50 max-w-md mx-auto leading-relaxed">
          Paid for by RCC for Chancery 2026, P.O. Box 74, Tougaloo, MS 39174.
          Sotderia Griffin, Treasurer. Contributions are not tax deductible. Per
          Canon 5, contributions are solicited by the campaign committee, not by
          Candidate Cooper personally.
        </p>
      </div>
    </div>
  );
}
