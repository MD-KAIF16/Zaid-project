import React from "react";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { Container } from "@/components/ui/Container";
import { createWhatsAppUrl, createCallUrl } from "@/lib/whatsapp";

export function DeliverySection() {
  const whatsappUrl = createWhatsAppUrl();
  const callUrl = createCallUrl();

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#163D2D] text-[#FBF9F4]">
      <Container size="default">
        <div className="max-w-2xl flex flex-col items-start">
          <span className="text-xs uppercase tracking-widest text-[#A88D5B] font-sans mb-2 font-medium">
            DELIVERY & CONTACT
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FBF9F4] tracking-tight leading-[1.15] mb-3">
            Fresh chicken, <br />
            <span className="italic text-[#F6F2E8]/90">when you need it.</span>
          </h2>

          <p className="text-xs sm:text-base text-[#FBF9F4]/80 font-sans leading-relaxed mb-8">
            Home delivery may be available in your area. Contact us directly to check.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#151A17] bg-[#FBF9F4] hover:bg-[#F6F2E8] transition-colors py-3 px-5 rounded font-sans"
            >
              <span>WhatsApp →</span>
            </a>

            <a
              href={callUrl}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#FBF9F4] border border-white/20 hover:border-white/40 transition-colors py-3 px-5 rounded font-sans"
            >
              <Phone className="w-4 h-4 text-[#A88D5B]" />
              <span>Call {BUSINESS.displayPhone}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
