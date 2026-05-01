import { getAllDonations } from "@/lib/db";
import type { DonationRecord } from "@/lib/db";

function csvEscape(val: string | number | boolean): string {
  const s = String(val);
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Chicago",
    });
  } catch {
    return iso;
  }
}

const HEADERS = [
  "ID",
  "Date (CT)",
  "Donor Name",
  "Email",
  "Phone",
  "Address",
  "City",
  "State",
  "ZIP",
  "Amount ($)",
  "Tier",
  "Contributor Type",
  "Recurring",
  "Employer",
  "Occupation",
  "Corporate Name",
  "Corporate Authorizer",
];

function recordToRow(r: DonationRecord): string {
  return [
    r.id,
    formatDate(r.timestamp),
    r.donorName,
    r.email,
    r.phone,
    r.address,
    r.city,
    r.state,
    r.zip,
    r.amount,
    r.tierName,
    r.contributorType,
    r.isRecurring ? "Yes" : "No",
    r.employer,
    r.occupation,
    r.corporateName,
    r.corporateAuthorizer,
  ]
    .map(csvEscape)
    .join(",");
}

export async function GET() {
  try {
    const donations = await getAllDonations();
    donations.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    const lines = [HEADERS.join(","), ...donations.map(recordToRow)];
    const csv = lines.join("\r\n");

    const date = new Date().toISOString().slice(0, 10);
    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="rcc4judge-donations-${date}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("CSV download failed:", err);
    return new Response("Failed to generate report", { status: 500 });
  }
}
