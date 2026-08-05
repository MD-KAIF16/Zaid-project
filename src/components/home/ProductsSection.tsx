import React from "react";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { createWhatsAppUrl, createProductWhatsAppUrl } from "@/lib/whatsapp";

export function ProductsSection() {
  const generalWhatsappUrl = createWhatsAppUrl();

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FBF9F4] text-[#151A17]">
      <Container size="default">
        <div className="max-w-xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#151A17] tracking-tight mb-1">
            Our cuts
          </h2>
          <p className="text-xs sm:text-sm text-[#686D68] font-sans">
            Prepared fresh daily to order.
          </p>
        </div>

        {/* Product Showcase Grid with Dynamic Product WhatsApp Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PRODUCTS.map((product) => {
            const productWhatsappUrl = createProductWhatsAppUrl(product.name);

            return (
              <div key={product.id} className="flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full rounded bg-[#F6F2E8] border border-[#DDD7CB] overflow-hidden mb-3">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-serif text-xl font-normal text-[#151A17] mb-0.5">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#526B59] mb-1.5 font-sans">
                    {product.hindiName}
                  </p>
                  <p className="text-xs sm:text-sm text-[#686D68] leading-relaxed mb-3">
                    {product.description}
                  </p>
                </div>

                <a
                  href={productWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#163D2D] hover:underline inline-flex items-center gap-1 mt-1 font-sans"
                >
                  <span>Inquire on WhatsApp →</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Section Footer */}
        <div className="pt-6 border-t border-[#DDD7CB] flex items-center justify-between text-xs sm:text-sm text-[#686D68]">
          <span>Need a custom cut or specific quantity?</span>
          <a
            href={generalWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#163D2D] font-medium hover:underline inline-flex items-center gap-1.5"
          >
            <span>Ask about a cut →</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
