import React from "react";
import { Sparkles, Scissors, ShieldCheck, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function TrustStrip() {
  const trustItems = [
    {
      title: "100% Fresh",
      subtitle: "Daily fresh stock",
      icon: Sparkles,
    },
    {
      title: "Fresh Cut Daily",
      subtitle: "Prepared fresh on order",
      icon: Scissors,
    },
    {
      title: "Clean & Safe",
      subtitle: "Hygienic handling & tools",
      icon: ShieldCheck,
    },
    {
      title: "Quality Assured",
      subtitle: "Trusted local freshness",
      icon: Award,
    },
  ];

  return (
    <section className="bg-[#073B2A] text-[#FCFAF4] border-y border-[#C5A15A]/20 py-6 sm:py-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-3.5 ${
                  idx !== 0 ? "pt-4 md:pt-0 md:pl-6" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E6B45]/40 border border-[#C5A15A]/30 text-[#C5A15A] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#FCFAF4]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FCFAF4]/70 font-sans">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
