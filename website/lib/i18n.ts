// src/lib/i18n.ts
export const locales = ["pt", "en"] as const;
export const defaultLocale = "pt" as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  pt: "🇵🇹",
  en: "🇬🇧",
};

// Função para obter a URL com locale
export function getLocalizedPath(
  path: string,
  locale: Locale,
  currentLocale: Locale
): string {
  // Se for a home
  if (path === "/") {
    return locale === defaultLocale ? "/" : `/${locale}`;
  }

  // Remover locale atual se existir
  const pathWithoutLocale = path
    .replace(/^\/[a-z]{2}\//, "/")
    .replace(/^\/[a-z]{2}$/, "/");

  // Se o locale for o padrão, retornar sem prefixo
  if (locale === defaultLocale) {
    return pathWithoutLocale === "/" ? "/" : pathWithoutLocale;
  }

  // Caso contrário, adicionar prefixo do locale
  const cleanPath = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
  return `/${locale}${cleanPath}`;
}