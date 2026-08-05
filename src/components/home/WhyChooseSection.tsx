import React from "react";
import { Container } from "@/components/ui/Container";

export function WhyChooseSection() {
  const points = [
    {
      num: "01",
      title: "Fresh preparation",
      desc: "Prepared regularly for everyday freshness.",
    },
    {
      num: "02",
      title: "Clean cutting",
      desc: "Careful and hygienic preparation.",
    },
    {
      num: "03",
      title: "Dependable service",
      desc: "Simple service you can rely on.",
    },
  ];

  return (
    <section id="why-pch" className="py-16 sm:py-24 bg-[#151A17] text-[#FBF9F4]">
      <Container size="default">
        <div className="max-w-xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#FBF9F4] tracking-tight leading-tight">
            Simple things, <br />
            <span className="italic text-[#526B59]">done properly.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {points.map((item, idx) => (
            <div
              key={item.num}
              className={`flex flex-col ${idx !== 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}
            >
              <span className="font-serif text-3xl sm:text-4xl text-[#A88D5B] mb-3 font-normal">
                {item.num}
              </span>
              <h3 className="font-serif text-xl font-normal text-[#FBF9F4] mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FBF9F4]/70 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
