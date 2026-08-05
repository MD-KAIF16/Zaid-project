import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { Container } from "@/components/ui/Container";

export function LocationSection() {
  const mapsUrl =
    BUSINESS.googleMapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Pratapgarh Chicken House Pratapgarh Uttar Pradesh"
    )}`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FBF9F4] text-[#151A17]">
      <Container size="default">
        <div className="max-w-xl mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#151A17]">
            Visit us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Preview */}
          <div className="lg:col-span-7 rounded bg-[#151A17] border border-[#DDD7CB] overflow-hidden min-h-[300px] flex items-center justify-center p-8 text-center text-[#FBF9F4]">
            <div className="max-w-sm">
              <MapPin className="w-8 h-8 text-[#526B59] mx-auto mb-3" />
              <h3 className="font-serif font-normal text-2xl mb-1">
                {BUSINESS.name}
              </h3>
              <p className="text-xs text-[#FBF9F4]/60 mb-6 font-sans">
                {BUSINESS.addressPlaceholder}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#FBF9F4] py-2 px-4 rounded border border-white/20 hover:border-white/40 transition-colors"
              >
                <span>Get directions →</span>
              </a>
            </div>
          </div>

          {/* Shop Info */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded bg-[#F6F2E8] border border-[#DDD7CB]">
            <div>
              <h3 className="font-serif text-2xl text-[#151A17] mb-5 font-normal">
                Shop details
              </h3>

              <div className="flex flex-col gap-4 text-xs sm:text-sm font-sans">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#686D68] font-medium mb-1">
                    Address
                  </h4>
                  <p className="font-medium text-[#151A17]">{BUSINESS.address}</p>
                  <p className="text-[#686D68]">{BUSINESS.addressPlaceholder}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#686D68] font-medium mb-1">
                    Timings
                  </h4>
                  <p className="font-medium text-[#151A17]">{BUSINESS.openingHours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DDD7CB]">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#163D2D] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Open in Google Maps →</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
