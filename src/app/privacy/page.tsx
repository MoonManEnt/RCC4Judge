import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RCC for Chancery 2026",
  description: "Privacy policy for the Rhonda C. Cooper for Chancery Judge campaign website.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white animate-fade-in-up">
            Privacy Policy
          </h1>
          <p className="text-cream/60 font-body text-sm mt-4">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm prose prose-lg max-w-none font-body text-charcoal-light">
            <h2 className="font-heading text-2xl font-bold text-forest">Introduction</h2>
            <p>
              RCC for Chancery 2026 (&ldquo;the Committee,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
              protecting the privacy of our supporters, donors, volunteers, and website visitors. This Privacy
              Policy explains how we collect, use, and safeguard your information when you visit
              www.rcc4judge.com.
            </p>

            <h2 className="font-heading text-2xl font-bold text-forest mt-8">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Donation Information:</strong> Name, address, email, phone, employer, occupation, and contribution amount. This information is required by Mississippi campaign finance law for all contributions.</li>
              <li><strong>Volunteer Information:</strong> Name, email, phone, zip code, availability, and areas of interest.</li>
              <li><strong>Contact Form Information:</strong> Name, email, and message content.</li>
              <li><strong>Automatically Collected Information:</strong> IP address, browser type, device information, and browsing behavior through cookies and analytics tools.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-forest mt-8">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and record campaign contributions in compliance with Mississippi election law</li>
              <li>To file required campaign finance reports with the Mississippi Secretary of State</li>
              <li>To communicate with you about campaign events, volunteer opportunities, and updates</li>
              <li>To coordinate volunteer activities</li>
              <li>To respond to your inquiries</li>
              <li>To improve our website and campaign outreach</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-forest mt-8">Campaign Finance Disclosure</h2>
            <p>
              Mississippi law requires campaign committees to report contributor information to the
              Mississippi Secretary of State. Contributions over $200 require disclosure of the
              contributor&apos;s name, address, employer, and occupation. This information becomes part
              of the public record as required by law.
            </p>

            <h2 className="font-heading text-2xl font-bold text-forest mt-8">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information, including
              SSL encryption for all data transmission, secure payment processing through third-party
              providers, and restricted access to personal data.
            </p>

            <h2 className="font-heading text-2xl font-bold text-forest mt-8">Third-Party Services</h2>
            <p>
              We may use third-party services for payment processing, email communications, and
              website analytics. These services have their own privacy policies governing the use of
              your information.
            </p>

            <h2 className="font-heading text-2xl font-bold text-forest mt-8">Your Rights</h2>
            <p>
              You may request to update or correct your personal information at any time by contacting
              us. Please note that certain information required by campaign finance law must be
              retained as part of our legal obligations.
            </p>

            <h2 className="font-heading text-2xl font-bold text-forest mt-8">Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              RCC for Chancery 2026<br />
              P.O. Box 74<br />
              Tougaloo, MS 39174
            </p>

            <div className="mt-10 pt-8 border-t border-cream-dark">
              <p className="text-xs text-mauve">
                Paid for by RCC for Chancery 2026, P.O. Box 74, Tougaloo, MS 39174.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
