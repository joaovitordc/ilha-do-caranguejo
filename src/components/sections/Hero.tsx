"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { SITE, SPECIALTIES } from "@/lib/constants";
import { staggerContainer, fadeUpBlur } from "@/lib/animations";

const SPECIALTY_ICONS = [
  { label: "Caranguejo", icon: "/images/icons/crabicon.png" },
  { label: "Moquecas", icon: "/images/icons/cooking.png" },
  { label: "Petiscos", icon: "/images/icons/petisco.png" },
  { label: "Área Kids", icon: "/images/icons/playground.png" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <Image
          src="/images/ambiance/IRO2277.jpg"
          alt="Ilha do Caranguejo"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1714]/70 via-[#1A1714]/50 to-[#1A1714]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714]/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-custom flex flex-col items-center text-center pt-20"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mb-4 md:mb-8"
        >
          <Image
            src="/images/logo.svg"
            alt="Ilha do Caranguejo"
            width={135}
            height={135}
            className="object-contain mx-auto"
            priority
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#D4956A] text-sm tracking-[0.25em] uppercase font-medium mb-4"
        >
          Vitória & Vila Velha · ES
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 48, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold text-[#FDFAF6] tracking-tight leading-none mb-4 max-w-4xl"
          style={{ fontFamily: "var(--font-clash-display)" }}
        >
          O ponto turístico da culinária
          <span className="text-[#C44B2B]"> capixaba.</span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-xl text-[#FDFAF6] max-w-xl mb-6 md:mb-10"
        >
          Servindo o melhor da culinária capixaba para toda a família.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-8 md:mb-16"
        >
          <Button href="#reservas" variant="primary">
            Fazer Reserva
          </Button>
          <Button href={SITE.menuUrl} variant="secondary" external>
            Ver Cardápio
          </Button>
        </motion.div>

        {/* Specialty pills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3"
        >
          {SPECIALTY_ICONS.map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#FDFAF6]/10 backdrop-blur-sm border border-[#FDFAF6]/15 text-[#FDFAF6] text-xs sm:text-sm font-medium"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="object-contain brightness-0 invert opacity-80"
              />
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#FDFAF6]/40 text-xs tracking-widest uppercase">
          Role para baixo
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#FDFAF6]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
