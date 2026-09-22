// src/content/en/insights.ts
export const insights = {
  title: "Knowledge and legal updates.",
  description:
    "Articles and reflections on relevant legal topics, keeping you informed and prepared for legal challenges.",
  viewAll: "View all articles",
  readMore: "Read article",
  readTime: "min read",
  backToInsights: "← Back to Insights",
  publishedOn: "Published on",
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
      slug: "civil-law",
      category: "Civil Law",
      title: "Civil Law: protection and defense of your rights",
      excerpt:
        "Civil Law is the branch of private law that governs legal relations between natural and legal persons. We act in defense of your interests in matters such as civil liability, contracts, property rights and ownership.",
      date: "January 15, 2026",
      readTime: 5,
      tags: ["Civil", "Contracts", "Liability"],
      image: "/images/direito_civil.jpeg",
      content: {
        intro:
          "Civil Law is the branch of private law that governs legal relations between natural and legal persons. We act in defense of your interests in matters such as civil liability, contracts, property rights and ownership.",
        sections: [
          {
            title: "Compensation",
            paragraphs: [
              "The firm assesses the client's legal position and identifies the available avenues, favoring extrajudicial settlement. If no agreement can be reached, it ensures judicial representation until the final judgment becomes res judicata.",
            ],
          },
          {
            title: "How we can help",
            paragraphs: [
              "The firm assesses the client's legal position and identifies the available avenues, favoring extrajudicial settlement. If no agreement can be reached, it ensures judicial representation until the final judgment becomes res judicata.",
            ],
          },
        ],
      },
    },
    {
      slug: "corporate-commercial-law",
      category: "Corporate & Commercial Law",
      title: "Corporate & Commercial Law: complete legal support for your business",
      excerpt:
        "Corporate and Commercial Law covers the legal matters related to business activity. We provide legal advice to companies at all stages of their life cycle.",
      date: "January 12, 2026",
      readTime: 5,
      tags: ["Corporate", "Commercial", "Companies"],
      image: "/images/direito_societario.jpeg",
      content: {
        intro:
          "Corporate and Commercial Law covers the legal matters related to business activity. We provide legal advice to companies at all stages of their life cycle, from incorporation to day-to-day management and corporate governance.",
        sections: [
          {
            title: "Company incorporation and shareholders' agreements",
            paragraphs: [
              "The firm provides ongoing advice to commercial companies, focusing on articles of association, shareholders' agreements, commercial contracting and support to corporate bodies. Intervention anticipates legal risk, which is fixed at incorporation and contracting.",
            ],
          },
          {
            title: "Corporate Governance",
            paragraphs: [
              "Corporate governance is today a requirement of transparency and responsibility. We support companies in adopting good governance practices, complying with legal duties and preventing conflicts between shareholders and corporate bodies.",
            ],
          },
          {
            title: "How we can help",
            paragraphs: [
              "The firm provides ongoing advice to commercial companies, focusing on articles of association, shareholders' agreements, commercial contracting and support to corporate bodies. Intervention anticipates legal risk, which is fixed at incorporation and contracting.",
            ],
          },
        ],
      },
    },
    {
      slug: "employment-law",
      category: "Employment Law",
      title: "Employment Law: defense of workers' and companies' rights",
      excerpt:
        "Employment Law governs the relations between employers and workers. We intervene both in defense of workers' rights and in advising companies.",
      date: "January 8, 2026",
      readTime: 4,
      tags: ["Employment", "Employers", "Workers"],
      image: "/images/direito_trabalho.jpeg",
      content: {
        intro:
          "Employment Law governs the relations between employers and workers. We intervene both in defense of workers' rights and in advising companies, regarding compliance with the Labour Code and other employment legislation.",
        sections: [
          {
            title: "How we can help",
            paragraphs: [
              "The firm intervenes with employers and workers, in separate proceedings. On the company side, contracts, disciplinary proceedings and termination of the employment relationship; on the worker side, lawfulness of dismissal, labor credits and representation in court.",
            ],
          },
        ],
      },
    },
    {
      slug: "family-succession-law",
      category: "Family & Succession Law",
      title: "Family & Succession Law: human and discreet support",
      excerpt:
        "Family and Succession Law deals with deeply personal issues. We ensure human and discreet support, combined with technical rigor.",
      date: "January 5, 2026",
      readTime: 4,
      tags: ["Family", "Succession", "Estate"],
      image: "/images/direito_familiar.jpeg",
      content: {
        intro:
          "Family and Succession Law deals with deeply personal issues. We ensure human and discreet support, combined with the technical rigor that the defense of your interests requires.",
        sections: [
          {
            title: "Divorce and division of marital property",
            paragraphs: [
              "The firm handles divorces, regulation of parental responsibilities, maintenance and inventories, whether by consent or contentious means. An agreement is sought whenever possible, as it imposes less strain; if not, judicial representation is ensured.",
            ],
          },
          {
            title: "How we can help",
            paragraphs: [
              "The firm handles divorces, regulation of parental responsibilities, maintenance and inventories, whether by consent or contentious means. An agreement is sought whenever possible, as it imposes less strain; if not, judicial representation is ensured.",
            ],
          },
        ],
      },
    },
    {
      slug: "criminal-law",
      category: "Criminal Law",
      title: "Criminal Law: technical defense at all stages of proceedings",
      excerpt:
        "Criminal Law protects the fundamental legal assets of the community. We ensure technical defense at all stages of the proceedings.",
      date: "January 2, 2026",
      readTime: 5,
      tags: ["Criminal", "Defense", "Proceedings"],
      image: "/images/direito penal.jpeg",
      content: {
        intro:
          "Criminal Law protects the fundamental legal assets of the community. We ensure technical defense at all stages of the proceedings, from inquiry to appeal, as well as the representation of the victim who constitutes themselves as assistant.",
        sections: [
          {
            title: "How we can help",
            paragraphs: [
              "The firm ensures the defense of the defendant in inquiry, instruction, trial and appeal, and the representation of the assistant. The mandate is not measured by the outcome, which the law does not allow to promise, but by the fullness of the defense guarantees exercised.",
            ],
          },
        ],
      },
    },
    {
      slug: "real-estate-law",
      category: "Real Estate Law",
      title: "Real Estate Law: security in your transactions",
      excerpt:
        "Real Estate Law covers legal relations relating to real estate. We accompany the operation at all stages.",
      date: "December 28, 2025",
      readTime: 4,
      tags: ["Real Estate", "Transactions", "Construction"],
      image: "/images/direito_imobiliario.jpeg",
      content: {
        intro:
          "Real Estate Law covers legal relations relating to real estate. We accompany the operation at all stages — from registry verification and negotiation to the deed, licensing and execution of the works.",
        sections: [
          {
            title: "How we can help",
            paragraphs: [
              "The firm accompanies the real estate operation from registry verification to the deed and registration and, in matters of construction, licensing and the works contract. In the case of a non-resident acquirer, it ensures the required prior formalities.",
            ],
          },
        ],
      },
    },
  ],
} as const;