"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SocialShare from "@/components/SocialShare";
import EmailSignup from "@/components/EmailSignup";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Rhonda C. Cooper Qualifies for Chancery Judge, 11th District, Place 2",
    date: "2026",
    category: "Campaign",
    excerpt:
      "Attorney Rhonda C. Cooper has officially qualified as a candidate for Chancery Judge in Mississippi's 11th Chancery Court District, Place 2, covering Madison, Leake, Holmes, and Yazoo counties.",
    content:
      "With over 25 years of legal experience in civil rights, probate, family law, and criminal defense, Cooper brings a depth of experience directly aligned with the jurisdiction of Chancery Court. Her campaign is built on three pillars: Responsibility, Compassion, and Competency.",
  },
  {
    id: 2,
    title: "Campaign Launches 'Know Your Court' Voter Education Initiative",
    date: "2026",
    category: "Education",
    excerpt:
      "RCC for Chancery 2026 is launching a voter education initiative to help residents of the 11th Chancery District understand what Chancery Court does and why their vote matters.",
    content:
      "Most voters don't know what Chancery Court handles until they need it. This initiative aims to educate voters across all four counties about divorce, custody, estate, and guardianship proceedings — the matters that directly impact families.",
  },
  {
    id: 3,
    title: "Community Forums Planned Across All Four Counties",
    date: "Coming Soon",
    category: "Events",
    excerpt:
      "The campaign is planning a series of community forums in Madison, Leake, Holmes, and Yazoo counties to connect with voters and discuss the importance of judicial accountability.",
    content:
      "Dates and locations will be announced soon. These forums will be open to all community members and will focus on the role of Chancery Court, voter rights, and the importance of this election.",
  },
];

const CATEGORIES = ["All", "Campaign", "Education", "Events", "Press"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews =
    activeCategory === "All"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((n) => n.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            News & Updates
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Campaign<br />
            <span className="text-amber">News</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Stay informed about the campaign, upcoming events, and important updates
            from across the 11th Chancery District.
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-forest text-white"
                      : "bg-white text-charcoal-light hover:bg-cream-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Articles */}
            <div className="lg:col-span-2 space-y-6">
              {filteredNews.length > 0 ? (
                filteredNews.map((item, i) => (
                  <ScrollReveal key={item.id} delay={i * 100}>
                    <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover-lift">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-sage/30 text-forest text-xs font-body font-bold rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs font-body text-charcoal-light">{item.date}</span>
                      </div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-forest mb-3">
                        {item.title}
                      </h2>
                      <p className="font-body text-charcoal-light leading-relaxed mb-3">
                        {item.excerpt}
                      </p>
                      <p className="font-body text-charcoal-light text-sm leading-relaxed mb-4">
                        {item.content}
                      </p>
                      <SocialShare title={item.title} description={item.excerpt} />
                    </article>
                  </ScrollReveal>
                ))
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center">
                  <p className="font-body text-charcoal-light">
                    No news items in this category yet. Check back soon!
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-forest mb-4">
                    Get Campaign Updates
                  </h3>
                  <p className="font-body text-charcoal-light text-sm mb-4">
                    Sign up to receive news, event announcements, and campaign updates directly to your inbox.
                  </p>
                  <EmailSignup />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-forest rounded-2xl p-6 text-white">
                  <h3 className="font-heading text-lg font-bold mb-3">Press Inquiries</h3>
                  <p className="font-body text-cream/80 text-sm leading-relaxed mb-4">
                    Members of the media can reach the campaign for interviews, statements,
                    or press materials.
                  </p>
                  <p className="font-body text-cream/60 text-sm">
                    RCC for Chancery 2026<br />
                    P.O. Box 74<br />
                    Tougaloo, MS 39174
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
