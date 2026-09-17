export const common = {
  siteName: "Mário Ferreira Advogados",
  description:
    "Escritório de advocacia multidisciplinar em Cascais, com mais de 40 anos de experiência.",
  slogan: "Defendemos os seus direitos.",
} as const;

export const footer = {
  slogan: "Defendemos os seus direitos.",
  navigation: {
    title: "Navegação",
    items: [
      { label: "Sobre Nós", href: "/about" },
      { label: "Áreas de Atuação", href: "/practice-areas" },
      { label: "Equipa", href: "/team" },
      { label: "Insights", href: "/insights" },
      { label: "FAQ", href: "/faq" },
      { label: "Contactos", href: "/contact" },
    ],
  },
  contact: {
    title: "Contacto",
    address: "Rua José Florindo, 44C\n2750-400 Cascais",
    phone: "+351 214848390",
    whatsapp: "965 228 772",
    email: "mario.ferreira-4651l@advogados.oa.pt",
  },
  legal: {
    title: "Legal",
    items: [
      { label: "Política de Privacidade", href: "/privacy-policy" },
      { label: "Política de Cookies", href: "/cookie-policy" },
    ],
  },
  copyright: "Todos os direitos reservados.",
  developedBy: "Desenvolvido por",
  backToTop: "Voltar ao topo",
} as const;

export const navbar = {
  about: "Sobre Nós",
  practiceAreas: "Áreas de Atuação",
  team: "Equipa",
  insights: "Insights",
  faq: "FAQ",
  contact: "Contactos",
  cta: "Fale Connosco",
} as const;

export const practiceAreas = {
  areas: [
    {
      slug: "direito-civil",
      title: "Direito Civil",
      description:
        "Responsabilidade civil, contratos, direitos reais, propriedade e outras matérias de natureza civil.",
      icon: "Scale",
    },
    {
      slug: "direito-comercial-societario",
      title: "Direito Comercial e Societário",
      description:
        "Constituição de sociedades, contratos comerciais, fusões, aquisições, reestruturações e governo societário.",
      icon: "Building2",
    },
    {
      slug: "direito-trabalho",
      title: "Direito do Trabalho",
      description:
        "Contratos de trabalho, processos disciplinares, despedimentos, conflitos laborais e negociação coletiva.",
      icon: "Users",
    },
    {
      slug: "direito-familia-sucessoes",
      title: "Direito da Família e Sucessões",
      description:
        "Divórcio, responsabilidades parentais, partilhas, testamentos, heranças e planeamento sucessório.",
      icon: "Heart",
    },
    {
      slug: "direito-penal",
      title: "Direito Penal",
      description:
        "Acompanhamento e defesa nas diferentes fases do processo penal, com rigor e proteção dos direitos.",
      icon: "Gavel",
    },
    {
      slug: "direito-imobiliario",
      title: "Direito Imobiliário",
      description:
        "Compra e venda de imóveis, arrendamento, licenciamento, direito de construção e urbanismo.",
      icon: "Home",
    },
  ],
} as const;

export const testimonials = {
  title: "O que dizem os nossos clientes",
  note: "Depoimentos reais de clientes satisfeitos. As opiniões são apresentadas com autorização.",
  items: [
    {
      name: "Cliente Empresarial",
      company: "Sector Hoteleiro",
      text: "O Mário Ferreira Advogados tem sido um parceiro essencial para o nosso negócio. A sua abordagem rigorosa e personalizada fez toda a diferença.",
      rating: 5,
    },
    {
      name: "Cliente Particular",
      company: "Direito da Família",
      text: "Senti-me acompanhada e compreendida em todos os momentos. Uma equipa que alia competência técnica a uma verdadeira proximidade humana.",
      rating: 5,
    },
    {
      name: "Cliente Empresarial",
      company: "Tecnologia",
      text: "Profissionalismo e eficiência na resolução de questões complexas. Recomendo vivamente os serviços do Mário Ferreira Advogados.",
      rating: 5,
    },
  ],
} as const;