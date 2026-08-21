
import { Container } from "../ui/Container";
import { Shield, Users, Scale, Award, Clock, Heart } from "lucide-react";
import { Locale } from "@/lib/i18n";

interface WhyChooseUsProps {
  locale: Locale;
  dict: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    values: readonly {  
      title: string;
      description: string;
    }[];
  };
}

const iconMap: Record<string, any> = {
  "Rigor Jurídico": Scale,
  "Proximidade e Confiança": Users,
  "Integridade e Transparência": Shield,
  "Experiência Consolidada": Award,
  "Soluções Personalizadas": Heart,
  "Resposta Ágil e Eficaz": Clock,
};

export function WhyChooseUs({ locale, dict }: WhyChooseUsProps) {
  return (
    <section className="bg-background py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
            <span className="h-px w-8 bg-gold" />
            {dict.badge}
          </span>

          <h2 className="mt-6 font-heading text-4xl font-medium leading-tight text-brand sm:text-5xl lg:text-6xl">
            {dict.title}
            <br />
            <span className="text-gold-dark">{dict.titleHighlight}</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-base leading-8 text-text-secondary sm:text-lg">
            {dict.description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dict.values.map((value, index) => {
            const Icon = iconMap[value.title] || Shield;

            return (
              <div
                key={index}
                className="group rounded-2xl bg-surface p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/5 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 font-heading text-xl font-medium text-brand">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}