// src/app/[locale]/obrigado/page.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import { Check, Calendar, ArrowUpRight } from "lucide-react";

interface ObrigadoPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ObrigadoPage({ params }: ObrigadoPageProps) {
  const { locale } = await params;

  return (
    <div className="flex min-h-screen items-center bg-brand pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/20">
            <Check size={40} className="text-gold" />
          </div>

          <h1 className="mt-8 font-heading text-4xl font-medium text-white sm:text-5xl">
            {locale === "pt" ? "Pedido de Consulta Enviado!" : "Consultation Request Sent!"}
          </h1>

          <div className="mt-4 flex justify-center gap-2 text-gold">
            <Calendar size={24} />
          </div>

          <p className="mt-4 text-lg text-white/70">
            {locale === "pt"
              ? "Agradecemos o seu pedido. A nossa equipa entrará em contacto dentro de 24h para confirmar a data e horário da sua consulta."
              : "Thank you for your request. Our team will contact you within 24 hours to confirm the date and time of your consultation."}
          </p>

          <div className="mt-4 rounded-lg bg-white/10 p-4 text-sm text-white/60">
            {locale === "pt"
              ? "📌 Enviamos uma confirmação para o seu email com os detalhes do pedido."
              : "📌 We have sent a confirmation to your email with the request details."}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-bold text-brand transition-all hover:bg-gold-light"
            >
              {locale === "pt" ? "Voltar ao Início" : "Back to Home"}
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              {locale === "pt" ? "Novo Pedido" : "New Request"}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}