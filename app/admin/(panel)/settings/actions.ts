"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { audit } from "@/lib/auth/audit";
import { assertSameOrigin, requireRole } from "@/lib/auth/session";
import { defaultSettings } from "@/lib/cms/defaults";
import { db } from "@/lib/db";

const settingsSchema = z.object({
  siteName: z.string().min(2).max(100),
  shortName: z.string().min(1).max(40),
  logo: z.string().max(500),
  footerDescription: z.string().max(500),
  copyright: z.string().max(250),
  phone: z.string().max(30),
  phone2: z.string().max(30),
  whatsapp: z.string().regex(/^\d{8,16}$/, "WhatsApp numarasını ülke koduyla, yalnızca rakam olarak girin."),
  email: z.email(),
  address: z.string().max(500),
  workingHours: z.string().max(200),
  instagram: z.string().max(500),
  facebook: z.string().max(500),
  linkedin: z.string().max(500),
  youtube: z.string().max(500),
  seoTitle: z.string().min(10).max(160),
  seoDescription: z.string().min(20).max(320),
  seoKeywords: z.string().max(500),
  primary: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  secondary: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  accent: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  background: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  text: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  footer: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  button: z.string().regex(/^#[0-9a-fA-F]{6}$/),
  radius: z.string().regex(/^\d{1,2}px$/),
});

export async function saveSettings(formData: FormData) {
  await assertSameOrigin();
  const user = await requireRole(["SUPER_ADMIN"]);
  const parsed = settingsSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) throw new Error(parsed.error.issues[0]?.message || "Ayarlar doğrulanamadı.");
  const value = parsed.data;
  const previous = await db.siteSetting.findUnique({ where: { id: "main" } });
  const scripts = previous?.scripts ?? defaultSettings.scripts;
  await db.siteSetting.upsert({
    where: { id: "main" },
    create: {
      id: "main",
      brand: { ...defaultSettings.brand, siteName: value.siteName, shortName: value.shortName, logo: value.logo, footerDescription: value.footerDescription, copyright: value.copyright },
      contact: { ...defaultSettings.contact, phone: value.phone, phone2: value.phone2, whatsapp: value.whatsapp, email: value.email, address: value.address, workingHours: value.workingHours },
      social: { ...defaultSettings.social, instagram: value.instagram, facebook: value.facebook, linkedin: value.linkedin, youtube: value.youtube },
      seo: { ...defaultSettings.seo, title: value.seoTitle, description: value.seoDescription, keywords: value.seoKeywords },
      theme: { ...defaultSettings.theme, primary: value.primary, secondary: value.secondary, accent: value.accent, background: value.background, text: value.text, footer: value.footer, button: value.button, radius: value.radius },
      scripts,
    },
    update: {
      brand: { ...defaultSettings.brand, siteName: value.siteName, shortName: value.shortName, logo: value.logo, footerDescription: value.footerDescription, copyright: value.copyright },
      contact: { ...defaultSettings.contact, phone: value.phone, phone2: value.phone2, whatsapp: value.whatsapp, email: value.email, address: value.address, workingHours: value.workingHours },
      social: { ...defaultSettings.social, instagram: value.instagram, facebook: value.facebook, linkedin: value.linkedin, youtube: value.youtube },
      seo: { ...defaultSettings.seo, title: value.seoTitle, description: value.seoDescription, keywords: value.seoKeywords },
      theme: { ...defaultSettings.theme, primary: value.primary, secondary: value.secondary, accent: value.accent, background: value.background, text: value.text, footer: value.footer, button: value.button, radius: value.radius },
    },
  });
  await audit({ userId: user.id, action: "SETTINGS_UPDATE", module: "SETTINGS", oldData: previous, newData: value });
  revalidatePath("/", "layout");
  revalidatePath("/admin/settings");
}
