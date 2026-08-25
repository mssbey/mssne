import { z } from "zod";
import { db } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().max(30).optional(),
  email: z.email().trim().toLowerCase(),
  company: z.string().trim().max(150).optional(),
  service: z.string().trim().max(120).optional(),
  subject: z.string().trim().max(160).optional(),
  message: z.string().trim().min(10).max(5000),
  kvkkConsent: z.literal(true),
  sourcePage: z.string().trim().max(500).optional(),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const recent = await db.loginAttempt.count({
    where: { key: `contact:${ip}`, createdAt: { gte: new Date(Date.now() - 10 * 60 * 1000) } },
  });
  if (recent >= 5) return Response.json({ ok: false, error: "Çok fazla mesaj gönderdiniz. Lütfen daha sonra tekrar deneyin." }, { status: 429 });
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  await db.loginAttempt.create({ data: { key: `contact:${ip}`, success: parsed.success } });
  if (!parsed.success) return Response.json({ ok: false, error: parsed.error.issues[0]?.message || "Form bilgileri geçersiz." }, { status: 400 });
  if (parsed.data.website) return Response.json({ ok: true });
  const data = parsed.data;
  await db.contactSubmission.create({
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email,
      company: data.company,
      service: data.service,
      subject: data.subject,
      message: data.message,
      kvkkConsent: data.kvkkConsent,
      sourcePage: data.sourcePage,
      ip,
    },
  });
  return Response.json({ ok: true }, { status: 201 });
}
