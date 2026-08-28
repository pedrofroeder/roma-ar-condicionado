import Image from "next/image";
import { PhoneCall } from "lucide-react";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 -translate-y-1/3 translate-x-1/4 rounded-full bg-accent-500/25 blur-[110px]" />

      <div className="container-page relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-300">
            <PhoneCall className="h-7 w-7" aria-hidden="true" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.65rem]">
            Precisa instalar ou fazer manutenção no seu ar-condicionado?
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            Fale agora com a equipe da Roma e receba orientação para o seu
            orçamento — atendimento rápido, direto pelo WhatsApp.
          </p>

          <div className="mt-9">
            <WhatsAppButton
              message="Olá! Preciso instalar/fazer manutenção no meu ar-condicionado. Podem me ajudar?"
              label="Solicitar orçamento pelo WhatsApp"
              className="px-8 py-4 text-lg"
            />
          </div>
        </Reveal>
      </div>

      <Image
        src="/images/logo/roma-mascot.png"
        alt=""
        aria-hidden="true"
        width={340}
        height={378}
        className="pointer-events-none absolute -bottom-6 -left-6 hidden w-40 opacity-90 sm:block lg:w-52"
        style={{
          maskImage:
            "linear-gradient(to right, black 55%, transparent 92%), linear-gradient(to top, black 60%, transparent 95%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to right, black 55%, transparent 92%), linear-gradient(to top, black 60%, transparent 95%)",
          WebkitMaskComposite: "source-in",
        }}
      />
    </section>
  );
}
