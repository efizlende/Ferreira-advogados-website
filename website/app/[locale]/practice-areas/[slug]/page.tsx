// src/app/[locale]/practice-areas/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/ui/Container";
import { Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowUpRight, Check, Scale, Building2, Users, Heart, Gavel, Home } from "lucide-react";

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
          "O Direito Civil é o ramo do direito privado que disciplina as relações jurídicas entre pessoas singulares e coletivas. Atuamos na defesa dos seus interesses em matérias como responsabilidade civil, contratos, direitos reais e propriedade.",
        expertise: [
          "Responsabilidade civil (contratual e extracontratual)",
          "Contratos (compra e venda, locação, prestação de serviços)",
          "Direitos reais (propriedade, usufruto, servidões)",
          "Direito das obrigações",
          "Indemnizações e reparação de danos",
          "Usucapião e regularização de imóveis",
        ],
        approach:
          "O escritório aprecia a posição jurídica do cliente e identifica as vias disponíveis, privilegiando a composição extrajudicial. Não sendo alcançável o acordo, assegura o patrocínio judiciário até ao trânsito em julgado.",
      },
      "direito-comercial-societario": {
        subtitle: "Apoio jurídico integral para o seu negócio",
        description:
          "O Direito Comercial e Societário abrange as matérias jurídicas relacionadas com a atividade empresarial. Prestamos assessoria jurídica a empresas em todas as fases do seu ciclo de vida, da constituição à gestão corrente e ao governo societário.",
        expertise: [
          "Constituição de sociedades e pactos sociais",
          "Contratos comerciais e empresariais",
          "Fusões, aquisições e reestruturações",
          "Governo societário e compliance",
          "Direito societário e relações entre sócios",
          "Sucessão empresarial e planeamento",
        ],
        approach:
          "O escritório presta assessoria continuada a sociedades comerciais, salientando os estatutos, acordos parassociais, contratação comercial e apoio aos órgãos sociais. A intervenção antecipa o risco jurídico, que se fixa na constituição e na contratação.",
      },
      "direito-trabalho": {
        subtitle: "Defesa dos direitos dos trabalhadores e empresas",
        description:
          "O Direito do Trabalho regula as relações entre empregadores e trabalhadores. Intervimos tanto na defesa dos direitos dos trabalhadores como na assessoria a empresas, em matéria de conformidade com o Código do Trabalho e demais legislação laboral.",
        expertise: [
          "Contratos de trabalho (individuais e coletivos)",
          "Processos disciplinares e despedimentos",
          "Acidentes de trabalho e doenças profissionais",
          "Negociação coletiva e convenções",
          "Segurança social e benefícios",
          "Assessoria a empresas em compliance laboral",
        ],
        approach:
          "O escritório intervém junto de empregadores e de trabalhadores, em processos distintos. Do lado da empresa, contratos, processos disciplinares e cessação do vínculo; do lado do trabalhador, licitude do despedimento, créditos laborais e patrocínio em juízo.",
      },
      "direito-familia-sucessoes": {
        subtitle: "Acompanhamento sensível em momentos importantes",
        description:
          "O Direito da Família e das Sucessões trata de questões profundamente pessoais. Asseguramos um acompanhamento humano e discreto, aliado ao rigor técnico que a defesa dos seus interesses exige.",
        expertise: [
          "Divórcio e partilha do património conjugal",
          "Responsabilidades parentais e regulação do exercício",
          "Partilhas e inventários",
          "Testamentos e planeamento sucessório",
          "Heranças e direitos dos herdeiros",
          "Uniões de facto e direitos patrimoniais",
        ],
        approach:
          "O escritório acompanha divórcios, regulação das responsabilidades parentais, alimentos e inventários, por via consensual ou contenciosa. Procura-se o acordo sempre que possível, por ser o que menor desgaste impõe; não o sendo, assegura-se a representação judicial.",
      },
      "direito-penal": {
        subtitle: "Defesa rigorosa dos seus direitos em processos penais",
        description:
          "O Direito Penal tutela os bens jurídicos fundamentais da comunidade. Asseguramos defesa técnica em todas as fases do processo, do inquérito ao recurso, bem como a representação do ofendido que se constitua assistente.",
        expertise: [
          "Acompanhamento em todas as fases do processo penal",
          "Defesa em inquéritos e instrução",
          "Recursos e impugnações",
          "Crimes económicos e financeiros",
          "Crimes contra a pessoa e o património",
          "Medidas de coação e recursos",
        ],
        approach:
          "O escritório assegura a defesa do arguido em inquérito, instrução, julgamento e recurso, e a representação do assistente. O mandato não se afere pelo desfecho, que a lei não consente prometer, mas pela plenitude das garantias de defesa exercidas.",
      },
      "direito-imobiliario": {
        subtitle: "Segurança nas suas transações imobiliárias",
        description:
          "O Direito Imobiliário abrange as relações jurídicas relativas a bens imóveis. Acompanhamos a operação em todas as fases — da verificação registal e da negociação à escritura, ao licenciamento e à execução da obra.",
        expertise: [
          "Compra e venda de imóveis",
          "Arrendamento urbano e rural",
          "Licenciamento e obras",
          "Direito de construção e urbanismo",
          "Condomínios e propriedade horizontal",
          "Regularização de imóveis",
        ],
        approach:
          "O escritório acompanha a operação imobiliária da verificação registal à escritura e ao registo e, em matéria de construção, o licenciamento e a empreitada. Tratando-se de adquirente não residente, assegura as formalidades prévias exigíveis.",
      },
    },
    en: {
      "civil-law": {
        subtitle: "Protection and defense of your civil rights",
        description:
          "Civil Law is the branch of private law that governs legal relations between natural and legal persons. We act in defense of your interests in matters such as civil liability, contracts, property rights and ownership.",
        expertise: [
          "Civil liability (contractual and non-contractual)",
          "Contracts (purchase and sale, lease, services)",
          "Property rights (ownership, usufruct, easements)",
          "Law of obligations",
          "Compensation and damages",
          "Adverse possession and property regularization",
        ],
        approach:
          "The firm assesses the client's legal position and identifies the available avenues, favoring extrajudicial settlement. If no agreement can be reached, it ensures judicial representation until the final judgment becomes res judicata.",
      },
      "corporate-commercial-law": {
        subtitle: "Complete legal support for your business",
        description:
          "Corporate and Commercial Law covers the legal matters related to business activity. We provide legal advice to companies at all stages of their life cycle, from incorporation to day-to-day management and corporate governance.",
        expertise: [
          "Company incorporation and shareholders' agreements",
          "Commercial and business contracts",
          "Mergers, acquisitions and restructurings",
          "Corporate governance and compliance",
          "Corporate law and shareholder relations",
          "Business succession and planning",
        ],
        approach:
          "The firm provides ongoing advice to commercial companies, focusing on articles of association, shareholders' agreements, commercial contracting and support to corporate bodies. Intervention anticipates legal risk, which is fixed at incorporation and contracting.",
      },
      "employment-law": {
        subtitle: "Defense of workers' and companies' rights",
        description:
          "Employment Law governs the relations between employers and workers. We intervene both in defense of workers' rights and in advising companies, regarding compliance with the Labour Code and other employment legislation.",
        expertise: [
          "Employment contracts (individual and collective)",
          "Disciplinary proceedings and dismissals",
          "Work accidents and occupational diseases",
          "Collective bargaining and agreements",
          "Social security and benefits",
          "Labor compliance advisory for companies",
        ],
        approach:
          "The firm intervenes with employers and workers, in separate proceedings. On the company side, contracts, disciplinary proceedings and termination of the employment relationship; on the worker side, lawfulness of dismissal, labor credits and representation in court.",
      },
      "family-succession-law": {
        subtitle: "Sensitive support in important moments",
        description:
          "Family and Succession Law deals with deeply personal issues. We ensure human and discreet support, combined with the technical rigor that the defense of your interests requires.",
        expertise: [
          "Divorce and division of marital property",
          "Parental responsibilities and regulation",
          "Estate division and inventories",
          "Wills and succession planning",
          "Inheritances and heirs' rights",
          "De facto unions and property rights",
        ],
        approach:
          "The firm handles divorces, regulation of parental responsibilities, maintenance and inventories, whether by consent or contentious means. An agreement is sought whenever possible, as it imposes less strain; if not, judicial representation is ensured.",
      },
      "criminal-law": {
        subtitle: "Rigorous defense of your rights in criminal proceedings",
        description:
          "Criminal Law protects the fundamental legal assets of the community. We ensure technical defense at all stages of the proceedings, from inquiry to appeal, as well as the representation of the victim who constitutes themselves as assistant.",
        expertise: [
          "Support at all stages of criminal proceedings",
          "Defense in inquiries and instruction",
          "Appeals and challenges",
          "Economic and financial crimes",
          "Crimes against persons and property",
          "Coercive measures and appeals",
        ],
        approach:
          "The firm ensures the defense of the defendant in inquiry, instruction, trial and appeal, and the representation of the assistant. The mandate is not measured by the outcome, which the law does not allow to promise, but by the fullness of the defense guarantees exercised.",
      },
      "real-estate-law": {
        subtitle: "Security in your real estate transactions",
        description:
          "Real Estate Law covers legal relations relating to real estate. We accompany the operation at all stages — from registry verification and negotiation to the deed, licensing and execution of the works.",
        expertise: [
          "Purchase and sale of properties",
          "Urban and rural leasing",
          "Licensing and construction",
          "Construction law and urban planning",
          "Condominiums and horizontal property",
          "Property regularization",
        ],
        approach:
          "The firm accompanies the real estate operation from registry verification to the deed and registration and, in matters of construction, licensing and the works contract. In the case of a non-resident acquirer, it ensures the required prior formalities.",
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