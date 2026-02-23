"use client";

import Link from "next/link";

interface ThermometerProps {
  donorCount: number;
}

export default function FundraisingThermometer({ donorCount }: ThermometerProps) {
  return (
    <div className="relative group">
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-amber/20 via-sage/20 to-forest/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-cream-dark/50 overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber/8 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-forest/5 to-transparent rounded-tr-full" />

        {/* Header */}
        <div className="relative mb-8">
          <p className="text-amber font-body text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Join the Movement
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-forest">
            Campaign Progress
          </h3>
        </div>

        {/* Donor count */}
        <div className="relative bg-cream rounded-2xl p-5 text-center mb-8">
          <p className="font-heading text-3xl sm:text-4xl font-bold text-amber mb-1">
            {donorCount}
          </p>
          <p className="font-body text-xs text-charcoal-light tracking-wide uppercase">
            Supporters &amp; Counting
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/donate"
          className="relative block w-full py-4 bg-gradient-to-r from-amber to-amber-dark text-white text-center text-lg font-bold font-body rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 mb-6"
        >
          <span className="relative z-10">Contribute Now</span>
        </Link>

        {/* Contribution info - compact pills */}
        <div className="relative space-y-2">
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-cream/60 rounded-xl">
            <div className="w-6 h-6 rounded-full bg-amber/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-body text-xs text-charcoal-light">
              Contributions are <strong className="text-forest">not tax deductible</strong>
            </p>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-cream/60 rounded-xl">
            <div className="w-6 h-6 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="font-body text-xs text-charcoal-light">
              Limits: <strong className="text-forest">$2,500</strong> individual &middot; <strong className="text-forest">$1,000</strong> corporate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
