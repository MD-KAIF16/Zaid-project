import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function RoosterBrandGraphic({
  className = "w-12 h-12",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const neckFill = dark ? "#FAF8F2" : "#173C2D";
  const featherStroke = dark ? "#151A17" : "#FAF8F2";

  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="Pratapgarh Chicken House Rooster Brand Identity"
    >
      {/* Rooster Comb - Deep Warm Red Accent */}
      <path
        d="M23 18.5C23.2 14.2 26 11.5 29.5 12.8C31.2 13.5 32.2 11 34.2 11C36.5 11 37.8 13.2 39.2 12.5C40.8 11.8 41.8 9.5 44.2 10.8C46.5 12.2 46.8 15.5 45.2 17.8C43.8 19.8 41 20.8 38.2 20.8H23V18.5Z"
        fill="#9E4538"
      />

      {/* Rooster Head & Arching Neck Silhouette */}
      <path
        d="M21 20.8C25.5 20.8 35 21.2 39.5 22.2C42.8 23 45.8 24.8 46.2 28.2C46.8 31.8 43.8 33.8 41.5 34.2C38 34.8 34.8 34 33.2 36.2C31.5 38.5 30 42.8 31.2 46.8C32.2 50.8 34.5 53.5 31.5 55.5C28.2 57.5 23 54.2 19.8 49.8C16.8 45.5 15.5 38 16.8 32.8C18 27.5 19.5 23 21 20.8Z"
        fill={neckFill}
      />

      {/* Beak - Warm Brass */}
      <path d="M45.5 26.5L55 29.2L44.5 32.5V26.5Z" fill="#A88B5B" />

      {/* Wattle under Beak - Deep Warm Red Accent */}
      <path
        d="M42.8 32.8C42.8 37 40.2 40.2 38 40.2C35.8 40.2 35.2 37.5 35.2 34.8C35.2 32.2 38.5 32.2 42.8 32.8Z"
        fill="#9E4538"
      />

      {/* Eye Detail */}
      <circle cx="37.5" cy="25" r="2.2" fill={featherStroke} />
      <circle cx="38" cy="25" r="1" fill={neckFill} />

      {/* Subtly Defined Neck Plume Accents */}
      <path
        d="M25 34C22.5 37.5 20.8 41.8 21 46.5"
        stroke={featherStroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.25"
      />
      <path
        d="M29 32.5C26.5 36.8 24.8 41.8 25.5 48"
        stroke={featherStroke}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.25"
      />
    </svg>
  );
}

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
      className={cn("inline-flex items-center gap-3.5 group focus:outline-none", className)}
    >
      {/* Desktop Rooster Icon (48px) */}
      <RoosterBrandGraphic className="hidden sm:block w-[50px] h-[50px]" dark={dark} />

      {/* Mobile Rooster Icon (40px) */}
      <RoosterBrandGraphic className="sm:hidden w-[40px] h-[40px]" dark={dark} />

      {/* Desktop Brand Typography */}
      <div className="hidden sm:flex flex-col">
        <span
          className={cn(
            "font-serif text-2xl font-bold tracking-wider leading-none mb-1",
            primaryTextColor
          )}
        >
          PCH
        </span>
        <span
          className={cn(
            "text-[10px] font-sans font-semibold uppercase tracking-[0.2em] leading-tight",
            subTextColor
          )}
        >
          PRATAPGARH CHICKEN HOUSE
        </span>
      </div>

      {/* Mobile Brand Typography */}
      <div className="sm:hidden flex flex-col">
        <span
          className={cn(
            "font-serif text-xl font-bold tracking-wider leading-none mb-0.5",
            primaryTextColor
          )}
        >
          PCH
        </span>
        <span
          className={cn(
            "text-[9px] font-sans font-medium uppercase tracking-[0.15em] leading-tight",
            subTextColor
          )}
        >
          CHICKEN HOUSE
        </span>
      </div>
    </Link>
  );
}
