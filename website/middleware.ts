
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Idiomas suportados
const locales = ["pt", "en"];
const defaultLocale = "pt";

// Função para obter o locale preferido do navegador
function getLocaleFromRequest(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage.split(",")[0].split("-")[0];
  return locales.includes(preferred) ? preferred : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar se o pathname já contém um locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Se já tiver locale, continuar
    return NextResponse.next();
  }

  // Se for um arquivo estático ou API, ignorar
  if (
    pathname.includes(".") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  // Obter locale preferido do navegador
  const locale = getLocaleFromRequest(request);

  // Redirecionar para o locale
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Pular arquivos internos e API
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg)).*)",
  ],
};