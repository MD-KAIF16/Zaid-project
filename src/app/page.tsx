import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Footer } from "@/components/layout/Footer";

import { HeroSection } from "@/components/home/HeroSection";
import { TodayRateSection } from "@/components/home/TodayRateSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { AboutSection } from "@/components/home/AboutSection";
import { GallerySection } from "@/components/home/GallerySection";
import { DeliverySection } from "@/components/home/DeliverySection";
import { LocationSection } from "@/components/home/LocationSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F2E8] text-[#151A17]">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content - Streamlined 8-Section Body */}
      <main className="flex-1 pb-mobile-bar">
        {/* 2. Hero */}
        <HeroSection />

        {/* 3. Today's Rate */}
        <TodayRateSection />

        {/* 4. Products ("Our cuts") */}
        <ProductsSection />

        {/* 5. Why PCH ("Simple things, done properly.") */}
        <WhyChooseSection />

        {/* 6. About PCH */}
        <AboutSection />

        {/* 7. Gallery */}
        <GallerySection />

        {/* 8. Delivery + Contact (Merged) */}
        <DeliverySection />

        {/* 9. Location / Map */}
        <LocationSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Persistent Mobile Action Bar */}
      <MobileActionBar />
    </div>
  );
}
