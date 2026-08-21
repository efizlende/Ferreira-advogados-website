
import { Container } from "../ui/Container";
import { Locale } from "@/lib/i18n";

interface ExperienceProps {
  locale: Locale;
  dict: {
    badge: string;
    title: string;
    stats: readonly { 
      value: string;
      label: string;
      description: string;
    }[];
  };
}

export function Experience({ locale, dict }: ExperienceProps) {
  return (
    <section className="relative overflow-hidden bg-brand py-24 sm:py-28 lg:py-32">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-gold/20" />
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-gold/10" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-gold/10" />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {dict.badge}
            </span>

            <h2 className="mt-7 max-w-lg font-heading text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
              {dict.title}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {dict.stats.map((stat, index) => (
              <div key={index} className="space-y-2 border-t border-white/10 pt-6">
                <span className="block font-heading text-5xl font-medium text-gold sm:text-6xl">
                  {stat.value}
                </span>

                <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-white/90">
                  {stat.label}
                </span>

                <p className="text-sm leading-relaxed text-white/60">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}