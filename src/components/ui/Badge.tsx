import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "dark" | "cream" | "halal";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "green",
  className,
  icon,
}: BadgeProps) {
  const variantStyles = {
    green: "bg-[#24523D]/10 text-[#24523D] border-[#24523D]/20",
    dark: "bg-[#071B14] text-[#FAF8F2] border-white/10",
    cream: "bg-[#F4F0E6] text-[#172019] border-[#172019]/10",
    halal: "bg-[#24523D]/5 text-[#24523D] border-[#24523D]/20 text-[11px] font-normal px-2 py-0.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-md border tracking-wide uppercase font-sans shrink-0",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
