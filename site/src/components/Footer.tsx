import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";
import InstagramGlyph from "@/components/icons/InstagramGlyph";
import { company, buildWhatsAppUrl } from "@/config/company";
import { navLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo/roma-logo-white.png"
              alt="Roma Ar Condicionado e Eletricidade"
              width={168}
              height={55}
              className="h-9 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Instalação, manutenção, higienização e serviços elétricos para
              residências e empresas em Piracicaba e região.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Roma Ar Condicionado"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-accent-500 hover:text-white"
              >
                <InstagramGlyph className="h-[18px] w-[18px]" />
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Roma Ar Condicionado"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/40 uppercase">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/40 uppercase">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                {company.addressLine}
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring transition-colors hover:text-white"
                >
                  Falar no WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring transition-colors hover:text-white"
                >
                  {company.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/10 pt-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {company.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">{company.addressLine}</p>
        </div>
      </div>
    </footer>
  );
}
