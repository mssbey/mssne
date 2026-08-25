import { createHash, randomBytes } from "node:crypto";
import { cache } from "react";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export const SESSION_COOKIE = "ikarus_admin_session";
export const roles = ["SUPER_ADMIN", "EDITOR", "VIEWER"] as const;
export type Role = (typeof roles)[number];

function tokenHash(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function getRequestMeta() {
  const requestHeaders = await headers();
  const forwarded = requestHeaders.get("x-forwarded-for");
  return {
    ip: forwarded?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "unknown",
    userAgent: requestHeaders.get("user-agent")?.slice(0, 500) || "unknown",
  };
}

export async function assertSameOrigin() {
  const requestHeaders = await headers();
  const origin = requestHeaders.get("origin");
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host");
  if (origin && host && new URL(origin).host !== host) {
    throw new Error("Geçersiz istek kaynağı.");
  }
}

export async function createSession(userId: string, remember = false) {
  const token = randomBytes(32).toString("base64url");
  const hours = remember ? 24 * 30 : Number(process.env.SESSION_HOURS || 12);
  const expiresAt = new Date(Date.now() + hours * 60 * 60 * 1000);
  const meta = await getRequestMeta();
  await db.session.create({
    data: { userId, tokenHash: tokenHash(token), expiresAt, ...meta },
  });
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: expiresAt,
  });
}

export const getSessionUser = cache(async () => {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const session = await db.session.findUnique({
    where: { tokenHash: tokenHash(token) },
    include: { user: true },
  });
  if (!session || session.expiresAt <= new Date() || !session.user.active || session.user.deletedAt) {
    return null;
  }
  return {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    role: session.user.role as Role,
    sessionId: session.id,
  };
});

export async function requireUser() {
  const user = await getSessionUser();
  if (!user) redirect("/admin/login");
  return user;
}

export async function requireRole(allowed: Role[]) {
  const user = await requireUser();
  if (!allowed.includes(user.role)) throw new Error("Bu işlem için yetkiniz bulunmuyor.");
  return user;
}

export async function endSession() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (token) await db.session.deleteMany({ where: { tokenHash: tokenHash(token) } });
  store.delete(SESSION_COOKIE);
}
