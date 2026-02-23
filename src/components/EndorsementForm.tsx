"use client";

import { useState } from "react";

export default function EndorsementForm() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    organization: "",
    county: "",
    email: "",
    phone: "",
    quote: "",
    permission: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.permission) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-12 bg-cream rounded-3xl">
        <div className="w-20 h-20 mx-auto bg-sage/30 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-forest mb-3">Thank You!</h3>
        <p className="font-body text-charcoal-light max-w-md mx-auto">
          Your endorsement has been submitted. A member of our team will review it and may reach
          out to confirm details before publishing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
            Your Name <span className="text-amber">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
            Title / Role
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Pastor, Attorney, Business Owner"
            className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
            Organization (optional)
          </label>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
            County <span className="text-amber">*</span>
          </label>
          <select
            required
            value={formData.county}
            onChange={(e) => setFormData({ ...formData, county: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none bg-white"
          >
            <option value="">Select county...</option>
            <option value="Madison">Madison County</option>
            <option value="Leake">Leake County</option>
            <option value="Other">Other</option>
          </select>
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
            className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
            Phone (optional)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none bg-white"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
          Your Endorsement Statement <span className="text-amber">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.quote}
          onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
          placeholder="Why do you support Rhonda Cooper for Chancery Judge?"
          className="w-full px-4 py-3 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none resize-none bg-white"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer mb-6">
        <input
          type="checkbox"
          checked={formData.permission}
          onChange={(e) => setFormData({ ...formData, permission: e.target.checked })}
          className="w-5 h-5 rounded border-cream-dark text-forest focus:ring-forest cursor-pointer mt-0.5"
        />
        <span className="font-body text-sm text-charcoal-light leading-relaxed">
          I give permission for my name and endorsement to be published on the campaign website
          and in campaign materials. I understand this endorsement is voluntary and represents my
          personal or organizational opinion.
        </span>
      </label>

      <button
        type="submit"
        disabled={!formData.permission}
        className={`w-full py-4 font-bold font-body rounded-xl transition-all ${
          formData.permission
            ? "bg-forest text-white hover:bg-forest-dark shadow-md"
            : "bg-cream-dark text-charcoal-light/40 cursor-not-allowed"
        }`}
      >
        Submit Endorsement
      </button>
    </form>
  );
}
