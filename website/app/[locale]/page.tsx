
import { getDictionary } from "@/content/dictionaries";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Experience } from "@/components/sections/Experience";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Locale } from "@/lib/i18n";
import { ScrollProgress, ScrollToTop, QuickNav } from "@/components/ui/ScrollHelpers";

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: HomePageProps) {
  // Desembrulhar params com await 
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      {/* Componentes de UI para scroll (Client Components isolados) */}
      <ScrollProgress />
      <QuickNav locale={locale} />
      <ScrollToTop />

      {/* Secções com IDs para navegação */}
      <section id="hero">
        <Hero locale={locale} dict={dict.home.hero} />
      </section>

      <section id="about">
        <AboutPreview locale={locale} dict={dict.home.about} />
      </section>

      <section id="experience">
        <Experience locale={locale} dict={dict.home.experience} />
      </section>

      <section id="practice">
        <PracticeAreas
          locale={locale}
          dict={dict.home.practiceAreas}
          areas={dict.practiceAreas.areas}
        />
      </section>

      <section id="why">
        <WhyChooseUs locale={locale} dict={dict.home.whyChooseUs} />
      </section>

      <section id="team">
        <TeamPreview locale={locale} dict={dict.team} />
      </section>

 

      <section id="faq">
        <FAQPreview locale={locale} dict={dict.faq} />
      </section>

      <section id="insights">
        <InsightsPreview locale={locale} dict={dict.insights} />
      </section>

      <section id="contact">
        <ContactCTA locale={locale} dict={dict.contact} />
      </section>
    </>
  );
}