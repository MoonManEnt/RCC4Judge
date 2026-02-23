"use client";

import Link from "next/link";

interface ThermometerProps {
  raised: number;
  donorCount: number;
}

export default function FundraisingThermometer({ raised, donorCount }: ThermometerProps) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-heading text-xl font-bold text-forest">Campaign Progress</h3>
        <span className="text-sm font-body text-mauve">{donorCount} donors</span>
      </div>

      <div className="mb-6">
        <span className="font-heading text-3xl font-bold text-forest">
          ${raised.toLocaleString()}
        </span>
        <span className="font-body text-sm text-charcoal-light ml-2">
          raised
        </span>
      </div>

      <Link
        href="/donate"
        className="block w-full py-3 bg-amber text-white text-center font-bold font-body rounded-xl hover:bg-amber-dark transition-colors shadow-md"
      >
        Contribute Now
      </Link>

      {/* Contribution Info Section */}
      <div className="mt-6 pt-6 border-t border-cream-dark">
        <h4 className="font-heading text-sm font-bold text-forest mb-3">
          Understanding Campaign Contributions
        </h4>
        <div className="space-y-2.5 text-xs font-body text-charcoal-light leading-relaxed">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>
              <strong className="text-forest">Not Tax Deductible:</strong> Campaign contributions to political candidates
              are not deductible on federal or state income taxes. This applies to all political donations
              in the United States, regardless of the office or party.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p>
              <strong className="text-forest">Mississippi Limits:</strong> Individuals and PACs may contribute up to
              $2,500 per election cycle. Corporations may contribute up to $1,000 per calendar year.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p>
              <strong className="text-forest">Public Disclosure:</strong> Contributions over $200 require disclosure
              of the donor&apos;s name, address, employer, and occupation to the Mississippi Secretary of State.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
