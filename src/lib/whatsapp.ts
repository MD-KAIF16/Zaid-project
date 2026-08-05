import { BUSINESS } from "@/constants/business";

export const DEFAULT_WHATSAPP_MESSAGE = `Hello Pratapgarh Chicken House 👋

Mujhe chicken lena hai. Aaj chicken ka rate kya hai? Please bata dijiye.`;

/**
 * Creates a product-specific WhatsApp message dynamically based on product name.
 * Example for Curry Cut:
 * "Hello Pratapgarh Chicken House 👋
 *
 * Mujhe Curry Cut chicken lena hai. Aaj iska rate kya hai? Please bata dijiye."
 */
export function createProductWhatsAppMessage(productName: string): string {
  return `Hello Pratapgarh Chicken House 👋

Mujhe ${productName} chicken lena hai. Aaj iska rate kya hai? Please bata dijiye.`;
}

/**
 * Generates a correctly encoded wa.me URL for PCH with a custom prefilled message.
 * Target Phone: 8957537827 (+918957537827)
 */
export function createWhatsAppUrl(message?: string): string {
  const text = message || DEFAULT_WHATSAPP_MESSAGE;
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodedText}`;
}

/**
 * Generates a product-specific WhatsApp URL.
 */
export function createProductWhatsAppUrl(productName: string): string {
  const message = createProductWhatsAppMessage(productName);
  return createWhatsAppUrl(message);
}

/**
 * Generates direct tel: link for phone calls.
 */
export function createCallUrl(): string {
  return `tel:${BUSINESS.internationalPhone}`;
}
