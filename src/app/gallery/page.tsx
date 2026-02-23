"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const GALLERY_SECTIONS = [
  {
    title: "Campaign Photos",
    description: "Photos from events, community forums, and campaign activities.",
    placeholders: 6,
    comingSoon: true,
  },
  {
    title: "Community Events",
    description: "Moments from across Madison, Leake, Holmes, and Yazoo counties.",
    placeholders: 4,
    comingSoon: true,
  },
];

const DOWNLOADABLE_MATERIALS = [
  {
    title: "Campaign Palm Card",
    description: "Printable palm card with key campaign information",
    type: "PDF",
    comingSoon: true,
  },
  {
    title: "Yard Sign Request",
    description: "Request a yard sign for your home or business",
    type: "Form",
    comingSoon: false,
    href: "/volunteer",
  },
  {
    title: "Social Media Graphics",
    description: "Share-ready graphics for Facebook, Instagram, and X",
    type: "ZIP",
    comingSoon: true,
  },
  {
    title: "Know Your Court Flyer",
    description: "Educational flyer about Chancery Court for community distribution",
    type: "PDF",
    comingSoon: true,
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Photos & Materials
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Campaign<br />
            <span className="text-amber">Gallery</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Photos from the campaign trail, community events, and downloadable materials
            to help spread the word.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {GALLERY_SECTIONS.map((section, sectionIdx) => (
            <div key={section.title} className={sectionIdx > 0 ? "mt-16" : ""}>
              <ScrollReveal>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest mb-2">
                  {section.title}
                </h2>
                <p className="font-body text-charcoal-light mb-6">{section.description}</p>
              </ScrollReveal>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: section.placeholders }).map((_, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="aspect-[4/3] bg-gradient-to-br from-forest/5 to-sage/10 rounded-2xl flex items-center justify-center hover-scale cursor-default">
                      <div className="text-center px-4">
                        <svg className="w-10 h-10 text-forest/20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                        <p className="text-forest/30 font-body text-xs">Photo Coming Soon</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Video Testimonials
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Hear from community members about why they support Rhonda Cooper for Chancery Judge.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Why I Support Rhonda",
              "What Chancery Court Means to My Family",
              "A Voice for Our Community",
            ].map((title, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-cream rounded-2xl overflow-hidden hover-lift">
                  <div className="aspect-video bg-gradient-to-br from-forest/10 to-forest/5 flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-forest ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="absolute bottom-3 left-3 text-forest/40 font-body text-xs">Coming Soon</p>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-base font-bold text-forest">{title}</h3>
                    <p className="font-body text-charcoal-light text-xs mt-1">Video testimonial coming soon</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Materials */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Campaign Materials
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Download and share campaign materials to help spread the word in your community.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DOWNLOADABLE_MATERIALS.map((material, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover-lift h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <span className="px-2 py-0.5 bg-sage/30 text-forest text-[10px] font-body font-bold rounded">
                      {material.type}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-forest mb-1">{material.title}</h3>
                  <p className="font-body text-charcoal-light text-sm flex-grow">{material.description}</p>
                  <div className="mt-4">
                    {material.comingSoon ? (
                      <span className="text-xs font-body text-mauve italic">Available soon</span>
                    ) : (
                      <Link
                        href={material.href || "#"}
                        className="text-sm font-body font-semibold text-forest hover:text-amber transition-colors"
                      >
                        Request Now &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Help Us Tell This Story
            </h2>
            <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Share campaign photos, record your own testimonial, or help distribute materials
              in your community.
            </p>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full shadow-lg hover:bg-amber-dark transition-all"
            >
              Get Involved
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
