import Link from "next/link";
import Image from "next/image";
import EmailSignup from "@/components/EmailSignup";

const FOOTER_LINKS = [
  { href: "/about", label: "About Rhonda" },
  { href: "/voter-resources", label: "Voter Resources" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white pb-40 lg:pb-16">
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
                href="https://twitter.com/RCC4Judge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-cream/70 hover:bg-charcoal hover:text-white transition-all"
                aria-label="X"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
          </div>
        </div>

        {/* Legal Disclaimer Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="text-center space-y-2">
            <p className="text-cream/40 text-[10px] font-body leading-relaxed">
              Paid for by the Committee to Elect Rhonda C. Cooper Chancery Court Judge — Sotderia Griffin, Treasurer — 118 Bainbridge Crossing, Canton, MS 39046.
            </p>
            <p className="text-cream/40 text-xs font-body leading-relaxed">
              This communication was prepared and distributed by the Committee to Elect Rhonda C. Cooper Chancery Court Judge.
              Approved by Rhonda C. Cooper, Candidate for Chancery Judge, 11th Chancery District, Subdistrict 2.
            </p>
            <p className="text-cream/40 text-xs font-body leading-relaxed">
              Contributions are not tax deductible. Mississippi law limits individual contributions to $2,500 per election cycle
              and corporate contributions to $1,000 per calendar year.
            </p>
            <p className="text-cream/30 text-xs font-body mt-4">
              Election Day: <span className="election-date-glow">November 3, 2026</span>
            </p>
            <p className="text-cream/20 text-[10px] font-body mt-2">
              Music licensed under Creative Commons: Kevin MacLeod (incompetech.com) — CC BY 4.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
