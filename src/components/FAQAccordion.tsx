"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Chancery Court?",
    answer: "Chancery Court in Mississippi handles domestic relations (divorce, custody, child support), estates and wills, guardianship, property disputes, mental health commitments, and other equity matters. It is one of the most personal courts because its decisions directly shape families' futures.",
  },
  {
    question: "What district does this election cover?",
    answer: "Under SB2768, the 11th Chancery Court District has been divided into subdistricts. Subdistrict 11-2 covers all of Leake County and specific precincts in Madison County — including the city of Madison, much of Ridgeland, Canton, Highland Colony, Lake Caroline, Gluckstadt, and surrounding communities. This is the seat Rhonda Cooper is running for.",
  },
  {
    question: "When is Election Day?",
    answer: "Election Day is November 3, 2026. Mississippi judicial elections are nonpartisan — all registered voters in Subdistrict 11-2 (Leake County and designated Madison County precincts) can vote regardless of party affiliation.",
  },
  {
    question: "How is this race different from a regular political race?",
    answer: "Judicial races in Mississippi are nonpartisan by law. Candidates do not run under a party label. Under Canon 5 of the Mississippi Code of Judicial Conduct, judicial candidates have specific restrictions on campaign conduct, including that they cannot personally solicit campaign contributions.",
  },
  {
    question: "What are Rhonda Cooper's qualifications?",
    answer: "Rhonda C. Cooper is a licensed Mississippi attorney with over 25 years of legal experience in the exact areas Chancery Court handles — family law, probate, estates, civil rights, and criminal defense. She has practiced across Leake and Madison counties throughout her career.",
  },
  {
    question: "How can I contribute to the campaign?",
    answer: "You can contribute online through our donation page. Mississippi law limits individual contributions to $2,500 per election cycle and corporate contributions to $1,000 per calendar year. All contributions go to RCC for Chancery 2026, not to the candidate personally. Please note that campaign contributions are not tax deductible.",
  },
  {
    question: "Can I volunteer?",
    answer: "Absolutely! We need volunteers for door-to-door canvassing, phone banking, event support, social media outreach, yard sign distribution, voter rides to polls, house parties, and church and community outreach. Visit our volunteer page to sign up.",
  },
  {
    question: "Are campaign contributions tax deductible?",
    answer: "No. Contributions to political campaigns are not tax deductible on federal or state income taxes. This is true for all political donations in the United States, regardless of the office, party, or candidate. The IRS explicitly excludes political contributions from the charitable deduction.",
  },
  {
    question: "Who is the current judge in this seat?",
    answer: "The current occupant of the seat now designated as Subdistrict 2 on the 11th Chancery Court has held the position for over 23 years. Rhonda Cooper believes that after more than two decades, the families of this district deserve a choice — and accountability on the bench.",
  },
  {
    question: "How can I stay updated on the campaign?",
    answer: "Sign up for email updates on our website, follow the campaign on social media, or visit our events page for upcoming community forums and meet-and-greets across Leake and Madison counties.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left group"
          >
            <span className="font-body font-semibold text-forest text-sm sm:text-base pr-4 group-hover:text-forest-dark transition-colors">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-charcoal-light flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`faq-content ${openIndex === i ? "open" : ""}`}>
            <div>
              <div className="px-5 pb-5 pt-0">
                <p className="font-body text-charcoal-light text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
