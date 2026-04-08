import type { Metadata } from "next";
import { jakarta, clashDisplay } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ilhadocaranguejo.vercel.app"),
  title: "Ilha do Caranguejo | O ponto turístico da culinária capixaba",
  description:
    "Servindo o melhor da culinária capixaba. Caranguejo, moquecas e petiscos em Vitória e Vila Velha - ES. Faça sua reserva!",
  keywords: ["ilha do caranguejo", "restaurante vitoria", "culinaria capixaba", "moqueca", "caranguejo es"],
  icons: { icon: "/images/logo.svg" },
  openGraph: {
    title: "Ilha do Caranguejo",
    description: "O ponto turístico da culinária capixaba",
    url: "https://ilhadocaranguejo.com.br",
    siteName: "Ilha do Caranguejo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/ambiance/IRO2277.jpg",
        width: 1200,
        height: 630,
        alt: "Ilha do Caranguejo",
      },
    ],
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
