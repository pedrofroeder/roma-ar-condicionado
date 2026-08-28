import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/company";

type WhatsAppButtonProps = {
  floating?: boolean;
  message?: string;
  className?: string;
  label?: string;
};

export default function WhatsAppButton({
  floating = false,
  message,
  className = "",
  label,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message);

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Roma Ar Condicionado"
        className="focus-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} aria-hidden="true" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:brightness-[1.07] hover:shadow-soft-lg active:scale-[0.98] ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      {label ?? "Falar no WhatsApp"}
    </a>
  );
}
