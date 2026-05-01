"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error ?? "Login failed");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6F0]">
      <div className="w-full max-w-sm">
        <div className="bg-[#285238] rounded-2xl px-8 py-10 shadow-xl text-center mb-6">
          <div className="text-white text-2xl font-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>
            RCC4Judge
          </div>
          <div className="text-[#BBCE8A] text-sm tracking-widest uppercase">
            Campaign Admin
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md px-8 py-8 space-y-5"
        >
          <h1
            className="text-[#285238] text-xl font-semibold text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Sign In
          </h1>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#4A4A4A] mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full px-4 py-2.5 rounded-lg border border-[#EDE9DF] bg-[#F8F6F0] text-[#2C2C2C] text-sm focus:outline-none focus:ring-2 focus:ring-[#285238] focus:border-transparent"
              placeholder="Enter admin password"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#285238] hover:bg-[#1B3A2D] disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-xs text-[#939F5C] mt-6">
          Rhonda C. Cooper for Chancery Judge 2026
        </p>
      </div>
    </div>
  );
}
