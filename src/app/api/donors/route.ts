import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const BASE_DONORS = 750;
const KV_KEY = "rcc4judge:donor_count";
const DONATIONS_KEY = "rcc4judge:donations";

function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// GET: return current donor count
export async function GET() {
  const redis = getRedis();

  if (!redis) {
    // KV not configured — return base count
    return NextResponse.json({ count: BASE_DONORS, live: false });
  }

  const increment = (await redis.get<number>(KV_KEY)) ?? 0;
  return NextResponse.json({ count: BASE_DONORS + increment, live: true });
}

// POST: record a donation and increment count
export async function POST(request: Request) {
  const redis = getRedis();

  if (!redis) {
    return NextResponse.json(
      { error: "Donation tracking not configured" },
      { status: 503 }
    );
  }

  const body = await request.json();
  const { amount, type, name, email, recurring } = body;

  // Record the donation with timestamp
  const donation = {
    amount,
    type,
    name,
    email,
    recurring: recurring ?? false,
    status: "captured",
    timestamp: new Date().toISOString(),
  };

  // Increment donor count and store donation record
  const [newCount] = await Promise.all([
    redis.incr(KV_KEY),
    redis.lpush(DONATIONS_KEY, JSON.stringify(donation)),
  ]);

  return NextResponse.json({
    count: BASE_DONORS + newCount,
    donation: { ...donation, id: newCount },
  });
}
