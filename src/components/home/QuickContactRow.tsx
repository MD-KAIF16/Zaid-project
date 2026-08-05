import React from "react";
import { Phone, MessageCircle, Navigation } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { Container } from "@/components/ui/Container";
import { createWhatsAppUrl, createCallUrl } from "@/lib/whatsapp";

export function QuickContactRow() {
  const whatsappUrl = createWhatsAppUrl();
  const callUrl = createCallUrl();
  const mapsUrl =
    BUSINESS.googleMapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Pratapgarh Chicken House Pratapgarh"
    )}`;

  return (
    <section className="py-8 bg-[#F4F0E6] text-[#172019] border-y border-[#172019]/10">
      <Container size="default">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm font-medium text-[#172019]">
              Rate ya delivery ke liye seedha <strong className="font-semibold text-[#24523D]">{BUSINESS.owner}</strong> se baat karein.
            </p>
            <p className="text-xs text-[#667068] mt-0.5">
              Phone / WhatsApp: {BUSINESS.displayPhone}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-[#24523D] font-sans">
            <a
              href={callUrl}
              className="hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call shop</span>
            </a>

            <span className="text-[#172019]/20">•</span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp us</span>
            </a>

            <span className="text-[#172019]/20">•</span>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get directions</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
