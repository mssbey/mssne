"use client";

import { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-medium text-black leading-none cursor-pointer", className)}
      {...props}
    />
  );
}

export { Label };
