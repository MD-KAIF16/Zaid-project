import React from "react";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-[#073B2A]/08 shadow-sm hover:shadow-md transition-shadow relative">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-[#C5A15A]/20" />

      <div>
        <div className="flex items-center gap-1 mb-4 text-[#C5A15A]">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        <p className="text-sm sm:text-base text-[#171A18]/80 italic leading-relaxed mb-6">
          "{testimonial.content}"
        </p>
      </div>

      <div className="pt-4 border-t border-[#073B2A]/05 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#073B2A] text-[#C5A15A] font-serif font-bold text-sm flex items-center justify-center">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-sm text-[#041F17]">
            {testimonial.author}
          </h4>
          <p className="text-xs text-[#171A18]/60">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
