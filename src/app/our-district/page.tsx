import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our District | RCC for Chancery 2026",
  description:
    "Learn about Subdistrict 11-2 of the 11th Chancery Court District — Leake County and Madison County precincts. The communities, the people, and why this election matters.",
};

const MADISON_PRECINCTS = [
  "First Presbyterian", "Canton Catholic Parish Center", "Canton Fire Station #4",
  "Canton National Guard Armory", "Canton South Liberty", "Canton St. Paul Methodist",
  "Cedar Grove", "Grace Crossing", "Greater Mt. Levi Church",
  "Highland Colony Baptist Church", "Liberty", "Lorman/Cavalier",
  "Luther Branson School", "Madison 1", "Madison 2", "Madison 3",
  "Main Harbor", "New Industrial Park", "Lake Caroline Clubhouse",
  "Mark Apartments", "Mount Hope", "New Life", "North Bay",
  "Bear Creek", "Camden", "Cameron", "Canton 1", "Canton 2", "Canton 3", "Canton 7",
  "Cobblestone", "Couparle", "Gluckstadt", "Ratliff Ferry",
  "Ridgeland 1", "Ridgeland 3", "Ridgeland 4",
  "Ridgeland First Methodist Church", "Ridgeland Tennis Center",
  "Sharon", "Sunnybrook", "Tougaloo", "Trace Harbor",
  "Victory Baptist Church", "Virlilia", "Whisper Lake", "Yandell Road",
];

const MADISON_COMMUNITIES = [
  {
    name: "City of Madison",
    description: "One of Mississippi's fastest-growing cities, with thriving suburban families, top-rated schools, and a booming business corridor along Highland Colony Parkway.",
    precincts: "Madison 1, Madison 2, Madison 3",
  },
  {
    name: "Ridgeland",
    description: "A dynamic suburban community with a mix of residential neighborhoods, commercial centers, and a diverse population base. Multiple precincts fall within Subdistrict 11-2.",
    precincts: "Ridgeland 1, 3, 4, First Methodist, Tennis Center",
  },
  {
    name: "Canton & Northern Madison",
    description: "The county seat of Madison County, with deep historical roots, a vibrant courthouse square, and a mix of urban and rural communities. A hub for legal and civic activity.",
    precincts: "Canton 1, 2, 3, 7, Fire Station #4, National Guard Armory, South Liberty, St. Paul Methodist, Catholic Parish Center",
  },
  {
    name: "Suburban Growth Corridor",
    description: "Highland Colony, Lake Caroline, Cobblestone, Gluckstadt — the affluent suburban growth precincts where families are rapidly settling. These communities need a judge who understands modern family dynamics.",
    precincts: "Highland Colony Baptist, Lake Caroline Clubhouse, Cobblestone, Gluckstadt, Grace Crossing",
  },
  {
    name: "Rural Southwest Madison",
    description: "Communities like Sharon, Sunnybrook, Bear Creek, Camden, and Couparle represent the rural and semi-rural character of southwestern Madison County — deeply rooted in land, faith, and family tradition.",
    precincts: "Sharon, Sunnybrook, Bear Creek, Camden, Couparle, Ratliff Ferry",
  },
];

