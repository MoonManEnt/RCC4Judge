import Link from "next/link";
import Image from "next/image";
import EmailSignup from "@/components/EmailSignup";

const FOOTER_LINKS = [
  { href: "/about", label: "About Rhonda" },
  { href: "/why-rhonda", label: "Why Rhonda" },
  { href: "/know-your-court", label: "Know Your Court" },
  { href: "/the-record", label: "The Record" },
  { href: "/our-district", label: "Our District" },
  { href: "/endorsements", label: "Endorsements" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/voter-resources", label: "Voter Resources" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
  { href: "/qr", label: "QR Codes" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div>
            <Image
              src="/images/footer-logo.png"
              alt="Vote Cooper for Chancery Judge — Responsibility | Compassion | Competence"
              width={1080}
              height={1080}
              className="w-full max-w-xs brightness-0 invert mb-4"
            />
            <p className="text-cream/80 text-sm font-body leading-relaxed mt-2">
              11th Chancery Court District, Subdistrict 2<br />
              Leake County | Madison County
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-bold text-sage tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <nav className="grid grid-cols-3 gap-x-4 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/70 text-sm font-body hover:text-amber transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="font-body text-sm font-bold text-sage tracking-widest uppercase mb-4">
              Get Involved
            </h4>
            <p className="text-cream/80 text-sm font-body leading-relaxed mb-4">
              Every voice matters. Join the movement for fair, accountable justice in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-amber text-white text-sm font-bold font-body rounded-full hover:bg-amber-dark transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-cream/30 text-cream text-sm font-medium font-body rounded-full hover:bg-white/10 transition-colors"
              >
                Volunteer
              </Link>
            </div>
            <div className="mt-5">
              <p className="text-cream/70 text-xs font-body font-medium mb-2">Campaign Updates:</p>
              <EmailSignup />
            </div>
            <p className="text-cream/60 text-xs font-body mt-4">
              P.O. Box 74, Tougaloo, MS 39174
            </p>
          </div>
        </div>

        {/* Legal Disclaimer Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="text-center space-y-2">
            <p className="text-cream/40 text-[10px] font-body leading-relaxed">
              Paid for by RCC for Chancery 2026, P.O. Box 74, Tougaloo, MS 39174. Sotderia Griffin, Treasurer.
            </p>
            <p className="text-cream/40 text-xs font-body leading-relaxed">
              This communication was prepared and distributed by the Committee to Elect Rhonda C. Cooper.
              Approved by Rhonda C. Cooper, Candidate for Chancery Judge, 11th District, Subdistrict 2.
            </p>
            <p className="text-cream/40 text-xs font-body leading-relaxed">
              Contributions are not tax deductible. Mississippi law limits individual contributions to $2,500 per election cycle
              and corporate contributions to $1,000 per calendar year.
            </p>
            <p className="text-cream/30 text-xs font-body mt-4">
              Election Day: November 3, 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
