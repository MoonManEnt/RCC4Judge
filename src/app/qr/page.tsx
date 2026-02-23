"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const QR_PAGES = [
  { label: "Home Page", path: "/" },
  { label: "Donate", path: "/donate" },
  { label: "Volunteer", path: "/volunteer" },
  { label: "About Rhonda", path: "/about" },
  { label: "Know Your Court", path: "/know-your-court" },
  { label: "Voter Resources", path: "/voter-resources" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

const BASE_URL = "https://www.rcc4judge.com";

function getQRUrl(data: string, size: number = 300): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}&color=285238&bgcolor=F8F6F0&margin=2`;
}

export default function QRPage() {
  const [selectedPage, setSelectedPage] = useState("/donate");
  const [customUrl, setCustomUrl] = useState("");
  const [useCustom, setUseCustom] = useState(false);

  const targetUrl = useCustom && customUrl.trim()
    ? customUrl.trim()
    : `${BASE_URL}${selectedPage}`;

  const qrImageUrl = getQRUrl(targetUrl);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Campaign Tools
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            QR Code<br />
            <span className="text-amber">Generator</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            Generate QR codes for campaign materials, flyers, business cards, and yard signs.
            Point people directly to any page on the campaign website.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Controls */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="font-heading text-xl font-bold text-forest mb-6">Choose a Page</h2>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {QR_PAGES.map((page) => (
                    <button
                      key={page.path}
                      onClick={() => {
                        setSelectedPage(page.path);
                        setUseCustom(false);
                      }}
                      className={`p-3 rounded-xl border-2 text-left text-sm font-body font-medium transition-all ${
                        selectedPage === page.path && !useCustom
                          ? "border-forest bg-forest/5 text-forest"
                          : "border-cream-dark text-charcoal-light hover:border-forest/30"
                      }`}
                    >
                      {page.label}
                    </button>
                  ))}
                </div>

                <div className="border-t border-cream-dark pt-6">
                  <h3 className="font-body text-sm font-semibold text-forest mb-3">Or enter a custom URL:</h3>
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => {
                      setCustomUrl(e.target.value);
                      setUseCustom(true);
                    }}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-cream-dark font-body text-sm text-charcoal focus:border-forest focus:outline-none"
                  />
                </div>

                <div className="mt-6 p-4 bg-cream rounded-xl">
                  <p className="font-body text-xs text-charcoal-light">
                    <strong className="text-forest">Target URL:</strong><br />
                    <span className="break-all">{targetUrl}</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* QR Preview */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm text-center">
                <h2 className="font-heading text-xl font-bold text-forest mb-6">Your QR Code</h2>

                <div className="bg-cream rounded-2xl p-6 inline-block mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={qrImageUrl}
                    alt={`QR code for ${targetUrl}`}
                    width={250}
                    height={250}
                    className="mx-auto"
                  />
                </div>

                <div className="space-y-3">
                  <a
                    href={qrImageUrl}
                    download={`rcc4judge-qr-${selectedPage.replace(/\//g, "-") || "home"}.png`}
                    className="block w-full py-3 bg-forest text-white font-bold font-body rounded-xl hover:bg-forest-dark transition-colors"
                  >
                    Download QR Code
                  </a>
                  <a
                    href={getQRUrl(targetUrl, 1000)}
                    download={`rcc4judge-qr-${selectedPage.replace(/\//g, "-") || "home"}-hd.png`}
                    className="block w-full py-3 bg-cream text-forest font-bold font-body rounded-xl hover:bg-cream-dark transition-colors"
                  >
                    Download High Resolution (1000px)
                  </a>
                </div>

                <p className="font-body text-xs text-mauve mt-4">
                  QR codes use campaign brand colors. Right-click to save or use the download buttons above.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Tips */}
          <ScrollReveal delay={100}>
            <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-forest mb-4">How to Use QR Codes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "Print Materials", desc: "Add to flyers, palm cards, and brochures to link directly to your donation or volunteer page." },
                  { title: "Yard Signs & Banners", desc: "Include on yard signs so passersby can instantly visit the campaign website." },
                  { title: "Events & Tables", desc: "Display at campaign events, church visits, and community tables for easy signup." },
                ].map((tip, i) => (
                  <div key={i}>
                    <h4 className="font-body font-semibold text-forest text-sm mb-1">{tip.title}</h4>
                    <p className="font-body text-charcoal-light text-xs leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
