"use client";

import React from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { createWhatsAppUrl, createCallUrl } from "@/lib/whatsapp";

export function MobileActionBar() {
  const whatsappUrl = createWhatsAppUrl();
  const callUrl = createCallUrl();
  const mapsUrl =
    BUSINESS.googleMapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Pratapgarh Chicken House Pratapgarh"
    )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#101512] text-[#FAF8F2] border-t border-white/10 px-4 py-2.5 pb-[calc(0.6rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around max-w-sm mx-auto divide-x divide-white/10">
        {/* CALL */}
        <a
          href={callUrl}
          className="flex items-center justify-center gap-1.5 flex-1 py-1 text-xs font-sans font-medium text-[#FAF8F2]/90 hover:text-[#FAF8F2]"
        >
          <Phone className="w-4 h-4 text-[#809B83]" />
          <span>Call</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 flex-1 py-1 text-xs font-sans font-medium text-[#FAF8F2]/90 hover:text-[#FAF8F2]"
        >
          <MessageCircle className="w-4 h-4 text-[#809B83]" />
          <span>WhatsApp</span>
        </a>

        {/* LOCATION */}
        <a
          href={mapsUrl}
          target={BUSINESS.googleMapsUrl ? "_blank" : undefined}
          rel={BUSINESS.googleMapsUrl ? "noopener noreferrer" : undefined}
          className="flex items-center justify-center gap-1.5 flex-1 py-1 text-xs font-sans font-medium text-[#FAF8F2]/90 hover:text-[#FAF8F2]"
        >
          <MapPin className="w-4 h-4 text-[#809B83]" />
          <span>Location</span>
        </a>
      </div>
    </div>
  );
}
