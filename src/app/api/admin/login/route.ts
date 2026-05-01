import { NextResponse } from "next/server";
import { createSessionToken, COOKIE_NAME } from "@/lib/session";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!password || !secret) {
    return NextResponse.json({ error: "Admin not configured" }, { status: 503 });
  }

  if (typeof body.password !== "string" || body.password !== password) {
    await new Promise((r) => setTimeout(r, 500)); // timing-safe delay
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = await createSessionToken(secret);

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 86400,
  });
  return response;
}
