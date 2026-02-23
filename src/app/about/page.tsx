import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rhonda C. Cooper | RCC for Chancery 2026",
  description:
    "Learn about Attorney Rhonda C. Cooper — over 25 years of legal experience in civil rights, probate, family law, and criminal defense. Candidate for Chancery Judge, 11th District.",
};

const CAREER_MILESTONES = [
  {
    period: "Law School & Early Career",
    description:
      "Earned her Juris Doctor and began a career dedicated to serving families and individuals navigating the legal system.",
  },
  {
    period: "Civil Rights Practice",
    description:
      "Built a distinguished practice advocating for civil rights, ensuring equal access to justice for underserved communities across Mississippi.",
  },
  {
    period: "Family & Probate Law",
    description:
      "Developed deep expertise in the exact matters Chancery Court handles daily — divorce, custody, guardianship, estates, wills, and property disputes.",
  },
  {
    period: "Criminal Defense",
    description:
      "Represented clients in criminal matters, gaining a thorough understanding of due process, constitutional rights, and the profound responsibility of the bench.",
  },
  {
    period: "25+ Years of Practice",
    description:
      "A quarter-century of legal experience across multiple disciplines, preparing her for the broad jurisdiction of the Chancery Court.",
  },
  {
    period: "2026 — Running for Chancery Judge",
    description:
      "Qualified as a candidate for the 11th Chancery Court District, Place 2 — bringing accountability, compassion, and competency to the bench.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Meet the Candidate
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Attorney Rhonda C. Cooper
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Over 25 years of legal experience serving Mississippi families. Now seeking to bring that
            experience, integrity, and dedication to the Chancery bench.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Photo Placeholder */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="aspect-[3/4] bg-gradient-to-br from-forest/10 to-sage/20 rounded-3xl flex items-center justify-center sticky top-28">
                  <div className="text-center px-8">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-forest/10 flex items-center justify-center">
                      <svg className="w-14 h-14 text-forest/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-forest/50 font-body text-sm">Professional Photo Coming Soon</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6">
                  A Lifetime of Preparation for the Bench
                </h2>
                <div className="prose prose-lg max-w-none font-body text-charcoal-light space-y-5 leading-relaxed">
                  <p>
                    Rhonda C. Cooper is a seasoned Mississippi attorney with more than 25 years of legal
                    practice spanning civil rights, probate, family law, and criminal defense. Her career
                    has been defined by a commitment to fairness, a meticulous approach to the law, and a
                    deep respect for the families and individuals she has represented.
                  </p>
                  <p>
                    As a practitioner in the exact areas of law that fall under Chancery Court jurisdiction —
                    divorce, child custody, guardianship, estates, wills, and property disputes — Rhonda
                    brings a rare depth of understanding to this race. She doesn&apos;t need to learn what
                    Chancery Court does. She has lived it, day in and day out, for over two decades.
                  </p>
                  <p>
                    Rhonda&apos;s legal career has taken her across Madison, Leake, Holmes, and Yazoo counties —
                    the four counties that make up the 11th Chancery Court District. She knows the
                    communities, the families, and the challenges they face. Her roots in this district
                    are not political — they are personal and professional.
                  </p>
                  <p>
                    In Chancery Court, the decisions a judge makes can reshape a family&apos;s entire future.
                    Rhonda believes that responsibility demands a judge who is prepared, who listens, who
                    rules with both legal rigor and human compassion, and who is accountable to the
                    community she serves.
                  </p>
                </div>
              </ScrollReveal>

              {/* Signature Quote */}
              <ScrollReveal delay={200}>
                <blockquote className="mt-10 p-8 bg-cream rounded-2xl border-l-4 border-amber">
                  <p className="font-heading text-xl sm:text-2xl text-forest italic leading-relaxed">
                    &ldquo;Every family who walks into Chancery Court deserves a judge who is prepared,
                    who listens, and who treats them with the dignity their case demands. That is my
                    promise to this community.&rdquo;
                  </p>
                  <footer className="mt-4 text-mauve font-body font-medium">
                    — Rhonda C. Cooper
                  </footer>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Career Highlights
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              A career spanning decades, building the experience the bench demands.
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {CAREER_MILESTONES.map((milestone, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-forest flex-shrink-0 mt-1.5" />
                    {i < CAREER_MILESTONES.length - 1 && (
                      <div className="w-0.5 h-full bg-forest/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading text-lg font-bold text-forest mb-1">
                      {milestone.period}
                    </h3>
                    <p className="text-charcoal-light font-body leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6">
                Rooted in Community
              </h2>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-4">
                Rhonda&apos;s commitment to this district extends far beyond the courtroom. She is an active
                member of her faith community, a dedicated civic volunteer, and a trusted voice
                in organizations across Madison and Leake counties.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-4">
                She knows these communities because she lives in them. She worships in them.
                She serves in them. And she will bring that same dedication to the Chancery bench.
              </p>
              <p className="text-mauve font-body text-sm italic mt-6">
                Detailed community involvement and organizational affiliations coming soon.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-cream rounded-2xl text-center">
                  <div className="text-forest mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
                    </svg>
                  </div>
                  <p className="font-body font-semibold text-forest text-sm">Faith Community</p>
                </div>
                <div className="p-6 bg-cream rounded-2xl text-center">
                  <div className="text-forest mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                    </svg>
                  </div>
                  <p className="font-body font-semibold text-forest text-sm">Legal Advocacy</p>
                </div>
                <div className="p-6 bg-cream rounded-2xl text-center">
                  <div className="text-forest mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <p className="font-body font-semibold text-forest text-sm">Civic Service</p>
                </div>
                <div className="p-6 bg-cream rounded-2xl text-center">
                  <div className="text-forest mb-3">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <p className="font-body font-semibold text-forest text-sm">Community Roots</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Stand With Rhonda?
          </h2>
          <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
            Join the movement for fair, accountable justice across all four counties of the 11th Chancery District.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full hover:bg-amber-dark transition-all"
            >
              Donate Today
            </Link>
            <Link
              href="/volunteer"
              className="px-8 py-4 border-2 border-cream/30 text-cream text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
