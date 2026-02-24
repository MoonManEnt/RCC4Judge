import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// Shared rate limiters keyed by use-case
const limiters: Record<string, Ratelimit> = {};

function getLimiter(
  name: string,
  requests: number,
  window: `${number} ${"s" | "m" | "h" | "d"}`
): Ratelimit | null {
  const redis = getRedis();
  if (!redis) return null;

  if (!limiters[name]) {
    limiters[name] = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(requests, window),
      prefix: `rcc4judge:ratelimit:${name}`,
    });
  }
  return limiters[name];
}

/**
 * Check rate limit for a given identifier (typically IP).
 * Returns null if allowed, or a NextResponse if blocked.
 */
export async function checkRateLimit(
  request: Request,
  name: string,
  requests: number,
  window: `${number} ${"s" | "m" | "h" | "d"}`
): Promise<NextResponse | null> {
  const limiter = getLimiter(name, requests, window);
  if (!limiter) return null; // Redis not configured — allow through

  // Use IP or forwarded IP as identifier
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

  const { success, remaining, reset } = await limiter.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((reset - Date.now()) / 1000)),
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );
  }

  return null;
}

/**
 * Sanitize a string to prevent email header injection.
 * Strips carriage returns and newlines.
 */
export function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n]/g, "").trim();
}

/**
 * Basic email format validation.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

/**
 * Truncate a string to a maximum length.
 */
export function truncate(value: string, maxLength: number): string {
  return value.length > maxLength ? value.slice(0, maxLength) : value;
}
