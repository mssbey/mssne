"use server";

import { revalidatePath } from "next/cache";
import { audit } from "@/lib/auth/audit";
import { assertSameOrigin, requireRole } from "@/lib/auth/session";

export async function refreshSite() {
  await assertSameOrigin();
  const user = await requireRole(["SUPER_ADMIN"]);
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
  await audit({ userId: user.id, action: "CACHE_REFRESH", module: "SYSTEM" });
}
