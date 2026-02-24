import ScrollReveal from "@/components/ScrollReveal";
import EndorsementForm from "@/components/EndorsementForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endorsements | Rhonda C. Cooper for Chancery Judge",
  description:
    "See who stands with Rhonda C. Cooper for Chancery Judge. Endorsements from community leaders, faith leaders, attorneys, and organizations across the 11th Chancery District.",
};

const FEATURED_ENDORSEMENTS = [
  {
    quote: "Rhonda Cooper has the experience, the temperament, and the heart to serve our community with distinction on the Chancery bench.",
    name: "Community Leader",
    title: "Madison County",
    category: "community",
  },
  {
    quote: "Our families deserve a judge who understands the real impact of every decision. Rhonda is that judge.",
    name: "Faith Leader",
    title: "Leake County",
    category: "faith",
  },
  {
    quote: "I've watched Rhonda practice law for decades. Her integrity is beyond question. She will be an outstanding Chancellor.",
    name: "Attorney",
    title: "11th Chancery District",
    category: "legal",
  },
];

const ENDORSEMENT_CATEGORIES = [
  {
    title: "Legal Community",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    description: "Endorsements from attorneys and legal professionals coming soon.",
  },
  {
    title: "Faith Leaders",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
    description: "Pastoral and faith community endorsements coming soon.",
  },
  {
    title: "Community Leaders",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    description: "Civic and community organization endorsements coming soon.",
  },
  {
    title: "Elected Officials",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    description: "Endorsements from elected officials coming soon.",
  },
];

export default function EndorsementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Voices of Support
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Who Stands With<br />
            <span className="text-amber">Rhonda Cooper</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Leaders from across our community — attorneys, faith leaders, civic organizations,
            and neighbors — support Rhonda Cooper for Chancery Judge.
          </p>
        </div>
      </section>

      {/* Featured Endorsements */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Featured Endorsements
            </h2>
            <p className="text-charcoal-light font-body text-lg">
              Placeholder endorsements — real names and quotes will be added as they are secured.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_ENDORSEMENTS.map((endorsement, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="p-8 bg-cream rounded-2xl h-full flex flex-col">
                  <div className="text-amber mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-charcoal font-body text-base leading-relaxed italic flex-grow mb-6">
                    &ldquo;{endorsement.quote}&rdquo;
                  </p>
                  <div className="border-t border-cream-dark pt-4">
                    <p className="font-body font-semibold text-forest text-sm">{endorsement.name}</p>
                    <p className="font-body text-mauve text-xs">{endorsement.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsement Categories */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Endorsements By Category
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {ENDORSEMENT_CATEGORIES.map((category, i) => (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <div className="p-6 bg-white rounded-2xl shadow-sm h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center text-forest mb-4">{category.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-forest mb-2">{category.title}</h3>
                  <p className="font-body text-charcoal-light text-sm leading-relaxed italic">
                    {category.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsement Submission Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Add Your Endorsement
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-xl mx-auto">
              If you believe in accountability, fairness, and competence on the Chancery bench,
              we&apos;d be honored to have your endorsement.
            </p>
          </ScrollReveal>
          <EndorsementForm />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Every Voice Counts
          </h2>
          <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
            Your endorsement shows the community that Rhonda Cooper has earned the trust
            of the people she will serve.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full hover:bg-amber-dark transition-all"
          >
            Support the Campaign
          </Link>
        </div>
      </section>
    </>
  );
}
