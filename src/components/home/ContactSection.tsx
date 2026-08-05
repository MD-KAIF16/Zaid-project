import React from "react";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { createWhatsAppUrl, createCallUrl } from "@/lib/whatsapp";

export function ContactSection() {
  const whatsappUrl = createWhatsAppUrl();
  const callUrl = createCallUrl();

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#FAF8F2] text-[#101512] border-t border-[#D8D0C1]">
      <Container size="default">
        <div className="max-w-2xl flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A88B55]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#697B58] font-sans">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#101512] tracking-tight leading-[1.1] mb-3">
            Need today's rate?
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#686D68] mb-2 font-normal">
            Talk directly to PCH.
          </p>

          <p className="font-serif text-3xl sm:text-4xl text-[#173C2D] font-normal mb-8">
            {BUSINESS.displayPhone}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              href={whatsappUrl}
              external
              variant="primary"
              size="lg"
            >
              WhatsApp us →
            </Button>

            <a
              href={callUrl}
              className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-[#1A1E1B] hover:text-[#173C2D] transition-colors py-3 px-5 rounded border border-[#1A1E1B]/20 hover:border-[#173C2D]"
            >
              <span>Call shop</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
