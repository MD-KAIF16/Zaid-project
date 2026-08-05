import React from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/gallery";
import { Container } from "@/components/ui/Container";

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FBF9F4] text-[#151A17]">
      <Container size="default">
        <div className="max-w-xl mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#151A17]">
            Gallery
          </h2>
        </div>

        {/* Small 5-Photo Portfolio Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`relative rounded bg-[#F6F2E8] border border-[#DDD7CB] overflow-hidden ${
                idx === 0 ? "sm:col-span-2 aspect-[16/10]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
