import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CountUpNumber from "@/components/CountUpNumber";
import ElectionCountdown from "@/components/ElectionCountdown";
import EmailSignup from "@/components/EmailSignup";
import FAQAccordion from "@/components/FAQAccordion";
import SocialShare from "@/components/SocialShare";

const PILLARS = [
  {
    title: "Responsible",
    description:
      "Understands the obligation and role of properly handling every client issue before the Chancery Court and will be accountable for the Court's decisions and their impact.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Competent",
    description:
      "Possesses the knowledge and expertise of nearly 40 years of service to successfully resolve the family, land, estate, and other matters within the jurisdiction of the Chancery Court.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Compassionate",
    description:
      "Recognizes that courtroom experiences can be frightening, stressful, and uncomfortable — and knows that the response from the bench should be to promote dignity, fairness, and integrity.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-forest via-forest-dark to-forest">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — Logo + Election Day (shown below headshot on mobile) */}
            <div className="animate-fade-in-up flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
              <div className="mb-8">
                <Image
                  src="/images/hero-logo.png"
                  alt="Vote Cooper For Chancery Judge"
                  width={700}
                  height={292}
                  className="w-auto max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto lg:mx-0"
                  priority
                />
              </div>

              <p className="text-sage/70 text-xs sm:text-sm font-body font-medium tracking-[0.25em] uppercase mb-6">
                Madison County &nbsp;&middot;&nbsp; Leake County
              </p>

              <div className="mb-8">
                <p className="text-cream/60 text-sm font-body font-medium tracking-[0.2em] uppercase mb-2">
                  Election Day
                </p>
                <p className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-amber leading-none election-date-glow">
                  Nov 3, 2026
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="px-8 py-4 bg-amber text-white text-base sm:text-lg font-bold font-body rounded-full shadow-lg hover:bg-amber-dark hover:shadow-xl transition-all duration-200 hover:scale-[1.02] uppercase tracking-wide"
                >
                  Donate Today
                </Link>
                <Link
                  href="/volunteer"
                  className="px-8 py-4 border-2 border-cream/30 text-cream text-base sm:text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  Volunteer
                </Link>
              </div>
            </div>

            {/* RIGHT — Rhonda's Headshot (shown first/above on mobile) */}
            <div className="animate-fade-in-up stagger-2 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-72 sm:w-80 lg:w-96 xl:w-[420px]">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
                  <Image
                    src="/images/rhonda-headshot.jpg"
                    alt="Attorney Rhonda C. Cooper"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 420px"
                    priority
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-3xl border border-amber/20 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Election Countdown Strip */}
      <section className="py-8 bg-forest-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cream text-sm font-body font-bold tracking-widest uppercase mb-4">
            Election Day: <span className="election-date-glow">November 3, 2026</span>
          </p>
          <ElectionCountdown />
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-forest mb-4">
              Why Rhonda Cooper?
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Three pillars define this campaign — and will define her service on the bench.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 150}>
                <div className="group p-8 rounded-2xl bg-cream hover:bg-forest transition-all duration-500 hover:shadow-xl cursor-default h-full hover-lift">
                  <div className="text-forest group-hover:text-amber transition-colors duration-500 mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-forest group-hover:text-white transition-colors duration-500 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-charcoal-light group-hover:text-cream/80 transition-colors duration-500 font-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Race Matters */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-forest mb-6 leading-tight">
                Your Chancery Court.<br />
                <span className="text-amber">Your Family&apos;s Future.</span>
              </h2>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-4">
                The Chancery Court oversees the fabric of the family and the important decisions that are
                faced all too often — divorces, division of marital assets, child custody and support,
                guardianships and conservatorships, wills and estates, and property rights and land disputes.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-4">
                When inside the courtroom for any of these matters, the judge&apos;s decision will affect
                the future of the family.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-4">
                The same judge has decided outcomes for families in Madison and Leake Counties for 20 years.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-8">
                These communities now deserve a Chancery Judge who is responsible, competent, and compassionate
                in serving every family and its members efficiently, fairly, and respectfully.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm text-center hover-lift">
                <div className="font-heading text-4xl font-bold text-forest mb-1">
                  <CountUpNumber target={40} suffix="" />
                </div>
                <p className="text-mauve font-body text-sm">Years of Legal Experience</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm text-center hover-lift">
                <div className="font-heading text-4xl font-bold text-forest mb-1">
                  <CountUpNumber target={2} />
                </div>
                <p className="text-mauve font-body text-sm">Counties Served</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm text-center hover-lift">
                <div className="font-heading text-4xl font-bold text-amber mb-1">
                  <CountUpNumber target={100} suffix="K+" />
                </div>
                <p className="text-mauve font-body text-sm">Residents in Subdistrict</p>
              </div>
              <div className="p-6 bg-forest rounded-2xl shadow-sm text-center">
                <p className="text-amber font-heading text-2xl font-bold mb-1">Nov 3</p>
                <p className="text-cream/80 font-body text-sm">Election Day 2026</p>
              </div>
            </div>

            <Link
              href="/why-rhonda"
              className="inline-flex items-center gap-2 text-forest font-body font-semibold hover:text-amber transition-colors"
            >
              Learn more about why this race matters
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-charcoal-light font-body text-lg">
              Common questions about the campaign, Chancery Court, and how to get involved.
            </p>
          </ScrollReveal>
          <FAQAccordion />
        </div>
      </section>

      {/* Email Signup + Social Share */}
      <section className="py-16 bg-cream-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest mb-3">
              Stay Connected
            </h2>
            <p className="text-charcoal-light font-body mb-6 max-w-md mx-auto">
              Get campaign updates, event announcements, and news delivered to your inbox.
            </p>
            <EmailSignup variant="banner" />
            <div className="mt-6 flex justify-center">
              <SocialShare />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
