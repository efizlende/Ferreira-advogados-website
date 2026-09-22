// src/app/[locale]/insights/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";

interface InsightArticlePageProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locales: Locale[] = ["pt", "en"];
  const allParams = [];

  for (const locale of locales) {
    const dict = await getDictionary(locale);
    const articles = dict.insights.articles;

    for (const article of articles) {
      allParams.push({
        locale,
        slug: article.slug,
      });
    }
  }

  return allParams;
}

export default async function InsightArticlePage({ params }: InsightArticlePageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  const isPt = locale === "pt";

  const article = dict.insights.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const imagePath = article.image || null;

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[45vh] overflow-hidden bg-brand">
        {imagePath && (
          <div className="absolute inset-0">
            <Image
              src={imagePath}
              alt={article.title}
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/85 to-brand" />

        <Container className="relative z-10 flex min-h-[45vh] items-center">
          <div className="max-w-4xl">
            <Link
              href={`/${locale}/insights`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold/80 transition-colors hover:text-gold"
            >
              {dict.insights.backToInsights}
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 font-semibold uppercase tracking-[0.15em] text-gold">
                {article.category}
              </span>
            </div>

            <h1 className="mt-6 font-heading text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} className="text-gold" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={14} className="text-gold" />
                {article.readTime} {dict.insights.readTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Conteúdo */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Introdução */}
            <p className="text-lg leading-8 text-text-secondary sm:text-xl sm:leading-9">
              {article.content.intro}
            </p>

            {/* Secções */}
            <div className="mt-12 space-y-12">
              {article.content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="font-heading text-2xl font-medium text-brand sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-base leading-8 text-text-secondary sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
                <Tag size={16} className="text-gold-dark" />
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-brand/5 px-4 py-1.5 text-xs font-medium text-brand"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-6 sm:p-8">
              <h3 className="font-heading text-xl font-medium text-brand sm:text-2xl">
                {isPt ? "Precisa de Apoio Jurídico?" : "Need Legal Support?"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                {isPt
                  ? "Entre em contacto para uma primeira abordagem, sem compromisso."
                  : "Contact us for an initial approach, without commitment."}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${locale}/contact`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-white transition-all hover:bg-brand-dark"
                >
                  {isPt ? "Fale Connosco" : "Contact Us"}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
                <Link
                  href={`/${locale}/insights`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/30 px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-brand hover:text-white"
                >
                  {isPt ? "Ver mais artigos" : "View more articles"}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}