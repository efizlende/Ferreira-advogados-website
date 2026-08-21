
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Locale } from "@/lib/i18n";

interface AboutPreviewProps {
  locale: Locale;
  dict: {
    badge: string;
    title: string;
    heading: string;
    headingHighlight: string;
    description1: string;
    description2: string;
    cta: string;
  };
}

export function AboutPreview({ locale, dict }: AboutPreviewProps) {
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
              <span className="h-px w-8 bg-gold" />
              {dict.badge}
            </span>

            <p className="mt-8 max-w-xs font-heading text-3xl leading-tight text-brand sm:text-4xl">
              {dict.title}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-medium leading-tight text-brand sm:text-5xl lg:text-6xl">
              {dict.heading}
              <br />
              <span className="text-gold-dark">{dict.headingHighlight}</span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-text-secondary sm:text-lg">
              <p>{dict.description1}</p>
              <p>{dict.description2}</p>
            </div>

            <Link
              href={`/${locale}/about`}
              className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-brand transition-colors hover:text-gold-dark"
            >
              {dict.cta}
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}