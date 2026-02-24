"use client";

import { useState } from "react";
import Image from "next/image";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
  accent: "forest" | "amber" | "mauve" | "sage";
  logo?: string;
  logoAlt?: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "Millsaps",
    title: "The Scholar",
    description: "Bachelor of Science in Business Administration, Millsaps College",
    detail:
      "Before she ever stepped into a courtroom, Rhonda built her foundation at Millsaps College — one of Mississippi's most rigorous academic institutions. A degree in Business Administration gave her something many attorneys lack: fluency in the language of assets, contracts, and financial structures. The very language of Chancery Court. It wasn't just education. It was preparation disguised as ambition.",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    accent: "forest",
    logo: "/images/timeline/millsaps.png",
    logoAlt: "Millsaps College Crest",
  },
  {
    year: "Alabama",
    title: "The Juris Doctor",
    description: "J.D., University of Alabama School of Law",
    detail:
      "At the University of Alabama School of Law, Rhonda sharpened the legal mind that would serve Mississippi families for nearly four decades. While her classmates charted paths toward corporate boardrooms and big-firm partnerships, she was already drawn to something different — equity law, family disputes, the human side of justice. She didn't just earn a law degree. She discovered her calling.",
    icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z",
    accent: "amber",
    logo: "/images/timeline/alabama.png",
    logoAlt: "University of Alabama",
  },
  {
    year: "Practice",
    title: "The Advocate",
    description: "Nearly 40 years serving Mississippi families in equity law",
    detail:
      "For nearly four decades, Rhonda has practiced in the exact areas Chancery Court governs: estate planning and administration, domestic relations, real property, and contract negotiations. She hasn't observed these matters from the bench — she has lived them from the trenches. Sitting across from families in crisis. Drafting wills for parents trying to protect their children's future. Negotiating property divisions where a lifetime of work hangs in the balance. This isn't theory. This is forty years of practice.",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
    accent: "mauve",
    logo: "/images/timeline/midtown-law.png",
    logoAlt: "Midtown Law Office",
  },
  {
    year: "2012–17",
    title: "The Professor",
    description: "Clinical Assistant Professor & Pre-Law Advisor, Jackson State University",
    detail:
      "From 2012 to 2017, Rhonda returned to the classroom — not as a student, but as a mentor. As Clinical Assistant Professor and Pre-Law Advisor in the College of Liberal Arts at Jackson State University, she shaped the next generation of Mississippi attorneys. A two-time recipient of JSU's Creative Awards for Faculty and Staff and recognized in 2016 for excellence in teaching and advising, she didn't just teach law — she taught purpose. The students she mentored are now the attorneys, advocates, and community leaders carrying her influence forward.",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    accent: "forest",
    logo: "/images/timeline/jsu.png",
    logoAlt: "Jackson State University",
  },
  {
    year: "2018",
    title: "The Thought Leader",
    description: "Charles Koch Foundation Education Lecture, Mississippi Valley State University",
    detail:
      "When the Charles Koch Foundation selected its 2018 Education Lecture speaker at Mississippi Valley State University, they chose Rhonda C. Cooper. Her topic — 'Equal Justice Under Law: Implications of the Concept for American Citizens' — wasn't academic theater. It was a distillation of everything she had spent decades fighting for: the idea that justice isn't a privilege reserved for those who can afford it, but a constitutional promise owed to every citizen. That lecture wasn't just a speech. It was a thesis statement for her life's work.",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    accent: "sage",
    logo: "/images/timeline/mvsu.svg",
    logoAlt: "Mississippi Valley State University",
  },
  {
    year: "2022",
    title: "The Honoree",
    description: "Leader in Law, Mississippi Business Journal",
    detail:
      "In 2022, the Mississippi Business Journal recognized Rhonda C. Cooper as a Leader in Law — an honor reserved for attorneys whose impact extends beyond the courtroom and into the fabric of Mississippi's legal community. It was recognition not of a single case or a single moment, but of a career defined by consistency, integrity, and an unwavering commitment to the communities she serves. By the time the award was given, anyone paying attention already knew.",
    icon: "M16.5 18.75h-9m9 0a3 3 0 013 3h.75a.75.75 0 00.75-.75V21a.75.75 0 00-.75-.75m-9 0H6a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75h.75a3 3 0 013-3m-3.75-8.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM3 21a.75.75 0 01.75-.75h.75a3 3 0 013 3H6.75A.75.75 0 016 22.5 .75.75 0 015.25 21.75H4.5A.75.75 0 013.75 21zm16.5 0a.75.75 0 01.75-.75h.75a.75.75 0 00.75-.75V19.5a.75.75 0 00-.75-.75h-.75a3 3 0 00-3 3h.75a.75.75 0 01.75.75z",
    accent: "amber",
    logo: "/images/timeline/mbj.png",
    logoAlt: "Mississippi Business Journal",
  },
  {
    year: "2026",
    title: "The Candidate",
    description: "Qualified for Chancery Judge, 11th District, Subdistrict 2",
    detail:
      "After nearly four decades of preparation — not in title, but in practice — Rhonda C. Cooper officially qualified as a candidate for the 11th Chancery Court, Subdistrict 2. She isn't running because she wants a robe. She's running because after forty years of walking families through the most consequential moments of their lives, she knows what the bench demands. And she knows this district deserves someone who has earned it. Not by waiting. By working.",
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    accent: "amber",
  },
];

