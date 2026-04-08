"use client";

import Image from "next/image";
import { StaggerWrapper, StaggerItem, SectionWrapper } from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { MISSION } from "@/lib/constants";

const cards = [
  { label: "Missão", text: MISSION.mission, color: "#C44B2B" },
  { label: "Visão", text: MISSION.vision, color: "#D4956A" },
  { label: "Valores", text: MISSION.values, color: "#2D6A5A" },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-[#FDFAF6]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text content */}
          <div>
            <SectionWrapper>
              <Badge className="mb-6">Sobre Nós</Badge>
            </SectionWrapper>

            <SectionWrapper delay={0.05}>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A1714] tracking-tight leading-none mb-6"
                style={{ fontFamily: "var(--font-clash-display)" }}
              >
                Servindo o melhor da culinária
                <span className="text-[#C44B2B]"> capixaba</span>
              </h2>
            </SectionWrapper>

            <SectionWrapper delay={0.1}>
              <p className="text-[#6B6560] text-lg leading-relaxed mb-10 max-w-[52ch]">
                O Ilha do Caranguejo nasceu com o sonho de se tornar o ponto de
                encontro da gastronomia capixaba. Um lugar onde a tradição se
                encontra com a alegria, a família e os melhores frutos do mar.
              </p>
            </SectionWrapper>

            {/* Mission/Vision/Values cards */}
            <StaggerWrapper className="flex flex-col gap-4">
              {cards.map((card) => (
                <StaggerItem key={card.label}>
                  <div className="flex gap-4 p-5 rounded-2xl border border-[#E8E2DA] bg-white hover:border-[#D1C9BF] transition-colors group">
                    <div
                      className="w-1 rounded-full flex-shrink-0 mt-1"
                      style={{ backgroundColor: card.color }}
                    />
                    <div>
                      <p
                        className="text-xs font-semibold tracking-widest uppercase mb-1.5"
                        style={{ color: card.color }}
                      >
                        {card.label}
                      </p>
                      <p className="text-[#3A3530] text-sm leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerWrapper>
          </div>

          {/* Right: Image collage */}
          <SectionWrapper delay={0.15}>
            <div className="relative h-[520px] lg:h-[600px]">
              {/* Main large image */}
              <div className="absolute top-0 right-0 w-[75%] h-[70%] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ambiance/servindo.jpg"
                  alt="Equipe Ilha do Caranguejo"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Secondary image */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-xl border-4 border-[#FDFAF6]">
                <Image
                  src="/images/food/IRO2920.jpg"
                  alt="Prato de caranguejo"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute top-[62%] right-[2%] bg-[#C44B2B] text-[#FDFAF6] px-5 py-3 rounded-2xl shadow-xl z-10">
                <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-clash-display)" }}>+15</p>
                <p className="text-xs opacity-80">anos de tradição</p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
