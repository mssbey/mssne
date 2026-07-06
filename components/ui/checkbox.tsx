"use client";

import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, "type">) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border border-black/20 bg-transparent accent-[#5FAE7F] cursor-pointer",
        className
      )}
      {...props}
    />
  );
}

export { Checkbox };
