// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Idiomas suportados
const locales = ["pt", "en"];
const defaultLocale = "pt";

// Função para obter o locale preferido do navegador
function getLocaleFromRequest(request: NextRequest): string {
  try {
    const acceptLanguage = request.headers.get("accept-language");
    if (!acceptLanguage) return defaultLocale;

    const preferred = acceptLanguage.split(",")[0].split("-")[0];
    return locales.includes(preferred) ? preferred : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // Verificar se é uma requisição para arquivo estático ou API
    if (
      pathname.includes(".") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next") ||
      pathname.startsWith("/favicon.ico") ||
      pathname.startsWith("/images")
    ) {
      return NextResponse.next();
    }

    // Verificar se o pathname já contém um locale
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
      return NextResponse.next();
    }

    // Obter locale preferido do navegador
    const locale = getLocaleFromRequest(request);

    // Redirecionar para o locale
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|jpeg|avif|webp|json|css|js|map)).*)",
  ],
};