import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Record | RCC for Chancery 2026",
  description:
    "The public record of the 11th Chancery Court, Subdistrict 2. A fact-based, Canon 5-compliant look at why accountability matters in our judicial system.",
};

const RECORD_POINTS = [
  {
    title: "20+ Years Without a Serious Challenge",
    description:
      "The current occupant of this seat has held it since the early 2000s, often running unopposed. Accountability requires that elected officials earn the trust of voters at regular intervals — not coast on the absence of competition.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Documented Judicial Oversight",
    description:
      "Public records include documented reprimands and instances requiring judicial oversight. When a judge's decisions are formally questioned, voters deserve to know and weigh that record.",
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
  },
  {
    title: "Partisan Appearances in a Nonpartisan Office",
    description:
      "Mississippi judicial elections are nonpartisan by law. Voters should consider whether their judge maintains the impartial, nonpartisan appearance that judicial office demands.",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    title: "Our Candidate Sought Recusal",
    description:
      "In documented proceedings, our candidate found it necessary to seek recusal of the current judge — an action taken to protect the integrity of the judicial process and the rights of her client.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
];

const CONTRAST_POINTS = [
  {
    category: "Experience",
    current: "Career judge — limited to perspective from the bench",
    cooper: "Nearly 40 years of legal practice from the perspective of the people who appear in court",
  },
  {
    category: "Accountability",
    current: "20+ years, often unopposed — limited accountability to voters",
    cooper: "Running on a promise of accountability, transparency, and earned trust",
  },
  {
    category: "Community Connection",
    current: "Documented appearances at partisan political events",
    cooper: "Deep roots across Leake and Madison counties — faith, civic, and professional community",
  },
  {
    category: "Judicial Temperament",
    current: "Documented reprimands and oversight concerns on public record",
    cooper: "Nearly 40 years of practice built on integrity, fairness, and respect for all parties",
  },
];

export default function TheRecordPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Public Record
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            The Record<br />
            <span className="text-amber">Speaks</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Facts matter. The public record of this seat is available for every voter to examine.
            We believe an informed electorate makes better choices.
          </p>
        </div>
      </section>

      {/* Canon 5 Disclaimer */}
      <section className="py-4 bg-cream-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-body text-mauve leading-relaxed">
            This page presents publicly available information in compliance with Mississippi Code of Judicial Conduct Canon 5.
            All statements are based on public records, documented proceedings, and verifiable facts.
            This campaign does not make accusations — it presents the record and lets voters decide.
          </p>
        </div>
      </section>

      {/* Record Points */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              What the Public Record Shows
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Every elected official has a record. Here is what the public record tells us
              about this seat on the 11th Chancery Court.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {RECORD_POINTS.map((point, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-6 sm:p-8 bg-cream rounded-2xl h-full hover-lift">
                  <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={point.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-forest mb-3">{point.title}</h3>
                  <p className="font-body text-charcoal-light leading-relaxed">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Side by Side */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              A Clear Choice
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              This election gives voters in Leake and Madison counties a real choice for the first time in over two decades.
            </p>
          </ScrollReveal>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-forest text-white p-4">
              <div className="font-body font-semibold text-sm" />
              <div className="font-body font-semibold text-sm text-center">Incumbent</div>
              <div className="font-body font-semibold text-sm text-center text-amber">Rhonda Cooper</div>
            </div>

            {CONTRAST_POINTS.map((point, i) => (
              <ScrollReveal key={i}>
                <div className={`grid grid-cols-3 gap-4 p-4 sm:p-6 ${i % 2 === 0 ? "bg-white" : "bg-cream/50"}`}>
                  <div className="font-body font-semibold text-forest text-sm">{point.category}</div>
                  <div className="font-body text-charcoal-light text-sm leading-relaxed">{point.current}</div>
                  <div className="font-body text-forest text-sm leading-relaxed font-medium">{point.cooper}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-forest">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              The Record Is Clear. <span className="text-amber">The Choice Is Yours.</span>
            </h2>
            <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
              On November 3, 2026, vote for accountability, experience, and a judge
              who serves every family in the 11th Chancery District.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full shadow-lg hover:bg-amber-dark transition-all hover:scale-[1.02]"
              >
                Support Rhonda
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-cream/30 text-cream text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all"
              >
                Meet Rhonda Cooper
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
