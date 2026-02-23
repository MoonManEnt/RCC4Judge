"use client";

import { useState } from "react";
import Link from "next/link";

const TIERS = [
  { id: "advocate", name: "Advocate", amount: 25, tagline: "Every voice matters.", icon: "🤝" },
  { id: "guardian", name: "Guardian", amount: 50, tagline: "Protecting what matters most.", icon: "🛡️" },
  { id: "steward", name: "Steward", amount: 100, tagline: "Responsible leadership starts here.", icon: "⚖️" },
  { id: "champion", name: "Champion", amount: 250, tagline: "Championing justice for every family.", icon: "🏆", popular: true },
  { id: "pillar", name: "Pillar", amount: 500, tagline: "A pillar of the community.", icon: "🏛️" },
  { id: "founder", name: "Founder", amount: 1000, tagline: "Founding a new chapter of justice.", icon: "✨" },
  { id: "legacy", name: "Legacy", amount: 2500, tagline: "Building generational justice.", icon: "👑" },
];

const IMPACT_MILESTONES = [
  { at: 25, label: "Reaches 50 voters via palm cards" },
  { at: 50, label: "Funds a week of targeted social media ads" },
  { at: 100, label: "Sponsors a community voter education event" },
  { at: 250, label: "Funds a full precinct mailer campaign" },
  { at: 500, label: "Powers a month of digital advertising" },
  { at: 1000, label: "Supports a major multi-county outreach push" },
  { at: 2500, label: "Fuels a complete GOTV mobilization effort" },
];

const LEGAL_AFFIRMATIONS = [
  "I am a United States citizen or permanent resident alien.",
  "I am not a foreign national.",
  "I understand this contribution is not tax deductible.",
  "These funds are from my own personal account (or authorized corporate account).",
  "I am aware of the contribution limits for Mississippi judicial races.",
  "I am making this contribution voluntarily.",
];

type Step = "choose" | "info" | "review";
type ContributorType = "individual" | "corporate";

