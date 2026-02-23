import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileDonateBar from "@/components/MobileDonateBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rhonda C. Cooper for Chancery Judge | RCC for Chancery 2026",
  description:
    "Attorney Rhonda C. Cooper is running for Chancery Judge in Mississippi's 11th Chancery District. 25+ years of legal experience. Responsibility. Compassion. Competency.",
  keywords: [
    "Rhonda Cooper",
    "Chancery Judge",
    "Madison County",
    "Leake County",
    "Holmes County",
    "Yazoo County",
    "Mississippi",
    "11th Chancery District",
    "judicial election",
    "2026",
  ],
  openGraph: {
    title: "Rhonda C. Cooper for Chancery Judge",
    description:
      "25+ years of legal experience. A judge for every family. Vote November 3, 2026.",
    url: "https://www.rcc4judge.com",
    siteName: "RCC for Chancery 2026",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhonda C. Cooper for Chancery Judge",
    description:
      "25+ years of legal experience. A judge for every family. Vote November 3, 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileDonateBar />
      </body>
    </html>
  );
}
