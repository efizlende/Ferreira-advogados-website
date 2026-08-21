// src/content/pt/insights.ts
export const insights = {
  title: "Conhecimento e atualidade jurídica.",
  description:
    "Artigos e reflexões sobre temas relevantes do Direito, mantendo-o informado e preparado para os desafios legais.",
  viewAll: "Ver todos os artigos",
  readMore: "Ler artigo",
  readTime: "min de leitura",
  categories: {
    civil: "Direito Civil",
    labor: "Direito do Trabalho",
    corporate: "Direito Societário",
    family: "Direito da Família",
    criminal: "Direito Penal",
    realEstate: "Direito Imobiliário",
    updates: "Atualidade Jurídica",
  },
  articles: [
    {
      category: "Direito do Trabalho",
      title: "A importância do compliance laboral nas empresas em 2026",
      excerpt:
        "Com as novas regulamentações laborais, as empresas precisam de revisitar as suas práticas de compliance para evitar riscos e garantir a conformidade.",
      date: "15 de Janeiro, 2026",
      readTime: 5,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Trabalho", "Compliance", "Empresas"],
      image: "/images/direito_trabalho.jpeg",
    },
    {
      category: "Direito Imobiliário",
      title: "Mudanças no regime do arrendamento em Portugal: o que precisa de saber",
      excerpt:
        "As recentes alterações à lei do arrendamento urbano trazem novas regras para senhorios e inquilinos que importa conhecer.",
      date: "12 de Janeiro, 2026",
      readTime: 4,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Imobiliário", "Arrendamento", "Legislação"],
      image: "/images/direito_imobiliario.jpeg",
    },
    {
      category: "Direito Societário",
      title: "Governação corporativa: como preparar a sua empresa para o futuro",
      excerpt:
        "Uma governação sólida é fundamental para o crescimento sustentável e a atração de investimento. Conheça as melhores práticas.",
      date: "8 de Janeiro, 2026",
      readTime: 6,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Empresas", "Governação", "Investimento"],
      image: "/images/direito_societario.jpeg",
    },
    {
      category: "Direito da Família",
      title: "Mediação familiar: uma alternativa aos processos judiciais",
      excerpt:
        "A mediação familiar tem ganho destaque como uma via mais célere e menos desgastante para resolver conflitos familiares.",
      date: "5 de Janeiro, 2026",
      readTime: 4,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Família", "Mediação", "Divórcio"],
      image: "/images/direito_familiar.jpeg",
    },
    {
      category: "Direito Civil",
      title: "Contratos: como evitar litígios através de uma redação eficaz",
      excerpt:
        "Uma boa redação contratual é a melhor defesa contra litígios. Saiba como prevenir problemas através da clareza e precisão.",
      date: "2 de Janeiro, 2026",
      readTime: 5,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Contratos", "Litígio", "Prevenção"],
      image: "/images/direito_civil.jpeg",
    },
    {
      category: "Direito Penal",
      title: "O impacto das novas tecnologias no direito penal",
      excerpt:
        "A era digital trouxe novos desafios ao direito penal, desde a proteção de dados até ao combate ao cibercrime.",
      date: "28 de Dezembro, 2025",
      readTime: 6,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Penal", "Tecnologia", "Cibercrime"],
      image: "/images/direito penal.jpeg",
    },
  ],
} as const;