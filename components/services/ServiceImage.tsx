"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { getServiceIcon } from "./icon-map";

interface ServiceImageProps extends Omit<ImageProps, "alt" | "onError"> {
  alt: string;
  label: string;
  icon: string;
  color?: string;
  className?: string;
}

export function ServiceImage({
  alt,
  label,
  icon,
  color = "#FF00C8",
  className,
  ...props
}: ServiceImageProps) {
  const [failed, setFailed] = useState(false);
  const Icon = getServiceIcon(icon);

  if (failed) {
    return (
      <div
        className={cn(
          "relative flex flex-col items-center justify-center gap-3 overflow-hidden select-none",
          className
        )}
        style={{
          background: `radial-gradient(ellipse 90% 90% at 50% 30%, ${color}1c 0%, transparent 70%), #0B0B0D`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(${color}33 1px, transparent 1px), linear-gradient(90deg, ${color}33 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        {/* eslint-disable-next-line react-hooks/static-components -- Icon resolved from a stable module-level map, safe to render directly */}
        <Icon
          size={38}
          strokeWidth={1.4}
          style={{ color, filter: `drop-shadow(0 0 16px ${color}80)` }}
          className="relative"
        />
        <span className="relative text-[11px] text-white/35 text-center px-6 max-w-[260px] leading-relaxed tracking-wide">
          {label}
        </span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      loading={props.priority ? undefined : "lazy"}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
