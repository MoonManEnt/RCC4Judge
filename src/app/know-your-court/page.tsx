import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Know Your Court | RCC for Chancery 2026",
  description:
    "Learn what Chancery Court does, how it affects your family, and why your vote for Chancery Judge matters. An educational resource for voters in the 11th Chancery District.",
};

const COURT_MATTERS = [
  {
    title: "Divorce & Separation",
    description: "Division of assets, alimony, and the dissolution of marriages. The Chancellor determines how property is divided and what ongoing financial obligations exist.",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0",
  },
  {
    title: "Child Custody & Support",
    description: "Determining who has physical and legal custody of children, visitation schedules, and child support amounts. These decisions shape children's daily lives.",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
  {
    title: "Guardianship",
    description: "Appointing legal guardians for minors or incapacitated adults. The court decides who is responsible for a person's care, property, or both.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Wills, Estates & Probate",
    description: "Validating wills, administering estates, and resolving disputes over inheritance. When a loved one passes, Chancery Court oversees the distribution of their property.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    title: "Property Disputes",
    description: "Resolving conflicts over land ownership, boundaries, easements, and property rights. In rural counties, land disputes can affect families for generations.",
    icon: "M2.25 21h19.5M3.75 3v18m16.5-18v18M5.25 3h13.5M5.25 21h13.5m-13.5-18v18",
  },
  {
    title: "Mental Health Commitments",
    description: "Determining whether individuals need involuntary commitment for mental health treatment. A deeply serious responsibility requiring compassion and legal rigor.",
    icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
  },
];

const WHY_IT_MATTERS = [
  {
    stat: "1 in 3",
    label: "Mississippi families will interact with Chancery Court at some point in their lives",
  },
  {
    stat: "23+",
    label: "Years the current Subdistrict 2 seat has been held by the same judge",
  },
  {
    stat: "4",
    label: "Counties in Subdistrict 11-2: Leake County and Madison County precincts",
  },
];

export default function KnowYourCourtPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber rounded-full blur-3xl" />
        </div>

        {/* Faded background — Rhonda speaking at church */}
        <div
          className="absolute right-[2%] top-[5%] bottom-[5%] w-[45%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 55%, transparent 85%), linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 55%, transparent 85%), linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="/images/rhonda-speaking.jpg"
            alt=""
            fill
            className="object-cover object-top opacity-[0.20] mix-blend-luminosity"
            sizes="45vw"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Voter Education
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Know Your<br />
            <span className="text-amber">Chancery Court</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Most people don&apos;t think about Chancery Court — until they need it.
            Understanding what this court does is the first step to making an informed
            vote for Chancery Judge.
          </p>
        </div>
      </section>

      {/* What Is Chancery Court */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6">
              What Is Chancery Court?
            </h2>
            <p className="text-charcoal-light font-body text-lg leading-relaxed">
              Mississippi&apos;s Chancery Courts are courts of equity — meaning they deal with matters of fairness,
              not just strict law. A Chancellor (Chancery Judge) makes decisions that directly affect
              families, children, property, and personal rights. There are no juries in Chancery Court.
              <strong className="text-forest"> The judge alone decides.</strong>
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURT_MATTERS.map((matter, i) => (
              <ScrollReveal key={matter.title} delay={i * 100}>
                <div className="p-6 bg-cream rounded-2xl h-full hover-lift">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={matter.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-forest mb-2">{matter.title}</h3>
                  <p className="font-body text-charcoal-light text-sm leading-relaxed">{matter.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Why Your Vote Matters
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              A Chancery Judge holds immense power over families&apos; lives. That power should be earned
              through qualifications, character, and accountability — not assumed through lack of opposition.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {WHY_IT_MATTERS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover-lift">
                  <p className="font-heading text-4xl font-bold text-amber mb-2">{item.stat}</p>
                  <p className="font-body text-charcoal-light text-sm leading-relaxed">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-forest mb-4">No Jury. One Judge. Your Family.</h3>
              <p className="font-body text-charcoal-light text-lg leading-relaxed mb-4">
                Unlike Circuit Court or other trial courts, Chancery Court does not use juries.
                The Chancellor alone hears the evidence, weighs the arguments, and makes the ruling.
                That means the character, preparation, and fairness of one person — the judge — determines
                the outcome.
              </p>
              <p className="font-body text-charcoal-light text-lg leading-relaxed">
                When you vote for Chancery Judge, you&apos;re choosing the single person who will decide
                custody battles, estate disputes, and guardianship cases for families across Leake and Madison counties.
                That vote deserves your attention.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Nonpartisan Explainer */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6">
                Nonpartisan by Law.<br />
                <span className="text-amber">Nonpartisan by Principle.</span>
              </h2>
              <p className="font-body text-charcoal-light text-lg leading-relaxed mb-4">
                Mississippi judicial elections are nonpartisan. Candidates do not appear with a
                party label on the ballot. This is intentional — justice should not be political.
              </p>
              <p className="font-body text-charcoal-light text-lg leading-relaxed mb-4">
                The Mississippi Code of Judicial Conduct (Canon 5) sets strict rules for judicial
                campaigns: candidates cannot personally solicit contributions, cannot make promises
                about how they&apos;ll rule, and must maintain the dignity of judicial office.
              </p>
              <p className="font-body text-charcoal-light text-lg leading-relaxed">
                These rules exist because judges serve everyone — regardless of political affiliation.
                When you vote for Chancery Judge, you&apos;re voting for qualifications and character, not party.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-cream rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-forest mb-4">Quick Facts About Judicial Elections</h3>
                <div className="space-y-4">
                  {[
                    "No party labels on the ballot",
                    "All registered voters can vote regardless of party",
                    "Candidates cannot personally solicit donations",
                    "Candidates cannot promise specific rulings",
                    "Canon 5 governs judicial campaign conduct",
                    "Judges serve 4-year terms in Chancery Court",
                  ].map((fact, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-body text-charcoal-light text-sm">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-forest via-forest-dark to-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Now That You Know — <span className="text-amber">Take Action</span>
            </h2>
            <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Share this page with a neighbor. Talk to your family. And on November 3, 2026 —
              vote for accountability on the bench.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/why-rhonda"
                className="px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full shadow-lg hover:bg-amber-dark hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                Why Rhonda Cooper
              </Link>
              <Link
                href="/voter-resources"
                className="px-8 py-4 border-2 border-cream/30 text-cream text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all"
              >
                Voter Resources
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
