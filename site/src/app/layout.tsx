import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { company } from "@/config/company";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://romaarcondicionado.com.br";
const title = `${company.name} | Ar-condicionado em Piracicaba`;
const description =
  "Instalação, manutenção, higienização de ar-condicionado e serviços elétricos em Piracicaba e região. Atendimento técnico especializado com a Roma Ar Condicionado e Eletricidade.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${company.shortName}`,
  },
  description,
  keywords: [
    "ar-condicionado em Piracicaba",
    "instalação de ar-condicionado em Piracicaba",
    "manutenção de ar-condicionado em Piracicaba",
    "climatização em Piracicaba",
    "assistência técnica ar-condicionado Piracicaba",
    "serviços elétricos Piracicaba",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: company.name,
    title,
    description,
    images: [
      {
        url: "/images/hero/hero-tecnico-samsung.jpg",
        width: 442,
        height: 590,
        alt: "Técnico da Roma Ar Condicionado instalando unidade de ar-condicionado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        {children}
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
