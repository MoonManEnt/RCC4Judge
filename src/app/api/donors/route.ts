import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { checkRateLimit } from "@/lib/rate-limit";

const BASE_DONORS = 750;
const KV_KEY = "rcc4judge:donor_count";

function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// GET: return current donor count (public, rate-limited)
export async function GET(request: Request) {
  const rateLimitResponse = await checkRateLimit(request, "donors-get", 30, "60 s");
  if (rateLimitResponse) return rateLimitResponse;

  const redis = getRedis();

  if (!redis) {
    return NextResponse.json({ count: BASE_DONORS, live: false });
  }

  const increment = (await redis.get<number>(KV_KEY)) ?? 0;
  return NextResponse.json({ count: BASE_DONORS + increment, live: true });
}
