// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/content/dictionaries";

// Gerar paths estáticos para todos os locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Gerar metadata dinâmica
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: {
      template: `%s | ${dict.common.siteName}`,
      default: dict.common.siteName,
    },
    description: dict.common.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        pt: "/pt",
        en: "/en",
      },
    },
  } as Metadata;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Verificar se o locale é suportado
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Navbar locale={locale} dict={dict.navbar} />
      <main>{children}</main>
      <Footer locale={locale} dict={dict.footer} />
    </>
  );
}