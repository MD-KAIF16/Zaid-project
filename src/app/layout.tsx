import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/constants/business";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Modern Fresh Chicken Butcher`,
  description: `${BUSINESS.name} (${BUSINESS.hindiName}) — Fresh chicken prepared with care in Pratapgarh. Contact Farmaan Bhai for today's rate & home delivery.`,
  keywords: [
    "Pratapgarh Chicken House",
    "PCH",
    "Fresh Chicken Pratapgarh",
    "Farmaan Bhai Chicken Shop",
    "Fresh Cut Chicken",
    "Clean Chicken Meat"
  ],
  authors: [{ name: BUSINESS.owner }],
  metadataBase: new URL("https://pch-fresh.vercel.app"),
  openGraph: {
    title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    description: "Fresh cuts prepared daily with cleanliness, care and quality at the centre of everything.",
    siteName: BUSINESS.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero_raw_chicken.png",
        width: 1200,
        height: 630,
        alt: BUSINESS.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.name,
    description: BUSINESS.tagline,
    images: ["/images/hero_raw_chicken.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ButcherShop",
    "name": BUSINESS.name,
    "alternateName": BUSINESS.hindiName,
    "description": `${BUSINESS.tagline}. Fresh chicken prepared with care.`,
    "telephone": BUSINESS.internationalPhone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pratapgarh",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 07:00-21:30",
    "priceRange": "$$",
    "image": "https://pch-fresh.vercel.app/images/hero_raw_chicken.png",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${manrope.variable} ${devanagari.variable} antialiased bg-[#FAF8F2] text-[#1A1E1B] min-h-screen flex flex-col font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
