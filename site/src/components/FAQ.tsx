"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    question: "Vocês fazem instalação de qualquer marca de ar-condicionado?",
    answer:
      "Trabalhamos com a instalação das principais marcas disponíveis no mercado. Fale com a gente pelo WhatsApp informando o modelo do seu equipamento para confirmarmos os detalhes do serviço.",
  },
  {
    question: "Vocês fazem manutenção e limpeza?",
    answer:
      "Sim. Realizamos manutenção preventiva, corretiva e higienização de ar-condicionado, ajudando a manter o equipamento funcionando com bom desempenho.",
  },
  {
    question: "Atendem Piracicaba e região?",
    answer:
      "Sim, atendemos Piracicaba e cidades da região. Consulte a seção 'Região atendida' aqui no site ou fale com a gente para confirmar o atendimento na sua cidade.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "É simples: clique em qualquer botão de WhatsApp do site e envie sua solicitação com detalhes do serviço desejado. Nossa equipe vai te responder para dar sequência ao atendimento.",
  },
  {
    question: "Vocês também realizam serviços elétricos?",
    answer:
      "Sim, além de ar-condicionado, a Roma também presta serviços elétricos residenciais e comerciais. Entre em contato para entender melhor a sua necessidade.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes"
            description="Reunimos as dúvidas mais comuns de quem está pensando em contratar a Roma."
          />
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-12 max-w-2xl">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-navy-900/[0.07] bg-white shadow-soft"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="text-[0.95rem] font-semibold text-navy-900 sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-navy-900/50 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-accent-600" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-navy-900/65 sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
