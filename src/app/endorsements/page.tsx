import ScrollReveal from "@/components/ScrollReveal";
import EndorsementForm from "@/components/EndorsementForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Endorsement",
  description:
    "Submit your endorsement of Rhonda C. Cooper for Chancery Judge in the 11th Chancery District, Subdistrict 2.",
};

export default function EndorsementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-sage rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sage text-sm font-body font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Voices of Support
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Submit Your<br />
            <span className="text-amber">Endorsement</span>
          </h1>
          <p className="text-cream/80 font-body text-lg sm:text-xl max-w-2xl mt-4 leading-relaxed animate-fade-in-up stagger-2">
            If you believe in accountability, fairness, and competence on the Chancery bench,
            we&apos;d be honored to have your endorsement.
          </p>
        </div>
      </section>

      {/* Endorsement Submission Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <EndorsementForm />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Every Voice Counts
          </h2>
          <p className="text-cream/80 font-body text-lg mb-8 max-w-xl mx-auto">
            Your endorsement shows the community that Rhonda Cooper has earned the trust
            of the people she will serve.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-white text-lg font-bold font-body rounded-full hover:bg-amber-dark transition-all"
          >
            Support the Campaign
          </Link>
        </div>
      </section>
    </>
  );
}
