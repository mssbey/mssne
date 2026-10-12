import { get } from "@vercel/blob";

// Admin panelinden private Vercel Blob store'a yüklenen dosyaları sitede sunar.
export async function GET(request: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const pathname = (await ctx.params).path.join("/");
  if (!/^uploads\/[\w-]+\.[a-z0-9]+$/i.test(pathname)) return new Response("Not found", { status: 404 });
  const result = await get(pathname, { access: "private", ifNoneMatch: request.headers.get("if-none-match") ?? undefined }).catch(() => null);
  if (!result) return new Response("Not found", { status: 404 });
  const headers = { ETag: result.blob.etag, "Cache-Control": "public, max-age=31536000, immutable" };
  if (result.statusCode === 304) return new Response(null, { status: 304, headers });
  return new Response(result.stream, { headers: { ...headers, "Content-Type": result.blob.contentType, "Content-Length": String(result.blob.size), "X-Content-Type-Options": "nosniff" } });
}
