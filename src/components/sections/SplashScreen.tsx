"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { splashLogo, splashOverlay } from "@/lib/animations";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on first visit per session
    const shown = sessionStorage.getItem("splash-shown");
    if (!shown) {
      setVisible(true);
      sessionStorage.setItem("splash-shown", "1");
      const timer = setTimeout(() => setVisible(false), 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={splashOverlay}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#1A1714]"
        >
          <div className="noise-overlay" aria-hidden="true" />

          {/* Animated rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            className="absolute w-[500px] h-[500px] rounded-full border border-[#C44B2B]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            className="absolute w-[700px] h-[700px] rounded-full border border-[#C44B2B]"
          />

          {/* Logo */}
          <motion.div
            variants={splashLogo}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <Image
              src="/images/logo.svg"
              alt="Ilha do Caranguejo"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[#FDFAF6] text-xs tracking-[0.3em] uppercase font-medium"
            >
              culinária capixaba
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
