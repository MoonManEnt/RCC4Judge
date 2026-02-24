import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const NEWSLETTER_KEY = "rcc4judge:newsletter_subscribers";

function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json(
      { error: "Service not available" },
      { status: 503 }
    );
  }

  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const email = (body.email ?? "").trim().toLowerCase();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Valid email address required" },
      { status: 400 }
    );
  }

  // Sorted set: score = timestamp, member = email
  // NX = only add if not already present (deduplication)
  await redis.zadd(NEWSLETTER_KEY, { nx: true }, { score: Date.now(), member: email });

  return NextResponse.json({ success: true });
}

export async function GET() {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ count: 0 });
  }
  const count = await redis.zcard(NEWSLETTER_KEY);
  return NextResponse.json({ count });
}
