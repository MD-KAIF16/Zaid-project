import React from "react";
import { BUSINESS } from "@/constants/business";
import { Container } from "@/components/ui/Container";
import { createWhatsAppUrl, createCallUrl } from "@/lib/whatsapp";
import { PchLogo } from "@/components/ui/PchLogo";

export function Footer() {
  return (
    <footer className="bg-[#151A17] text-[#FBF9F4] border-t border-white/10 pt-12 pb-10">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 items-start">
          {/* Brand Logo Lockup */}
          <div className="md:col-span-6 flex flex-col items-start">
            <PchLogo dark className="mb-2" />
            <p className="text-xs text-[#526B59] font-sans">
              "{BUSINESS.tagline}"
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#526B59] font-sans font-medium mb-3">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#FBF9F4]/75 font-sans">
              <li><a href="#rates" className="hover:text-[#FBF9F4] transition-colors">Today's rate</a></li>
              <li><a href="#products" className="hover:text-[#FBF9F4] transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-[#FBF9F4] transition-colors">Our story</a></li>
              <li><a href="#gallery" className="hover:text-[#FBF9F4] transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-[#FBF9F4] transition-colors">Visit us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#526B59] font-sans font-medium mb-3">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#FBF9F4]/75 font-sans">
              <li><a href={createCallUrl()} className="hover:text-[#FBF9F4] transition-colors">{BUSINESS.displayPhone}</a></li>
              <li><a href={createWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#FBF9F4] transition-colors">WhatsApp →</a></li>
              <li><span>Proprietor: {BUSINESS.owner}</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#FBF9F4]/40 font-sans">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <a href="#hero" className="hover:text-[#FBF9F4] transition-colors">Back to top ↑</a>
        </div>
      </Container>
    </footer>
  );
}
