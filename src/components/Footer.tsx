import Link from "next/link";
import Image from "next/image";
import EmailSignup from "@/components/EmailSignup";

const FOOTER_LINKS = [
  { href: "/message", label: "Her Message" },
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
        <div className="py-10 grid grid-cols-1 md:grid-cols-[240px_1fr_280px] gap-8 items-start">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/footer-logo.png"
              alt="Vote Cooper for Chancery Judge — Responsibility | Compassion | Competence"
              width={1080}
              height={1080}
              className="w-full max-w-[220px] brightness-0 invert"
            />
            <p className="text-cream/70 text-xs font-body leading-relaxed mt-3">
              11th Chancery Court District, Subdistrict 2<br />
              Leake County | Madison County
            </p>
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61588273444313"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-cream/70 hover:bg-[#1877F2] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/rcc4judge?igsh=dGM5emNqc3Ryc3pk&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-cream/70 hover:bg-[#E4405F] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-cream/70 hover:bg-charcoal hover:text-white transition-all"
                aria-label="TikTok"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs font-bold text-sage tracking-widest uppercase mb-3">
              Quick Links
            </h4>
            <nav className="grid grid-cols-3 gap-x-6 gap-y-1.5">
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
            <h4 className="font-body text-xs font-bold text-sage tracking-widest uppercase mb-3">
              Get Involved
            </h4>
            <p className="text-cream/80 text-sm font-body leading-relaxed mb-3">
              Every voice matters. Join the movement for fair, accountable justice in our community.
            </p>
            <div className="flex gap-2.5">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-5 py-2 bg-amber text-white text-sm font-bold font-body rounded-full hover:bg-amber-dark transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center px-5 py-2 border border-cream/30 text-cream text-sm font-medium font-body rounded-full hover:bg-white/10 transition-colors"
              >
                Volunteer
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-cream/70 text-xs font-body font-medium mb-1.5">Campaign Updates:</p>
              <EmailSignup />
            </div>
            <p className="text-cream/50 text-xs font-body mt-3">
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
