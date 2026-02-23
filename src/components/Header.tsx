"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/why-rhonda", label: "Why Rhonda" },
  { href: "/endorsements", label: "Endorsements" },
  { href: "/events", label: "Events" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/nav-logo-light.png"
              alt="Vote Cooper For Chancery Judge"
              width={286}
              height={120}
              className={`h-12 sm:h-14 w-auto transition-all duration-300 ${
                scrolled ? "brightness-[0.3] saturate-150" : ""
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium font-body rounded-lg transition-colors duration-300 ${
                  scrolled
                    ? pathname === link.href
                      ? "text-forest bg-sage/30"
                      : "text-charcoal-light hover:text-forest hover:bg-cream-dark"
                    : pathname === link.href
                      ? "text-white bg-white/15"
                      : "text-cream/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-3 px-6 py-2.5 bg-amber text-white text-sm font-bold font-body rounded-full shadow-md hover:bg-amber-dark hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
            >
              DONATE
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/donate"
              className="px-4 py-2 bg-amber text-white text-xs font-bold font-body rounded-full shadow-md hover:bg-amber-dark transition-colors"
            >
              DONATE
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? "text-forest hover:bg-cream-dark" : "text-white hover:bg-white/10"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white lg:hidden animate-fade-in">
          <nav className="flex flex-col p-6 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-4 text-lg font-medium font-body rounded-xl transition-colors ${
                  pathname === link.href
                    ? "text-forest bg-sage/20"
                    : "text-charcoal hover:text-forest hover:bg-cream-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="mt-4 flex items-center justify-center px-6 py-4 bg-amber text-white text-lg font-bold font-body rounded-xl shadow-md hover:bg-amber-dark transition-colors"
            >
              DONATE NOW
            </Link>
            <div className="mt-8 pt-6 border-t border-cream-dark">
              <p className="text-xs text-mauve/60 font-body text-center leading-relaxed">
                Paid for by RCC for Chancery 2026
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
