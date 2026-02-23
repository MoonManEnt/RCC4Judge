"use client";

import { useState } from "react";

export default function EmailSignup({ variant = "inline" }: { variant?: "inline" | "banner" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={`flex items-center gap-3 ${variant === "banner" ? "justify-center" : ""}`}>
        <div className="w-8 h-8 bg-sage/30 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-body text-sm text-forest font-semibold">
          You&apos;re on the list! We&apos;ll keep you updated.
        </p>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-5 py-3 rounded-full border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none bg-white"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-amber text-white font-bold font-body rounded-full hover:bg-amber-dark transition-colors shadow-md whitespace-nowrap"
        >
          Stay Updated
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="flex-1 px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-sm text-charcoal focus:border-forest focus:outline-none bg-white"
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-forest text-white font-bold font-body text-sm rounded-xl hover:bg-forest-dark transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
