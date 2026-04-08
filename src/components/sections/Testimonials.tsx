"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quotes } from "@phosphor-icons/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="depoimentos" className="section-padding bg-[#1A1714] overflow-hidden">
      <div className="container-custom">
        <SectionWrapper>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Badge className="mb-4 bg-[#C44B2B]/20 text-[#D4956A] border-[#D4956A]/20">
                Depoimentos
              </Badge>
              <h2
                className="text-4xl md:text-5xl font-semibold text-[#FDFAF6] tracking-tight leading-none"
                style={{ fontFamily: "var(--font-clash-display)" }}
              >
                O que nossos
                <br />
                <span className="text-[#D4956A]">clientes dizem</span>
              </h2>
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-[#FDFAF6]/60 hover:text-[#FDFAF6] hover:border-white/30 hover:bg-white/5 transition-all"
                aria-label="Anterior"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-[#FDFAF6]/60 hover:text-[#FDFAF6] hover:border-white/30 hover:bg-white/5 transition-all"
                aria-label="Próximo"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </SectionWrapper>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {TESTIMONIALS.map((review, i) => (
              <div
                key={review.name}
                className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[calc(25%-12px)]"
              >
                <div className="h-full p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col gap-5">
                  {/* Quote icon */}
                  <Quotes size={28} weight="fill" className="text-[#C44B2B]/60" />

                  {/* Stars */}
                  <StarRating count={review.stars} />

                  {/* Text */}
                  <p className="text-[#FDFAF6]/75 text-sm leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#3A3530]">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[#FDFAF6] text-sm font-semibold">{review.name}</p>
                      <p className="text-[#6B6560] text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-6 bg-[#C44B2B]" : "w-1.5 bg-white/20"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
