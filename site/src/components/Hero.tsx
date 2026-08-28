import Image from "next/image";
import { Star, ArrowRight, Wind, Zap, SprayCan } from "lucide-react";
import { company } from "@/config/company";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900"
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

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-28">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Técnicos especializados em ar-condicionado
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-[3.15rem]">
              {company.tagline}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 text-pretty">
              Trabalhamos com instalação, manutenção preventiva e corretiva,
              higienização e serviços elétricos — com atendimento técnico
              direto e sem complicação.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <WhatsAppButton
                message="Olá! Vim pelo site e gostaria de solicitar um orçamento."
                className="w-full sm:w-auto"
                label="Solicitar orçamento pelo WhatsApp"
              />
              <a
                href="#servicos"
                className="focus-ring inline-flex w-auto items-center justify-center gap-2 self-start rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Ver serviços
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center -space-x-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-white/80">
                  <span className="font-bold text-white">
                    {company.googleRating.toFixed(1)}
                  </span>{" "}
                  no Google{" "}
                  <span className="text-white/50">
                    ({company.googleReviewCountLabel})
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-5 text-white/60">
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

        <Reveal delay={0.16} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent-500/30 via-transparent to-transparent blur-2xl" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-soft-lg sm:rounded-[2.5rem]">
              <Image
                src="/images/hero/hero-tecnico-samsung.jpg"
                alt="Técnico da Roma instalando unidade de ar-condicionado Samsung"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-navy-900/[0.06] bg-white px-4 py-3.5 shadow-soft-lg sm:-left-8">
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

            <div className="absolute -top-5 -right-3 hidden items-center gap-2 rounded-2xl border border-navy-900/[0.06] bg-white px-4 py-3 shadow-soft-lg sm:flex">
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
