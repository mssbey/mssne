import { ImageResponse } from "next/og";
import { ACIK_HAVA, getAcikHavaBySlug } from "@/lib/acik-hava";

export const alt = "Ikarus Reklam Açık Hava Reklamı Görseli";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getAcikHavaBySlug(slug) ?? ACIK_HAVA[0];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: `radial-gradient(ellipse 70% 70% at 15% 20%, ${service.color}33 0%, transparent 60%), #050505`,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: service.color,
            marginBottom: 28,
          }}
        >
          {service.category}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: -2,
            lineHeight: 1.05,
            maxWidth: 920,
          }}
        >
          {service.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "rgba(255,255,255,0.55)",
            marginTop: 28,
            maxWidth: 800,
          }}
        >
          {service.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 800,
            color: "#FFFFFF",
            marginTop: 56,
          }}
        >
          IKARUS REKLAM
        </div>
      </div>
    ),
    { ...size }
  );
}
