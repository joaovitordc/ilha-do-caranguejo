// ============================================
// ILHA DO CARANGUEJO — Framer Motion Variants
// ============================================

export const SPRING = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
  mass: 1,
};

export const EASE_SPRING: [number, number, number, number] = [0.32, 0.72, 0, 1];

// Fade up with blur — main scroll entry animation
export const fadeUpBlur = {
  hidden: {
    opacity: 0,
    y: 64,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: EASE_SPRING,
    },
  },
};

// Stagger container for children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Simple fade in
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_SPRING },
  },
};

// Slide in from left
export const slideInLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_SPRING },
  },
};

// Slide in from right
export const slideInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_SPRING },
  },
};

// Scale in
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_SPRING },
  },
};

// Splash logo animation
export const splashLogo = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_SPRING },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    transition: { duration: 0.5, ease: [0.4, 0, 1, 1] as [number,number,number,number] },
  },
};

// Splash overlay exit
export const splashOverlay = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 1, 1] as [number,number,number,number], delay: 0.1 },
  },
};

// Nav item stagger
export const navItemVariant = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_SPRING },
  },
};

// Mobile menu overlay
import type { Variants } from "framer-motion";

export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// Mobile menu link
export const mobileMenuLink = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: EASE_SPRING,
      delay: i * 0.07,
    },
  }),
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 },
  },
};
