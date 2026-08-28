import { MapPin, Navigation } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { company } from "@/config/company";

export default function ServiceArea() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Região atendida"
            title={`Atendemos ${company.city} e cidades da região`}
            description="Levamos instalação, manutenção e serviços elétricos até você, com atendimento organizado por região."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[2rem] border border-navy-900/[0.06] bg-gradient-to-br from-navy-900 to-navy-950 px-6 py-12 shadow-soft-lg sm:px-12 sm:py-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent-500/20 blur-[100px]" />

            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Navigation className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
                Cidades atendidas atualmente pela equipe da Roma:
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                {company.citiesServed.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
                  >
                    <MapPin className="h-3.5 w-3.5 text-accent-300" aria-hidden="true" />
                    {city}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-sm text-white/50">
                Não encontrou sua cidade? Fale com a gente — talvez a gente atenda.
              </p>
              <div className="mt-5">
                <WhatsAppButton message="Olá! Gostaria de saber se vocês atendem na minha região." />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
