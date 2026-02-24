"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const HELP_OPTIONS = [
  "Door-to-Door Canvassing",
  "Phone Banking",
  "Event Setup & Support",
  "Social Media & Digital",
  "Yard Sign Distribution",
  "Drive Voters to Polls",
  "Host a House Party",
  "Church & Community Outreach",
];

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
  });
  const [helpWith, setHelpWith] = useState<string[]>([]);
  const [availability, setAvailability] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleHelp = (item: string) => {
    setHelpWith((prev) =>
      prev.includes(item) ? prev.filter((h) => h !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission backend will be connected
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sage rounded-full blur-3xl" />
        </div>

        {/* Faded background — Volunteers */}
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
            src="/images/volunteers-hero.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.15] mix-blend-luminosity"
            sizes="55vw"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Get Involved
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Be Part of the<br />
            <span className="text-amber">Movement</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            This campaign is powered by people. Your time, your voice, and your presence
            in the community are what will carry us to victory on November 3rd.
          </p>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <ScrollReveal>
              <div className="text-center p-12 bg-white rounded-3xl shadow-sm">
                <div className="w-20 h-20 mx-auto bg-sage/30 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-heading text-3xl font-bold text-forest mb-4">
                  Thank You for Joining Us!
                </h2>
                <p className="font-body text-charcoal-light text-lg max-w-md mx-auto">
                  We&apos;ve received your information and a member of the campaign team will reach out
                  to you soon. Together, we&apos;re building a movement for fair justice.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                  <h2 className="font-heading text-2xl font-bold text-forest mb-6">Your Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
                        First Name <span className="text-amber">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
                        Last Name <span className="text-amber">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
                        Email <span className="text-amber">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
                        ZIP Code <span className="text-amber">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* How Can You Help */}
              <ScrollReveal delay={100}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                  <h2 className="font-heading text-2xl font-bold text-forest mb-2">How Can You Help?</h2>
                  <p className="font-body text-sm text-charcoal-light mb-6">Select all that interest you.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {HELP_OPTIONS.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleHelp(option)}
                        className={`p-3 rounded-xl border-2 text-left text-sm font-body font-medium transition-all ${
                          helpWith.includes(option)
                            ? "border-forest bg-forest/5 text-forest"
                            : "border-cream-dark text-charcoal-light hover:border-forest/30"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                            helpWith.includes(option) ? "bg-forest text-white" : "bg-cream-dark"
                          }`}>
                            {helpWith.includes(option) && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                          {option}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Availability */}
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                  <h2 className="font-heading text-2xl font-bold text-forest mb-4">Availability</h2>
                  <div className="flex flex-wrap gap-3">
                    {["Weekdays", "Weekends", "Both", "Flexible"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setAvailability(opt)}
                        className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all ${
                          availability === opt
                            ? "bg-forest text-white"
                            : "bg-cream text-charcoal-light hover:bg-cream-dark"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Message */}
              <ScrollReveal delay={300}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                  <h2 className="font-heading text-2xl font-bold text-forest mb-4">Anything Else?</h2>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself, your connection to the community, or any special skills you'd like to contribute..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none resize-none"
                  />
                </div>
              </ScrollReveal>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-amber text-white text-lg font-bold font-body rounded-xl shadow-lg hover:bg-amber-dark hover:shadow-xl transition-all hover:scale-[1.01]"
              >
                Join the Team
              </button>

              <p className="text-center text-xs font-body text-mauve">
                Your information will only be used for campaign volunteer coordination.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
