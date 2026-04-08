"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StaggerWrapper, StaggerItem, SectionWrapper } from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { SPECIALTIES } from "@/lib/constants";

export default function Specialties() {
  return (
    <section id="especialidades" className="section-padding bg-[#1A1714] overflow-hidden">
      <div className="container-custom">
        <SectionWrapper>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Badge className="mb-4 bg-[#C44B2B]/20 text-[#D4956A] border-[#D4956A]/20">
                Especialidades
              </Badge>
              <h2
                className="text-4xl md:text-5xl font-semibold text-[#FDFAF6] tracking-tight leading-none"
                style={{ fontFamily: "var(--font-clash-display)" }}
              >
                O melhor do mar
                <br />
                <span className="text-[#D4956A]">na sua mesa</span>
              </h2>
            </div>
            <p className="text-[#6B6560] max-w-[36ch] text-sm leading-relaxed">
              Cada prato preparado com ingredientes frescos e as receitas
              tradicionais que fazem o Espírito Santo famoso no Brasil.
            </p>
          </div>
        </SectionWrapper>

        {/* Cards grid */}
        <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SPECIALTIES.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="group relative h-[420px] rounded-3xl overflow-hidden cursor-default"
              >
                {/* Background image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-[#1A1714]/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={28}
                      height={28}
                      className="object-contain brightness-0 invert opacity-90"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className="text-2xl font-semibold text-[#FDFAF6] mb-2"
                      style={{ fontFamily: "var(--font-clash-display)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#FDFAF6]/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Color accent bottom border */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: item.color }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
