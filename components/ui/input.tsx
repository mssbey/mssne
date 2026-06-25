"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex w-full rounded-lg border px-3 py-2 text-sm text-white placeholder:text-white/25 outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 cursor-auto",
          "bg-[#0D0D0D] border-white/10 focus:border-[#9B5CFF]/60",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
