export const common = {
  siteName: "Mário Ferreira Advogados",
  description:
    "Multidisciplinary law firm in Cascais, with over 40 years of experience.",
  slogan: "We defend your rights.",
} as const;

export const footer = {
  slogan: "We defend your rights.",
  navigation: {
    title: "Navigation",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Practice Areas", href: "/practice-areas" },
      { label: "Team", href: "/team" },
      { label: "Insights", href: "/insights" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  contact: {
    title: "Contact",
    address: "Rua José Florindo, 44C\n2750-400 Cascais",
    phone: "+351 214848390",
    whatsapp: "965 228 772",
    email: "mario.ferreira-4651l@advogados.oa.pt",
  },
  legal: {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
  copyright: "All rights reserved.",
  developedBy: "Developed by",
  backToTop: "Back to top",
} as const;

export const navbar = {
  about: "About Us",
  practiceAreas: "Practice Areas",
  team: "Team",
  insights: "Insights",
  faq: "FAQ",
  contact: "Contact",
  cta: "Contact Us",
} as const;

export const practiceAreas = {
  areas: [
    {
      slug: "civil-law",
      title: "Civil Law",
      description:
        "Civil liability, contracts, property rights and other civil matters.",
      icon: "Scale",
    },
    {
      slug: "corporate-commercial-law",
      title: "Corporate & Commercial Law",
      description:
        "Company incorporation, commercial contracts, mergers, acquisitions, restructuring and corporate governance.",
      icon: "Building2",
    },
    {
      slug: "employment-law",
      title: "Employment Law",
      description:
        "Employment contracts, disciplinary proceedings, dismissals, labor disputes and collective bargaining.",
      icon: "Users",
    },
    {
      slug: "family-succession-law",
      title: "Family & Succession Law",
      description:
        "Divorce, parental responsibilities, estate division, wills, inheritances and succession planning.",
      icon: "Heart",
    },
    {
      slug: "criminal-law",
      title: "Criminal Law",
      description:
        "Support and defense throughout the criminal proceedings, with rigor and protection of rights.",
      icon: "Gavel",
    },
    {
      slug: "real-estate-law",
      title: "Real Estate Law",
      description:
        "Property sales and purchases, leasing, licensing, construction law and urban planning.",
      icon: "Home",
    },
  ],
} as const;

export const testimonials = {
  title: "What our clients say",
  note: "Real testimonials from satisfied clients. Opinions are shared with authorization.",
  items: [
    {
      name: "Corporate Client",
      company: "Hospitality Sector",
      text: "Mário Ferreira Advogados has been an essential partner for our business. Their rigorous and personalized approach made all the difference.",
      rating: 5,
    },
    {
      name: "Private Client",
      company: "Family Law",
      text: "I felt supported and understood at all times. A team that combines technical competence with true human proximity.",
      rating: 5,
    },
    {
      name: "Corporate Client",
      company: "Technology",
      text: "Professionalism and efficiency in resolving complex issues. I highly recommend Mário Ferreira Advogados services.",
      rating: 5,
    },
  ],
} as const;