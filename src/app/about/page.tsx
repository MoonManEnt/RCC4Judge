import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rhonda C. Cooper",
  description:
    "Meet Attorney Rhonda C. Cooper — 38 years of legal experience in estate planning, domestic relations, and real property. Millsaps College. University of Alabama School of Law. 2022 Leader in Law. Candidate for Chancery Judge, 11th District, Subdistrict 2.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-0 sm:pt-32 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">

            {/* Left — Text (shown below photo on mobile) */}
            <div className="order-2 lg:order-1 pb-12 sm:pb-16">
              <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
                Meet the Candidate
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
                Rhonda C. Cooper, <span className="text-amber">Esq.</span>
              </h1>
              <p className="text-cream/80 font-body text-lg sm:text-xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
                38 years of legal practice. A career built not on ambition for the bench,
                but on service to the families who depend on it.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/donate"
                  className="px-6 py-3 bg-amber text-white font-bold font-body rounded-full hover:bg-amber-dark transition-all text-sm"
                >
                  Support Rhonda
                </Link>
                <Link
                  href="/volunteer"
                  className="px-6 py-3 border border-cream/30 text-cream font-medium font-body rounded-full hover:bg-white/10 transition-all text-sm"
                >
                  Volunteer
                </Link>
              </div>
            </div>

            {/* Right — Headshot (shown first/above on mobile) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up">
              <div className="relative w-64 sm:w-72 lg:w-80 xl:w-96">
                <div className="aspect-[3/4] rounded-t-3xl overflow-hidden shadow-2xl border border-white/10 relative">
                  <Image
                    src="/images/rhonda-headshot.jpg"
                    alt="Attorney Rhonda C. Cooper"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 384px"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Bio Content */}
            <div>
              <ScrollReveal>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6">
                  38 Years in the Making
                </h2>
                <div className="prose prose-lg max-w-none font-body text-charcoal-light space-y-5 leading-relaxed">
                  <p>
                    Some people run for judge because they want the title. Rhonda C. Cooper is running
                    because she has spent 38 years doing the work — and she knows this court
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
                    her life to advocacy in <strong className="text-forest">education, community
                    engagement, and public service</strong> — providing pro bono legal services
                    to those who need it most, particularly seniors and young adults who otherwise
                    could not afford representation.
                  </p>
                  <p>
                    A resident of <strong className="text-forest">Ridgeland, Mississippi</strong>, she is
                    a parishioner at <strong className="text-forest">St. Francis of Assisi Catholic
                    Church</strong> in Madison, where she serves in the hospitality ministry. She was in
                    the inaugural class of <strong className="text-forest">Leadership Madison County</strong> and
                    is a charter member of the <strong className="text-forest">Madison County Alumnae Chapter
                    of Delta Sigma Theta Sorority, Inc.</strong> Cooper currently serves as Parliamentarian
                    on the Board of the <strong className="text-forest">Friends of the City of Ridgeland Library</strong>.
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

        {/* Charity logos, right side scattered */}
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
                There is a difference between a candidate who campaigns in a District and one whose
                life is immersed in it. Cooper hasn&apos;t shown up just for this election. She has
                been a part of these communities throughout her career. She has mentored their students,
                partnered with their community stakeholders, and aided in their efforts to activate
                voter participation — all done before anyone was watching, but while all were waiting
                for the change.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed mb-4">
                From serving in the inaugural class of Leadership Madison County to chartering the
                Madison County Chapter of Delta Sigma Theta Sorority, Inc. — from teaching at Holmes
                Community College, Ridgeland, Mississippi College School of Law, and Jackson State
                University and lecturing at Mississippi Valley State University to serving in the
                hospitality ministry at St. Francis of Assisi Catholic Church in Madison — Cooper&apos;s
                community involvement isn&apos;t a campaign talking point. It&apos;s a matter of record.
              </p>
              <p className="text-charcoal-light font-body text-lg leading-relaxed">
                She supports causes that reflect her values: the Mississippi Chapter of the
                Alzheimer&apos;s Association, Magnolia Bar Foundation, Inc., Mississippi Public
                Broadcasting, and Catholic Charities, Inc. Cooper gives — her time, her expertise,
                and her heart — because that is who she is. Not who she becomes in an election year.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-forest mb-4">Professional & Community</h3>
                {[
                  { label: "Leadership Madison County", sub: "Inaugural Class" },
                  { label: "Delta Sigma Theta Sorority, Inc.", sub: "Charter Member, Madison County Alumnae Chapter" },
                  { label: "Mississippi Women Lawyers Association", sub: "Community Service Liaison" },
                  { label: "Metro Jackson Black Women Lawyers Association", sub: "Book Club Hostess" },
                  { label: "St. Francis of Assisi Catholic Church", sub: "Hospitality Ministry" },
                  { label: "Friends of the City of Ridgeland Library", sub: "Board Parliamentarian" },
                  { label: "Mary Church Terrell Literary Club, Inc.", sub: "First Vice President" },
                  { label: "Oral History Association", sub: "Project Coordinator and Interviewer" },
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
