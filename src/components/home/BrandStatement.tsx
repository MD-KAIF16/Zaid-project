import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function BrandStatement() {
  return (
    <section className="py-20 sm:py-28 bg-[#041F17] text-[#FCFAF4] relative overflow-hidden">
      {/* Decorative Large Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] sm:text-[220px] lg:text-[320px] font-serif font-bold text-white/[0.02] select-none pointer-events-none tracking-tighter whitespace-nowrap">
        PCH FRESH
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & Statement */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#C5A15A]" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C5A15A] font-sans">
                OUR COMMITMENT
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FCFAF4] leading-[1.15] mb-6">
              Fresh Every Day. <br />
              <span className="text-gold-gradient">Quality Every Time.</span>
            </h2>

            <div className="p-4 sm:p-6 rounded-2xl bg-[#073B2A] border-l-4 border-[#C5A15A] mb-8 w-full max-w-xl">
              <p className="font-sans text-xl sm:text-2xl text-[#C5A15A] font-semibold italic">
                "स्वाद में भरोसा, हर बार ताज़ा"
              </p>
              <p className="text-xs sm:text-sm text-[#FCFAF4]/70 mt-1 font-sans">
                — Pratapgarh Chicken House Guarantee
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#FCFAF4]/80 leading-relaxed font-sans max-w-xl">
              We believe that good food starts with fresh ingredients. Every single piece of chicken prepared at PCH is inspected for freshness, cut cleanly using sanitized equipment, and served with complete integrity.
            </p>
          </div>

          {/* Right Column: Premium Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-[#C5A15A]/30 shadow-2xl">
              <Image
                src="/images/product_curry_cut.png"
                alt="Fresh Raw Chicken Cut"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041F17]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#041F17]/80 backdrop-blur-md border border-[#C5A15A]/20">
                <p className="text-xs uppercase tracking-widest text-[#C5A15A] font-semibold mb-1">
                  DAILY PREPARATION
                </p>
                <p className="text-sm font-serif font-bold text-[#FCFAF4]">
                  Hygienically Cut & Packed Fresh Daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
