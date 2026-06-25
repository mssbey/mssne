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
            colors: ["#FF00C8", "#00E5FF", "#9B5CFF"],
            lights: {
              intensity: 200,
              colors: ["#FF00C8", "#FF7A00", "#00E5FF", "#9B5CFF"],
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
      className={cn("relative w-full h-full overflow-hidden", className)}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: "none" }}
      />

      {!loaded && (
        <div className="absolute inset-0 bg-[#050505]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(155,92,255,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 20% 70%, rgba(255,0,200,0.10) 0%, transparent 50%), #050505",
          }}
        />
      )}

      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>
    </div>
  );
}

export default TubesBackground;
