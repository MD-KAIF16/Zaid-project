"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/constants/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { createWhatsAppUrl, createCallUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = createWhatsAppUrl();
  const callUrl = createCallUrl();

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F6F2E8] text-[#151A17] overflow-hidden"
    >
      <Container size="large">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A88D5B]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#526B59] font-sans">
                PRATAPGARH CHICKEN HOUSE
              </span>
            </motion.div>

            {/* Serif Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-[clamp(2.5rem,4.8vw,5.5rem)] font-normal tracking-tight text-[#151A17] leading-[1.12] mb-3"
            >
              Fresh chicken, <br />
              <span className="italic text-[#163D2D]">prepared with care.</span>
            </motion.h1>

            {/* Hindi Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-sans text-base sm:text-xl text-[#526B59] font-normal mb-4"
            >
              {BUSINESS.hindiName} — <span className="italic">{BUSINESS.tagline}</span>
            </motion.p>

            {/* Short Copy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-base text-[#686D68] font-sans leading-relaxed mb-6 max-w-md"
            >
              Freshly prepared chicken with cleanliness and care.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-5 w-full sm:w-auto mb-4"
            >
              <Button
                href="#rates"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                View today's rate
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#163D2D] hover:underline font-sans"
              >
                <span>WhatsApp →</span>
              </a>
            </motion.div>

            {/* Call & Single Halal Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 text-xs text-[#686D68]"
            >
              <a href={callUrl} className="hover:text-[#163D2D] flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS.displayPhone}</span>
              </a>
              <span>•</span>
              <span className="text-[11px] text-[#526B59]">Halal ✓</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: ONE Excellent Raw Chicken Photograph */}
          <div className="lg:col-span-7 flex flex-col items-start lg:items-end w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] rounded-md bg-[#FBF9F4] border border-[#DDD7CB] overflow-hidden"
            >
              <Image
                src="/images/hero_raw_chicken.png"
                alt="Fresh Raw Whole Chicken - Pratapgarh Chicken House"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </motion.div>

            <span className="text-xs text-[#686D68] font-sans mt-2 italic self-start lg:self-end">
              Freshly prepared daily.
            </span>
          </div>

        </div>
      </Container>
    </section>
  );
}
