"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const randomColors = (count: number) =>
  Array.from({ length: count }, () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
  );

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
            colors: ["#D9668A", "#F2B84B", "#5FAE7F"],
            lights: {
              intensity: 200,
              colors: ["#D9668A", "#FF8F66", "#F2B84B", "#5FAE7F"],
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
    tubesRef.current.tubes.setColors(randomColors(3));
    tubesRef.current.tubes.setLightsColors(randomColors(4));
  };

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden isolate", className)}
      onClick={handleClick}
    >
      {/* Clean, opaque light backdrop — sits behind the canvas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 18% 15%, rgba(217,102,138,0.22) 0%, transparent 60%), radial-gradient(ellipse 60% 55% at 85% 25%, rgba(242,184,75,0.20) 0%, transparent 60%), radial-gradient(ellipse 70% 60% at 50% 100%, rgba(95,174,127,0.18) 0%, transparent 60%), #FBF8F6",
        }}
      />

      {/* Canvas lightens onto the backdrop: black clears away, bright tube glow shines through */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block mix-blend-lighten opacity-90 transition-opacity duration-700"
        style={{ touchAction: "none", opacity: loaded ? 0.9 : 0 }}
      />

      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
