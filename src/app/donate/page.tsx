import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Support the Campaign",
  description:
    "Contribute to the Committee to Elect Rhonda C. Cooper Chancery Court Judge. Mississippi law limits individual contributions to $2,500 per election cycle and corporate contributions to $1,000 per calendar year.",
};

const ANEDOT_BASE =
  "https://secure.anedot.com/committee-to-elect-rhonda-c-cooper-chancery-court-judge";
const INDIVIDUAL_DONATE_URL = `${ANEDOT_BASE}/065d10de-39ae-4cec-8717-cbdc5460ad86`;
const CORPORATE_DONATE_URL = `${ANEDOT_BASE}/fbe5a8d9-e2a9-41eb-a99c-a1ad531afcb1`;

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Support the Campaign
          </h1>
          <p className="text-cream/80 font-body text-lg max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Your contribution fuels the movement for fair, accountable justice in
            the 11th Chancery District. Every dollar makes a difference.
          </p>
          {/* Canon 5 Notice */}
          <div className="mt-6 p-4 bg-white/10 rounded-xl max-w-xl mx-auto animate-fade-in-up stagger-3">
            <p className="text-cream/70 text-xs font-body leading-relaxed">
              Per Mississippi Code of Judicial Conduct Canon 5, judicial candidates
              may not personally solicit campaign contributions. All contributions
              are solicited by and made payable to the campaign committee:{" "}
              <strong className="text-cream">
                Committee to Elect Rhonda C. Cooper Chancery Court Judge
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
            Choose Your Contribution Type
          </h2>
          <p className="font-body text-charcoal-light text-lg max-w-2xl mx-auto">
            Mississippi law treats individual and business contributions
            differently. Select the option that applies to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Individual CTA */}
          <a
            href={INDIVIDUAL_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-cream-dark hover:border-forest"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-heading text-2xl font-bold text-forest mb-3">
              Donate as an Individual
            </h3>
            <p className="font-body text-charcoal-light text-sm mb-6 leading-relaxed">
              For personal contributions from individuals, including those
              operating as sole proprietors or self-employed.
            </p>
            <ul className="text-xs font-body text-mauve space-y-1.5 mb-6">
              <li>
                • Limit: <strong>$2,500</strong> per election cycle (Miss. Code
                Ann. § 23-15-1021)
              </li>
              <li>• Apple Pay, Google Pay, ACH, all major cards accepted</li>
              <li>• Recurring monthly option available</li>
            </ul>
            <div className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber text-white font-bold font-body rounded-full group-hover:bg-amber-dark transition-colors">
              Continue to Secure Form
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>

          {/* Corporate CTA */}
          <a
            href={CORPORATE_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-cream-dark hover:border-forest"
          >
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="font-heading text-2xl font-bold text-forest mb-3">
              Donate as a Business
            </h3>
            <p className="font-body text-charcoal-light text-sm mb-6 leading-relaxed">
              For contributions from corporations, incorporated companies,
              incorporated associations, and limited liability companies (LLCs).
            </p>
            <ul className="text-xs font-body text-mauve space-y-1.5 mb-6">
              <li>
                • Limit: <strong>$1,000</strong> per calendar year (Miss. Code
                Ann. § 97-13-15)
              </li>
              <li>• LLCs treated as corporations under committee policy</li>
              <li>• Authorized signer attestation required</li>
            </ul>
            <div className="inline-flex items-center justify-center w-full px-6 py-3 bg-forest text-white font-bold font-body rounded-full group-hover:bg-forest-dark transition-colors">
              Continue to Secure Form
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* PAC / Other footnote */}
        <div className="mt-8 p-6 bg-cream-dark/30 rounded-xl border border-cream-dark text-center">
          <p className="font-body text-sm text-charcoal-light">
            Donating on behalf of a{" "}
            <strong>political action committee</strong> or another entity type
            not listed above? Please contact our treasurer at{" "}
            <a
              href="mailto:Treasurer@RCC4Judge.com"
              className="text-forest font-semibold hover:text-amber transition-colors"
            >
              Treasurer@RCC4Judge.com
            </a>{" "}
            to coordinate compliance documentation. Per Miss. Code Ann.
            § 23-15-976, contributions from political parties and party-affiliated
            political committees cannot be accepted for nonpartisan judicial
            campaigns.
          </p>
        </div>

        {/* Security/trust note */}
        <p className="mt-6 text-center text-xs font-body text-mauve/70">
          🔒 Donations are processed securely by Anedot, a political fundraising
          platform trusted by thousands of campaigns. Your information is never
          shared with third parties.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-forest mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* Bottom legal block */}
      <section className="py-12 bg-forest">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cream/60 text-xs font-body leading-relaxed">
            Paid for by the Committee to Elect Rhonda C. Cooper Chancery Court
            Judge — Sotderia Griffin, Treasurer — 118 Bainbridge Crossing,
            Canton, MS 39046. Approved by Rhonda C. Cooper, Candidate for
            Chancery Judge, 11th Chancery District, Subdistrict 2.
          </p>
          <p className="text-cream/40 text-xs font-body mt-3">
            Contributions are not tax deductible. Mississippi law limits
            individual contributions to $2,500 per election cycle (Miss. Code
            Ann. § 23-15-1021) and corporate contributions to $1,000 per
            calendar year (Miss. Code Ann. § 97-13-15).
          </p>
        </div>
      </section>
    </div>
  );
}
