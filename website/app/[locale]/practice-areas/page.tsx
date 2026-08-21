// src/app/[locale]/practice-areas/page.tsx
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Scale, Building2, Users, Heart, Gavel, Home } from "lucide-react";

interface PracticeAreasPageProps {
  params: Promise<{ locale: Locale }>;
}

const iconMap = {
  Scale: Scale,
  Building2: Building2,
  Users: Users,
  Heart: Heart,
  Gavel: Gavel,
  Home: Home,
};

export default async function PracticeAreasPage({ params }: PracticeAreasPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const areas = dict.practiceAreas.areas;

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[40vh] overflow-hidden bg-brand">
        <div className="absolute inset-0 bg-[url('/images/areas-hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/80 to-brand" />

        <Container className="relative z-10 flex min-h-[40vh] items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {locale === "pt" ? "Áreas de Atuação" : "Practice Areas"}
            </span>

            <h1 className="mt-6 font-heading text-5xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
              {locale === "pt" ? "Soluções jurídicas" : "Legal solutions"}
              <br />
              <span className="text-gold">
                {locale === "pt" ? "para diferentes desafios." : "for different challenges."}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {locale === "pt"
                ? "Atuamos em múltiplas áreas do Direito, com uma equipa especializada pronta para defender os seus interesses."
                : "We operate in multiple areas of law, with a specialized team ready to defend your interests."}
            </p>
          </div>
        </Container>
      </section>

      {/* Areas Grid */}
      <section className="bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => {
              const Icon = iconMap[area.icon as keyof typeof iconMap] || Scale;

              return (
                <Link
                  key={index}
                  href={`/${locale}/practice-areas/${area.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-surface p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/5 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h2 className="mt-6 font-heading text-2xl font-medium text-brand">
                      {area.title}
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                      {area.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark transition-colors group-hover:text-brand">
                      {locale === "pt" ? "Saiba mais" : "Learn more"}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}