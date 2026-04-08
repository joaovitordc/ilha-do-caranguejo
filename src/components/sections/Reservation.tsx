"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarBlank } from "@phosphor-icons/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { LOCATIONS } from "@/lib/constants";

export default function Reservation() {
  return (
    <section id="reservas" className="section-padding bg-[#1A1714] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ambiance/8F3A4155.jpg"
          alt="Ambiente Ilha do Caranguejo"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1714] via-[#1A1714]/70 to-[#1A1714]" />
      </div>

      {/* Decorative circle */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C44B2B] z-0"
      />

      <div className="container-custom relative z-10">
        <SectionWrapper>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#C44B2B]/20 border border-[#C44B2B]/30 flex items-center justify-center mb-6">
              <CalendarBlank size={26} weight="fill" className="text-[#C44B2B]" />
            </div>

            <p className="text-[#D4956A] text-sm tracking-[0.2em] uppercase font-medium mb-4">
              Faça seu evento conosco
            </p>

            <h2
              className="text-5xl md:text-6xl font-semibold text-[#FDFAF6] tracking-tight leading-none mb-6"
              style={{ fontFamily: "var(--font-clash-display)" }}
            >
              Faça sua
              <span className="text-[#C44B2B]"> reserva</span>
            </h2>

            <p className="text-[#FDFAF6]/60 text-lg mb-10 max-w-md">
              Reserve uma mesa ou organize seu evento especial em uma das
              nossas unidades em Vitória e Vila Velha.
            </p>

            {/* Location CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.id}
                  href={loc.ctaLink}
                  target={loc.ctaType === "link" ? "_blank" : undefined}
                  rel={loc.ctaType === "link" ? "noopener noreferrer" : undefined}
                  className="group flex-1 flex flex-col items-center gap-1.5 px-6 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all active:scale-[0.98]"
                >
                  <span className="text-xs text-[#D4956A] font-semibold tracking-widest uppercase">
                    {loc.city}
                  </span>
                  <span className="text-[#FDFAF6] font-semibold text-sm flex items-center gap-1.5">
                    {loc.neighborhood}
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
