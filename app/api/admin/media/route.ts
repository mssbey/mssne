import { randomBytes } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { audit } from "@/lib/auth/audit";
import { assertSameOrigin, getSessionUser } from "@/lib/auth/session";
import { db } from "@/lib/db";

const allowed = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/avif", ".avif"],
  ["image/gif", ".gif"],
  ["application/pdf", ".pdf"],
  ["video/mp4", ".mp4"],
  ["video/webm", ".webm"],
]);

function matchesSignature(mimeType: string, bytes: Uint8Array) {
  const text = (start: number, end: number) => String.fromCharCode(...bytes.slice(start, end));
  switch (mimeType) {
    case "image/jpeg": return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
    case "image/png": return bytes[0] === 0x89 && text(1, 4) === "PNG";
    case "image/webp": return text(0, 4) === "RIFF" && text(8, 12) === "WEBP";
    case "image/avif": return text(4, 8) === "ftyp" && ["avif", "avis"].includes(text(8, 12));
    case "image/gif": return ["GIF87a", "GIF89a"].includes(text(0, 6));
    case "application/pdf": return text(0, 5) === "%PDF-";
    case "video/mp4": return text(4, 8) === "ftyp";
    case "video/webm": return bytes[0] === 0x1a && bytes[1] === 0x45 && bytes[2] === 0xdf && bytes[3] === 0xa3;
    default: return false;
  }
}

export async function POST(request: Request) {
  await assertSameOrigin();
  const user = await getSessionUser();
  if (!user || !["SUPER_ADMIN", "EDITOR"].includes(user.role)) {
    return NextResponse.json({ ok: false, error: "Yetkisiz erişim." }, { status: 401 });
  }
  const formData = await request.formData();
  const file = formData.get("file");
  const alt = String(formData.get("alt") || "").trim();
  if (!(file instanceof File)) return NextResponse.json({ ok: false, error: "Dosya seçilmedi." }, { status: 400 });
  const extension = allowed.get(file.type);
  if (!extension) return NextResponse.json({ ok: false, error: "Bu dosya türü desteklenmiyor." }, { status: 415 });
  const max = Number(process.env.UPLOAD_MAX_MB || 10) * 1024 * 1024;
  if (file.size > max) return NextResponse.json({ ok: false, error: `Dosya en fazla ${process.env.UPLOAD_MAX_MB || 10} MB olabilir.` }, { status: 413 });
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (!matchesSignature(file.type, bytes)) {
    return NextResponse.json({ ok: false, error: "Dosyanın içeriği bildirilen formatla eşleşmiyor." }, { status: 415 });
  }

  const filename = `${Date.now()}-${randomBytes(8).toString("hex")}${extension}`;
  let url = `/uploads/${filename}`;
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    // Vercel gibi salt-okunur disklerde dosyalar Vercel Blob'a yüklenir.
    const blob = await put(`uploads/${filename}`, Buffer.from(bytes), { access: "public", contentType: file.type, addRandomSuffix: false });
    url = blob.url;
  } else if (process.env.VERCEL) {
    return NextResponse.json({ ok: false, error: "Dosya depolama yapılandırılmamış. Vercel projesine bir Blob Store bağlayın (BLOB_READ_WRITE_TOKEN)." }, { status: 503 });
  } else {
    const uploadDirectory = path.resolve(process.cwd(), "public", "uploads");
    await mkdir(uploadDirectory, { recursive: true });
    await writeFile(path.join(uploadDirectory, filename), bytes, { flag: "wx" });
  }
  const media = await db.media.create({
    data: {
      filename,
      originalName: file.name.slice(0, 240),
      url,
      mimeType: file.type,
      size: file.size,
      alt: alt.slice(0, 300) || null,
      title: file.name.replace(/\.[^.]+$/, "").slice(0, 200),
    },
  });
  await audit({ userId: user.id, action: "UPLOAD", module: "MEDIA", recordId: media.id, newData: { filename, mimeType: file.type, size: file.size } });
  return NextResponse.json({ ok: true, data: media }, { status: 201 });
}
