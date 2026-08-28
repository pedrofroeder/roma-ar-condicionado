import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { company } from "@/config/company";

// PLACEHOLDER: depoimentos ilustrativos. Substitua pelos textos reais
// de avaliações do Google assim que estiverem disponíveis.
const placeholderReviews = [
  {
    name: "Cliente Google [placeholder]",
    text: "Espaço reservado para um depoimento real de cliente. Substitua por uma avaliação do Google da Roma.",
  },
  {
    name: "Cliente Google [placeholder]",
    text: "Espaço reservado para um depoimento real de cliente. Substitua por uma avaliação do Google da Roma.",
  },
  {
    name: "Cliente Google [placeholder]",
    text: "Espaço reservado para um depoimento real de cliente. Substitua por uma avaliação do Google da Roma.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Avaliações"
            title="A reputação da Roma fala por si"
            description="Um retrato da confiança de quem já contou com a Roma para cuidar do seu ar-condicionado."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-2 rounded-2xl border border-navy-900/[0.06] bg-white px-8 py-6 text-center shadow-soft">
            <div className="flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-2xl font-extrabold text-navy-900">
              {company.googleRating.toFixed(1)} de 5
            </p>
            <p className="text-sm text-navy-900/55">
              Baseado em avaliações no Google ({company.googleReviewCountLabel})
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderReviews.map((review, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <article className="relative h-full rounded-2xl border border-dashed border-navy-900/15 bg-white p-6 shadow-soft">
                <Quote className="h-6 w-6 text-accent-500/40" aria-hidden="true" />
                <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-900/70 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-navy-900/[0.06] pt-4">
                  <p className="text-sm font-semibold text-navy-900/80">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="absolute top-3 right-3 rounded-full bg-navy-900/5 px-2.5 py-1 text-[0.65rem] font-bold tracking-wide text-navy-900/40 uppercase">
                  Placeholder
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
