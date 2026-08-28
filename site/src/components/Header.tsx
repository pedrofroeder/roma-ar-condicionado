import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/nav";
import { buildWhatsAppUrl } from "@/config/company";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/[0.06] bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link href="#home" className="focus-ring shrink-0" aria-label="Roma Ar Condicionado — página inicial">
          <Image
            src="/images/logo/roma-logo-navy.png"
            alt="Roma Ar Condicionado e Eletricidade"
            width={168}
            height={55}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm font-semibold text-navy-900/75 transition-colors hover:text-accent-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-accent-500 hover:shadow-soft-lg"
          >
            Pedir orçamento
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
