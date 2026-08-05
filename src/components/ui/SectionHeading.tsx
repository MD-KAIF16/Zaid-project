import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  hindiTitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  hindiTitle,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:gap-2.5 mb-8 sm:mb-12",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B59A62]" />
          <span
            className={cn(
              "text-xs font-semibold tracking-widest uppercase font-sans",
              isDark ? "text-[#B59A62]" : "text-[#24523D]"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight",
          isDark ? "text-[#FAF8F2]" : "text-[#172019]"
        )}
      >
        {title}
      </h2>

      {hindiTitle && (
        <p className="font-sans text-base sm:text-xl text-[#809B83] font-normal">
          {hindiTitle}
        </p>
      )}

      {description && (
        <p
          className={cn(
            "text-sm sm:text-base max-w-xl font-sans mt-1 leading-relaxed",
            isDark ? "text-[#FAF8F2]/70" : "text-[#667068]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
