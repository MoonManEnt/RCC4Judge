import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rhonda C. Cooper | RCC for Chancery 2026",
  description:
    "Meet Attorney Rhonda C. Cooper — nearly 40 years of legal experience in estate planning, domestic relations, and real property. Millsaps College. University of Alabama School of Law. 2022 Leader in Law. Candidate for Chancery Judge, 11th District, Subdistrict 2.",
};

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
            Rhonda C. Cooper, <span className="text-amber">Esq.</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Nearly four decades of legal practice. A career built not on ambition for the bench,
            but on service to the families who depend on it.
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
                  Four Decades in the Making
                </h2>
                <div className="prose prose-lg max-w-none font-body text-charcoal-light space-y-5 leading-relaxed">
                  <p>
                    Some people run for judge because they want the title. Rhonda C. Cooper is running
                    because she has spent nearly forty years doing the work — and she knows this court
                    deserves someone who has.
                  </p>
                  <p>
                    A graduate of <strong className="text-forest">Millsaps College</strong> with a degree
                    in Business Administration and the <strong className="text-forest">University of Alabama
                    School of Law</strong>, Rhonda built her career in the exact areas Chancery Court
                    governs: <em>estate planning and administration, domestic relations, real property,
                    and contract negotiations</em>. She didn&apos;t choose these practice areas by
                    accident. She chose them because they are where the law meets life — where a judge&apos;s
                    decision determines whether a family stays together, whether a widow keeps her home,
                    whether a child is protected.
                  </p>
                  <p>
                    But Rhonda&apos;s career has never been confined to a courtroom. She has dedicated
                    her life to advocacy in <strong className="text-forest">equity in education, community
                    engagement, and social capital</strong> — empowering impoverished and marginalized
                    communities by providing pro bono services to those who need it most, particularly
                    seniors and disadvantaged youth. The families who can&apos;t afford an attorney?
                    Rhonda has been their attorney anyway.
                  </p>
                  <p>
                    A resident of <strong className="text-forest">Ridgeland, Mississippi</strong>, she is
                    a parishioner at <strong className="text-forest">St. Francis of Assisi Catholic
                    Church</strong> in Madison, where she serves in the hospitality ministry. She is a
                    charter member of the <strong className="text-forest">Madison County Alumnae Chapter
                    of Delta Sigma Theta Sorority, Inc.</strong> and was in the inaugural class
                    of <strong className="text-forest">Leadership Madison County</strong>.
                  </p>
                  <p>
                    She doesn&apos;t just know this district. She has shaped it.
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

      {/* Interactive Career Timeline */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              A Career That Speaks for Itself
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Click any milestone to explore the journey that prepared Rhonda C. Cooper for the bench.
            </p>
          </ScrollReveal>

          <InteractiveTimeline />
        </div>
      </section>

      {/* Honors & Recognition */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Recognized. Respected. Ready.
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              A record of excellence acknowledged by Mississippi&apos;s legal community and beyond.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <ScrollReveal>
              <div className="p-6 bg-cream rounded-2xl text-center hover-lift h-full">
                <div className="w-14 h-14 bg-amber/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-forest mb-2">Leader in Law</h3>
                <p className="font-body text-charcoal-light text-sm">Mississippi Business Journal, 2022</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="p-6 bg-cream rounded-2xl text-center hover-lift h-full">
                <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-forest mb-2">Koch Foundation Lecturer</h3>
                <p className="font-body text-charcoal-light text-sm">Charles Koch Foundation Education Lecture, MVSU, 2018</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="p-6 bg-cream rounded-2xl text-center hover-lift h-full">
                <div className="w-14 h-14 bg-mauve/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-mauve" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-bold text-forest mb-2">Two-Time Creative Awardee</h3>
                <p className="font-body text-charcoal-light text-sm">JSU Creative Awards for Faculty & Staff</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community & Organizations */}
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* RED BOX — Mary Church Terrell portrait, left side full height */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[28%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 55%, transparent 85%), linear-gradient(to bottom, transparent 3%, black 15%, black 85%, transparent 97%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 55%, transparent 85%), linear-gradient(to bottom, transparent 3%, black 15%, black 85%, transparent 97%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="/images/causes/mary-church-terrell.jpg"
            alt=""
            fill
            className="object-cover object-top opacity-[0.25]"
            sizes="28vw"
          />
        </div>

        {/* PURPLE BOX — MCT society members, bottom center-left */}
        <div
          className="absolute left-[5%] bottom-0 w-[45%] h-[35%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.5) 100%), linear-gradient(to right, transparent 0%, black 10%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.5) 100%), linear-gradient(to right, transparent 0%, black 10%, black 80%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="/images/causes/mct-members.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.20]"
            sizes="45vw"
          />
        </div>

        {/* GREEN BOX — Leadership Madison County, far right edge */}
        <div
          className="absolute right-0 bottom-[5%] w-[22%] h-[25%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, transparent 85%), linear-gradient(to bottom, transparent 5%, black 25%, black 75%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, transparent 85%), linear-gradient(to bottom, transparent 5%, black 25%, black 75%, transparent 95%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="/images/causes/leadership-madison.png"
            alt=""
            fill
            className="object-contain opacity-[0.18]"
            sizes="22vw"
          />
        </div>

        {/* BLUE BOX — Delta Sigma Theta logo, right side full height */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[28%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 55%, transparent 85%), linear-gradient(to bottom, transparent 3%, black 15%, black 85%, transparent 97%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 55%, transparent 85%), linear-gradient(to bottom, transparent 3%, black 15%, black 85%, transparent 97%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="/images/causes/dst-madison.png"
            alt=""
            fill
            className="object-contain opacity-[0.20]"
            sizes="28vw"
          />
        </div>

        {/* Charity logos, right side scattered (over DST) */}
        <div
          className="absolute right-0 top-[3%] w-[18%] h-[22%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)',
          }}
        >
          <Image
            src="/images/causes/mpb.svg"
            alt=""
            fill
            className="object-contain opacity-[0.18]"
            sizes="18vw"
          />
        </div>

        <div
          className="absolute right-[3%] top-[30%] w-[14%] h-[18%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)',
          }}
        >
          <Image
            src="/images/causes/alzheimers-ms.jpg"
            alt=""
            fill
            className="object-contain opacity-[0.18]"
            sizes="14vw"
          />
        </div>

        <div
          className="absolute right-[1%] top-[55%] w-[12%] h-[16%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)',
          }}
        >
          <Image
            src="/images/causes/magnolia-bar.png"
            alt=""
            fill
            className="object-contain opacity-[0.18]"
            sizes="12vw"
          />
        </div>

        <div
          className="absolute right-[5%] bottom-[8%] w-[13%] h-[18%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)',
          }}
        >
          <Image
            src="/images/causes/catholic-charities.png"
            alt=""
            fill
            className="object-contain opacity-[0.18]"
            sizes="13vw"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6">
                Rooted Where It Matters
              </h2>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-4">
                There is a difference between a candidate who campaigns in a community and one who has
                built a life in it. Rhonda didn&apos;t arrive in Madison County for an election. She
                helped launch its institutions. She mentored its students. She served its families
                before anyone was watching — and long before anyone was voting.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-4">
                From the inaugural class of Leadership Madison County to chartering the local chapter
                of Delta Sigma Theta, from lecturing at universities to serving in her church&apos;s
                hospitality ministry — Rhonda&apos;s community involvement isn&apos;t a campaign talking
                point. It&apos;s a matter of record.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed">
                She supports causes that reflect her values: Mississippi Public Broadcasting, the
                Mississippi Chapter of the Alzheimer&apos;s Association, the Magnolia Bar Foundation,
                and Catholic Charities. She gives — of her time, her expertise, and her heart — because
                that is who she is. Not who she becomes in an election year.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-forest mb-4">Professional & Community</h3>
                {[
                  { label: "Delta Sigma Theta Sorority, Inc.", sub: "Charter Member, Madison County Alumnae Chapter" },
                  { label: "Leadership Madison County", sub: "Inaugural Class" },
                  { label: "MS Women's Lawyers Association", sub: "Member" },
                  { label: "Metro Jackson Black Women Lawyers Assoc.", sub: "Member" },
                  { label: "Mary Church Terrell Literary Club, Inc.", sub: "Member" },
                  { label: "Oral History Association", sub: "Member" },
                  { label: "St. Francis of Assisi Catholic Church", sub: "Hospitality Ministry, Madison, MS" },
                ].map((org, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-amber flex-shrink-0 mt-2" />
                    <div>
                      <p className="font-body font-semibold text-forest text-sm">{org.label}</p>
                      <p className="font-body text-charcoal-light text-xs">{org.sub}</p>
                    </div>
                  </div>
                ))}

                <h3 className="font-heading text-xl font-bold text-forest mb-4 pt-4">Causes She Supports</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Mississippi Public Broadcasting",
                    "MS Alzheimer's Association",
                    "Magnolia Bar Foundation",
                    "Catholic Charities, Inc.",
                  ].map((cause, i) => (
                    <div key={i} className="p-3 bg-white/80 backdrop-blur-sm rounded-xl text-center">
                      <p className="font-body text-charcoal-light text-xs">{cause}</p>
                    </div>
                  ))}
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
            Join the movement for fair, accountable justice across Leake and Madison counties.
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
