// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar arquivos estáticos e API
  if (
    pathname.includes(".") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // Verificar se já tem locale (pt ou en)
  const hasLocale = pathname.startsWith("/pt") || pathname.startsWith("/en");
  
  if (hasLocale) {
    return NextResponse.next();
  }

  // Redirecionar para PT por padrão
  const url = request.nextUrl.clone();
  url.pathname = `/pt${pathname}`;
  
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\\\.(?:png|jpg|jpeg|gif|webp|svg|ico)).*)",
  ],
};