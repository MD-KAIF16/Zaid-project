"use client";

import React from "react";
import { X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/constants/business";
import { Button } from "@/components/ui/Button";
import { createWhatsAppUrl, createCallUrl } from "@/lib/whatsapp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ name: string; href: string }>;
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#101512]/70 backdrop-blur-sm lg:hidden"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#FAF8F2] text-[#1A1E1B] border-l border-[#D8D0C1] p-6 flex flex-col justify-between lg:hidden shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#D8D0C1] pb-4 mb-6">
                <div>
                  <span className="font-serif text-sm block text-[#1A1E1B]">
                    {BUSINESS.name}
                  </span>
                  <span className="text-xs text-[#686D68] block">
                    {BUSINESS.hindiName}
                  </span>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-1.5 text-[#1A1E1B]/70 hover:text-[#1A1E1B] rounded border border-[#D8D0C1]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="py-3 px-3 rounded text-sm text-[#1A1E1B] hover:bg-[#F3EFE5] transition-all flex items-center justify-between font-sans"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#697B58]">→</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#D8D0C1] flex flex-col gap-2">
              <Button
                href={createWhatsAppUrl()}
                external
                variant="primary"
                size="md"
                className="w-full text-xs"
              >
                WhatsApp us →
              </Button>

              <Button
                href={createCallUrl()}
                variant="outline"
                size="md"
                className="w-full text-xs"
              >
                Call {BUSINESS.displayPhone}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
