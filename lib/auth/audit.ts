import type { Prisma } from "@/generated/prisma/client";
import { db } from "@/lib/db";
import { getRequestMeta } from "./session";

const blockedKeys = /password|token|secret|api.?key/i;

function redact(value: unknown): Prisma.InputJsonValue | undefined {
  if (value === undefined) return undefined;
  if (value === null) return undefined;
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }
  if (Array.isArray(value)) return value.map((item) => redact(item) ?? null);
  if (typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, blockedKeys.test(key) ? "[REDACTED]" : redact(item) ?? null]),
    );
  }
  return String(value);
}

export async function audit(input: {
  userId?: string;
  action: string;
  module: string;
  recordId?: string;
  oldData?: unknown;
  newData?: unknown;
}) {
  const meta = await getRequestMeta();
  await db.auditLog.create({
    data: {
      ...input,
      oldData: redact(input.oldData),
      newData: redact(input.newData),
      ...meta,
    },
  });
}
