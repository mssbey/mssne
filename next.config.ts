import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Admin panelinden yüklenen görseller Vercel Blob'da tutulur.
    remotePatterns: [{ protocol: "https", hostname: "**.public.blob.vercel-storage.com" }],
  },
};

export default nextConfig;
