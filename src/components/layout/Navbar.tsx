"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { MobileMenu } from "./MobileMenu";
import { PchLogo } from "@/components/ui/PchLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Today's rate", href: "#rates" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Visit", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F6F2E8]/95 backdrop-blur-md border-b border-[#DDD7CB] py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Header Brand Logo (Rooster Graphic + PCH + PRATAPGARH CHICKEN HOUSE) */}
            <PchLogo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm text-[#686D68] hover:text-[#163D2D] font-sans tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Single Contact Action */}
            <div className="hidden sm:flex items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#163D2D] hover:text-[#151A17] transition-colors py-1.5 px-3.5 rounded border border-[#163D2D]/30 hover:border-[#163D2D]"
              >
                <span>Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${BUSINESS.internationalPhone}`}
                aria-label="Call Shop"
                className="p-2 text-[#163D2D] border border-[#DDD7CB] rounded active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Mobile Menu"
                className="p-2 text-[#151A17] rounded border border-[#DDD7CB] active:scale-95 transition-all"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
