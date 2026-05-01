import { NextResponse } from "next/server";
import { getAllDonations } from "@/lib/db";

export async function GET() {
  try {
    const donations = await getAllDonations();
    donations.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    return NextResponse.json({ donations });
  } catch (err) {
    console.error("Failed to fetch donations:", err);
    return NextResponse.json({ error: "Failed to fetch donations" }, { status: 500 });
  }
}
