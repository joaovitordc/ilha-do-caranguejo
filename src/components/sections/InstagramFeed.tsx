"use client";

import Link from "next/link";
import { InstagramLogo } from "@phosphor-icons/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { SITE } from "@/lib/constants";

// Static preview grid using our downloaded photos
// In production, this could be replaced with Instagram API
const PREVIEW_PHOTOS = [
  "/images/food/IRO2920.jpg",
  "/images/ambiance/8F3A4011.jpg",
  "/images/food/IRO0441.jpg",
  "/images/ambiance/IRO2277.jpg",
  "/images/food/IMG_0508.jpg",
  "/images/ambiance/IMG_5239.jpg",
];

export default function InstagramFeed() {
  return (
    <section className="section-padding bg-[#FDFAF6]">
      <div className="container-custom">
        <SectionWrapper>
          <div className="flex flex-col items-center text-center mb-10">
            <Badge className="mb-4">Instagram</Badge>
            <h2
              className="text-3xl md:text-4xl font-semibold text-[#1A1714] tracking-tight leading-none mb-4"
              style={{ fontFamily: "var(--font-clash-display)" }}
            >
              Siga a nossa jornada
            </h2>
            <Link
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C44B2B] font-semibold text-sm hover:underline"
            >
              <InstagramLogo size={18} weight="fill" />
              @ilhadocaranguejo
            </Link>
          </div>
        </SectionWrapper>

        {/* Instagram grid */}
        <SectionWrapper delay={0.1}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 rounded-3xl overflow-hidden">
            {PREVIEW_PHOTOS.map((src, i) => (
              <Link
                key={i}
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Post Instagram ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1A1714]/0 group-hover:bg-[#1A1714]/30 transition-colors flex items-center justify-center">
                  <InstagramLogo
                    size={28}
                    weight="fill"
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
