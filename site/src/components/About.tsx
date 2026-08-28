import Image from "next/image";
import { MapPin, ShieldCheck, Clock, Handshake, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const differentiators: Differentiator[] = [
  {
    icon: MapPin,
    title: "Atendimento local",
    description: "Presente em Piracicaba e região, com atendimento próximo ao cliente.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado técnico",
    description: "Atenção aos detalhes em cada instalação, do início ao acabamento.",
  },
  {
    icon: Clock,
    title: "Atendimento ágil",
    description: "Agilidade para orçar, agendar e resolver o que você precisa.",
  },
  {
    icon: Handshake,
    title: "Transparência",
    description: "Comunicação clara sobre o serviço, sem promessas vazias.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Sobre a Roma"
            title="Experiência técnica com atendimento próximo do cliente"
            align="left"
            description="A Roma Ar Condicionado e Eletricidade atende residências e empresas em Piracicaba e região, unindo conhecimento técnico e cuidado em cada etapa do serviço — da instalação à manutenção."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-navy-900/[0.06] bg-white p-5 shadow-soft"
                >
                  <Icon className="h-5 w-5 text-accent-600" aria-hidden="true" />
                  <h3 className="mt-3 text-[0.95rem] font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-900/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-soft-lg">
              <Image
                src="/images/about/instalacao-decorada-01.jpg"
                alt="Ar-condicionado instalado com acabamento cuidadoso em ambiente residencial"
                fill
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 hidden w-44 overflow-hidden rounded-2xl border-4 border-surface shadow-soft-lg sm:block">
              <Image
                src="/images/about/rooftop-multiplas-unidades-01.jpg"
                alt="Conjunto de unidades externas de ar-condicionado instaladas em cobertura comercial"
                width={220}
                height={280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -right-4 h-24 w-24 overflow-hidden rounded-2xl bg-navy-900 shadow-soft-lg sm:h-28 sm:w-28">
              <Image
                src="/images/logo/roma-mascot.png"
                alt=""
                aria-hidden="true"
                width={200}
                height={200}
                className="h-full w-full scale-125 object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
