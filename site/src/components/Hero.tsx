import Image from "next/image";
import { Star, ArrowRight, Wind, Zap, SprayCan } from "lucide-react";
import { company } from "@/config/company";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900 sm:h-[calc(100svh-5rem)] lg:h-[calc(100svh-5rem)]"
    >
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-32 -right-20 h-[26rem] w-[26rem] rounded-full bg-accent-500/25 blur-[110px]" />
      <div className="pointer-events-none absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-accent-600/20 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative grid w-full items-center gap-4 py-4 sm:py-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-8">
        <div>
          <Reveal immediate>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-white/80 uppercase backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              Técnicos especializados em ar-condicionado
            </div>
          </Reveal>

          <Reveal delay={0.08} immediate>
            <h1 className="mt-3 text-[1.6rem] leading-[1.15] font-extrabold tracking-tight text-white text-balance sm:mt-4 sm:text-4xl sm:leading-[1.1] lg:mt-4 lg:text-5xl lg:leading-[1.08] lg:text-[2.75rem]">
              {company.tagline}
            </h1>
          </Reveal>

          <Reveal delay={0.14} immediate>
            <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-white/70 text-pretty sm:mt-4 sm:text-base lg:mt-4 lg:text-base">
              Trabalhamos com instalação, manutenção preventiva e corretiva,
              higienização e serviços elétricos — com atendimento técnico
              direto e sem complicação.
            </p>
          </Reveal>

          <Reveal delay={0.2} immediate>
            <div className="mt-3.5 flex flex-col gap-2.5 sm:mt-5 sm:flex-row sm:items-center sm:gap-3.5 lg:mt-5">
              <WhatsAppButton
                message="Olá! Vim pelo site e gostaria de solicitar um orçamento."
                className="!px-5 !py-2.5 !text-sm w-full sm:w-auto lg:!px-6 lg:!py-3.5 lg:!text-base"
                label="Solicitar orçamento pelo WhatsApp"
              />
              <a
                href="#servicos"
                className="focus-ring inline-flex w-auto items-center justify-center gap-2 self-start rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 lg:px-6 lg:py-3.5 lg:text-base"
              >
                Ver serviços
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.26} immediate>
            <div className="mt-3.5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-3 sm:mt-5 sm:gap-x-8 sm:gap-y-4 sm:pt-4 lg:mt-5 lg:pt-4">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center -space-x-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4" />
                  ))}
                </div>
                <p className="text-xs text-white/80 sm:text-sm">
                  <span className="font-bold text-white">
                    {company.googleRating.toFixed(1)}
                  </span>{" "}
                  no Google{" "}
                  <span className="text-white/50">
                    ({company.googleReviewCountLabel})
                  </span>
                </p>
              </div>
              <div className="hidden items-center gap-5 text-white/60 sm:flex">
                <span className="flex items-center gap-1.5 text-sm">
                  <Wind className="h-4 w-4 text-accent-300" aria-hidden="true" />
                  Instalação
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <SprayCan className="h-4 w-4 text-accent-300" aria-hidden="true" />
                  Higienização
                </span>
                <span className="flex items-center gap-1.5 text-sm">
                  <Zap className="h-4 w-4 text-accent-300" aria-hidden="true" />
                  Elétrica
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.16}
          immediate
          className="relative mt-3 h-[18svh] max-h-[230px] w-full sm:mt-4 sm:h-[24svh] lg:mx-auto lg:mt-0 lg:h-auto lg:max-h-none lg:w-full lg:max-w-[21rem]"
        >
          <div className="relative h-full lg:h-auto">
            <div className="pointer-events-none absolute -inset-4 hidden rounded-[2.5rem] bg-gradient-to-br from-accent-500/30 via-transparent to-transparent blur-2xl lg:block" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-soft-lg lg:aspect-[4/5] lg:h-auto lg:rounded-[2.5rem]">
              <Image
                src="/images/hero/hero-tecnico-instalacao.jpg"
                alt="Técnico da Roma instalando unidade de ar-condicionado"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-navy-900/[0.06] bg-white px-4 py-3.5 shadow-soft-lg sm:-left-8 lg:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-sm leading-none font-bold text-navy-900">
                  {company.googleRating.toFixed(1)} no Google
                </p>
                <p className="mt-1 text-xs text-navy-900/55">
                  {company.googleReviewCountLabel}
                </p>
              </div>
            </div>

            <div className="absolute -top-5 -right-3 hidden items-center gap-2 rounded-2xl border border-navy-900/[0.06] bg-white px-4 py-3 shadow-soft-lg lg:flex">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <p className="text-xs font-semibold text-navy-900/80">
                Atendimento em Piracicaba
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
