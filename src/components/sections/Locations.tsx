"use client";

import { MapPin, Phone, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { StaggerWrapper, StaggerItem, SectionWrapper } from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { LOCATIONS } from "@/lib/constants";

export default function Locations() {
  return (
    <section id="localizacao" className="section-padding bg-[#FDFAF6]">
      <div className="container-custom">
        <SectionWrapper>
          <div className="flex flex-col items-center text-center mb-14">
            <Badge className="mb-4">Onde Estamos</Badge>
            <h2
              className="text-4xl md:text-5xl font-semibold text-[#1A1714] tracking-tight leading-none"
              style={{ fontFamily: "var(--font-clash-display)" }}
            >
              Venha nos visitar
            </h2>
          </div>
        </SectionWrapper>

        <StaggerWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {LOCATIONS.map((loc) => (
            <StaggerItem key={loc.id}>
              <div className="rounded-3xl overflow-hidden border border-[#E8E2DA] bg-white">
                {/* Map */}
                <div className="relative h-[240px] w-full bg-[#E8E2DA]">
                  <iframe
                    src={loc.mapEmbed}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${loc.name}`}
                    className="grayscale opacity-90"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-[#C44B2B] mb-1">
                        {loc.city}
                      </p>
                      <h3
                        className="text-xl font-semibold text-[#1A1714]"
                        style={{ fontFamily: "var(--font-clash-display)" }}
                      >
                        {loc.name}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-[#C44B2B]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} weight="fill" className="text-[#C44B2B]" />
                    </div>
                  </div>

                  <p className="text-[#6B6560] text-sm mb-1">{loc.neighborhood}</p>
                  <p className="text-[#6B6560] text-sm mb-5">{loc.address}</p>

                  {loc.phone && (
                    <div className="flex items-center gap-2 text-sm text-[#3A3530] mb-5">
                      <Phone size={14} />
                      <span>{loc.phone}</span>
                    </div>
                  )}

                  <Link
                    href={loc.ctaLink}
                    target={loc.ctaType === "link" ? "_blank" : undefined}
                    rel={loc.ctaType === "link" ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C44B2B] text-[#FDFAF6] text-sm font-semibold hover:bg-[#b03e22] transition-all active:scale-[0.97] group"
                  >
                    {loc.cta}
                    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight size={12} weight="bold" />
                    </span>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