export default function OurDistrictPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sage rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber rounded-full blur-3xl" />
        </div>

        {/* Faded background — Madison County map (right) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[35%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 80%), linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 80%), linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="/images/district/madison-county-map.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.20] mix-blend-luminosity"
            sizes="35vw"
            priority
          />
        </div>

        {/* Faded background — Leake County map (right, offset) */}
        <div
          className="absolute right-[28%] top-0 bottom-0 w-[30%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.5) 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.5) 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="/images/district/leake-county-map.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.20] mix-blend-luminosity"
            sizes="30vw"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Subdistrict 11-2
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Our<br />
            <span className="text-amber">District</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Under SB2768, the 11th Chancery Court District has been divided into subdistricts.
            Subdistrict 11-2 encompasses all of Leake County and designated precincts across
            Madison County — from rural Carthage to the suburban heart of Madison and Ridgeland.
          </p>
        </div>
      </section>

      {/* District Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-cream rounded-3xl p-8 sm:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="p-5 bg-white rounded-xl border-l-4 border-forest">
                  <p className="font-heading text-lg font-bold text-forest">Leake County</p>
                  <p className="font-body text-xs text-charcoal-light mt-1">Entire county included</p>
                  <p className="font-body text-xs text-amber font-medium mt-1">County Seat: Carthage</p>
                </div>
                <div className="p-5 bg-white rounded-xl border-l-4 border-amber">
                  <p className="font-heading text-lg font-bold text-forest">Madison County</p>
                  <p className="font-body text-xs text-charcoal-light mt-1">Designated precincts (SB2768)</p>
                  <p className="font-body text-xs text-amber font-medium mt-1">Including Madison, Ridgeland, Canton</p>
                </div>
              </div>
              <p className="font-body text-sm text-charcoal-light max-w-lg mx-auto text-center">
                Subdistrict 11-2 pairs the rural Leake County electorate with the suburban and urban
                communities of central and south Madison County — creating a diverse district that spans
                small-town agriculture and one of Mississippi&apos;s fastest-growing suburban corridors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leake County */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-forest hover-lift mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest">Leake County</h2>
                    <span className="px-3 py-1 bg-cream rounded-full text-xs font-body font-medium text-charcoal-light">
                      Entire County in 11-2
                    </span>
                  </div>
                  <p className="font-body text-charcoal-light leading-relaxed mb-4">
                    A close-knit rural county centered on Carthage, with deep roots in agriculture,
                    faith, and family. Leake County is the rural anchor of Subdistrict 11-2, with
                    approximately 23,000 residents who value tradition, community bonds, and accessible justice.
                  </p>
                  <p className="font-body text-charcoal-light leading-relaxed">
                    The Chancery Court matters profoundly here — property disputes, estate settlements,
                    family custody cases, and guardianship decisions affect multi-generational families
                    whose roots run deep in this land.
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs font-bold text-mauve tracking-widest uppercase mb-3">Key Facts</p>
                  <ul className="space-y-2">
                    {[
                      "Population: ~23,000",
                      "County seat: Carthage, MS",
                      "Strong agricultural and faith community",
                      "Rich cultural heritage and traditions",
                      "Entirely within Subdistrict 11-2",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0 mt-2" />
                        <span className="font-body text-sm text-charcoal-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Madison County Precincts */}
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-amber hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest">Madison County Precincts</h2>
                <span className="px-3 py-1 bg-amber/10 rounded-full text-xs font-body font-medium text-amber">
                  Designated Precincts — SB2768
                </span>
              </div>
              <p className="font-body text-charcoal-light leading-relaxed mb-6">
                Under SB2768 (using July 1, 2025 precinct boundaries), specific Madison County precincts
                are assigned to Subdistrict 11-2. These include the major population centers of Madison,
                Ridgeland, Canton, and the suburban growth corridors.
              </p>

              {/* Communities */}
              <div className="space-y-4 mb-8">
                {MADISON_COMMUNITIES.map((community, i) => (
                  <ScrollReveal key={community.name} delay={i * 80}>
                    <div className="p-5 bg-cream rounded-xl">
                      <h3 className="font-heading text-lg font-bold text-forest mb-1">{community.name}</h3>
                      <p className="font-body text-charcoal-light text-sm leading-relaxed mb-2">
                        {community.description}
                      </p>
                      <p className="font-body text-xs text-mauve">
                        <span className="font-semibold">Precincts:</span> {community.precincts}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Full Precinct List */}
              <details className="group">
                <summary className="cursor-pointer flex items-center gap-2 text-sm font-body font-semibold text-forest hover:text-amber transition-colors">
                  <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  View Full Precinct List ({MADISON_PRECINCTS.length} precincts)
                </summary>
                <div className="mt-4 p-4 bg-cream rounded-xl">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {MADISON_PRECINCTS.map((precinct) => (
                      <span key={precinct} className="text-xs font-body text-charcoal-light py-1">
                        {precinct}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-[10px] font-body text-mauve italic">
                    Some precinct names may reflect updated July 1, 2025 boundaries per SB2768.
                    Confirm the complete enrolled bill text at billstatus.ls.state.ms.us for the
                    final precinct list where the published bill text was truncated.
                  </p>
                </div>
              </details>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Electoral Dynamics */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              A Diverse District
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Subdistrict 11-2 brings together two very different communities under one judicial seat —
              creating a district that demands a judge who understands both.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="p-6 sm:p-8 bg-cream rounded-2xl h-full">
                <h3 className="font-heading text-xl font-bold text-forest mb-3">Rural Leake County</h3>
                <ul className="space-y-3 font-body text-charcoal-light text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0 mt-2" />
                    Small-town and agricultural community centered on Carthage
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0 mt-2" />
                    Multi-generational families with deep ties to the land
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0 mt-2" />
                    Strong church and community networks
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0 mt-2" />
                    Estate, property, and family law cases are deeply personal
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="p-6 sm:p-8 bg-cream rounded-2xl h-full">
                <h3 className="font-heading text-xl font-bold text-amber mb-3">Suburban Madison County</h3>
                <ul className="space-y-3 font-body text-charcoal-light text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-2" />
                    High-growth suburban corridor — one of Mississippi&apos;s fastest-growing areas
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-2" />
                    Young professional families, business owners, and retirees
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-2" />
                    Diverse racial and demographic mix
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-2" />
                    Custody, divorce, and estate complexity driven by dual-income households and blended families
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Rhonda Knows This District */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6 leading-tight">
                Rhonda Knows<br />
                <span className="text-amber">This District</span>
              </h2>
              <p className="font-body text-charcoal-light text-lg leading-relaxed mb-4">
                For nearly four decades, Rhonda C. Cooper has practiced law across Leake and Madison counties.
                She knows the communities, the families, and the challenges they face.
              </p>
              <p className="font-body text-charcoal-light text-lg leading-relaxed mb-4">
                From the courthouse in Carthage to the courtrooms of Canton, from the families
                in Madison and Ridgeland to the rural communities of southwestern Madison County —
                Rhonda has represented real people with real stakes.
              </p>
              <p className="font-body text-charcoal-light text-lg leading-relaxed">
                Her roots in this district are not political. They are personal and professional.
                And she will bring that connection to the bench.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-forest rounded-2xl text-center text-white">
                  <p className="font-heading text-3xl font-bold text-amber mb-1">~40</p>
                  <p className="font-body text-cream/80 text-sm">Years Practicing in This District</p>
                </div>
                <div className="p-6 bg-white rounded-2xl text-center shadow-sm">
                  <p className="font-heading text-3xl font-bold text-forest mb-1">2</p>
                  <p className="font-body text-charcoal-light text-sm">Counties in Subdistrict 11-2</p>
                </div>
                <div className="p-6 bg-white rounded-2xl text-center shadow-sm">
                  <p className="font-heading text-3xl font-bold text-forest mb-1">100K+</p>
                  <p className="font-body text-charcoal-light text-sm">Residents in the Subdistrict</p>
                </div>
                <div className="p-6 bg-forest rounded-2xl text-center text-white">
                  <p className="font-heading text-xl font-bold text-amber mb-1">Nov 3</p>
                  <p className="font-body text-cream/80 text-sm">Election Day 2026</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SB2768 Notice */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="p-6 bg-cream rounded-2xl border-l-4 border-mauve">
              <h3 className="font-heading text-lg font-bold text-forest mb-2">About SB2768</h3>
              <p className="font-body text-charcoal-light text-sm leading-relaxed">
                Senate Bill 2768 restructured Mississippi&apos;s Chancery Court districts into subdistricts.
                The 11th Chancery Court District was divided to create Subdistrict 11-2,
                which includes all of Leake County and designated Madison County precincts using
                July 1, 2025 precinct boundaries. This is a <strong className="text-forest">nonpartisan judicial election</strong> under
                the Nonpartisan Judicial Election Act (Sections 23-15-974 through 23-15-985).
                The candidate must be a resident of the 11th District by qualifying date.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-forest via-forest-dark to-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-80 h-80 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Every Community in This District<br />
              <span className="text-amber">Deserves a Fair Judge</span>
            </h2>
            <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
              From Leake County to Madison County — justice should be the same in every courtroom.
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
                className="px-8 py-4 border-2 border-cream/30 text-cream text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all"
              >
                Volunteer Across the District
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
