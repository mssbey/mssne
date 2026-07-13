"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Tıklamada sırayla geçilen, birbiriyle uyumlu neon paletleri
const PALETTES: { tubes: string[]; lights: string[] }[] = [
  { tubes: ["#FF6EC7", "#9B5CFF", "#00D4FF"], lights: ["#FF6EC7", "#9B5CFF", "#00D4FF", "#FFD166"] },
  { tubes: ["#F2B84B", "#FF8F66", "#D9668A"], lights: ["#F2B84B", "#FF8F66", "#D9668A", "#FFE29A"] },
  { tubes: ["#5FAE7F", "#00E5A0", "#00D4FF"], lights: ["#5FAE7F", "#00E5A0", "#00D4FF", "#B7F5D8"] },
  { tubes: ["#FF3131", "#FF6EC7", "#FFD166"], lights: ["#FF3131", "#FF6EC7", "#FFD166", "#FFFFFF"] },
];

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
}

export function TubesBackground({
  children,
  className,
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesRef = useRef<any>(null);
  const paletteIndex = useRef(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      if (!canvasRef.current) return;
      try {
        const { default: TubesCursor } = await import(
          /* webpackIgnore: true */
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js" as any
        );
        if (!mounted) return;

        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: PALETTES[0].tubes,
            lights: {
              intensity: 160,
              colors: PALETTES[0].lights,
            },
          },
        });

        tubesRef.current = app;
        setLoaded(true);
      } catch (e) {
        console.error("TubesCursor load failed:", e);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction || !tubesRef.current) return;
    paletteIndex.current = (paletteIndex.current + 1) % PALETTES.length;
    const palette = PALETTES[paletteIndex.current];
    tubesRef.current.tubes.setColors(palette.tubes);
    tubesRef.current.tubes.setLightsColors(palette.lights);
  };

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden isolate", className)}
      onClick={handleClick}
    >
      {/* Dark backdrop with faint neon glows — sits behind the canvas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 18% 15%, rgba(217,102,138,0.14) 0%, transparent 60%), radial-gradient(ellipse 60% 55% at 85% 25%, rgba(155,92,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,212,255,0.10) 0%, transparent 60%), #0A0A12",
        }}
      />

      {/* Canvas lightens onto the backdrop: black clears away, bright tube glow shines through */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block mix-blend-lighten transition-opacity duration-700"
        style={{ touchAction: "none", opacity: loaded ? 1 : 0 }}
      />

      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
