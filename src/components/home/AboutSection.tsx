import React from "react";
import Image from "next/image";
import { BUSINESS } from "@/constants/business";
import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F6F2E8] text-[#151A17]">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* 6 Cols Photo */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded bg-[#FBF9F4] border border-[#DDD7CB] overflow-hidden">
              <Image
                src="/images/shop_chicken_counter.png"
                alt="Fresh Chicken Counter - Pratapgarh Chicken House"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* 6 Cols Story */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest text-[#526B59] font-sans mb-2 font-medium">
              OUR STORY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#151A17] tracking-tight mb-4">
              {BUSINESS.name}
            </h2>

            <p className="text-sm sm:text-base text-[#686D68] font-sans leading-relaxed mb-6">
              At PCH, we keep things simple — fresh chicken, clean preparation and dependable service.
            </p>

            <div className="border-t border-[#DDD7CB] pt-4 w-full">
              <p className="font-serif text-base text-[#151A17] font-normal">
                {BUSINESS.owner}
              </p>
              <p className="text-xs text-[#686D68] font-sans">
                {BUSINESS.name} ({BUSINESS.ownerHindi})
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
