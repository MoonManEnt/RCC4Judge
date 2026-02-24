import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message to the People | RCC for Chancery 2026",
  description:
    "A letter from Attorney Rhonda C. Cooper to the families of Madison and Leake counties — on why she is running for Chancery Judge and what this election means for every family in the 11th District.",
};

export default function MessagePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber rounded-full blur-3xl" />
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
            src="/images/message/speaking-church.jpg"
            alt=""
            fill
            className="object-cover object-top opacity-[0.22] mix-blend-luminosity"
            sizes="45vw"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            From Rhonda C. Cooper
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            A Message to<br />
            <span className="text-amber">the People</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            An open letter to every family in Madison County and Leake County — on what
            this court means, what this moment demands, and why I am asking for your trust.
          </p>
        </div>
      </section>

      {/* The Letter */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="inline-block px-5 py-2 bg-amber/10 rounded-full mb-6">
                <p className="text-amber font-body font-semibold text-sm tracking-widest uppercase">
                  February 2026
                </p>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest">
                Dear Neighbor,
              </h2>
            </div>
          </ScrollReveal>

          {/* ── Photo 1: Young Caron & Mama — "raised my daughter here" ── */}
          <ScrollReveal>
            <div className="prose prose-lg max-w-none font-body text-charcoal leading-[1.9] space-y-6">
              <div className="sm:float-right sm:ml-8 sm:mb-6 mb-8 flex justify-center sm:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-amber/10 rounded-[1.25rem] rotate-2 group-hover:rotate-1 transition-transform" />
                  <Image
                    src="/images/message/young-caron-mama.jpg"
                    alt="Rhonda and young Caron — a mother and daughter in Ridgeland"
                    width={600}
                    height={750}
                    className="relative w-[180px] sm:w-[200px] rounded-2xl shadow-xl ring-2 ring-white"
                  />
                </div>
              </div>
              <p className="text-xl leading-relaxed">
                I have lived in Madison County for nearly 40 years — not as a visitor, but as
                a person whose life is woven into this place. I raised my daughter here in
                Ridgeland. My parents live in Madison. And for nearly four of those decades, I
                have spent my professional life in the courtrooms that govern the most personal
                decisions families in Madison and Leake County will ever face.
              </p>

              <p>
                My name is <strong className="text-forest">Rhonda C. Cooper</strong>. I am an
                attorney and the founder of MidTown Law in Central Mississippi. I am running to
                become your Chancery Court Judge for the 11th Judicial District, Subdistrict 2,
                serving Madison County and Leake County.
              </p>

              <p>
                <strong className="text-forest">Election Day is Tuesday, <span className="election-date-glow">November 3, 2026</span>.</strong>
              </p>
            </div>
          </ScrollReveal>

          <div className="clear-both" />

          {/* ── Photo 2: Then & Now — the 40-year arc ── */}
          <ScrollReveal>
            <div className="my-16 sm:my-20">
              <div className="mx-auto max-w-2xl grid grid-cols-2 gap-4 sm:gap-6 items-end">
                {/* Then — vintage */}
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-amber/8 rounded-[1.25rem] -rotate-1" />
                  <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                    <div className="aspect-[3/4]">
                      <Image
                        src="/images/message/young-rhonda-daughter.jpg"
                        alt="Young Rhonda holding her daughter — a portrait from their early years in Ridgeland"
                        fill
                        className="object-cover object-top sepia-[.15] brightness-[1.02]"
                        sizes="(max-width: 640px) 45vw, 300px"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 pt-10">
                      <p className="text-white text-xs sm:text-sm font-body font-medium">Then</p>
                    </div>
                  </div>
                </div>
                {/* Now — sunlit family */}
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-forest/8 rounded-[1.25rem] rotate-1" />
                  <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                    <div className="aspect-[3/4]">
                      <Image
                        src="/images/message/family-kinfolk.jpg"
                        alt="Rhonda with family — enjoying a sunlit afternoon together today"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 45vw, 300px"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 pt-10">
                      <p className="text-white text-xs sm:text-sm font-body font-medium">Now</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-charcoal-light/50 text-xs font-body mt-5 italic tracking-wide">
                Nearly 40 years — from raising a daughter in Ridgeland to welcoming the next generation.
              </p>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <ScrollReveal>
            <div className="my-12 flex items-center gap-4">
              <div className="flex-1 h-px bg-cream-dark" />
              <div className="w-3 h-3 rounded-full bg-amber/30" />
              <div className="flex-1 h-px bg-cream-dark" />
            </div>
          </ScrollReveal>

          {/* ── Photo 3: Speaking at church — "38 years in the courtroom" ── */}
          <ScrollReveal>
            <div className="prose prose-lg max-w-none font-body text-charcoal leading-[1.9] space-y-6">
              <p>
                You may not know what a Chancery Court Judge does — most people don&apos;t, until
                they need one. This is the judge who decides what happens to your home when a
                marriage dissolves. Who raises your grandchild when a parent cannot. Whether
                your parents&apos; wishes are honored when they are gone.
              </p>

              <div className="sm:float-left sm:mr-8 sm:mb-4 mb-8 mt-2 flex justify-center sm:justify-start not-prose">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-forest/8 rounded-[1.25rem] -rotate-1 group-hover:rotate-0 transition-transform" />
                  <div className="relative w-[220px] sm:w-[240px] aspect-square rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white">
                    <Image
                      src="/images/message/speaking-church.jpg"
                      alt="Rhonda Cooper speaking passionately at a community gathering"
                      fill
                      className="object-cover object-top"
                      sizes="240px"
                    />
                  </div>
                </div>
              </div>

              <p className="text-xl italic text-forest leading-relaxed">
                When those moments arrive, you deserve a judge who has spent 38 years
                understanding what is at stake on both sides of that courtroom. That is what
                I bring.
              </p>

              <p>
                My career has been built in the exact areas this court governs every day: estate
                planning and administration, domestic relations, real property, and contract
                negotiations. I didn&apos;t choose these practice areas by accident. I chose them
                because they are where the law meets life — where a judge&apos;s decision determines
                whether a family stays together, whether a widow keeps her home, whether a child
                is protected.
              </p>
            </div>
          </ScrollReveal>

          <div className="clear-both" />

          {/* Divider */}
          <ScrollReveal>
            <div className="my-12 flex items-center gap-4">
              <div className="flex-1 h-px bg-cream-dark" />
              <div className="w-3 h-3 rounded-full bg-amber/30" />
              <div className="flex-1 h-px bg-cream-dark" />
            </div>
          </ScrollReveal>

          {/* Section 3 — Making history — with parents photo */}
          <ScrollReveal>
            <div className="prose prose-lg max-w-none font-body text-charcoal leading-[1.9] space-y-6">
              <div className="sm:float-right sm:ml-8 sm:mb-4 mb-8 mt-2 flex justify-center sm:justify-end not-prose">
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-amber/10 rounded-[1.25rem] rotate-2 group-hover:rotate-1 transition-transform" />
                  <div className="relative w-[180px] sm:w-[200px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-2 ring-white">
                    <Image
                      src="/images/message/parents-formal.jpg"
                      alt="Rhonda's parents — elegantly dressed at a family celebration"
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>

              <p>
                For more than two decades, this seat has gone unchallenged. That changes now.
                When voters have a real choice for the first time in a generation, it reflects
                something powerful about what is possible when neighbors choose to participate
                in their own democracy.
              </p>

              <p>
                This election is about your family&apos;s security, your legacy, and what kind of
                community we choose to be when we finally have a choice.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Photo 4: Three generations — "your family's security, your legacy" ── */}
          <ScrollReveal>
            <div className="my-16 sm:my-20 flex justify-center">
              <div className="relative group max-w-[440px] w-full">
                <div className="absolute -inset-3 bg-gradient-to-br from-amber/10 via-transparent to-forest/10 rounded-[1.75rem] rotate-1 group-hover:rotate-0 transition-transform" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white">
                  <div className="aspect-[3/4]">
                    <Image
                      src="/images/message/family-group.jpg"
                      alt="The Cooper family — three generations together"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 90vw, 440px"
                    />
                  </div>
                </div>
                <p className="text-center text-charcoal-light/50 text-xs font-body mt-5 italic tracking-wide">
                  Three generations — the legacy we protect, the future we build.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlighted Call to Action Block */}
          <ScrollReveal>
            <blockquote className="my-14 p-8 sm:p-10 bg-cream rounded-2xl border-l-4 border-amber">
              <p className="font-heading text-xl sm:text-2xl text-forest italic leading-relaxed mb-6">
                &ldquo;I am asking for your vote on <span className="election-date-glow">November 3, 2026</span> — and through my Campaign
                Committee, for your support in whatever form you can give.&rdquo;
              </p>
              <p className="font-body text-charcoal-light leading-relaxed">
                Visit <strong className="text-forest">www.RCC4JUDGE.com</strong> to learn more,
                contribute, or get involved. Spread the word to your neighbors, your family, and
                your friends.
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <div className="prose prose-lg max-w-none font-body text-charcoal leading-[1.9] space-y-6">
              <p>
                This is your court, built by this community, for this community. On November 3rd,
                you have the chance to place inside it someone who has never stopped believing
                that — and has spent 38 years proving it.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Photo 5: Warm closing — "From my family to yours" ── */}
          <ScrollReveal>
            <div className="mt-14 pt-8 border-t border-cream-dark">
              <div className="sm:flex sm:items-start sm:gap-8">
                <div className="flex-1">
                  <p className="font-body text-charcoal-light italic text-lg leading-relaxed mb-6">
                    From my family to yours, with every bit of the respect and purpose this
                    moment deserves,
                  </p>
                  <div className="mb-6">
                    <p className="font-heading text-2xl sm:text-3xl italic text-forest">
                      Rhonda C. Cooper, Esq.
                    </p>
                    <p className="font-body text-amber font-semibold text-sm tracking-widest uppercase mt-2">
                      Candidate for Chancery Judge
                    </p>
                  </div>
                  <div className="inline-block px-4 py-2 bg-forest/5 rounded-lg">
                    <p className="font-body text-forest text-sm font-semibold">
                      Election Day: Tuesday, <span className="election-date-glow">November 3, 2026</span>
                    </p>
                  </div>
                </div>
                <div className="mt-8 sm:mt-0 flex justify-center sm:justify-end shrink-0">
                  <div className="relative group">
                    <div className="absolute -inset-1.5 bg-amber/8 rounded-[1.25rem] rotate-2 group-hover:rotate-1 transition-transform" />
                    <div className="relative w-[160px] sm:w-[180px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-2 ring-white">
                      <Image
                        src="/images/message/love-is-answer.jpg"
                        alt="A moment of love and connection"
                        fill
                        className="object-cover object-top"
                        sizes="180px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Share & Act — clean, no photos */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Share This Message
            </h2>
            <p className="text-charcoal-light font-body text-lg mb-8 max-w-xl mx-auto">
              Every neighbor who reads this letter is one step closer to understanding what is
              at stake. Help us reach every household in the district.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full shadow-lg hover:bg-amber-dark transition-all hover:scale-[1.02]"
              >
                Support the Campaign
              </Link>
              <Link
                href="/volunteer"
                className="px-8 py-4 bg-forest text-white text-lg font-bold font-body rounded-full shadow-lg hover:bg-forest-dark transition-all hover:scale-[1.02]"
              >
                Help Spread the Word
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — clean, no photos */}
      <section className="py-16 bg-forest">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              This Is <span className="text-amber">Your Court.</span>
            </h2>
            <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Built by this community, for this community. On November 3rd, you have
              the chance to place inside it someone who has spent 38 years proving it.
            </p>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-cream/30 text-cream text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all"
            >
              Meet Rhonda Cooper
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
