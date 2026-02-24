import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ElectionCountdown from "@/components/ElectionCountdown";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voter Resources | RCC for Chancery 2026",
  description:
    "Everything you need to vote in the 2026 Chancery Judge election. Registration info, absentee voting steps, polling locations, and key dates for Leake and Madison counties (Subdistrict 11-2).",
};

const KEY_DATES = [
  { date: "September 19, 2026", event: "Absentee Voting Begins", note: "In-person absentee voting opens at your County Circuit Clerk's office (45 days before Election Day)" },
  { date: "October 5, 2026", event: "Voter Registration Deadline", note: "Register at least 30 days before Election Day — by mail or in person" },
  { date: "October 31, 2026", event: "In-Person Absentee Voting Ends", note: "Last day at your Circuit Clerk's office (Saturday before Election Day, by noon)" },
  { date: "November 3, 2026", event: "Election Day", note: "Polls open 7:00 AM – 7:00 PM. If you're in line by 7 PM, you vote." },
];

const ABSENTEE_QUALIFICATIONS = [
  "You will be away from your county on Election Day for any reason",
  "You are required to be at work during the entire time polls are open",
  "You are 65 years of age or older",
  "You have a temporary or permanent physical disability",
  "You are a student or teacher whose duties require absence from your county",
  "You are a caregiver for a hospitalized person more than 50 miles away",
];

const ABSENTEE_STEPS = [
  {
    step: "1",
    title: "Confirm Your Eligibility",
    description: "Mississippi requires a qualifying reason to vote absentee. Review the list above to confirm you qualify.",
  },
  {
    step: "2",
    title: "Visit or Contact Your Circuit Clerk",
    description: "For in-person absentee voting, visit your County Circuit Clerk's office Monday–Friday, 8 AM – 5 PM, starting September 19, 2026. For mail-in absentee, request an application from your Clerk.",
  },
  {
    step: "3",
    title: "Cast Your Ballot",
    description: "In-person: vote at the Clerk's office. By mail: complete your ballot, mail it back (must be postmarked on or before Election Day), and it must be received within 5 business days after the election.",
  },
];

const VOTER_ID_TYPES = [
  "Mississippi driver's license (including Digital ID)",
  "Driver's license from any U.S. state",
  "U.S. passport or passport card",
  "Government employee ID card",
  "Student photo ID from an accredited Mississippi college or university",
  "U.S. military ID",
  "Mississippi firearms license",
  "Tribal photo ID",
  "Free Mississippi Voter ID Card (available from your Circuit Clerk)",
];

const COUNTY_INFO = [
  {
    name: "Madison County",
    seat: "Canton, MS",
    circuitClerk: "Office of the Circuit Clerk",
    address: "128 W. North St., Canton, MS 39046",
  },
  {
    name: "Leake County",
    seat: "Carthage, MS",
    circuitClerk: "Office of the Circuit Clerk",
    address: "Courthouse Square, Carthage, MS 39051",
  },
];

