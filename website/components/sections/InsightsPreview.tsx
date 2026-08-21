// src/components/sections/InsightsPreview.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Container } from "../ui/Container";
import { Locale } from "@/lib/i18n";

interface InsightsPreviewProps {
  locale: Locale;
  dict: {
    title: string;
    description: string;
    viewAll: string;
    readMore: string;
    readTime: string;
    articles: readonly {
      category: string;
      title: string;
      excerpt: string;
      date: string;
      readTime: number;
      href: string;
      tags: readonly string[];
      image?: string;
    }[];
  };
}

export function InsightsPreview({ locale, dict }: InsightsPreviewProps) {
  const articles = dict.articles.slice(0, 3);

  const isExternalLink = (href: string) => {
    return href.startsWith("http://") || href.startsWith("https://");
  };

  return (
    <section className="bg-surface py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
              <span className="h-px w-8 bg-gold" />
              {locale === "pt" ? "Insights" : "Insights"}
            </span>

            <h2 className="mt-6 font-heading text-4xl font-medium leading-tight text-brand sm:text-5xl lg:text-6xl">
              {locale === "pt" ? "Conhecimento e" : "Knowledge and"}
              <br />
              <span className="text-gold-dark">
                {locale === "pt" ? "atualidade jurídica." : "legal updates."}
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-base leading-8 text-text-secondary sm:text-lg">
              {dict.description}
            </p>

            <Link
              href={`/${locale}/insights`}
              className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-brand transition-colors hover:text-gold-dark"
            >
              {dict.viewAll}
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => {
            const imagePath = article.image || null;
            const isExternal = isExternalLink(article.href);
            const linkProps = isExternal
              ? { href: article.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: `/${locale}${article.href}` };

            const Wrapper = isExternal ? "a" : Link;

            return (
              <Wrapper
                key={index}
                {...linkProps}
                className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand/10 to-gold/10">
                  {imagePath ? (
                    <Image
                      src={imagePath}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="font-heading text-4xl text-brand/20">
                        {article.category.split(" ")[0]}
                      </span>
                    </div>
                  )}

                  {/* Overlay com categoria no hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-brand/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-heading text-xl font-medium text-white">
                      {article.category}
                    </span>
                  </div>

                  {/* Badge de link externo */}
                  {isExternal && (
                    <div className="absolute top-3 right-3 rounded-full bg-gold/90 px-2 py-1 text-[10px] font-semibold text-brand">
                      📄 PDF
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-semibold uppercase tracking-[0.15em] text-gold-dark">
                      {article.category}
                    </span>

                    <span className="text-text-muted">·</span>

                    <span className="flex items-center gap-1 text-text-muted">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="mt-3 font-heading text-xl font-medium leading-tight text-brand group-hover:text-gold-dark">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-brand/5 px-3 py-1 text-xs font-medium text-brand"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 2 && (
                      <span className="rounded-full bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
                        +{article.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Clock size={12} />
                      {article.readTime} {dict.readTime}
                    </span>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark transition-colors group-hover:text-brand">
                      {isExternal ? "Ler PDF" : dict.readMore}
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </Container>
    </section>
  );
}