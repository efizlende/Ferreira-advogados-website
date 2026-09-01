// src/app/[locale]/practice-areas/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight, Check, Scale, Building2, Users, Heart, Gavel, Home } from "lucide-react";

// Mapa de ícones
const iconMap = {
  Scale: Scale,
  Building2: Building2,
  Users: Users,
  Heart: Heart,
  Gavel: Gavel,
  Home: Home,
};

interface PracticeAreaPageProps {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

// Gerar paths estáticos para todas as áreas
export async function generateStaticParams() {
  const locales: Locale[] = ["pt", "en"];
  const allParams = [];

  for (const locale of locales) {
    const dict = await getDictionary(locale);
    const areas = dict.practiceAreas.areas;

    for (const area of areas) {
      allParams.push({
        locale,
        slug: area.slug,
      });
    }
  }

  return allParams;
}

export default async function PracticeAreaPage({ params }: PracticeAreaPageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);

  // Encontrar a área atual
  const area = dict.practiceAreas.areas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const Icon = iconMap[area.icon as keyof typeof iconMap] || Scale;

  type AreaContent = {
    subtitle: string;
    description: string;
    expertise: string[];
    approach: string;
  };

  const areaContent: Record<Locale, Record<string, AreaContent>> = {
    pt: {
      "direito-civil": {
        subtitle: "Proteção e defesa dos seus direitos civis",
        description:
          "O Direito Civil é o ramo do Direito que regula as relações entre pessoas, sejam elas físicas ou jurídicas. Atuamos na defesa dos seus interesses em matérias como responsabilidade civil, contratos, direitos reais e propriedade.",
        expertise: [
          "Responsabilidade civil (contratual e extracontratual)",
          "Contratos (compra e venda, locação, prestação de serviços)",
          "Direitos reais (propriedade, usufruto, servidões)",
          "Direito das obrigações",
          "Indenizações e reparação de danos",
          "Usucapião e regularização de imóveis",
        ],
        approach:
          "Adotamos uma abordagem personalizada e estratégica em cada caso, analisando detalhadamente a situação do cliente e procurando a solução mais eficaz, seja através de negociação, mediação ou via judicial.",
      },
      "direito-comercial-societario": {
        subtitle: "Apoio jurídico integral para o seu negócio",
        description:
          "O Direito Comercial e Societário abrange todas as áreas do Direito relacionadas à atividade empresarial. Prestamos assessoria jurídica completa para empresas, desde a constituição até a gestão e governação.",
        expertise: [
          "Constituição de sociedades e regimes societários",
          "Contratos comerciais e empresariais",
          "Fusões, aquisições e reestruturações",
          "Governação corporativa e compliance",
          "Direito societário e relações entre sócios",
          "Sucessão empresarial e planeamento",
        ],
        approach:
          "Oferecemos um acompanhamento próximo e contínuo, entendendo as particularidades de cada negócio e atuando de forma preventiva para evitar litígios, além de resolver questões complexas com agilidade.",
      },
      "direito-trabalho": {
        subtitle: "Defesa dos direitos dos trabalhadores e empresas",
        description:
          "O Direito do Trabalho regula as relações entre empregadores e empregados. Atuamos tanto na defesa dos direitos dos trabalhadores quanto na assessoria a empresas, garantindo o cumprimento da legislação laboral.",
        expertise: [
          "Contratos de trabalho (individuais e coletivos)",
          "Processos disciplinares e despedimentos",
          "Acidentes de trabalho e doenças profissionais",
          "Negociação coletiva e convenções",
          "Segurança social e benefícios",
          "Assessoria a empresas em compliance laboral",
        ],
        approach:
          "Procuramos soluções equilibradas e justas, priorizando a conciliação sempre que possível, mas atuando com firmeza na defesa dos interesses dos nossos clientes quando necessário.",
      },
      "direito-familia-sucessoes": {
        subtitle: "Acompanhamento sensível em momentos importantes",
        description:
          "O Direito da Família e Sucessões lida com questões profundamente pessoais e emocionais. Oferecemos um acompanhamento humano e sensível, aliado ao rigor técnico necessário para garantir a proteção dos seus interesses.",
        expertise: [
          "Divórcio e separação de bens",
          "Responsabilidades parentais e regulação do exercício",
          "Partilhas e inventários",
          "Testamentos e planeamento sucessório",
          "Heranças e direitos dos herdeiros",
          "Uniões de facto e direitos patrimoniais",
        ],
        approach:
          "Atuamos com empatia e discrição, procurando soluções que preservem o bem-estar de todos os envolvidos, especialmente quando há menores, e garantindo a segurança jurídica das decisões.",
      },
      "direito-penal": {
        subtitle: "Defesa rigorosa dos seus direitos em processos penais",
        description:
          "O Direito Penal é a área que protege os bens jurídicos mais fundamentais da sociedade. Oferecemos uma defesa técnica e rigorosa, garantindo que os seus direitos sejam respeitados em todas as fases do processo penal.",
        expertise: [
          "Acompanhamento em todas as fases do processo penal",
          "Defesa em inquéritos e instrução",
          "Recursos e impugnações",
          "Crimes económicos e financeiros",
          "Crimes contra a pessoa e o património",
          "Medidas de coação e recursos",
        ],
        approach:
          "Garantimos uma defesa ativa e estratégica, com acompanhamento próximo e comunicação transparente, assegurando que o cliente compreenda todas as etapas do processo.",
      },
      "direito-imobiliario": {
        subtitle: "Segurança nas suas transações imobiliárias",
        description:
          "O Direito Imobiliário regula todas as relações jurídicas que envolvem bens imóveis. Atuamos para garantir que as suas transações sejam seguras, desde a compra e venda até ao licenciamento e construção.",
        expertise: [
          "Compra e venda de imóveis",
          "Arrendamento urbano e rural",
          "Licenciamento e obras",
          "Direito de construção e urbanismo",
          "Condomínios e propriedade horizontal",
          "Regularização de imóveis",
        ],
        approach:
          "Oferecemos um serviço completo e preventivo, analisando todos os aspetos jurídicos das transações imobiliárias para evitar futuros litígios e garantir a segurança do investimento.",
      },
    },
    en: {
      "civil-law": {
        subtitle: "Protection and defense of your civil rights",
        description:
          "Civil Law regulates the relationships between individuals and legal entities. We act in defense of your interests in matters such as civil liability, contracts, property rights and ownership.",
        expertise: [
          "Civil liability (contractual and non-contractual)",
          "Contracts (purchase and sale, lease, services)",
          "Property rights (ownership, usufruct, easements)",
          "Law of obligations",
          "Compensation and damages",
          "Adverse possession and property regularization",
        ],
        approach:
          "We adopt a personalized and strategic approach in each case, analyzing the client's situation in detail and seeking the most effective solution, whether through negotiation, mediation or judicial means.",
      },
      "corporate-commercial-law": {
        subtitle: "Complete legal support for your business",
        description:
          "Corporate and Commercial Law covers all areas of law related to business activity. We provide complete legal advice for companies, from incorporation to management and governance.",
        expertise: [
          "Company incorporation and corporate regimes",
          "Commercial and business contracts",
          "Mergers, acquisitions and restructurings",
          "Corporate governance and compliance",
          "Corporate law and shareholder relations",
          "Business succession and planning",
        ],
        approach:
          "We offer close and continuous support, understanding the particularities of each business and acting preventively to avoid litigation, as well as resolving complex issues with agility.",
      },
      "employment-law": {
        subtitle: "Defense of workers' and companies' rights",
        description:
          "Employment Law regulates the relationship between employers and employees. We act both in defense of workers' rights and in advising companies, ensuring compliance with labor legislation.",
        expertise: [
          "Employment contracts (individual and collective)",
          "Disciplinary proceedings and dismissals",
          "Work accidents and occupational diseases",
          "Collective bargaining and agreements",
          "Social security and benefits",
          "Labor compliance advisory for companies",
        ],
        approach:
          "We seek balanced and fair solutions, prioritizing conciliation whenever possible, but acting firmly in defending our clients' interests when necessary.",
      },
      "family-succession-law": {
        subtitle: "Sensitive support in important moments",
        description:
          "Family and Succession Law deals with deeply personal and emotional issues. We offer human and sensitive support, combined with the technical rigor necessary to protect your interests.",
        expertise: [
          "Divorce and separation of assets",
          "Parental responsibilities and regulation",
          "Estate division and inventories",
          "Wills and succession planning",
          "Inheritances and heirs' rights",
          "De facto unions and property rights",
        ],
        approach:
          "We act with empathy and discretion, seeking solutions that preserve the well-being of all involved, especially when minors are involved, and ensuring the legal security of decisions.",
      },
      "criminal-law": {
        subtitle: "Rigorous defense of your rights in criminal proceedings",
        description:
          "Criminal Law protects the most fundamental legal assets of society. We offer a technical and rigorous defense, ensuring that your rights are respected at all stages of the criminal process.",
        expertise: [
          "Support at all stages of criminal proceedings",
          "Defense in inquiries and instruction",
          "Appeals and challenges",
          "Economic and financial crimes",
          "Crimes against persons and property",
          "Coercive measures and appeals",
        ],
        approach:
          "We guarantee an active and strategic defense, with close support and transparent communication, ensuring that the client understands all stages of the process.",
      },
      "real-estate-law": {
        subtitle: "Security in your real estate transactions",
        description:
          "Real Estate Law regulates all legal relationships involving real estate. We act to ensure that your transactions are safe, from purchase and sale to licensing and construction.",
        expertise: [
          "Purchase and sale of properties",
          "Urban and rural leasing",
          "Licensing and construction",
          "Construction law and urban planning",
          "Condominiums and horizontal property",
          "Property regularization",
        ],
        approach:
          "We offer a complete and preventive service, analyzing all legal aspects of real estate transactions to avoid future litigation and ensure investment security.",
      },
    },
  };

