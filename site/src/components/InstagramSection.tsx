import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import InstagramGlyph from "@/components/icons/InstagramGlyph";
import InstagramMediaTile from "@/components/InstagramMediaTile";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { company } from "@/config/company";

const spotlightMedia: {
  type: "image" | "video";
  src: string;
  alt: string;
}[] = [
  {
    type: "video",
    src: "/videos/reel-01.mp4",
    alt: "Vídeo de instalação de ar-condicionado pela Roma",
  },
  {
    type: "image",
    src: "/images/work/tecnico-selfie-01.jpg",
    alt: "Técnico da Roma nos bastidores de um atendimento",
  },
  {
    type: "video",
    src: "/videos/reel-02.mp4",
    alt: "Vídeo dos bastidores de um atendimento da Roma",
  },
  {
    type: "image",
    src: "/images/work/gas-recarga-01.jpg",
    alt: "Cilindro de gás refrigerante usado em serviço da Roma",
  },
  {
    type: "video",
    src: "/videos/reel-03.mp4",
    alt: "Vídeo de manutenção de ar-condicionado pela Roma",
  },
  {
    type: "image",
    src: "/images/work/instalacao-suporte-01.jpg",
    alt: "Técnico da Roma preparando suporte para instalação de ar-condicionado",
  },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-navy-950 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Instagram"
            title="Bastidores da Roma no Instagram"
            light
            description="Fotos e vídeos das instalações, manutenções e do dia a dia da equipe em campo."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-5 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset] sm:p-7 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-10 lg:p-9">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-500/15 blur-[100px]" />

            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-gradient-to-tr from-amber-400 via-fuchsia-500 to-accent-500 p-[3px]">
                  <div className="rounded-full bg-navy-950 p-[3px]">
                    <Image
                      src="/images/logo/roma-mascot.png"
                      alt=""
                      aria-hidden="true"
                      width={112}
                      height={112}
                      className="h-14 w-14 rounded-full object-cover object-top"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-white">{company.instagramHandle}</p>
                  <p className="text-sm text-white/55">{company.addressLine}</p>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-white/70">
                Acompanhe instalações, manutenções e os bastidores da equipe
                da Roma no dia a dia dos atendimentos.
              </p>

              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-amber-400 via-fuchsia-500 to-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(217,70,239,0.55)] transition-transform duration-200 hover:scale-[1.03]"
              >
                <InstagramGlyph className="h-4 w-4" aria-hidden="true" />
                Seguir no Instagram
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="relative mt-8 grid grid-cols-3 gap-2.5 sm:gap-3 lg:mt-0">
              {spotlightMedia.map((media) => (
                <InstagramMediaTile
                  key={media.src}
                  type={media.type}
                  src={media.src}
                  alt={media.alt}
                  href={company.instagramUrl}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
