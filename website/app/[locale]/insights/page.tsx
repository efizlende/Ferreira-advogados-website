// src/app/[locale]/insights/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

interface InsightsPageProps {
  params: Promise<{ locale: Locale }>;
}

const isExternalLink = (href: string) => {
  return href.startsWith("http://") || href.startsWith("https://");
};

export default async function InsightsPage({ params }: InsightsPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  // dict.insights.articles may be readonly; convert via unknown first to avoid TypeScript error
  const articles = (dict.insights.articles as unknown) as any[];

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[40vh] overflow-hidden bg-brand">
        <div className="absolute inset-0 bg-[url('/images/insights-hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/80 to-brand" />

        <Container className="relative z-10 flex min-h-[40vh] items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Insights
            </span>

            <h1 className="mt-6 font-heading text-5xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
              {locale === "pt" ? "Conhecimento e" : "Knowledge and"}
              <br />
              <span className="text-gold">
                {locale === "pt" ? "atualidade jurídica." : "legal updates."}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {dict.insights.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
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
                  className="group overflow-hidden rounded-2xl bg-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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

                    <div className="absolute inset-0 flex items-center justify-center bg-brand/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="font-heading text-xl font-medium text-white">
                        {article.category}
                      </span>
                    </div>

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
                      {article.tags.slice(0, 3).map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full bg-brand/5 px-3 py-1 text-xs font-medium text-brand"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="rounded-full bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
                          +{article.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <Clock size={12} />
                        {article.readTime} {dict.insights.readTime}
                      </span>

                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark transition-colors group-hover:text-brand">
                        {isExternal ? "Ler PDF" : dict.insights.readMore}
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
    </div>
  );
}