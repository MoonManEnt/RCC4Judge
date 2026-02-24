"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "Failed to send message.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Contact the<br />
            <span className="text-amber">Campaign</span>
          </h1>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="font-heading text-2xl font-bold text-forest mb-6">Campaign Office</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-forest text-sm">Mailing Address</p>
                      <p className="font-body text-charcoal-light text-sm">
                        RCC for Chancery 2026<br />
                        P.O. Box 74<br />
                        Tougaloo, MS 39174
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-forest text-sm">Website</p>
                      <p className="font-body text-charcoal-light text-sm">www.rcc4judge.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-forest mb-3">Campaign Committee</h3>
                  <div className="space-y-2 font-body text-sm text-charcoal-light">
                    <p><span className="text-forest font-semibold">Committee:</span> RCC for Chancery 2026</p>
                    <p><span className="text-forest font-semibold">Treasurer:</span> On file with MS Secretary of State</p>
                    <p><span className="text-forest font-semibold">EIN:</span> 41-4342222</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <ScrollReveal>
                  <div className="text-center p-12 bg-white rounded-3xl shadow-sm">
                    <div className="w-20 h-20 mx-auto bg-sage/30 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-forest mb-4">Message Sent!</h2>
                    <p className="font-body text-charcoal-light text-lg max-w-md mx-auto">
                      Thank you for reaching out. A member of our campaign team will respond as soon as possible.
                    </p>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal>
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                    <h2 className="font-heading text-2xl font-bold text-forest mb-6">Send a Message</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
                            Your Name <span className="text-amber">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      </div>
                      <div>
                        <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
                          Subject <span className="text-amber">*</span>
                        </label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none bg-white"
                        >
                          <option value="">Select a subject...</option>
                          <option value="general">General Inquiry</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="endorsement">Endorsement</option>
                          <option value="donation">Donation Question</option>
                          <option value="media">Media / Press Inquiry</option>
                          <option value="event">Event Request</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
                          Message <span className="text-amber">*</span>
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none resize-none"
                        />
                      </div>
                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                          <p className="text-sm font-body text-red-700">{error}</p>
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-forest text-white text-lg font-bold font-body rounded-xl shadow-md hover:bg-forest-dark hover:shadow-lg transition-all disabled:opacity-60"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
