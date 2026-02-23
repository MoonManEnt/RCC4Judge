import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our District | RCC for Chancery 2026",
  description:
    "Learn about the 11th Chancery Court District — Madison, Leake, Holmes, and Yazoo counties. The communities, the people, and why this election matters.",
};

const COUNTIES = [
  {
    name: "Madison County",
    seat: "Canton",
    population: "~115,000",
    description:
      "The most populous county in the district. Includes the city of Madison, parts of Ridgeland, and the county seat of Canton. A rapidly growing county with diverse suburban and rural communities.",
    highlights: [
      "Fastest growing county in Mississippi",
      "Major suburban communities near Jackson",
      "Mix of urban professionals and rural families",
      "Strong business and education infrastructure",
    ],
    color: "border-forest",
  },
  {
    name: "Leake County",
    seat: "Carthage",
    population: "~23,000",
    description:
      "A close-knit rural county with deep roots in agriculture, faith, and family. The Neshoba County Fair, just across the border, draws community connections from Leake as well.",
    highlights: [
      "Strong rural and agricultural community",
      "Rich cultural heritage and traditions",
      "Close community bonds through churches and schools",
      "Growing need for accessible legal services",
    ],
    color: "border-amber",
  },
  {
    name: "Holmes County",
    seat: "Lexington",
    population: "~17,000",
    description:
      "A historically significant county in the Mississippi Delta. Known for its civil rights legacy, agricultural roots, and resilient community spirit.",
    highlights: [
      "Deep civil rights history",
      "Agricultural and Delta heritage",
      "Communities need fair access to justice",
      "Historically underserved in judicial representation",
    ],
    color: "border-sage",
  },
  {
    name: "Yazoo County",
    seat: "Yazoo City",
    population: "~27,000",
    description:
      "Straddling the Delta and the Hills, Yazoo County is a place of rich history and strong community ties. From Yazoo City to the rural stretches, families here deserve a judge who understands their needs.",
    highlights: [
      "Gateway between Delta and Hill regions",
      "Rich literary and cultural history",
      "Diverse economic base",
      "Growing families seeking judicial accountability",
    ],
    color: "border-mauve",
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
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Four Counties, One Mission
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Our<br />
            <span className="text-amber">District</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            The 11th Chancery Court District spans four unique counties across central Mississippi —
            from the suburban growth of Madison to the Delta heritage of Holmes and Yazoo.
          </p>
        </div>
      </section>

      {/* District Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-cream rounded-3xl p-8 sm:p-12 text-center">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                {COUNTIES.map((county) => (
                  <div
                    key={county.name}
                    className={`p-4 bg-white rounded-xl border-l-4 ${county.color} text-left`}
                  >
                    <p className="font-heading text-lg font-bold text-forest">{county.name.replace(" County", "")}</p>
                    <p className="font-body text-xs text-charcoal-light">Pop. {county.population}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-charcoal-light max-w-lg mx-auto">
                The 11th Chancery Court District covers approximately 3,500 square miles and serves
                over 180,000 residents across Madison, Leake, Holmes, and Yazoo counties.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* County Details */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Our Four Counties
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Each county brings its own character, challenges, and needs to the 11th Chancery District.
              A judge who serves this district must understand them all.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {COUNTIES.map((county, i) => (
              <ScrollReveal key={county.name} delay={i * 100}>
                <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 ${county.color} hover-lift`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-heading text-2xl font-bold text-forest">{county.name}</h3>
                        <span className="px-3 py-1 bg-cream rounded-full text-xs font-body font-medium text-charcoal-light">
                          County Seat: {county.seat}
                        </span>
                      </div>
                      <p className="font-body text-charcoal-light leading-relaxed mb-4">
                        {county.description}
                      </p>
                    </div>
                    <div>
                      <p className="font-body text-xs font-bold text-mauve tracking-widest uppercase mb-3">Highlights</p>
                      <ul className="space-y-2">
                        {county.highlights.map((highlight, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-2" />
                            <span className="font-body text-sm text-charcoal-light">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rhonda Knows This District */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6 leading-tight">
                Rhonda Knows<br />
                <span className="text-amber">This District</span>
              </h2>
              <p className="font-body text-charcoal-light text-lg leading-relaxed mb-4">
                For over 25 years, Rhonda C. Cooper has practiced law across all four counties.
                She knows the communities, the families, and the challenges they face.
              </p>
              <p className="font-body text-charcoal-light text-lg leading-relaxed mb-4">
                From the courthouses in Canton, Carthage, Lexington, and Yazoo City,
                Rhonda has represented real people with real stakes — divorce, custody, estates,
                property disputes, and civil rights.
              </p>
              <p className="font-body text-charcoal-light text-lg leading-relaxed">
                Her roots in this district are not political. They are personal and professional.
                And she will bring that connection to the bench.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-forest rounded-2xl text-center text-white">
                  <p className="font-heading text-3xl font-bold text-amber mb-1">25+</p>
                  <p className="font-body text-cream/80 text-sm">Years Practicing in This District</p>
                </div>
                <div className="p-6 bg-cream rounded-2xl text-center">
                  <p className="font-heading text-3xl font-bold text-forest mb-1">4</p>
                  <p className="font-body text-charcoal-light text-sm">Counties Served</p>
                </div>
                <div className="p-6 bg-cream rounded-2xl text-center">
                  <p className="font-heading text-3xl font-bold text-forest mb-1">180K+</p>
                  <p className="font-body text-charcoal-light text-sm">Residents in the District</p>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-forest via-forest-dark to-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-80 h-80 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Every Corner of This District<br />
              <span className="text-amber">Deserves a Fair Judge</span>
            </h2>
            <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
              From Madison to Holmes, Leake to Yazoo — justice should be the same in every courtroom.
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
