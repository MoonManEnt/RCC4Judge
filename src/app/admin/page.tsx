"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { DonationRecord } from "@/lib/db";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Chicago",
    });
  } catch {
    return iso;
  }
}

function formatAmount(cents: number): string {
  return `$${cents.toLocaleString()}`;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [donations, setDonations] = useState<DonationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/donations")
      .then((r) => {
        if (r.status === 401) {
          router.push("/admin/login");
          return null;
        }
        return r.json();
      })
      .then((data) => {
        if (data) setDonations((data as { donations: DonationRecord[] }).donations ?? []);
      })
      .catch(() => setError("Failed to load donations."))
      .finally(() => setLoading(false));
  }, [router]);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const totalRaised = donations.reduce((sum, d) => sum + d.amount, 0);
  const recurringCount = donations.filter((d) => d.isRecurring).length;
  const corporateCount = donations.filter((d) => d.contributorType === "corporate").length;

  return (
    <div className="min-h-screen bg-[#F8F6F0]">
      {/* Header */}
      <header className="bg-[#285238] text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div>
          <div className="font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>
            RCC4Judge — Campaign Admin
          </div>
          <div className="text-[#BBCE8A] text-xs tracking-wide">
            Rhonda C. Cooper for Chancery Judge 2026
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/api/admin/download"
            className="bg-[#FFA21F] hover:bg-[#E08A00] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Download CSV
          </a>
          <button
            onClick={handleLogout}
            className="text-[#BBCE8A] hover:text-white text-sm transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Donations", value: donations.length.toString() },
            { label: "Total Raised", value: formatAmount(totalRaised) },
            { label: "Recurring", value: recurringCount.toString() },
            { label: "Corporate", value: corporateCount.toString() },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-xl shadow-sm px-5 py-4">
              <div className="text-[#939F5C] text-xs font-medium uppercase tracking-wide mb-1">
                {label}
              </div>
              <div
                className="text-[#285238] text-2xl font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#EDE9DF] flex items-center justify-between">
            <h2
              className="text-[#285238] font-semibold text-lg"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Donation Records
            </h2>
            <span className="text-[#939F5C] text-sm">{donations.length} records</span>
          </div>

          {loading && (
            <div className="px-6 py-12 text-center text-[#4A4A4A]">Loading…</div>
          )}

          {error && (
            <div className="px-6 py-12 text-center text-red-600">{error}</div>
          )}

          {!loading && !error && donations.length === 0 && (
            <div className="px-6 py-12 text-center text-[#939F5C]">
              No donations recorded yet.
            </div>
          )}

          {!loading && !error && donations.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F8F6F0] text-[#4A4A4A] text-xs font-semibold uppercase tracking-wide">
                    <th className="px-4 py-3 text-left whitespace-nowrap">Date (CT)</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Name</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Amount</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Tier</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Type</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Recurring</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Email</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Phone</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Address</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">City</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">State</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">ZIP</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Employer</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Occupation</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Corp. Name</th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">Corp. Authorizer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDE9DF]">
                  {donations.map((d) => (
                    <tr key={d.id} className="hover:bg-[#F8F6F0] transition-colors">
                      <td className="px-4 py-3 text-[#4A4A4A] whitespace-nowrap">
                        {formatDate(d.timestamp)}
                      </td>
                      <td className="px-4 py-3 font-medium text-[#2C2C2C] whitespace-nowrap">
                        {d.donorName}
                      </td>
                      <td className="px-4 py-3 font-semibold text-[#285238] whitespace-nowrap">
                        {formatAmount(d.amount)}
                      </td>
                      <td className="px-4 py-3 text-[#4A4A4A] whitespace-nowrap">{d.tierName}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            d.contributorType === "corporate"
                              ? "bg-[#5E4C5A] text-white"
                              : "bg-[#BBCE8A] text-[#285238]"
                          }`}
                        >
                          {d.contributorType}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {d.isRecurring ? (
                          <span className="text-[#285238] font-semibold">Yes</span>
                        ) : (
                          <span className="text-[#939F5C]">No</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-[#4A4A4A]">{d.email}</td>
                      <td className="px-4 py-3 text-[#4A4A4A] whitespace-nowrap">{d.phone}</td>
                      <td className="px-4 py-3 text-[#4A4A4A]">{d.address}</td>
                      <td className="px-4 py-3 text-[#4A4A4A] whitespace-nowrap">{d.city}</td>
                      <td className="px-4 py-3 text-[#4A4A4A]">{d.state}</td>
                      <td className="px-4 py-3 text-[#4A4A4A]">{d.zip}</td>
                      <td className="px-4 py-3 text-[#4A4A4A]">{d.employer}</td>
                      <td className="px-4 py-3 text-[#4A4A4A]">{d.occupation}</td>
                      <td className="px-4 py-3 text-[#4A4A4A]">{d.corporateName}</td>
                      <td className="px-4 py-3 text-[#4A4A4A]">{d.corporateAuthorizer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-[#939F5C] mt-6">
          All records are stored securely. For MS SOS campaign finance reporting, use Download CSV.
        </p>
      </main>
    </div>
  );
}
