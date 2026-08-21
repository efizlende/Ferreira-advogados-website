// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Redirects para substituir o middleware
  async redirects() {
    return [
      // Redirecionar raiz para PT
      {
        source: "/",
        destination: "/pt",
        permanent: true,
      },
      // Redirecionar URLs antigas (PT)
      {
        source: "/sobre",
        destination: "/pt/about",
        permanent: true,
      },
      {
        source: "/areas-de-atuacao",
        destination: "/pt/practice-areas",
        permanent: true,
      },
      {
        source: "/equipa",
        destination: "/pt/team",
        permanent: true,
      },
      {
        source: "/contactos",
        destination: "/pt/contact",
        permanent: true,
      },
      {
        source: "/insights",
        destination: "/pt/insights",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/pt/faq",
        permanent: true,
      },
      {
        source: "/privacidade",
        destination: "/pt/privacy-policy",
        permanent: true,
      },
      {
        source: "/cookies",
        destination: "/pt/cookie-policy",
        permanent: true,
      },
      // Redirecionar EN para PT (se não houver versão EN)
      {
        source: "/en",
        destination: "/pt",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/pt/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;