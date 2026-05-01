import { Redis } from "@upstash/redis";

export interface DonationRecord {
  id: string;
  timestamp: string;
  donorName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  amount: number;
  tierName: string;
  contributorType: "individual" | "corporate";
  isRecurring: boolean;
  employer: string;
  occupation: string;
  corporateName: string;
  corporateAuthorizer: string;
}

export function getRedis(): Redis {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) throw new Error("Redis not configured");
  return new Redis({ url, token });
}

export async function saveDonation(record: DonationRecord): Promise<void> {
  const redis = getRedis();
  await redis.lpush("donations:ids", record.id);
  await redis.set(`donation:${record.id}`, JSON.stringify(record));
}

export async function getAllDonations(): Promise<DonationRecord[]> {
  const redis = getRedis();
  const ids = await redis.lrange<string>("donations:ids", 0, -1);
  if (!ids || ids.length === 0) return [];
  const records = await Promise.all(
    ids.map(async (id) => {
      const raw = await redis.get<string>(`donation:${id}`);
      if (!raw) return null;
      return (typeof raw === "string" ? JSON.parse(raw) : raw) as DonationRecord;
    })
  );
  return records.filter(Boolean) as DonationRecord[];
}
