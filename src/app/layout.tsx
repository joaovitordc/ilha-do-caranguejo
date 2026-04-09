import type { Metadata } from "next";
import { jakarta, clashDisplay } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ilha-do-caranguejo.vercel.app"),
  title: "Ilha do Caranguejo | O ponto turístico da culinária capixaba",
  description:
    "Servindo o melhor da culinária capixaba. Caranguejo, moquecas e petiscos em Vitória e Vila Velha - ES. Faça sua reserva!",
  keywords: ["ilha do caranguejo", "restaurante vitoria", "culinaria capixaba", "moqueca", "caranguejo es"],
  icons: { icon: "/images/logo.svg" },
  openGraph: {
    title: "Ilha do Caranguejo",
    description: "O ponto turístico da culinária capixaba",
    url: "https://ilha-do-caranguejo.vercel.app",
    siteName: "Ilha do Caranguejo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        alt: "Ilha do Caranguejo — culinária capixaba em Vitória e Vila Velha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilha do Caranguejo",
    description: "O ponto turístico da culinária capixaba",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${clashDisplay.variable}`}
    >
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
