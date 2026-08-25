import { cache } from "react";
import { db } from "@/lib/db";
import {
  defaultSettings,
  type BrandSettings,
  type ContactSettings,
  type ThemeSettings,
} from "./defaults";

export type PublicSettings = {
  brand: BrandSettings;
  contact: ContactSettings;
  social: Record<string, string>;
  seo: Record<string, string | boolean>;
  theme: ThemeSettings;
};

export const getPublicSettings = cache(async (): Promise<PublicSettings> => {
  try {
    const value = await db.siteSetting.findUnique({ where: { id: "main" } });
    if (!value) return defaultSettings;
    return {
      brand: value.brand as BrandSettings,
      contact: value.contact as ContactSettings,
      social: value.social as Record<string, string>,
      seo: value.seo as Record<string, string | boolean>,
      theme: value.theme as ThemeSettings,
    };
  } catch {
    return defaultSettings;
  }
});

export function phoneHref(value: string) {
  return `tel:${value.replace(/[^\d+]/g, "")}`;
}
