import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { createWhatsAppUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = createWhatsAppUrl(product.customWhatsAppMessage);

  return (
    <div className="group flex flex-col bg-[#FAF8F2] rounded-lg border border-[#172019]/10 overflow-hidden h-full">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#071B14]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-103 transition-transform duration-500"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 p-5 justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#172019]">
              {product.name}
            </h3>
            {product.indicativeRate && (
              <span className="font-serif text-base sm:text-lg text-[#172019]">
                {product.indicativeRate}
                <span className="text-xs text-[#667068] font-sans ml-0.5">
                  {product.unit}
                </span>
              </span>
            )}
          </div>

          <p className="text-xs text-[#24523D] font-sans font-medium mb-2">
            {product.hindiName}
          </p>

          <p className="text-xs sm:text-sm text-[#667068] leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Action Link: NO CART ICON! */}
        <div className="pt-3 border-t border-[#172019]/10 flex items-center justify-between">
          <span className="text-[11px] text-[#667068] font-sans">
            Prepared fresh daily
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#24523D] hover:underline flex items-center gap-1 font-sans"
          >
            <span>Inquire</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
