import type { Metadata } from "next";
import DonationPlatform from "@/components/DonationPlatform";

export const metadata: Metadata = {
  title: "Donate | Rhonda C. Cooper for Chancery Judge",
  description:
    "Support Rhonda C. Cooper's campaign for Chancery Judge. Every contribution helps bring accountability, compassion, and competence to the bench.",
};

export default function DonatePage() {
  return <DonationPlatform />;
}
