"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileDonateBar() {
  const pathname = usePathname();

  // Don't show on the donate page itself
  if (pathname === "/donate") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-forest/95 backdrop-blur-sm border-t border-forest-light/20 px-4 py-3 safe-area-pb">
      <Link
        href="/donate"
        className="flex items-center justify-center w-full py-3 bg-amber text-white text-base font-bold font-body rounded-full shadow-lg hover:bg-amber-dark transition-all active:scale-[0.98]"
      >
        Support Rhonda — Donate Now
      </Link>
    </div>
  );
}
