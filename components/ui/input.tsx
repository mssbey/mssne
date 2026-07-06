"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex w-full rounded-lg border px-3 py-2 text-sm text-black placeholder:text-black/25 outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 cursor-auto",
          "bg-[#FFFFFF] border-black/10 focus:border-[#5FAE7F]/60",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
