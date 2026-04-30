export interface AuthNetConfig {
  loginId: string;
  transactionKey: string;
  endpoint: string;
  isSandbox: boolean;
}

export function getAuthNetConfig(): AuthNetConfig {
  const loginId = process.env.AUTHORIZENET_API_LOGIN_ID;
  const transactionKey = process.env.AUTHORIZENET_TRANSACTION_KEY;
  if (!loginId || !transactionKey) {
    throw new Error("Authorize.net credentials are not configured");
  }
  const isSandbox = process.env.AUTHORIZENET_SANDBOX === "true";
  return {
    loginId,
    transactionKey,
    isSandbox,
    endpoint: isSandbox
      ? "https://apitest.authorize.net/xml/v1/request.api"
      : "https://api.authorize.net/xml/v1/request.api",
  };
}

export async function callAuthNet(
  config: AuthNetConfig,
  payload: Record<string, unknown>
): Promise<Record<string, unknown>> {
  const res = await fetch(config.endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Authorize.net API error: ${res.status}`);
  const text = await res.text();
  return JSON.parse(text.replace(/^﻿/, "")) as Record<string, unknown>;
}
