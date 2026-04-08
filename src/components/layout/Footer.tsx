import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0F0D0B] text-[#FDFAF6]">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Ilha do Caranguejo"
              width={56}
              height={56}
              className="object-contain brightness-0 invert mb-4"
            />
            <p className="text-[#6B6560] text-sm leading-relaxed max-w-[24ch]">
              O ponto turístico da culinária capixaba em Vitória e Vila Velha.
            </p>
            <div className="flex gap-3 mt-5">
              <Link
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#FDFAF6]/60 hover:text-[#FDFAF6] hover:border-white/30 hover:bg-white/5 transition-all"
                aria-label="Instagram"
              >
                <InstagramLogo size={16} weight="bold" />
              </Link>
              <Link
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-[#FDFAF6]/60 hover:text-[#FDFAF6] hover:border-white/30 hover:bg-white/5 transition-all"
                aria-label="Facebook"
              >
                <FacebookLogo size={16} weight="bold" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C44B2B] mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6B6560] text-sm hover:text-[#FDFAF6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links externos */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C44B2B] mb-5">
              Links
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href={SITE.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6560] text-sm hover:text-[#FDFAF6] transition-colors"
                >
                  Cardápio
                </Link>
              </li>
              <li>
                <Link
                  href={SITE.promotionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6560] text-sm hover:text-[#FDFAF6] transition-colors"
                >
                  Promoções
                </Link>
              </li>
              <li>
                <Link
                  href={SITE.jobsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6560] text-sm hover:text-[#FDFAF6] transition-colors"
                >
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link
                  href={SITE.farofaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6560] text-sm hover:text-[#FDFAF6] transition-colors"
                >
                  Farofa Steakhouse
                </Link>
              </li>
            </ul>
          </div>

          {/* Grupo */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C44B2B] mb-5">
              Grupo Ilha
            </p>
            <p className="text-[#6B6560] text-sm leading-relaxed">
              Fazemos parte do Grupo Ilha do Caranguejo, levando a culinária
              capixaba para mais pessoas.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[#6B6560] text-xs">
            © {new Date().getFullYear()} Ilha do Caranguejo. Todos os direitos reservados.
          </p>
          <p className="text-[#3A3530] text-xs">
            Culinária capixaba com alegria e tradição
          </p>
        </div>
      </div>
    </footer>
  );
}
