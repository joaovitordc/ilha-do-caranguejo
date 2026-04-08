"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { mobileMenuOverlay, mobileMenuLink } from "@/lib/animations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Floating pill nav */}
      <AnimatePresence>
        {scrolled && (
          <motion.header
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
          >
            <div className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-full bg-[#1A1714]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
              {/* Logo */}
              <Link href="#" className="flex-shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="Ilha do Caranguejo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </Link>

              {/* Desktop links */}
              <nav className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-1.5 text-sm text-[#FDFAF6]/70 hover:text-[#FDFAF6] transition-colors duration-200 rounded-full hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* CTA + hamburger */}
              <div className="flex items-center gap-2">
                <Link
                  href="#reservas"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C44B2B] text-[#FDFAF6] text-sm font-semibold transition-all duration-300 hover:bg-[#b03e22] active:scale-[0.97]"
                >
                  Reservar
                </Link>
                <button
                  onClick={() => setMenuOpen(true)}
                  className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-[#FDFAF6] hover:bg-white/15 transition-colors"
                  aria-label="Abrir menu"
                >
                  <List size={18} weight="bold" />
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuOverlay}
            className="fixed inset-0 z-[60] flex flex-col bg-[#1A1714]/95 backdrop-blur-3xl"
          >
            <div className="noise-overlay opacity-[0.04]" aria-hidden="true" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6">
              <Image
                src="/images/logo.svg"
                alt="Ilha do Caranguejo"
                width={40}
                height={40}
                className="object-contain"
              />
              <button
                onClick={closeMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-[#FDFAF6] hover:bg-white/20 transition-colors"
                aria-label="Fechar menu"
              >
                <X size={18} weight="bold" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={mobileMenuLink}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-4 text-3xl font-semibold text-[#FDFAF6]/80 hover:text-[#FDFAF6] transition-colors border-b border-white/10"
                    style={{ fontFamily: "var(--font-clash-display)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={NAV_LINKS.length}
                variants={mobileMenuLink}
                initial="hidden"
                animate="visible"
                className="mt-8"
              >
                <Link
                  href="#reservas"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center w-full py-4 rounded-2xl bg-[#C44B2B] text-[#FDFAF6] text-lg font-semibold transition-all hover:bg-[#b03e22]"
                >
                  Fazer Reserva
                </Link>
              </motion.div>
            </nav>

            {/* Footer social */}
            <div className="px-8 pb-10 flex gap-4 text-sm text-[#FDFAF6]/40">
              <Link href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#FDFAF6] transition-colors">
                Instagram
              </Link>
              <Link href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#FDFAF6] transition-colors">
                Facebook
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
