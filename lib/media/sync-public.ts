import { stat, readdir } from "node:fs/promises";
import path from "node:path";
import type { PrismaClient } from "@/generated/prisma/client";

const mimeByExtension: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
};

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  }));
  return nested.flat();
}

export async function syncPublicMedia(db: PrismaClient) {
  const publicDirectory = path.resolve(process.cwd(), "public");
  const files = (await walk(publicDirectory)).filter((file) => mimeByExtension[path.extname(file).toLowerCase()]);
  let created = 0;
  for (const file of files) {
    const extension = path.extname(file).toLowerCase();
    const relative = path.relative(publicDirectory, file).split(path.sep).join("/");
    const url = `/${relative}`;
    const info = await stat(file);
    const existing = await db.media.findUnique({ where: { url }, select: { id: true } });
    if (existing) continue;
    const filename = path.basename(file);
    await db.media.create({
      data: {
        filename,
        originalName: filename,
        url,
        mimeType: mimeByExtension[extension],
        size: info.size,
        title: path.basename(filename, extension).replaceAll("-", " "),
      },
    });
    created += 1;
  }
  return { created, total: files.length };
}
