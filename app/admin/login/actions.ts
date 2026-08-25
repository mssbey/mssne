"use server";

import { compare } from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";
import { audit } from "@/lib/auth/audit";
import {
  assertSameOrigin,
  createSession,
  endSession,
  getRequestMeta,
} from "@/lib/auth/session";
import { db } from "@/lib/db";

export type LoginState = { error?: string };

const loginSchema = z.object({
  email: z.email("Geçerli bir e-posta girin.").trim().toLowerCase(),
  password: z.string().min(8, "Şifre en az 8 karakter olmalı.").max(200),
  remember: z.string().optional(),
});

export async function loginAction(_state: LoginState, formData: FormData): Promise<LoginState> {
  await assertSameOrigin();
  const parsed = loginSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message };

  const { ip } = await getRequestMeta();
  const key = `${ip}:${parsed.data.email}`;
  const windowStart = new Date(Date.now() - 15 * 60 * 1000);
  const failures = await db.loginAttempt.count({
    where: { key, success: false, createdAt: { gte: windowStart } },
  });
  if (failures >= 5) return { error: "Çok fazla deneme yapıldı. 15 dakika sonra tekrar deneyin." };

  const user = await db.user.findUnique({ where: { email: parsed.data.email } });
  const valid = Boolean(user?.active && !user.deletedAt && (await compare(parsed.data.password, user.passwordHash)));
  await db.loginAttempt.create({ data: { key, success: valid } });
  if (!valid || !user) {
    await audit({ action: "LOGIN_FAILED", module: "AUTH", newData: { email: parsed.data.email } });
    return { error: "E-posta veya şifre hatalı." };
  }

  await createSession(user.id, parsed.data.remember === "on");
  await db.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
  await audit({ userId: user.id, action: "LOGIN", module: "AUTH" });
  redirect("/admin");
}

export async function logoutAction() {
  await assertSameOrigin();
  await endSession();
  redirect("/admin/login");
}
