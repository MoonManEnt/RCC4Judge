import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Rhonda C. Cooper for Chancery Judge",
  description:
    "Upcoming campaign events for Rhonda C. Cooper for Chancery Judge. Community forums, meet-and-greets, and volunteer opportunities across the 11th Chancery District.",
};

const UPCOMING_EVENTS = [
  {
    title: "Campaign Launch Event",
    date: "Coming Soon",
    time: "TBA",
    location: "Madison County",
    description:
      "Join us for the official launch of Rhonda C. Cooper's campaign for Chancery Judge. Meet Rhonda, hear her vision, and learn how you can get involved.",
    type: "Launch",
  },
  {
    title: "Know Your Chancery Court — Community Forum",
    date: "Coming Soon",
    time: "TBA",
    location: "Canton, MS",
    description:
      "An educational community forum about what Chancery Court handles — divorce, custody, estates, guardianship — and why your vote for Chancery Judge matters.",
    type: "Forum",
  },
  {
    title: "Coffee with the Campaign",
    date: "Coming Soon",
    time: "TBA",
    location: "Rotating Locations",
    description:
      "Informal coffee meetups across Leake and Madison counties. Come talk to the campaign team, ask questions, and share your concerns about justice in our district.",
    type: "Community",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Campaign Events
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Join Us Across<br />
            <span className="text-amber">the District</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            From Carthage to Canton, Madison to Ridgeland — we&apos;re showing up across every
            community in Subdistrict 11-2. Come be part of the movement.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPCOMING_EVENTS.map((event, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
                  {/* Type Badge */}
                  <div className="px-6 pt-6">
                    <span className="inline-block px-3 py-1 bg-sage/30 text-forest text-xs font-body font-bold rounded-full">
                      {event.type}
                    </span>
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="font-heading text-xl font-bold text-forest mb-3">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm font-body text-charcoal-light">
                        <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        {event.date} {event.time !== "TBA" && `at ${event.time}`}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-body text-charcoal-light">
                        <svg className="w-4 h-4 text-amber flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <p className="font-body text-charcoal-light text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="px-4 py-2.5 bg-cream rounded-xl text-center">
                      <p className="font-body text-sm font-semibold text-forest">Details Coming Soon</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Stay Updated CTA */}
          <ScrollReveal className="mt-16">
            <div className="text-center p-10 bg-white rounded-3xl shadow-sm">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest mb-3">
                Don&apos;t Miss an Event
              </h2>
              <p className="font-body text-charcoal-light text-lg mb-6 max-w-md mx-auto">
                Sign up as a volunteer to receive event updates and campaign news directly.
              </p>
              <Link
                href="/volunteer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-forest text-white font-body font-bold rounded-full hover:bg-forest-dark transition-colors"
              >
                Get Event Updates
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
