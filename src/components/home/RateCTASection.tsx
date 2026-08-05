import React from "react";
import { MessageCircle, Phone, Clock } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { createWhatsAppUrl, createCallUrl } from "@/lib/whatsapp";

export function RateCTASection() {
  const whatsappUrl = createWhatsAppUrl(
    `Namaste ${BUSINESS.owner}, mujhe Pratapgarh Chicken House se aaj ka fresh rate janna hai.`
  );
  const callUrl = createCallUrl();

  return (
    <section className="py-16 sm:py-20 bg-[#071B14] text-[#FAF8F2] relative">
      <Container size="default">
        <div className="max-w-3xl mx-auto rounded-lg bg-[#0B261C] border border-white/10 p-8 sm:p-12 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-[#809B83] font-sans block mb-2">
            DAILY RATES
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FAF8F2] mb-2">
            Today's fresh rate
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#809B83] font-normal mb-4">
            आज का ताज़ा रेट जानने के लिए संपर्क करें
          </p>

          <p className="text-xs sm:text-sm text-[#FAF8F2]/70 max-w-lg mx-auto mb-8 font-sans leading-relaxed">
            Fresh chicken rates change daily based on market supply. Contact{" "}
            <strong>{BUSINESS.name}</strong> directly on WhatsApp or Call for the accurate rate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={whatsappUrl}
              external
              variant="whatsapp"
              size="md"
              icon={<MessageCircle className="w-4 h-4 text-[#FAF8F2]" />}
              className="w-full sm:w-auto"
            >
              WhatsApp for today's rate
            </Button>

            <Button
              href={callUrl}
              variant="secondary"
              size="md"
              icon={<Phone className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Call shop
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
