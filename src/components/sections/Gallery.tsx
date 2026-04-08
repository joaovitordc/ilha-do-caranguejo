"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper, StaggerWrapper, StaggerItem } from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-[#FDFAF6]">
      <div className="container-custom">
        <SectionWrapper>
          <div className="flex flex-col items-center text-center mb-14">
            <Badge className="mb-4">Galeria</Badge>
            <h2
              className="text-4xl md:text-5xl font-semibold text-[#1A1714] tracking-tight leading-none max-w-lg"
              style={{ fontFamily: "var(--font-clash-display)" }}
            >
              Momentos que
              <span className="text-[#C44B2B]"> ficam</span>
            </h2>
          </div>
        </SectionWrapper>

        {/* Asymmetric Bento grid */}
        <StaggerWrapper className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {/* Large item 1 — spans 2 cols and 2 rows */}
          <StaggerItem className="col-span-2 row-span-2">
            <GalleryCard image={GALLERY_IMAGES[0]} tall />
          </StaggerItem>

          {/* Small item 2 */}
          <StaggerItem className="col-span-1 row-span-1">
            <GalleryCard image={GALLERY_IMAGES[1]} />
          </StaggerItem>

          {/* Small item 3 */}
          <StaggerItem className="col-span-1 row-span-1">
            <GalleryCard image={GALLERY_IMAGES[2]} />
          </StaggerItem>

          {/* Large item 4 — spans 2 rows */}
          <StaggerItem className="col-span-2 row-span-2">
            <GalleryCard image={GALLERY_IMAGES[3]} tall />
          </StaggerItem>

          {/* Small items */}
          <StaggerItem className="col-span-1 row-span-1">
            <GalleryCard image={GALLERY_IMAGES[4]} />
          </StaggerItem>
          <StaggerItem className="col-span-1 row-span-1">
            <GalleryCard image={GALLERY_IMAGES[5]} />
          </StaggerItem>

          {/* Wide item */}
          <StaggerItem className="col-span-2 row-span-1">
            <GalleryCard image={GALLERY_IMAGES[6]} />
          </StaggerItem>

          {/* Last item */}
          <StaggerItem className="col-span-2 row-span-1">
            <GalleryCard image={GALLERY_IMAGES[7]} />
          </StaggerItem>
        </StaggerWrapper>
      </div>
    </section>
  );
}

function GalleryCard({
  image,
  tall = false,
}: {
  image: { src: string; alt: string };
  tall?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className="relative w-full h-full rounded-2xl overflow-hidden group"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-[#1A1714]/0 group-hover:bg-[#1A1714]/10 transition-colors duration-300" />
    </motion.div>
  );
}
