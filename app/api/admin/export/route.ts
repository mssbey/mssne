import { getSessionUser } from "@/lib/auth/session";
import { db } from "@/lib/db";

function csvCell(value: unknown) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

export async function GET(request: Request) {
  const user = await getSessionUser();
  if (!user || user.role !== "SUPER_ADMIN") return Response.json({ ok: false, error: "Yetkisiz erişim." }, { status: 401 });
  const format = new URL(request.url).searchParams.get("format");
  if (format === "contacts-csv") {
    const rows = await db.contactSubmission.findMany({ where: { deletedAt: null }, orderBy: { createdAt: "desc" } });
    const csv = [
      ["Ad Soyad", "Telefon", "E-posta", "Firma", "Hizmet", "Konu", "Mesaj", "Durum", "Tarih"].map(csvCell).join(","),
      ...rows.map((item) => [item.name, item.phone, item.email, item.company, item.service, item.subject, item.message, item.status, item.createdAt.toISOString()].map(csvCell).join(",")),
    ].join("\r\n");
    return new Response(`\uFEFF${csv}`, { headers: { "content-type": "text/csv; charset=utf-8", "content-disposition": `attachment; filename="ikarus-iletisim-${new Date().toISOString().slice(0, 10)}.csv"` } });
  }
  const [settings, pages, services, projects, references, testimonials, menus] = await Promise.all([
    db.siteSetting.findUnique({ where: { id: "main" } }),
    db.page.findMany({ where: { deletedAt: null }, include: { sections: true } }),
    db.service.findMany({ where: { deletedAt: null } }),
    db.project.findMany({ where: { deletedAt: null }, include: { images: true, category: true } }),
    db.reference.findMany({ where: { deletedAt: null } }),
    db.testimonial.findMany({ where: { deletedAt: null } }),
    db.menu.findMany({ include: { items: true } }),
  ]);
  const body = JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), settings, pages, services, projects, references, testimonials, menus }, null, 2);
  return new Response(body, { headers: { "content-type": "application/json; charset=utf-8", "content-disposition": `attachment; filename="ikarus-yedek-${new Date().toISOString().slice(0, 10)}.json"` } });
}
