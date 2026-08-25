"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { audit } from "@/lib/auth/audit";
import { assertSameOrigin, requireRole } from "@/lib/auth/session";
import { db } from "@/lib/db";

const heroSchema = z.object({
  eyebrow: z.string().max(160),
  title: z.string().min(2).max(160),
  highlightedTitle: z.string().max(100),
  description: z.string().min(10).max(800),
  primaryButtonText: z.string().max(80),
  primaryButtonUrl: z.string().max(300),
  secondaryButtonText: z.string().max(80),
  secondaryButtonUrl: z.string().max(300),
  backgroundImage: z.string().max(500),
  enabled: z.string().optional(),
  animation: z.string().optional(),
});

export async function saveHero(formData: FormData) {
  await assertSameOrigin();
  const user = await requireRole(["SUPER_ADMIN", "EDITOR"]);
  const parsed = heroSchema.parse(Object.fromEntries(formData));
  const current = await db.pageSection.findUnique({ where: { id: "home-hero" } });
  const currentContent = (current?.content as Record<string, unknown>) || {};
  await db.pageSection.update({
    where: { id: "home-hero" },
    data: {
      enabled: parsed.enabled === "on",
      content: { ...currentContent, ...parsed, animation: parsed.animation === "on" },
    },
  });
  await audit({ userId: user.id, action: "UPDATE", module: "HOMEPAGE", recordId: "home-hero", oldData: currentContent, newData: parsed });
  revalidatePath("/");
  revalidatePath("/admin/homepage");
}
