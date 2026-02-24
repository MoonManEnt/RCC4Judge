import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CountUpNumber from "@/components/CountUpNumber";
import ElectionCountdown from "@/components/ElectionCountdown";
import EmailSignup from "@/components/EmailSignup";
import FundraisingThermometer from "@/components/FundraisingThermometer";
import FAQAccordion from "@/components/FAQAccordion";
import SocialShare from "@/components/SocialShare";

const PILLARS = [
  {
    title: "Experience",
    description:
      "Nearly 40 years of legal practice in estate planning, domestic relations, real property, and contract negotiations — the exact matters Chancery Court handles every day.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Character",
    description:
      "A reputation built on integrity, fairness, and the belief that every person who enters a courtroom deserves to be heard with dignity and respect.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Connection",
    description:
      "Deep roots across Leake County and Madison County. A leader who knows this community because she lives it, serves it, and fights for it.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const ENDORSEMENTS_PREVIEW = [
  {
    quote: "Rhonda Cooper has the experience, the temperament, and the heart to serve our community with distinction on the Chancery bench.",
    name: "Community Leader",
    title: "Madison County",
  },
  {
    quote: "Our families deserve a judge who understands the real impact of every decision. Rhonda is that judge.",
    name: "Faith Leader",
    title: "Leake County",
  },
  {
    quote: "I've watched Rhonda practice law for decades. Her integrity is beyond question. She will be an outstanding Chancellor.",
    name: "Attorney",
    title: "11th Chancery District",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-dark to-forest" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber rounded-full blur-3xl" />
        </div>

        {/* LEFT — Civil Rights: March silhouettes & scales of justice */}
        <div className="absolute left-0 top-0 bottom-0 w-1/4 hidden lg:flex items-center justify-center pointer-events-none">
          <svg className="w-full h-auto max-h-[70%] opacity-[0.06] text-cream" viewBox="0 0 200 500" fill="currentColor">
            {/* Scales of justice */}
            <circle cx="100" cy="60" r="8" />
            <rect x="98" y="68" width="4" height="120" rx="2" />
            <line x1="40" y1="90" x2="160" y2="90" stroke="currentColor" strokeWidth="3" fill="none" />
            {/* Left pan */}
            <path d="M40,90 L30,130 Q35,140 50,140 Q65,140 70,130 L60,90" />
            {/* Right pan */}
            <path d="M140,90 L130,120 Q135,130 150,130 Q165,130 170,120 L160,90" />
            {/* March figures */}
            <circle cx="55" cy="240" r="10" />
            <path d="M55,250 L55,290 M45,265 L65,265 M55,290 L45,320 M55,290 L65,320" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="90" cy="235" r="10" />
            <path d="M90,245 L90,285 M80,260 L100,260 M90,285 L80,315 M90,285 L100,315" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="125" cy="240" r="10" />
            <path d="M125,250 L125,290 M115,265 L135,265 M125,290 L115,320 M125,290 L135,320" stroke="currentColor" strokeWidth="3" fill="none" />
            {/* Signs held up */}
            <rect x="42" y="248" width="26" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="112" y="248" width="26" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            {/* Church silhouette (civil rights movement) */}
            <path d="M60,380 L60,420 L140,420 L140,380 L120,360 L110,370 L100,340 L90,370 L80,360 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <rect x="90" y="395" width="20" height="25" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="100" y1="328" x2="100" y2="340" stroke="currentColor" strokeWidth="2.5" />
            <line x1="94" y1="334" x2="106" y2="334" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>

        {/* RIGHT TOP — Mississippi Nature: Magnolia, cypress, river */}
        <div className="absolute right-0 top-0 w-1/4 h-2/3 hidden lg:flex items-start justify-center pt-20 pointer-events-none">
          <svg className="w-full h-auto max-h-full opacity-[0.06] text-cream" viewBox="0 0 200 400" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Magnolia flower */}
            <ellipse cx="100" cy="70" rx="20" ry="35" transform="rotate(0 100 70)" fill="currentColor" opacity="0.3" stroke="currentColor" />
            <ellipse cx="100" cy="70" rx="20" ry="35" transform="rotate(60 100 70)" fill="currentColor" opacity="0.3" stroke="currentColor" />
            <ellipse cx="100" cy="70" rx="20" ry="35" transform="rotate(120 100 70)" fill="currentColor" opacity="0.3" stroke="currentColor" />
            <circle cx="100" cy="70" r="10" fill="currentColor" opacity="0.5" />
            {/* Magnolia leaves */}
            <path d="M100,105 Q80,130 70,160 Q90,140 100,105" fill="currentColor" opacity="0.4" />
            <path d="M100,105 Q120,130 130,160 Q110,140 100,105" fill="currentColor" opacity="0.4" />
            {/* Cypress tree with Spanish moss */}
            <path d="M160,400 L160,250 Q160,220 150,210 Q170,220 160,250" strokeWidth="3" fill="currentColor" opacity="0.3" />
            <path d="M145,260 Q130,270 120,280" strokeWidth="1" opacity="0.4" />
            <path d="M155,240 Q140,250 130,265" strokeWidth="1" opacity="0.4" />
            <path d="M165,255 Q175,265 185,275" strokeWidth="1" opacity="0.4" />
            <path d="M150,220 Q135,230 125,250" strokeWidth="1" opacity="0.3" />
            <path d="M170,225 Q180,240 190,260" strokeWidth="1" opacity="0.3" />
            {/* Tree canopy */}
            <ellipse cx="160" cy="200" rx="35" ry="25" fill="currentColor" opacity="0.15" />
            {/* River flowing lines */}
            <path d="M10,320 Q50,310 80,330 Q110,350 150,340 Q180,330 200,340" strokeWidth="2" opacity="0.4" />
            <path d="M10,340 Q50,330 80,350 Q110,370 150,360 Q180,350 200,360" strokeWidth="1.5" opacity="0.3" />
            <path d="M10,355 Q50,345 80,365 Q110,385 150,375 Q180,365 200,375" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>

        {/* BOTTOM — Mississippi Scholarship: Books, columns, graduation */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 hidden lg:flex items-end justify-center pointer-events-none overflow-hidden">
          <svg className="w-full max-w-4xl h-auto opacity-[0.04] text-cream mb-0" viewBox="0 0 800 150" fill="currentColor">
            {/* Open book (center) */}
            <path d="M350,130 Q370,100 400,95 Q430,100 450,130" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M350,130 Q370,105 400,100 Q430,105 450,130" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="400" y1="95" x2="400" y2="130" stroke="currentColor" strokeWidth="1.5" />
            {/* Book pages */}
            <line x1="360" y1="118" x2="395" y2="108" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="365" y1="112" x2="393" y2="103" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="370" y1="106" x2="392" y2="99" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="405" y1="108" x2="440" y2="118" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="407" y1="103" x2="435" y2="112" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="408" y1="99" x2="430" y2="106" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            {/* Left: Academic columns */}
            <rect x="120" y="60" width="12" height="90" rx="2" opacity="0.5" />
            <rect x="145" y="50" width="12" height="100" rx="2" opacity="0.6" />
            <rect x="170" y="60" width="12" height="90" rx="2" opacity="0.5" />
            <rect x="115" y="50" width="72" height="8" rx="2" opacity="0.4" />
            <path d="M115,50 L151,30 L187,50" fill="currentColor" opacity="0.4" />
            {/* Right: Graduation cap */}
            <path d="M620,80 L680,60 L740,80 L680,100 Z" opacity="0.5" />
            <rect x="676" y="60" width="8" height="30" opacity="0.4" />
            <line x1="740" y1="80" x2="740" y2="110" stroke="currentColor" strokeWidth="2" />
            <circle cx="740" cy="114" r="4" opacity="0.5" />
            {/* Stacked books (left of center) */}
            <rect x="260" y="120" width="50" height="10" rx="2" opacity="0.4" />
            <rect x="255" y="108" width="55" height="10" rx="2" opacity="0.35" />
            <rect x="258" y="96" width="48" height="10" rx="2" opacity="0.3" />
            {/* Stacked books (right of center) */}
            <rect x="490" y="120" width="50" height="10" rx="2" opacity="0.4" />
            <rect x="495" y="108" width="45" height="10" rx="2" opacity="0.35" />
            <rect x="492" y="96" width="48" height="10" rx="2" opacity="0.3" />
            {/* Quill pen */}
            <path d="M560,40 Q565,60 558,90 Q555,100 560,110" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M560,40 Q570,35 575,25 Q565,30 560,40" fill="currentColor" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* County line */}
          <div className="animate-fade-in-up stagger-1">
            <p className="text-sage/70 text-xs sm:text-sm font-body font-medium tracking-[0.25em] uppercase mb-8">
              Madison County &nbsp;&middot;&nbsp; Leake County &nbsp;&middot;&nbsp; November 2026
            </p>
          </div>

          {/* Main headline */}
          <div className="animate-fade-in-up stagger-2 max-w-3xl mx-auto mb-6">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.2] mb-2">
              When you walk into that courtroom,<br />
              <span className="text-amber italic">you deserve to see someone<br />
              who understands your world.</span>
            </h1>
          </div>

          {/* Body copy */}
          <div className="animate-fade-in-up stagger-3 max-w-2xl mx-auto mb-4">
            <p className="text-cream/85 text-base sm:text-lg font-body leading-relaxed">
              A judge shapes the future of families. Which means the judge should understand
              what family really means — the sacrifices, the land passed down, the children you&apos;d
              do anything for.
            </p>
          </div>

          <div className="animate-fade-in-up stagger-3 max-w-2xl mx-auto mb-8">
            <p className="text-cream/60 text-sm sm:text-base font-body italic leading-relaxed">
              Rhonda Cooper isn&apos;t just qualified. She&apos;s connected — to these communities, these families,
              and the real stakes behind every case on that docket. In Madison and Leake counties, that
              connection is long overdue on the bench.
            </p>
          </div>

          {/* Slogan */}
          <div className="animate-fade-in-up stagger-4 mb-10">
            <p className="text-amber font-body font-semibold text-sm sm:text-base tracking-[0.15em] uppercase">
              Responsibility &nbsp;|&nbsp; Compassion &nbsp;|&nbsp; Competency
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up stagger-5 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-amber text-white text-base sm:text-lg font-bold font-body rounded-full shadow-lg hover:bg-amber-dark hover:shadow-xl transition-all duration-200 hover:scale-[1.02] uppercase tracking-wide"
            >
              Help Put Rhonda on the Bench
            </Link>
            <Link
              href="/volunteer"
              className="px-8 py-4 border-2 border-cream/30 text-cream text-base sm:text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Volunteer to Make History
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cream/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Election Countdown Strip */}
      <section className="py-8 bg-forest-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sage text-xs font-body font-medium tracking-widest uppercase mb-4">
            Election Day: November 3, 2026
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

      {/* Why This Race Matters + Fundraising */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-forest mb-6 leading-tight">
                Your Chancery Court.<br />
                <span className="text-amber">Your Family&apos;s Future.</span>
              </h2>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-6">
                Chancery Court handles the most personal legal decisions families face — divorce, child custody,
                child support, guardianship, estates, wills, and property disputes. When you walk into that courtroom,
                the judge&apos;s decision shapes your family&apos;s future.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-8">
                For over two decades, the same judge has held this seat — often without any challenge at all.
                Our community deserves a Chancellor who is accountable, prepared, and committed to serving
                every family with fairness and efficiency.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-6">
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

            {/* Fundraising Thermometer */}
            <ScrollReveal delay={200}>
              <FundraisingThermometer />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Meet Rhonda Preview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <ScrollReveal>
              <div className="aspect-[4/5] bg-gradient-to-br from-forest/10 to-sage/20 rounded-3xl flex items-center justify-center relative overflow-hidden hover-scale">
                <div className="text-center px-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-forest/10 flex items-center justify-center">
                    <svg className="w-16 h-16 text-forest/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-forest/50 font-body text-sm">Professional Photo Coming Soon</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-forest/5 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-amber font-body font-semibold text-sm tracking-widest uppercase mb-4">
                Meet the Candidate
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-forest mb-6 leading-tight">
                Attorney Rhonda C. Cooper
              </h2>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-4">
                With nearly four decades of distinguished legal practice, Rhonda C. Cooper has dedicated
                her career to the very areas of law that Chancery Court handles every day — estate planning,
                domestic relations, real property, and contract negotiations.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-8">
                She&apos;s not a politician seeking a title. She&apos;s a lawyer who has spent a lifetime
                preparing for the responsibility of the bench — and she&apos;s ready to serve every family
                in this district with the accountability and compassion they deserve.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white font-body font-semibold rounded-full hover:bg-forest-dark transition-colors"
              >
                Read Rhonda&apos;s Full Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-forest via-forest-dark to-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Join the Movement for<br />
              <span className="text-amber">Accountable Justice</span>
            </h2>
            <p className="text-cream/80 font-body text-lg max-w-2xl mx-auto mb-8">
              Judges shouldn&apos;t belong to political parties — they belong to families.
              When your child&apos;s custody is at stake, you don&apos;t want a partisan judge.
              You want a fair one.
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
                Volunteer With Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Endorsements Preview */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-forest mb-4">
              Voices of Support
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Leaders across our community stand with Rhonda Cooper for Chancery Judge.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENDORSEMENTS_PREVIEW.map((endorsement, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="p-8 bg-white rounded-2xl shadow-sm h-full flex flex-col hover-lift">
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

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/endorsements"
              className="inline-flex items-center gap-2 text-forest font-body font-semibold hover:text-amber transition-colors"
            >
              See all endorsements
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
