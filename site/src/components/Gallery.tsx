"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

type GalleryPhoto = {
  src: string;
  alt: string;
  label: string;
};

const photos: GalleryPhoto[] = [
  {
    src: "/images/work/depois-01.jpg",
    alt: "Ar-condicionado instalado e finalizado após o serviço da Roma",
    label: "Instalação finalizada",
  },
  {
    src: "/images/work/instalacao-residencial-01.jpg",
    alt: "Técnico da Roma instalando unidade externa de ar-condicionado em residência",
    label: "Instalação residencial",
  },
  {
    src: "/images/work/instalacao-midea-01.jpg",
    alt: "Unidade externa Midea instalada em parede",
    label: "Instalação de split",
  },
  {
    src: "/images/work/acabamento-premium-01.jpg",
    alt: "Unidade interna de ar-condicionado com acabamento premium acima de porta de madeira",
    label: "Acabamento premium",
  },
  {
    src: "/images/work/infraestrutura-obra-01.jpg",
    alt: "Infraestrutura de tubulação preparada em obra para instalação",
    label: "Infraestrutura de obra",
  },
  {
    src: "/images/work/instalacao-beiral-01.jpg",
    alt: "Técnico da Roma instalando unidade externa sob beiral de telhado",
    label: "Instalação sob telhado",
  },
  {
    src: "/images/work/instalacao-parede-azul-01.jpg",
    alt: "Técnico da Roma instalando unidade externa em parede azul",
    label: "Instalação residencial",
  },
  {
    src: "/images/work/antes-01.jpg",
    alt: "Ambiente antes da instalação do ar-condicionado",
    label: "Antes da instalação",
  },
];

const spanPattern = [
  "md:row-span-2",
  "md:row-span-1",
  "md:row-span-1",
  "md:row-span-2",
  "md:row-span-1",
  "md:row-span-2",
  "md:row-span-1",
  "md:row-span-1",
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <section id="trabalhos" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Trabalhos realizados"
            title="Serviços reais, em residências e empresas de Piracicaba"
            description="Uma amostra de instalações e manutenções realizadas pela equipe da Roma. Toque em uma imagem para ampliar."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:grid-cols-4 md:auto-rows-[180px] lg:auto-rows-[200px]">
          {photos.map((photo, index) => (
            <Reveal
              key={photo.src}
              delay={(index % 4) * 0.05}
              className={`group relative ${spanPattern[index]}`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="focus-ring relative block h-full w-full overflow-hidden rounded-xl sm:rounded-2xl"
                aria-label={`Ampliar imagem: ${photo.label}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-navy-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                  <span className="text-xs font-semibold text-white sm:text-sm">
                    {photo.label}
                  </span>
                  <ZoomIn className="h-4 w-4 text-white/90" aria-hidden="true" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={active.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar imagem ampliada"
              className="focus-ring absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:top-6 sm:right-6"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Imagem anterior"
              className="focus-ring absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Próxima imagem"
              className="focus-ring absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>

            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[82vh] w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-white/80">
                {active.label}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
