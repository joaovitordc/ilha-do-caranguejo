"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98] cursor-pointer";

  const variants = {
    primary:
      "bg-[#C44B2B] text-[#FDFAF6] hover:bg-[#b03e22] shadow-[0_2px_20px_rgba(196,75,43,0.3)] hover:shadow-[0_4px_28px_rgba(196,75,43,0.45)]",
    secondary:
      "bg-[#FDFAF6]/10 text-[#FDFAF6] border border-[#FDFAF6]/20 hover:bg-[#FDFAF6]/20 backdrop-blur-sm",
    ghost:
      "bg-transparent text-[#1A1714] border border-[#E8E2DA] hover:bg-[#1A1714]/5",
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...linkProps}
    >
      {children}
      <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight size={14} weight="bold" />
      </span>
    </Link>
  );
}
