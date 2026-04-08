import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Clash Display Variable — loaded from public/fonts
export const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
  fallback: ["Trebuchet MS", "system-ui", "sans-serif"],
});
