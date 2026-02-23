import ScrollReveal from "@/components/ScrollReveal";
import ElectionCountdown from "@/components/ElectionCountdown";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voter Resources | RCC for Chancery 2026",
  description:
    "Everything you need to vote in the 2026 Chancery Judge election. Registration info, polling locations, key dates, and more for Madison, Leake, Holmes, and Yazoo counties.",
};

const KEY_DATES = [
  { date: "October 4, 2026", event: "Voter Registration Deadline", note: "Register at least 30 days before Election Day" },
  { date: "September 19 - October 3, 2026", event: "Absentee Voting Period", note: "Apply through your County Circuit Clerk" },
  { date: "November 3, 2026", event: "Election Day", note: "Polls open 7:00 AM - 7:00 PM" },
];

const COUNTY_INFO = [
  {
    name: "Madison County",
    seat: "Canton, MS",
    circuitClerk: "Office of the Circuit Clerk",
    address: "128 W. North St., Canton, MS 39046",
  },
  {
    name: "Leake County",
    seat: "Carthage, MS",
    circuitClerk: "Office of the Circuit Clerk",
    address: "Courthouse Square, Carthage, MS 39051",
  },
  {
    name: "Holmes County",
    seat: "Lexington, MS",
    circuitClerk: "Office of the Circuit Clerk",
    address: "Court Square, Lexington, MS 39095",
  },
  {
    name: "Yazoo County",
    seat: "Yazoo City, MS",
    circuitClerk: "Office of the Circuit Clerk",
    address: "211 E. Broadway, Yazoo City, MS 39194",
  },
];

const WHAT_TO_BRING = [
  "Valid photo ID (driver's license, passport, student ID from MS university, or MS voter ID card)",
  "If you don't have an accepted photo ID, you may obtain a free voter ID from your Circuit Clerk",
  "Know your precinct and polling location before Election Day",
];

export default function VoterResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Be Prepared to Vote
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Voter<br />
            <span className="text-amber">Resources</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Everything you need to know to make your voice heard on November 3, 2026.
            Registration, ID requirements, polling locations, and key dates.
          </p>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-12 bg-white border-b border-cream-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-forest mb-6">Time Until Election Day</h2>
          <ElectionCountdown />
          <p className="text-sm font-body text-charcoal-light mt-4">November 3, 2026 — Polls open 7:00 AM to 7:00 PM</p>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Key Dates
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {KEY_DATES.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 hover-lift">
                  <div className="flex-shrink-0">
                    <div className="px-4 py-2 bg-amber/10 rounded-xl">
                      <p className="font-heading text-base font-bold text-amber whitespace-nowrap">{item.date}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-forest">{item.event}</h3>
                    <p className="font-body text-charcoal-light text-sm">{item.note}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Voter Registration */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6">
                How to Register to Vote
              </h2>
              <div className="space-y-4 font-body text-charcoal-light leading-relaxed">
                <p>
                  To vote in Mississippi, you must be registered at least <strong className="text-forest">30 days
                  before the election</strong>. The registration deadline for the November 3, 2026 election
                  is <strong className="text-forest">October 4, 2026</strong>.
                </p>
                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-bold text-forest">Requirements:</h3>
                  <ul className="space-y-2">
                    {[
                      "Be a U.S. citizen",
                      "Be a resident of Mississippi and your county for at least 30 days",
                      "Be at least 18 years old by Election Day",
                      "Not have been convicted of certain felonies (or have had rights restored)",
                      "Not be declared mentally incompetent by a court",
                    ].map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-cream rounded-2xl p-6 sm:p-8">
                <h3 className="font-heading text-xl font-bold text-forest mb-4">What to Bring on Election Day</h3>
                <div className="space-y-3">
                  {WHAT_TO_BRING.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-sm font-bold text-amber">{i + 1}</span>
                      </div>
                      <p className="font-body text-charcoal-light text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white rounded-xl">
                  <p className="font-body text-xs text-mauve leading-relaxed">
                    Mississippi is a voter ID state. If you need a free voter ID card, contact your
                    County Circuit Clerk&apos;s office well before Election Day.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* County Info */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Your County Clerk&apos;s Office
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Contact your county&apos;s Circuit Clerk to register, request absentee ballots, or verify your
              polling location.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {COUNTY_INFO.map((county, i) => (
              <ScrollReveal key={county.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover-lift h-full">
                  <h3 className="font-heading text-lg font-bold text-forest mb-1">{county.name}</h3>
                  <p className="font-body text-amber text-sm font-medium mb-3">County Seat: {county.seat}</p>
                  <p className="font-body text-charcoal-light text-sm">{county.circuitClerk}</p>
                  <p className="font-body text-charcoal-light text-sm">{county.address}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Vote. Your Court. <span className="text-amber">Your Future.</span>
            </h2>
            <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Register today. Mark November 3rd. And help us spread the word across
              Madison, Leake, Holmes, and Yazoo counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/volunteer"
                className="px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full shadow-lg hover:bg-amber-dark transition-all hover:scale-[1.02]"
              >
                Help Get Out the Vote
              </Link>
              <Link
                href="/know-your-court"
                className="px-8 py-4 border-2 border-cream/30 text-cream text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all"
              >
                Know Your Court
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
