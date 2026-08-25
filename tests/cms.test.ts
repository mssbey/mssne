import { describe, expect, it } from "vitest";
import { hasPermission } from "../lib/auth/permissions";
import { slugify } from "../lib/cms/slug";

describe("CMS güvenlik ve içerik yardımcıları", () => {
  it("Türkçe başlıklardan kararlı SEO slug üretir", () => {
    expect(slugify("Işıklı & Işıksız Tabela Çözümleri")).toBe("isikli-isiksiz-tabela-cozumleri");
    expect(slugify("  Özel Proje / 2026  ")).toBe("ozel-proje-2026");
  });

  it("rolleri en az yetki prensibiyle sınırlar", () => {
    expect(hasPermission("VIEWER", "read")).toBe(true);
    expect(hasPermission("VIEWER", "content:write")).toBe(false);
    expect(hasPermission("EDITOR", "content:write")).toBe(true);
    expect(hasPermission("EDITOR", "users:write")).toBe(false);
    expect(hasPermission("SUPER_ADMIN", "audit:read")).toBe(true);
  });
});
