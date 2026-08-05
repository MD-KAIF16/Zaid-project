import React from "react";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function TodayRateSection() {
  const whatsappUrl = createWhatsAppUrl();

  return (
    <section id="rates" className="py-16 sm:py-24 bg-[#F6F2E8] text-[#151A17]">
      <Container size="default">
        {/* Header */}
        <div className="max-w-xl mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#151A17] tracking-tight mb-1">
            Today's fresh rate
          </h2>
          <p className="text-xs sm:text-sm text-[#686D68] font-sans">
            Rates may change daily depending on fresh stock.
          </p>
        </div>

        {/* Butcher Price List */}
        <div className="max-w-3xl border-t border-b border-[#DDD7CB] divide-y divide-[#DDD7CB]">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="py-4 sm:py-5 flex items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-serif text-lg sm:text-2xl text-[#151A17] font-normal">
                  {product.name}
                </h3>
                <p className="text-xs text-[#686D68] font-sans">
                  {product.hindiName}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="font-serif text-lg sm:text-2xl font-normal text-[#151A17]">
                  {product.indicativeRate || "Daily Rate"}
                </span>
                {product.unit && (
                  <span className="text-xs text-[#686D68] font-sans ml-1">
                    {product.unit}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Single WhatsApp Action at Bottom */}
        <div className="mt-8 max-w-3xl flex items-center justify-between text-xs sm:text-sm text-[#686D68]">
          <span>For today's latest market rate:</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#163D2D] font-medium hover:underline inline-flex items-center gap-1.5"
          >
            <span>WhatsApp →</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
