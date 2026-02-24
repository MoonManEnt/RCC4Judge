"use client";

import { useEffect, useState } from "react";

const ELECTION_DATE = new Date("2026-11-03T07:00:00-06:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = ELECTION_DATE.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function ElectionCountdown({ variant = "full" }: { variant?: "full" | "compact" }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-3 justify-center">
        {["Days", "Hours", "Min", "Sec"].map((label) => (
          <div key={label} className="text-center">
            <div className="skeleton w-16 h-16 mb-1" />
            <span className="text-xs font-body text-charcoal-light/50">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-1.5 text-sm font-body font-semibold">
        <span className="text-amber">{timeLeft.days}</span>
        <span className="text-cream/60">days</span>
        <span className="text-amber">{String(timeLeft.hours).padStart(2, "0")}</span>
        <span className="text-cream/60">:</span>
        <span className="text-amber">{String(timeLeft.minutes).padStart(2, "0")}</span>
        <span className="text-cream/60">:</span>
        <span className="text-amber">{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {blocks.map((block) => (
        <div key={block.label} className="text-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-forest rounded-xl flex items-center justify-center pulse-glow">
            <span className="font-heading text-2xl sm:text-3xl font-bold text-white">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs font-body font-medium text-sage mt-1.5 block">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
