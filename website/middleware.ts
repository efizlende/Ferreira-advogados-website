import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar rotas que não precisam de locale
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Já possui locale
  const hasLocale =
    pathname === "/pt" ||
    pathname.startsWith("/pt/") ||
    pathname === "/en" ||
    pathname.startsWith("/en/");

  if (hasLocale) {
    return NextResponse.next();
  }

  // Redirecionar para português por padrão
  const url = request.nextUrl.clone();
  url.pathname = `/pt${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};