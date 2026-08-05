import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PchLogoProps {
  dark?: boolean;
  className?: string;
}

export function PchLogo({ dark = false, className }: PchLogoProps) {
  const primaryTextColor = dark ? "text-[#FAF8F2]" : "text-[#151A17]";
  const subTextColor = dark ? "text-[#FAF8F2]/70" : "text-[#526B59]";

  return (
    <Link
      href="#hero"
      className={cn("inline-flex items-center gap-3 group focus:outline-none", className)}
    >
      {/* Official PCH Emblem Logo Image */}
      <div className="relative w-11 h-11 sm:w-14 sm:h-14 shrink-0 overflow-hidden drop-shadow-sm">
        <Image
          src="/images/pch_logo.png"
          alt="Pratapgarh Chicken House Official Logo"
          fill
          priority
          sizes="60px"
          className="object-contain"
        />
      </div>

      {/* Brand Typography Lockup */}
      <div className="flex flex-col">
        <span
          className={cn(
            "font-serif text-xl sm:text-2xl font-bold tracking-wider leading-none mb-0.5 sm:mb-1",
            primaryTextColor
          )}
        >
          PCH
        </span>
        <span
          className={cn(
            "text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-[0.18em] leading-tight",
            subTextColor
          )}
        >
          PRATAPGARH CHICKEN HOUSE
        </span>
      </div>
    </Link>
  );
}