  const localeContent = areaContent[locale] ?? areaContent.pt;
  const content = localeContent[slug] ?? {
    subtitle: area.title,
    description: area.description,
    expertise: ["Consultoria especializada", "Acompanhamento personalizado", "Soluções eficazes"],
    approach: "Oferecemos um acompanhamento jurídico personalizado, com rigor técnico e proximidade, para garantir a melhor solução para o seu caso.",
  };

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden bg-brand">
        <div className="absolute inset-0 bg-[url('/images/practice-areas-hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/80 to-brand" />

        <Container className="relative z-10 flex min-h-[50vh] items-center">
          <div className="max-w-4xl">
            {/* Ícone */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold">
              <Icon size={32} />
            </div>

            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-8 bg-gold" />
              {locale === "pt" ? "Área de Atuação" : "Practice Area"}
            </span>

            <h1 className="mt-4 font-heading text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
              {area.title}
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
              {content.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-brand transition-all hover:bg-gold-light"
              >
                {locale === "pt" ? "Fale Connosco" : "Contact Us"}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href={`/${locale}/practice-areas`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                {locale === "pt" ? "← Voltar" : "← Back"}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Descrição */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-medium text-brand sm:text-3xl">
              {locale === "pt" ? "Sobre esta área" : "About this area"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {content.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Expertise */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-medium text-brand sm:text-3xl">
              {locale === "pt" ? "Áreas de Intervenção" : "Areas of Expertise"}
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.expertise.map((item, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <Check size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-medium text-brand sm:text-3xl">
              {locale === "pt" ? "Como Podemos Ajudar" : "How We Can Help"}
            </h2>

            <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/5 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                {content.approach}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-dark"
              >
                {locale === "pt" ? "Solicitar Consulta" : "Request Consultation"}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href={`/${locale}/faq`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/30 px-8 py-4 text-sm font-semibold text-brand transition-all hover:bg-brand hover:text-white"
              >
                {locale === "pt" ? "Perguntas Frequentes" : "FAQ"}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="bg-brand py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-medium text-white sm:text-4xl">
              {locale === "pt" ? "Precisa de Apoio Jurídico?" : "Need Legal Support?"}
            </h2>

            <p className="mt-4 text-white/70">
              {locale === "pt"
                ? "Entre em contacto para uma primeira abordagem, sem compromisso."
                : "Contact us for an initial approach, without commitment."}
            </p>

            <Link
              href={`/${locale}/contact`}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-brand transition-all hover:bg-gold-light"
            >
              {locale === "pt" ? "Fale Connosco" : "Contact Us"}
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}