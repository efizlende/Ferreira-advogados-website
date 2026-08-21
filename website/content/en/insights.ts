
export const insights = {
  title: "Knowledge and legal updates.",
  description:
    "Articles and reflections on relevant legal topics, keeping you informed and prepared for legal challenges.",
  viewAll: "View all articles",
  readMore: "Read article",
  readTime: "min read",
  categories: {
    civil: "Civil Law",
    labor: "Employment Law",
    corporate: "Corporate Law",
    family: "Family Law",
    criminal: "Criminal Law",
    realEstate: "Real Estate Law",
    updates: "Legal Updates",
  },
  articles: [
    {
      category: "Employment Law",
      title: "The importance of labor compliance in companies in 2026",
      excerpt:
        "With new labor regulations, companies need to review their compliance practices to avoid risks and ensure compliance.",
      date: "January 15, 2026",
      readTime: 5,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Labor", "Compliance", "Companies"],
      image: "/images/direito_trabalho.jpeg",
    },
    {
      category: "Real Estate Law",
      title: "Changes to the rental regime in Portugal: what you need to know",
      excerpt:
        "Recent changes to the urban leasing law bring new rules for landlords and tenants that are important to know.",
      date: "January 12, 2026",
      readTime: 4,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Real Estate", "Leasing", "Legislation"],
      image: "/images/direito_imobiliario.jpeg",
    },
    {
      category: "Corporate Law",
      title: "Corporate governance: how to prepare your company for the future",
      excerpt:
        "Solid governance is essential for sustainable growth and attracting investment. Learn about best practices.",
      date: "January 8, 2026",
      readTime: 6,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Companies", "Governance", "Investment"],
      image: "/images/direito_societario.jpeg",
    },
    {
      category: "Family Law",
      title: "Family mediation: an alternative to judicial proceedings",
      excerpt:
        "Family mediation has gained prominence as a faster and less stressful way to resolve family conflicts.",
      date: "January 5, 2026",
      readTime: 4,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Family", "Mediation", "Divorce"],
      image: "/images/direito_familiar.jpeg",
    },
    {
      category: "Civil Law",
      title: "Contracts: how to avoid litigation through effective drafting",
      excerpt:
        "Good contract drafting is the best defense against litigation. Learn how to prevent problems through clarity and precision.",
      date: "January 2, 2026",
      readTime: 5,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Contracts", "Litigation", "Prevention"],
      image: "/images/direito_civil.jpeg",
    },
    {
      category: "Criminal Law",
      title: "The impact of new technologies on criminal law",
      excerpt:
        "The digital age has brought new challenges to criminal law, from data protection to combating cybercrime.",
      date: "December 28, 2025",
      readTime: 6,
      href: "https://drive.google.com/file/d/1dGmlXPohSONErawzCQQDH5zii0khhh7R/view?usp=sharing",
      tags: ["Criminal", "Technology", "Cybercrime"],
      image: "/images/direito penal.jpeg",
    },
  ],
} as const;