export default function DonationPlatform() {
  const [step, setStep] = useState<Step>("choose");
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [contributorType, setContributorType] = useState<ContributorType>("individual");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "MS",
    zip: "",
    employer: "",
    occupation: "",
    corporateName: "",
    corporateAuthorizer: "",
  });

  const [affirmations, setAffirmations] = useState<boolean[]>(
    new Array(LEGAL_AFFIRMATIONS.length).fill(false)
  );

  const maxAmount = contributorType === "corporate" ? 1000 : 2500;

  const getAmount = (): number => {
    if (isCustom) {
      const val = parseInt(customAmount);
      return isNaN(val) ? 0 : Math.min(val, maxAmount);
    }
    const tier = TIERS.find((t) => t.id === selectedTier);
    return tier ? Math.min(tier.amount, maxAmount) : 0;
  };

  const amount = getAmount();

  const allAffirmed = affirmations.every(Boolean);
  const requiredFields = contributorType === "individual"
    ? ["firstName", "lastName", "email", "address", "city", "state", "zip", "employer", "occupation"]
    : ["firstName", "lastName", "email", "address", "city", "state", "zip", "corporateName", "corporateAuthorizer"];
  const formComplete = requiredFields.every((f) => formData[f as keyof typeof formData].trim() !== "");

  const activeImpacts = IMPACT_MILESTONES.filter((m) => amount >= m.at);
  const nextImpact = IMPACT_MILESTONES.find((m) => amount < m.at);

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);

    // Record the donation
    try {
      await fetch("/api/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          type: contributorType,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          recurring: isRecurring,
        }),
      });
    } catch {
      // Tracking failure should not block the donation flow
    }

    // Stripe integration will go here
    alert(
      `Thank you for your ${isRecurring ? "monthly " : ""}contribution of $${amount.toLocaleString()} to RCC for Chancery 2026! Stripe payment processing will be integrated here.`
    );
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Support the Campaign
          </h1>
          <p className="text-cream/80 font-body text-lg max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Your contribution fuels the movement for fair, accountable justice in the
            11th Chancery District. Every dollar makes a difference.
          </p>
          {/* Canon 5 Notice */}
          <div className="mt-6 p-4 bg-white/10 rounded-xl max-w-xl mx-auto animate-fade-in-up stagger-3">
            <p className="text-cream/70 text-xs font-body leading-relaxed">
              Per Mississippi Code of Judicial Conduct Canon 5, judicial candidates may not personally solicit
              campaign contributions. All contributions are solicited by and made payable to the
              campaign committee: <strong className="text-cream">RCC for Chancery 2026</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Step Indicator */}
      <div className="bg-white border-b border-cream-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {[
              { key: "choose" as Step, label: "Choose Level", num: 1 },
              { key: "info" as Step, label: "Your Information", num: 2 },
              { key: "review" as Step, label: "Review & Confirm", num: 3 },
            ].map((s, i) => (
              <div key={s.key} className="flex items-center gap-2 sm:gap-4">
                {i > 0 && <div className="w-8 sm:w-12 h-px bg-cream-dark" />}
                <button
                  onClick={() => {
                    if (s.key === "choose") setStep("choose");
                    if (s.key === "info" && amount > 0) setStep("info");
                    if (s.key === "review" && amount > 0 && formComplete) setStep("review");
                  }}
                  className={`flex items-center gap-2 text-sm font-body transition-colors ${
                    step === s.key
                      ? "text-forest font-semibold"
                      : "text-charcoal-light/50"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      step === s.key
                        ? "bg-forest text-white"
                        : "bg-cream-dark text-charcoal-light/50"
                    }`}
                  >
                    {s.num}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* STEP 1: Choose Level */}
            {step === "choose" && (
              <div className="space-y-6">
                {/* Contributor Type Toggle */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-forest mb-4">Contributor Type</h3>
                  <div className="flex rounded-xl bg-cream overflow-hidden">
                    <button
                      onClick={() => setContributorType("individual")}
                      className={`flex-1 py-3 text-sm font-body font-semibold transition-all ${
                        contributorType === "individual"
                          ? "bg-forest text-white"
                          : "text-charcoal-light hover:bg-cream-dark"
                      }`}
                    >
                      Individual
                    </button>
                    <button
                      onClick={() => setContributorType("corporate")}
                      className={`flex-1 py-3 text-sm font-body font-semibold transition-all ${
                        contributorType === "corporate"
                          ? "bg-forest text-white"
                          : "text-charcoal-light hover:bg-cream-dark"
                      }`}
                    >
                      Corporate
                    </button>
                  </div>
                  <p className="text-mauve text-xs font-body mt-3">
                    {contributorType === "individual"
                      ? "Individual/PAC limit: $2,500 per election cycle (MS §23-15-1021)"
                      : "Corporate limit: $1,000 per calendar year (MS §97-13-15)"}
                  </p>
                </div>

                {/* Tier Selection */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-forest mb-4">Select Your Level</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TIERS.filter((t) => t.amount <= maxAmount).map((tier) => (
                      <button
                        key={tier.id}
                        onClick={() => {
                          setSelectedTier(tier.id);
                          setIsCustom(false);
                        }}
                        className={`relative p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                          selectedTier === tier.id && !isCustom
                            ? "border-forest bg-forest/5 shadow-md"
                            : "border-cream-dark hover:border-forest/30"
                        }`}
                      >
                        {tier.popular && (
                          <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-amber text-white text-[10px] font-bold font-body rounded-full">
                            POPULAR
                          </span>
                        )}
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tier.icon}</span>
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-heading text-xl font-bold text-forest">
                                ${tier.amount.toLocaleString()}
                              </span>
                              <span className="font-body text-sm text-mauve">{tier.name}</span>
                            </div>
                            <p className="text-xs font-body text-charcoal-light mt-0.5">{tier.tagline}</p>
                          </div>
                        </div>
                      </button>
                    ))}

                    {/* Custom Amount */}
                    <button
                      onClick={() => {
                        setIsCustom(true);
                        setSelectedTier(null);
                      }}
                      className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                        isCustom
                          ? "border-forest bg-forest/5 shadow-md"
                          : "border-cream-dark hover:border-forest/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💚</span>
                        <div>
                          <span className="font-heading text-xl font-bold text-forest">Custom</span>
                          <p className="text-xs font-body text-charcoal-light mt-0.5">Choose your own amount</p>
                        </div>
                      </div>
                    </button>
                  </div>

                  {isCustom && (
                    <div className="mt-4">
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-lg text-charcoal-light">$</span>
                        <input
                          type="number"
                          min="1"
                          max={maxAmount}
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder={`Enter amount (max $${maxAmount.toLocaleString()})`}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-cream-dark font-body text-lg text-forest focus:border-forest focus:outline-none"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Recurring Toggle */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-forest">Make it Monthly</h3>
                      <p className="text-sm font-body text-charcoal-light mt-1">
                        Recurring monthly donations provide steady support through Election Day.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsRecurring(!isRecurring)}
                      className={`w-14 h-8 rounded-full transition-colors flex items-center px-1 ${
                        isRecurring ? "bg-forest" : "bg-cream-dark"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${
                          isRecurring ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={() => amount > 0 && setStep("info")}
                  disabled={amount === 0}
                  className={`w-full py-4 rounded-xl font-body font-bold text-lg transition-all ${
                    amount > 0
                      ? "bg-forest text-white hover:bg-forest-dark shadow-md hover:shadow-lg"
                      : "bg-cream-dark text-charcoal-light/40 cursor-not-allowed"
                  }`}
                >
                  {amount > 0
                    ? `Continue with $${amount.toLocaleString()}${isRecurring ? "/month" : ""}`
                    : "Select a donation level to continue"}
                </button>
              </div>
            )}

            {/* STEP 2: Your Information */}
            {step === "info" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-forest mb-4">Your Information</h3>
                  <p className="text-xs font-body text-mauve mb-6">
                    Mississippi campaign finance law requires the following information for all contributions.
                    {amount > 200 && " Contributions over $200 require employer and occupation disclosure."}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="First Name" value={formData.firstName} onChange={(v) => setFormData({ ...formData, firstName: v })} required />
                    <InputField label="Last Name" value={formData.lastName} onChange={(v) => setFormData({ ...formData, lastName: v })} required />
                    <InputField label="Email" type="email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} required />
                    <InputField label="Phone" type="tel" value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} />
                    <div className="sm:col-span-2">
                      <InputField label="Street Address" value={formData.address} onChange={(v) => setFormData({ ...formData, address: v })} required />
                    </div>
                    <InputField label="City" value={formData.city} onChange={(v) => setFormData({ ...formData, city: v })} required />
                    <div className="grid grid-cols-2 gap-4">
                      <InputField label="State" value={formData.state} onChange={(v) => setFormData({ ...formData, state: v })} required />
                      <InputField label="ZIP Code" value={formData.zip} onChange={(v) => setFormData({ ...formData, zip: v })} required />
                    </div>

                    {contributorType === "individual" ? (
                      <>
                        <InputField label="Employer" value={formData.employer} onChange={(v) => setFormData({ ...formData, employer: v })} required />
                        <InputField label="Occupation" value={formData.occupation} onChange={(v) => setFormData({ ...formData, occupation: v })} required />
                      </>
                    ) : (
                      <>
                        <InputField label="Corporate/Business Name" value={formData.corporateName} onChange={(v) => setFormData({ ...formData, corporateName: v })} required />
                        <InputField label="Authorized By (Name & Title)" value={formData.corporateAuthorizer} onChange={(v) => setFormData({ ...formData, corporateAuthorizer: v })} required />
                      </>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep("choose")}
                    className="flex-1 py-4 rounded-xl font-body font-semibold text-forest bg-cream-dark hover:bg-cream transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => formComplete && setStep("review")}
                    disabled={!formComplete}
                    className={`flex-1 py-4 rounded-xl font-body font-bold text-lg transition-all ${
                      formComplete
                        ? "bg-forest text-white hover:bg-forest-dark shadow-md"
                        : "bg-cream-dark text-charcoal-light/40 cursor-not-allowed"
                    }`}
                  >
                    Review Contribution
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Review & Confirm */}
            {step === "review" && (
              <div className="space-y-6">
                {/* Summary */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-forest mb-4">Review Your Contribution</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-cream-dark">
                      <span className="font-body text-charcoal-light">Amount</span>
                      <span className="font-heading text-xl font-bold text-forest">
                        ${amount.toLocaleString()}{isRecurring && <span className="text-sm text-mauve font-body">/month</span>}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-cream-dark">
                      <span className="font-body text-charcoal-light">Type</span>
                      <span className="font-body font-semibold text-forest capitalize">{contributorType}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-cream-dark">
                      <span className="font-body text-charcoal-light">Name</span>
                      <span className="font-body font-semibold text-forest">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-cream-dark">
                      <span className="font-body text-charcoal-light">Email</span>
                      <span className="font-body text-forest">{formData.email}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-body text-charcoal-light">Address</span>
                      <span className="font-body text-forest text-right">{formData.address}, {formData.city}, {formData.state} {formData.zip}</span>
                    </div>
                  </div>
                </div>

                {/* Legal Affirmations */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-forest mb-4">Legal Affirmations</h3>
                  <p className="text-xs font-body text-mauve mb-4">
                    Federal and state law require the following affirmations. Please confirm each statement.
                  </p>
                  <div className="space-y-3">
                    {LEGAL_AFFIRMATIONS.map((text, i) => (
                      <label key={i} className="flex items-start gap-3 cursor-pointer group">
                        <div className="flex-shrink-0 mt-0.5">
                          <input
                            type="checkbox"
                            checked={affirmations[i]}
                            onChange={() => {
                              const next = [...affirmations];
                              next[i] = !next[i];
                              setAffirmations(next);
                            }}
                            className="w-5 h-5 rounded border-cream-dark text-forest focus:ring-forest cursor-pointer"
                          />
                        </div>
                        <span className="font-body text-sm text-charcoal-light leading-relaxed group-hover:text-charcoal">
                          {text}
                        </span>
                      </label>
                    ))}
                  </div>
                  {contributorType === "corporate" && (
                    <label className="flex items-start gap-3 cursor-pointer group mt-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <input type="checkbox" checked={true} readOnly className="w-5 h-5 rounded border-cream-dark text-forest" />
                      </div>
                      <span className="font-body text-sm text-charcoal-light leading-relaxed">
                        I am authorized to make this contribution on behalf of <strong>{formData.corporateName}</strong>.
                      </span>
                    </label>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep("info")}
                    className="flex-1 py-4 rounded-xl font-body font-semibold text-forest bg-cream-dark hover:bg-cream transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!allAffirmed || submitting}
                    className={`flex-1 py-4 rounded-xl font-body font-bold text-lg transition-all ${
                      allAffirmed && !submitting
                        ? "bg-amber text-white hover:bg-amber-dark shadow-lg hover:shadow-xl hover:scale-[1.01]"
                        : "bg-cream-dark text-charcoal-light/40 cursor-not-allowed"
                    }`}
                  >
                    {submitting ? "Processing..." : `Confirm $${amount.toLocaleString()}${isRecurring ? "/month" : ""} Contribution`}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Amount Display */}
            <div className="bg-forest rounded-2xl p-6 text-white sticky top-28">
              <p className="text-sage text-xs font-body font-medium tracking-widest uppercase mb-2">
                Your Contribution
              </p>
              <p className="font-heading text-4xl font-bold text-white">
                ${amount.toLocaleString()}
                {isRecurring && <span className="text-lg text-cream/60 font-body">/month</span>}
              </p>

              {/* Impact Meter */}
              {amount > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-amber text-xs font-body font-bold tracking-widest uppercase mb-3">
                    Your Impact
                  </p>
                  <div className="space-y-2">
                    {activeImpacts.map((m, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0 mt-1.5" />
                        <span className="text-cream/80 text-xs font-body leading-relaxed">{m.label}</span>
                      </div>
                    ))}
                    {nextImpact && (
                      <div className="flex items-start gap-2.5 opacity-40">
                        <div className="w-1.5 h-1.5 rounded-full border border-amber/50 flex-shrink-0 mt-1.5" />
                        <span className="text-cream/50 text-xs font-body italic leading-relaxed">
                          At ${nextImpact.at.toLocaleString()}: {nextImpact.label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Canon 5 */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-cream/50 text-[10px] font-body leading-relaxed">
                  Contributions are solicited by RCC for Chancery 2026 and not by the candidate personally,
                  in compliance with Mississippi Code of Judicial Conduct Canon 5.
                </p>
              </div>
            </div>

            {/* Why Donate */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-heading text-base font-bold text-forest mb-3">
                Why Your Contribution Matters
              </h4>
              <p className="text-sm font-body text-charcoal-light leading-relaxed">
                This campaign is funded entirely by people like you — community members who believe
                in fair, accountable justice. Your contribution helps us reach every voter in Madison,
                Leake and Madison counties.
              </p>
            </div>

            {/* Paid For By */}
            <div className="text-center">
              <p className="text-xs font-body text-mauve/50 leading-relaxed">
                Paid for by RCC for Chancery 2026<br />
                P.O. Box 74, Tougaloo, MS 39174
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-body font-medium text-charcoal-light mb-1.5">
        {label} {required && <span className="text-amber">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-charcoal focus:border-forest focus:outline-none transition-colors bg-white"
      />
    </div>
  );
}
