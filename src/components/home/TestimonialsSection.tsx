import React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FCFAF4]">
      <Container>
        <SectionHeading
          eyebrow="CUSTOMER REVIEWS"
          title="Trusted by Our Customers"
          hindiTitle="ग्राहकों का अटूट भरोसा"
          description="See what local families and regular customers in Pratapgarh say about our daily freshness and clean cuts."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
