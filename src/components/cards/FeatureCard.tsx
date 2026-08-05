import React from "react";
import { Sparkles, ShieldCheck, Scissors, Award, Truck, Clock } from "lucide-react";
import { Feature } from "@/types";
import { cn } from "@/lib/utils";

const iconMap = {
  Sparkles,
  ShieldCheck,
  Scissors,
  Award,
  Truck,
  Clock,
};

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const IconComponent = iconMap[feature.iconName] || Sparkles;

  return (
    <div
      className={cn(
        "flex flex-col p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FCFAF4] border border-[#073B2A]/08 hover:border-[#1E6B45]/30 transition-all duration-300 hover:shadow-md group",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-[#1E6B45]/10 text-[#1E6B45] group-hover:bg-[#1E6B45] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4 shrink-0">
        <IconComponent className="w-6 h-6 stroke-[1.75]" />
      </div>

      <h3 className="font-serif text-lg font-bold text-[#041F17] mb-2 group-hover:text-[#1E6B45] transition-colors">
        {feature.title}
      </h3>

      <p className="text-xs sm:text-sm text-[#171A18]/70 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
