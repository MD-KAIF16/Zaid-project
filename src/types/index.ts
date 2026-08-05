export interface Product {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  freshnessBadge: string;
  image: string;
  indicativeRate?: string;
  unit?: string;
  customWhatsAppMessage: string;
  isPopular?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: "Sparkles" | "ShieldCheck" | "Scissors" | "Award" | "Truck" | "Clock";
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
