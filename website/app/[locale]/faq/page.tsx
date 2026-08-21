// src/app/[locale]/faq/page.tsx
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import { FAQClient } from "@/app/[locale]/faq/FAQClient";

interface FAQPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const faqs = dict.faq.items;

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[30vh] overflow-hidden bg-brand">
        <div className="absolute inset-0 bg-[url('/images/faq-hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/80 to-brand" />

        <Container className="relative z-10 flex min-h-[30vh] items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {locale === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions"}
            </span>

            <h1 className="mt-6 font-heading text-5xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
              {locale === "pt" ? "Dúvidas comuns," : "Common questions,"}
              <br />
              <span className="text-gold">
                {locale === "pt" ? "respostas claras." : "clear answers."}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {dict.faq.description}
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ List - Client Component */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <FAQClient faqs={faqs} />
        </Container>
      </section>
    </div>
  );
}