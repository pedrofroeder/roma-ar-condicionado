import { Wind, Wrench, Settings2, SprayCan, Zap, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Wind,
    title: "Instalação de ar-condicionado",
    description:
      "Instalação completa de split e multi-split, com fixação segura, tubulação bem executada e testes de funcionamento.",
  },
  {
    icon: Wrench,
    title: "Manutenção preventiva",
    description:
      "Revisões periódicas que ajudam a manter o desempenho, a eficiência e a vida útil do seu equipamento.",
  },
  {
    icon: Settings2,
    title: "Manutenção corretiva",
    description:
      "Diagnóstico e reparo de falhas de funcionamento, com atendimento técnico ágil para resolver o problema.",
  },
  {
    icon: SprayCan,
    title: "Limpeza e higienização",
    description:
      "Higienização de filtros e componentes internos para melhorar a qualidade do ar e o rendimento do aparelho.",
  },
  {
    icon: Zap,
    title: "Serviços elétricos",
    description:
      "Instalações e reparos elétricos residenciais e comerciais, com atenção à segurança em cada detalhe.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Serviços"
            title="Tudo o que o seu ar-condicionado precisa, em um só lugar"
            description="Da instalação à manutenção, cuidamos de cada etapa com atenção técnica e transparência."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;
            return (
              <Reveal
                key={service.title}
                delay={index * 0.06}
                className={
                  isLast && services.length % 3 === 2
                    ? "sm:col-span-2 lg:col-span-1"
                    : undefined
                }
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-navy-900/[0.07] bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/20 hover:shadow-soft-lg">
                  <div className="absolute top-0 right-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-500/[0.06] transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-accent-500">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="relative mt-2.5 text-[0.95rem] leading-relaxed text-navy-900/60">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
