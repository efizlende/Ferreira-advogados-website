// src/app/[locale]/about/page.tsx
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // Usar o dicionário para o conteúdo
  const aboutDict = dict.home.about;

  return (
    <div className="pt-32">
      <section className="relative min-h-[40vh] overflow-hidden bg-brand">
        <div className="absolute inset-0 bg-[url('/images/sobre-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/80 to-brand" />

        <Container className="relative z-10 flex min-h-[40vh] items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {locale === "pt" ? "Sobre Nós" : "About Us"}
            </span>

            <h1 className="mt-6 font-heading text-5xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
              {locale === "pt"
                ? "Experiência que protege."
                : "Experience that protects."}
              <br />
              <span className="text-gold">
                {locale === "pt" ? "Rigor que orienta." : "Rigor that guides."}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {locale === "pt"
                ? "Há mais de 20 anos a defender os direitos dos nossos clientes com excelência, proximidade e integridade."
                : "For over 20 years defending our clients' rights with excellence, proximity and integrity."}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12">
              <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
                <span className="h-px w-8 bg-gold" />
                {aboutDict.badge}
              </span>

              <h2 className="mt-6 font-heading text-4xl font-medium leading-tight text-brand sm:text-5xl lg:text-6xl">
                {aboutDict.heading}
                <br />
                <span className="text-gold-dark">{aboutDict.headingHighlight}</span>
              </h2>
            </div>

            <div className="mt-8 space-y-5 text-base leading-8 text-text-secondary sm:text-lg">
              <p>{aboutDict.description1}</p>
              <p>{aboutDict.description2}</p>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-dark"
            >
              {locale === "pt" ? "Fale Connosco" : "Contact Us"}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}