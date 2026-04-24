"use client";

const ENDORSEMENTS = [
  {
    quote:
      "Rhonda Cooper has the experience, the temperament, and the heart to serve our community with distinction on the Chancery bench.",
    name: "Community Leader",
    title: "Madison County",
  },
  {
    quote:
      "Our families deserve a judge who understands the real impact of every decision. Rhonda is that judge.",
    name: "Faith Leader",
    title: "Leake County",
  },
  {
    quote:
      "I've watched Rhonda practice law for decades. Her integrity is beyond question. She will be an outstanding Chancellor.",
    name: "Attorney",
    title: "11th Chancery District",
  },
  {
    quote:
      "Rhonda's commitment to fairness and accountability is exactly what our Chancery Court needs.",
    name: "Civic Leader",
    title: "Madison County",
  },
  {
    quote:
      "She listens. She cares. And she knows the law. That's the kind of judge our district deserves.",
    name: "Educator",
    title: "Leake County",
  },
  {
    quote:
      "I trust Rhonda Cooper to bring competence and compassion to the bench. Our community will be better for it.",
    name: "Business Owner",
    title: "Madison County",
  },
  {
    quote:
      "Rhonda's dedication to public service spans her entire career. She is ready for this role.",
    name: "Retired Judge",
    title: "11th Chancery District",
  },
  {
    quote:
      "Every family that walks into Chancery Court deserves a fair hearing. Rhonda will deliver that.",
    name: "Social Worker",
    title: "Leake County",
  },
  {
    quote:
      "Her legal skill is matched only by her empathy. Rhonda Cooper is the right choice for Chancellor.",
    name: "Attorney",
    title: "Madison County",
  },
  {
    quote:
      "We need leadership on the Chancery bench that reflects the values of our whole community. That's Rhonda.",
    name: "Community Organizer",
    title: "11th Chancery District",
  },
];

function EndorsementCard({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[380px] p-8 bg-cream rounded-2xl flex flex-col">
      <div className="text-amber mb-4">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-charcoal font-body text-sm leading-relaxed italic flex-grow mb-6">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-t border-cream-dark pt-4">
        <p className="font-body font-semibold text-forest text-sm">{name}</p>
        <p className="font-body text-mauve text-xs">{title}</p>
      </div>
    </div>
  );
}

export default function EndorsementTicker() {
  return (
    <div className="relative overflow-hidden group">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex gap-6 ticker-track group-hover:[animation-play-state:paused]">
        {/* First set */}
        {ENDORSEMENTS.map((e, i) => (
          <EndorsementCard key={`a-${i}`} {...e} />
        ))}
        {/* Duplicate for seamless loop */}
        {ENDORSEMENTS.map((e, i) => (
          <EndorsementCard key={`b-${i}`} {...e} />
        ))}
      </div>
    </div>
  );
}
