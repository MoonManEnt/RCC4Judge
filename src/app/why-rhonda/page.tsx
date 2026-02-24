import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Rhonda Cooper | RCC for Chancery 2026",
  description:
    "Why this election matters. Learn what Chancery Court does, why accountability matters, and how Rhonda Cooper will serve every family in our district.",
};

const CHANCERY_MATTERS = [
  { title: "Divorce & Separation", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" },
  { title: "Child Custody & Support", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
  { title: "Guardianship", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { title: "Wills & Estates", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
  { title: "Property Disputes", icon: "M2.25 21h19.5M3.75 3v18m16.5-18v18M5.25 3h13.5M5.25 21h13.5m-13.5-18v18" },
  { title: "Mental Health Commitments", icon: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" },
];

export default function WhyRhondaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Why This Election Matters
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            It&apos;s Time for<br />
            <span className="text-amber">Accountability</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            After more than 20 years without a real challenge, the families of the 11th Chancery District
            deserve a judge who earns their trust — not one who takes it for granted.
          </p>
        </div>
      </section>

      {/* What Chancery Court Does */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              What Does Chancery Court Handle?
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-3xl mx-auto">
              Most people don&apos;t know what Chancery Court does — until they need it.
              It handles the most personal and consequential legal matters families face.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHANCERY_MATTERS.map((matter, i) => (
              <ScrollReveal key={matter.title} delay={i * 100}>
                <div className="flex items-start gap-4 p-6 bg-cream rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={matter.icon} />
                    </svg>
                  </div>
                  <span className="font-body font-semibold text-forest">{matter.title}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <p className="text-center text-charcoal-light font-body text-lg mt-10 max-w-2xl mx-auto">
              When you walk into Chancery Court, the judge&apos;s decision shapes your family&apos;s future.
              That responsibility demands preparation, fairness, and accountability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Case for Change */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6 leading-tight">
                Why This Race Matters
              </h2>
              <div className="space-y-5 font-body text-charcoal-light text-lg leading-relaxed">
                <p>
                  For over 20 years, the same judge has held this seat on the 11th Chancery Court.
                  In that time, she has run unopposed, faced little public scrutiny, and operated
                  without the accountability that every public servant should welcome.
                </p>
                <p>
                  Accountability is not adversarial — it is the foundation of public trust.
                  Every job requires it. Elected officials especially must earn the confidence
                  of the people they serve, not assume it.
                </p>
                <p>
                  This race is not about politics. Judicial races in Mississippi are nonpartisan
                  by law — and for good reason. Justice should not depend on party affiliation.
                  It should depend on qualifications, character, and a genuine commitment to
                  serving all families equally.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border-l-4 border-amber">
                  <h3 className="font-heading text-xl font-bold text-forest mb-2">
                    Accountability
                  </h3>
                  <p className="font-body text-charcoal-light leading-relaxed">
                    Every job needs accountability. After more than two decades without a serious
                    challenger, the families of this district deserve a judge who earns their
                    confidence at the ballot box — not one who coasts on the absence of competition.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border-l-4 border-forest">
                  <h3 className="font-heading text-xl font-bold text-forest mb-2">
                    Nonpartisan Justice
                  </h3>
                  <p className="font-body text-charcoal-light leading-relaxed">
                    Judges should serve the whole community — not one party&apos;s base.
                    Mississippi law makes judicial races nonpartisan because justice must be
                    blind to politics. That principle should be honored, not circumvented.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border-l-4 border-sage">
                  <h3 className="font-heading text-xl font-bold text-forest mb-2">
                    Fresh Perspective
                  </h3>
                  <p className="font-body text-charcoal-light leading-relaxed">
                    New energy and a fresh perspective on the bench doesn&apos;t mean
                    inexperience — it means nearly 40 years of legal practice from the side of
                    the people who actually appear in Chancery Court. That perspective matters.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision for the Bench */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Responsibility. Compassion. Competence.
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-3xl mx-auto">
              Three words that define how Rhonda Cooper will serve on the bench.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto bg-forest/10 rounded-full flex items-center justify-center mb-5">
                  <span className="font-heading text-2xl font-bold text-forest">R</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-forest mb-3">Responsibility</h3>
                <p className="font-body text-charcoal-light leading-relaxed">
                  A Chancery Judge holds families&apos; futures in their hands. Rhonda will treat
                  every case with the gravity it deserves — showing up prepared, making timely
                  decisions, and managing the docket efficiently so families aren&apos;t left waiting.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto bg-amber/10 rounded-full flex items-center justify-center mb-5">
                  <span className="font-heading text-2xl font-bold text-amber">C</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-forest mb-3">Compassion</h3>
                <p className="font-body text-charcoal-light leading-relaxed">
                  People come to Chancery Court during the hardest moments of their lives.
                  They deserve a judge who listens with empathy, treats them with dignity,
                  and understands the human weight of every legal decision.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto bg-sage/30 rounded-full flex items-center justify-center mb-5">
                  <span className="font-heading text-2xl font-bold text-forest">C</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-forest mb-3">Competence</h3>
                <p className="font-body text-charcoal-light leading-relaxed">
                  Nearly 40 years of legal practice in the exact matters Chancery Court handles.
                  Rhonda has the knowledge, the skill, and the judicial temperament to
                  deliver rulings that are fair, legally sound, and timely.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Stakes */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-forest via-forest-dark to-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Every family deserves a judge<br />
              who <span className="text-amber">listens</span>.
            </h2>
            <p className="text-cream/80 font-body text-lg max-w-2xl mx-auto mb-8">
              On November 3, 2026, the families of Leake and Madison counties
              will have the opportunity to choose accountability, compassion, and competence
              on the Chancery bench. Choose Rhonda C. Cooper.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full shadow-lg hover:bg-amber-dark hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                Donate Today
              </Link>
              <Link
                href="/volunteer"
                className="px-8 py-4 border-2 border-cream/30 text-cream text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all"
              >
                Join the Campaign
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
