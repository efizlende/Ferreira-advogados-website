// src/content/dictionaries.ts
import { Locale } from "@/lib/i18n";

// PT imports
import * as ptCommon from "./pt/common";
import * as ptNavbar from "./pt/navbar";
import * as ptHome from "./pt/home";
import * as ptFooter from "./pt/footer";
import * as ptPracticeAreas from "./pt/practice-areas";
import * as ptTeam from "./pt/team";
import * as ptFaq from "./pt/faq";
import * as ptContact from "./pt/contact";
import * as ptInsights from "./pt/insights";
import * as ptTestimonials from "./pt/testimonials";

// EN imports
import * as enCommon from "./en/common";
import * as enNavbar from "./en/navbar";
import * as enHome from "./en/home";
import * as enFooter from "./en/footer";
import * as enPracticeAreas from "./en/practice-areas";
import * as enTeam from "./en/team";
import * as enFaq from "./en/faq";
import * as enContact from "./en/contact";
import * as enInsights from "./en/insights";
import * as enTestimonials from "./en/testimonials";

// Definir o tipo do dicionário baseado na versão PT
export type Dictionary = {
  common: typeof ptCommon.common;
  navbar: typeof ptNavbar.navbar;
  home: typeof ptHome.home;
  footer: typeof ptFooter.footer;
  practiceAreas: typeof ptPracticeAreas.practiceAreas;
  team: typeof ptTeam.team;
  faq: typeof ptFaq.faq;
  contact: typeof ptContact.contact;
  insights: typeof ptInsights.insights;
  testimonials: typeof ptTestimonials.testimonials;
};

// Dicionários com cast 
const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    common: ptCommon.common,
    navbar: ptNavbar.navbar,
    home: ptHome.home,
    footer: ptFooter.footer,
    practiceAreas: ptPracticeAreas.practiceAreas,
    team: ptTeam.team,
    faq: ptFaq.faq,
    contact: ptContact.contact,
    insights: ptInsights.insights,
    testimonials: ptTestimonials.testimonials,
  },
  en: {
    common: enCommon.common as unknown as typeof ptCommon.common,
    navbar: enNavbar.navbar as unknown as typeof ptNavbar.navbar,
    home: enHome.home as unknown as typeof ptHome.home,
    footer: enFooter.footer as unknown as typeof ptFooter.footer,
    practiceAreas: enPracticeAreas.practiceAreas as unknown as typeof ptPracticeAreas.practiceAreas,
    team: enTeam.team as unknown as typeof ptTeam.team,
    faq: enFaq.faq as unknown as typeof ptFaq.faq,
    contact: enContact.contact as unknown as typeof ptContact.contact,
    insights: enInsights.insights as unknown as typeof ptInsights.insights,
    testimonials: enTestimonials.testimonials as unknown as typeof ptTestimonials.testimonials,
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.pt;
}