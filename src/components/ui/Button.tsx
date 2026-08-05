import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99] font-sans tracking-wide text-xs sm:text-sm";

  const variantStyles = {
    primary:
      "bg-[#173C2D] text-[#FAF8F2] hover:bg-[#101512] focus:ring-[#173C2D]",
    whatsapp:
      "bg-[#173C2D] text-[#FAF8F2] hover:bg-[#101512] focus:ring-[#173C2D]",
    secondary:
      "bg-[#F3EFE5] text-[#1A1E1B] hover:bg-[#E8E2D5] border border-[#D8D0C1] focus:ring-[#1A1E1B]",
    dark:
      "bg-[#101512] text-[#FAF8F2] hover:bg-[#173C2D] border border-white/10 focus:ring-[#101512]",
    outline:
      "bg-transparent text-[#1A1E1B] border border-[#1A1E1B]/20 hover:border-[#173C2D] hover:text-[#173C2D] focus:ring-[#173C2D]",
  };

  const sizeStyles = {
    sm: "px-3.5 py-2 min-h-[38px] gap-1.5",
    md: "px-5 py-2.5 min-h-[44px] gap-2",
    lg: "px-6 py-3 min-h-[48px] gap-2",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https:")) {
      return (
        <a
          href={href}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