const ACCENT_CLASSES = {
  forest: {
    bg: "bg-forest",
    bgLight: "bg-forest/10",
    text: "text-forest",
    border: "border-forest",
    ring: "ring-forest/20",
  },
  amber: {
    bg: "bg-amber",
    bgLight: "bg-amber/10",
    text: "text-amber",
    border: "border-amber",
    ring: "ring-amber/20",
  },
  mauve: {
    bg: "bg-mauve",
    bgLight: "bg-mauve/10",
    text: "text-mauve",
    border: "border-mauve",
    ring: "ring-mauve/20",
  },
  sage: {
    bg: "bg-sage",
    bgLight: "bg-sage/10",
    text: "text-sage",
    border: "border-sage",
    ring: "ring-sage/20",
  },
};

export default function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(TIMELINE_EVENTS.length - 1);
  const active = TIMELINE_EVENTS[activeIndex];
  const colors = ACCENT_CLASSES[active.accent];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Year selector bar */}
      <div className="relative mb-12">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-cream-dark -translate-y-1/2 hidden sm:block" />

        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-2 sm:gap-0 relative">
          {TIMELINE_EVENTS.map((event, i) => {
            const eventColors = ACCENT_CLASSES[event.accent];
            const isActive = i === activeIndex;

            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="flex flex-col items-center gap-2 group relative z-10"
              >
                {/* Node */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden ${
                    isActive
                      ? `bg-white shadow-lg scale-110 ring-4 ${eventColors.ring}`
                      : "bg-white border-2 border-cream-dark hover:border-forest/40 hover:scale-105"
                  }`}
                >
                  {event.logo ? (
                    <Image
                      src={event.logo}
                      alt={event.logoAlt || event.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                    />
                  ) : (
                    <svg className={`w-6 h-6 ${isActive ? eventColors.text : "text-charcoal-light"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={event.icon} />
                    </svg>
                  )}
                </div>
                {/* Year label */}
                <span
                  className={`font-body text-xs sm:text-sm font-bold transition-colors duration-300 ${
                    isActive ? eventColors.text : "text-charcoal-light/60"
                  }`}
                >
                  {event.year}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active event detail card */}
      <div
        key={activeIndex}
        className={`bg-white rounded-3xl p-8 sm:p-10 shadow-lg border-t-4 ${colors.border} animate-fade-in-up`}
      >
        <div className="flex items-start gap-5 mb-6">
          {/* Logo in detail card */}
          {active.logo ? (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cream flex items-center justify-center flex-shrink-0 p-2">
              <Image
                src={active.logo}
                alt={active.logoAlt || active.title}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${colors.bgLight} flex items-center justify-center flex-shrink-0`}>
              <svg className={`w-8 h-8 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={active.icon} />
              </svg>
            </div>
          )}
          <div>
            <p className={`font-body text-xs font-bold tracking-[0.2em] uppercase ${colors.text} mb-1`}>
              {active.year}
            </p>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-forest">
              {active.title}
            </h3>
            <p className="font-body text-charcoal-light mt-1">{active.description}</p>
          </div>
        </div>

        <p className="font-body text-charcoal-light text-lg leading-relaxed">
          {active.detail}
        </p>

        {/* Navigation arrows */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-cream-dark">
          <button
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className={`flex items-center gap-2 font-body text-sm font-medium transition-colors ${
              activeIndex === 0
                ? "text-charcoal-light/30 cursor-not-allowed"
                : "text-forest hover:text-amber"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <div className="flex gap-1.5">
            {TIMELINE_EVENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? `${colors.bg} w-6` : "bg-cream-dark hover:bg-charcoal-light/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIndex(Math.min(TIMELINE_EVENTS.length - 1, activeIndex + 1))}
            disabled={activeIndex === TIMELINE_EVENTS.length - 1}
            className={`flex items-center gap-2 font-body text-sm font-medium transition-colors ${
              activeIndex === TIMELINE_EVENTS.length - 1
                ? "text-charcoal-light/30 cursor-not-allowed"
                : "text-forest hover:text-amber"
            }`}
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
