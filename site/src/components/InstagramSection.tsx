import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import InstagramGlyph from "@/components/icons/InstagramGlyph";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { company } from "@/config/company";

const feedPhotos = [
  { src: "/images/work/instalacao-residencial-01.jpg", alt: "Instalação residencial de ar-condicionado pela Roma" },
  { src: "/images/work/instalacao-midea-01.jpg", alt: "Instalação de unidade externa Midea" },
  { src: "/images/work/depois-01.jpg", alt: "Ar-condicionado instalado com acabamento limpo" },
  { src: "/images/work/acabamento-premium-01.jpg", alt: "Unidade interna com acabamento premium" },
  { src: "/images/about/rooftop-multiplas-unidades-01.jpg", alt: "Diversas unidades externas instaladas em cobertura" },
  { src: "/images/work/instalacao-parede-azul-01.jpg", alt: "Instalação de ar-condicionado em parede azul" },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-navy-950 py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Instagram"
              title="Acompanhe nossos trabalhos"
              align="left"
              light
              description="Mais fotos e vídeos de instalações, manutenções e bastidores no dia a dia da Roma."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={company.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent-400/50 hover:bg-white/10"
            >
              <InstagramGlyph className="h-4 w-4" aria-hidden="true" />
              {company.instagramHandle}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {feedPhotos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.05}>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group relative block aspect-square overflow-hidden rounded-xl sm:rounded-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/40">
                  <InstagramGlyph className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 shadow-soft transition-all hover:bg-accent-400 hover:text-white hover:shadow-soft-lg"
          >
            <InstagramGlyph className="h-4 w-4" aria-hidden="true" />
            Ver perfil no Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
