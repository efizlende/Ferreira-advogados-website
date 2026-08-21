
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Container } from "../ui/Container";
import { Locale } from "@/lib/i18n";
import { Scale, Building2, Users, Heart, Gavel, Home } from "lucide-react";

interface PracticeAreasProps {
  locale: Locale;
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    viewAll: string;
  };
  areas: readonly { 
    slug: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

const iconMap = {
  Scale: Scale,
  Building2: Building2,
  Users: Users,
  Heart: Heart,
  Gavel: Gavel,
  Home: Home,
};

export function PracticeAreas({ locale, dict, areas }: PracticeAreasProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
              <span className="h-px w-8 bg-gold" />
              {dict.badge}
            </span>

            <h2 className="mt-6 font-heading text-4xl font-medium leading-tight text-brand sm:text-5xl lg:text-6xl">
              {dict.title}
              <br />
              <span className="text-gold-dark">{dict.titleHighlight}</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-base leading-8 text-text-secondary sm:text-lg">
              {dict.description}
            </p>

            <Link
              href={`/${locale}/practice-areas`}
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

        <div className="grid gap-4 md:grid-cols-2">
          {areas.map((area, index) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap] || Scale;

            return (
              <Link
                key={index}
                href={`/${locale}/practice-areas/${area.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 transition-all duration-500 hover:shadow-xl sm:p-8"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/5 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-brand/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-dark"
                    />
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-medium text-brand">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {area.description}
                  </p>

                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark transition-colors group-hover:text-brand">
                    {locale === "pt" ? "Ver área →" : "Learn more →"}
                  </span>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}