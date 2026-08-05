import React from "react";
import Image from "next/image";

export function FullBleedPhotoSection() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[65vh] lg:h-[70vh] bg-[#101512] overflow-hidden">
      <Image
        src="/images/hero_raw_chicken.png"
        alt="Pratapgarh Chicken House - Fresh Stock Preparation"
        fill
        sizes="100vw"
        className="object-cover object-center filter brightness-95 contrast-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101512]/60 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10">
        <p className="text-xs sm:text-sm font-sans italic text-[#FAF8F2]/75 tracking-wide">
          Clean preparation & fresh stock every day.
        </p>
      </div>
    </section>
  );
}