export default function VoterResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-sage rounded-full blur-3xl" />
        </div>

        {/* Faded background — MS Votes team */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[55%] hidden lg:block pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 80%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 80%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src="/images/voter-resources/ms-votes-team.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.15] mix-blend-luminosity"
            sizes="55vw"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Be Prepared to Vote
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Voter<br />
            <span className="text-amber">Resources</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Everything you need to make your voice heard on November 3, 2026.
            Registration, absentee voting, ID requirements, and polling locations — all in one place.
          </p>
        </div>
      </section>

      {/* Countdowns */}
      <section className="py-14 bg-forest-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Registration Deadline Countdown */}
            <div className="text-center">
              <p className="text-amber text-sm font-body font-bold tracking-widest uppercase mb-4">
                Registration Deadline: October 5, 2026
              </p>
              <ElectionCountdown targetDate={new Date("2026-10-05T23:59:59-06:00")} />
              <p className="text-sage text-sm font-body mt-4">Register at least 30 days before Election Day</p>
            </div>

            {/* Election Day Countdown */}
            <div className="text-center">
              <p className="text-cream text-sm font-body font-bold tracking-widest uppercase mb-4">
                Election Day: November 3, 2026
              </p>
              <ElectionCountdown />
              <p className="text-sage text-sm font-body mt-4">Polls open 7:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Timeline */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Key Dates to Remember
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Mark these dates on your calendar. Every deadline matters.
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {KEY_DATES.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 hover-lift">
                  <div className="flex-shrink-0">
                    <div className="px-4 py-2 bg-amber/10 rounded-xl">
                      <p className="font-heading text-base font-bold text-amber whitespace-nowrap">{item.date}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-forest">{item.event}</h3>
                    <p className="font-body text-charcoal-light text-sm">{item.note}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Register to Vote */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <p className="text-amber font-body font-semibold text-sm tracking-widest uppercase mb-3">
                Step One
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6">
                Register to Vote
              </h2>
              <div className="space-y-4 font-body text-charcoal-light leading-relaxed">
                <p>
                  You must be registered at least <strong className="text-forest">30 days before the election</strong>.
                  The deadline for the November 3, 2026 election is <strong className="text-forest">October 5, 2026</strong>.
                </p>
                <p>
                  Mississippi does not currently offer online voter registration for new voters. You can register
                  <strong className="text-forest"> in person</strong> at your County Circuit Clerk&apos;s office or any
                  Department of Public Safety location, or <strong className="text-forest">by mail</strong> using the
                  official application form.
                </p>
                <div className="space-y-3 mt-6">
                  <h3 className="font-heading text-lg font-bold text-forest">Eligibility Requirements:</h3>
                  <ul className="space-y-2">
                    {[
                      "Be a U.S. citizen",
                      "Be a resident of Mississippi and your county for at least 30 days",
                      "Be at least 18 years old by Election Day",
                      "Not have been convicted of certain disenfranchising felonies (unless pardoned or rights restored)",
                    ].map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-forest rounded-2xl p-8 text-white">
                <h3 className="font-heading text-2xl font-bold mb-2">Ready to Register?</h3>
                <p className="font-body text-cream/80 text-sm leading-relaxed mb-6">
                  Use the official Mississippi Secretary of State resources to get registered, check your
                  registration status, or download a mail-in registration form.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://www.sos.ms.gov/elections-voting/voter-registration-information"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-5 py-4 bg-amber text-white font-bold font-body rounded-xl hover:bg-amber-dark transition-all hover:scale-[1.01] group"
                  >
                    <span>Register to Vote</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                  <a
                    href="https://www.sos.ms.gov/yall-vote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-5 py-4 bg-white/10 text-cream font-semibold font-body rounded-xl hover:bg-white/20 transition-all group"
                  >
                    <span>Check Registration Status</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
                <p className="text-cream/50 text-xs font-body mt-4">
                  Links go to the official Mississippi Secretary of State website.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Early / Absentee Voting */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="text-amber font-body font-semibold text-sm tracking-widest uppercase mb-3">
              Step Two
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Can&apos;t Vote on Election Day?
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-3xl mx-auto">
              Mississippi does not have traditional &ldquo;early voting,&rdquo; but you may be eligible to vote
              absentee — either in person at your Circuit Clerk&apos;s office or by mail. Here&apos;s how it works.
            </p>
          </ScrollReveal>

          {/* Who Qualifies */}
          <div className="max-w-5xl mx-auto mb-12">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-forest mb-4">
                  Who Qualifies for Absentee Voting?
                </h3>
                <p className="font-body text-charcoal-light text-sm mb-5 leading-relaxed">
                  You may vote absentee if any of the following apply to you:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ABSENTEE_QUALIFICATIONS.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-cream/60 rounded-xl">
                      <div className="w-6 h-6 bg-amber/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-body text-charcoal-light text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* How to Vote Absentee — Steps */}
          <div className="max-w-5xl mx-auto mb-12">
            <ScrollReveal>
              <h3 className="font-heading text-xl font-bold text-forest mb-6 text-center">
                How to Vote Absentee — Step by Step
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ABSENTEE_STEPS.map((item, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm h-full hover-lift">
                    <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center mb-4">
                      <span className="font-heading text-lg font-bold text-white">{item.step}</span>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-forest mb-2">{item.title}</h4>
                    <p className="font-body text-charcoal-light text-sm leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Absentee CTA */}
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <a
                href="https://www.sos.ms.gov/absentee-voting-information"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white text-lg font-bold font-body rounded-full shadow-lg hover:bg-forest-dark transition-all hover:scale-[1.02]"
              >
                Learn More About Absentee Voting
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <p className="text-charcoal-light text-xs font-body mt-3">
                Official Mississippi Secretary of State absentee voting page
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Find Your Polling Place */}
      <section className="py-20 bg-forest">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="text-sage text-sm font-body font-semibold tracking-widest uppercase mb-3">
                Step Three
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                Find Your <span className="text-amber">Polling Place</span>
              </h2>
              <p className="text-cream/80 font-body text-lg leading-relaxed mb-4">
                Know where to go before Election Day. Mississippi&apos;s official tools let you look up your
                assigned polling location, preview your sample ballot, and verify your registration — all in one place.
              </p>
              <p className="text-cream/60 font-body text-sm leading-relaxed mb-2">
                Have questions? Call the Elections Answerline:
              </p>
              <p className="text-amber font-body font-bold text-lg mb-2">
                1-800-829-6786
              </p>
              <p className="text-cream/50 font-body text-xs">
                or email ElectionsAnswers@sos.ms.gov
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-4">
                <a
                  href="https://www.sos.ms.gov/elections-voting/polling-place-locator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-5 bg-amber text-white font-bold font-body rounded-2xl hover:bg-amber-dark transition-all hover:scale-[1.01] group shadow-lg"
                >
                  <div>
                    <span className="text-lg">Find My Polling Place</span>
                    <p className="text-white/80 text-xs font-normal mt-0.5">Look up your assigned voting location</p>
                  </div>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="https://myelectionday.sos.state.ms.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-5 bg-white/10 text-cream font-bold font-body rounded-2xl hover:bg-white/20 transition-all group"
                >
                  <div>
                    <span className="text-lg">My Election Day Portal</span>
                    <p className="text-cream/60 text-xs font-normal mt-0.5">Sample ballot, track absentee ballot, view officeholders</p>
                  </div>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="https://www.sos.ms.gov/yall-vote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-5 bg-white/10 text-cream font-bold font-body rounded-2xl hover:bg-white/20 transition-all group"
                >
                  <div>
                    <span className="text-lg">Y&apos;all Vote Portal</span>
                    <p className="text-cream/60 text-xs font-normal mt-0.5">Mississippi&apos;s comprehensive voter information hub</p>
                  </div>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Voter ID */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <p className="text-amber font-body font-semibold text-sm tracking-widest uppercase mb-3">
                What to Bring
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-6">
                Voter ID Requirements
              </h2>
              <p className="font-body text-charcoal-light leading-relaxed mb-6">
                Mississippi requires a <strong className="text-forest">valid photo ID</strong> to vote in person.
                Your photo ID may be expired up to 10 years and still be accepted. If you don&apos;t have any form
                of accepted photo ID, you can get a <strong className="text-forest">free Mississippi Voter ID Card</strong> from
                your County Circuit Clerk&apos;s office.
              </p>
              <div className="p-4 bg-amber/10 rounded-xl">
                <p className="font-body text-sm text-forest leading-relaxed">
                  <strong>Don&apos;t have an ID on Election Day?</strong> You can still cast an affidavit
                  (provisional) ballot. You&apos;ll then have 5 business days to present a valid photo ID to
                  your Circuit Clerk&apos;s office for your vote to count.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-cream rounded-2xl p-6 sm:p-8">
                <h3 className="font-heading text-xl font-bold text-forest mb-4">Accepted Forms of Photo ID</h3>
                <div className="space-y-2">
                  {VOTER_ID_TYPES.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <p className="font-body text-charcoal-light text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <a
                    href="https://www.sos.ms.gov/voter-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-forest font-body font-semibold text-sm hover:text-amber transition-colors"
                  >
                    Full voter ID details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* County Clerk Info */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
              Your County Clerk&apos;s Office
            </h2>
            <p className="text-charcoal-light font-body text-lg max-w-2xl mx-auto">
              Your Circuit Clerk handles voter registration, absentee ballot requests, and polling location
              information. Contact them directly for any voting questions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {COUNTY_INFO.map((county, i) => (
              <ScrollReveal key={county.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover-lift h-full">
                  <h3 className="font-heading text-lg font-bold text-forest mb-1">{county.name}</h3>
                  <p className="font-body text-amber text-sm font-medium mb-3">County Seat: {county.seat}</p>
                  <p className="font-body text-charcoal-light text-sm">{county.circuitClerk}</p>
                  <p className="font-body text-charcoal-light text-sm">{county.address}</p>
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
              Your Vote. Your Court. <span className="text-amber">Your Future.</span>
            </h2>
            <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
              Register today. Mark November 3rd. And help us spread the word across
              Leake and Madison counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.sos.ms.gov/elections-voting/voter-registration-information"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full shadow-lg hover:bg-amber-dark transition-all hover:scale-[1.02]"
              >
                Register to Vote Now
              </a>
              <Link
                href="/volunteer"
                className="px-8 py-4 border-2 border-cream/30 text-cream text-lg font-medium font-body rounded-full hover:bg-white/10 transition-all"
              >
                Help Get Out the Vote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
