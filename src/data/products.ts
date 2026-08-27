export type ProductCategory =
  | "fruits"
  | "vegetables"
  | "canned"
  | "dates"
  | "juices"
  | "frozen"
  | "seafood";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery?: string[];
  highlights: string[];
  season?: string;
  packaging?: string;
}

export const products: Product[] = [
  {
    slug: "orange",
    name: "Oranges",
    category: "fruits",
    categoryLabel: "Fruits",
    shortDescription: "Premium Egyptian oranges with natural sweetness",
    description:
      "Cairo Sky oranges are hand-picked from the finest Egyptian groves, delivering exceptional sweetness, deep color, and a long shelf life for export markets.",
    image: "https://www.genex-corp.com/__l5e/assets-v1/a39d9f05-9ef4-4a2c-adc8-579853ff59e5/orange-real.jpg",
    highlights: ["Valencia & Navel varieties", "Cold-chain shipping", "GlobalGAP certified"],
    season: "December – May",
    packaging: "15 kg carton, mesh bags on request",
  },
  {
    slug: "strawberry",
    name: "Strawberries",
    category: "fruits",
    categoryLabel: "Fruits",
    shortDescription: "Fresh strawberries with vibrant color and great taste",
    description:
      "Bright, aromatic Egyptian strawberries selected for firmness and flavor — ideal for fresh markets and premium retail across Europe and the Gulf.",
    image: "https://www.genex-corp.com/__l5e/assets-v1/b9354f1a-e733-4eb5-8604-2550770991a6/st1.jpg",
    highlights: ["Festival & Fortuna varieties", "Refrigerated logistics", "Uniform grading"],
    season: "November – April",
    packaging: "250g / 500g punnets",
  },
  {
    slug: "grape",
    name: "Grapes",
    category: "fruits",
    categoryLabel: "Fruits",
    shortDescription: "Egyptian grapes in various export-quality varieties",
    description:
      "A full range of seedless and seeded grape varieties grown in Egypt's most productive vineyards, packed to preserve freshness across long-haul shipments.",
    image: "https://www.genex-corp.com/__l5e/assets-v1/cf279804-8621-4747-a15f-8a45254d9d54/grape1.jpg",
    highlights: ["Flame, Superior, Crimson", "SO2 pads packaging", "EU-compliant residues"],
    season: "May – August",
    packaging: "5 kg carton, punnets available",
  },
  {
    slug: "mango",
    name: "Mangoes",
    category: "fruits",
    categoryLabel: "Fruits",
    shortDescription: "Egyptian mangoes with a unique tropical flavor",
    description:
      "Sun-ripened Egyptian mangoes celebrated for their sweetness and fiber-free flesh — a signature product for Gulf and European clients.",
    image: "/__l5e/assets-v1/98f3877b-33b0-48bc-8ec4-41817cf6f1f6/IMG-20260825-WA0088.jpg",
    gallery: [
      "/__l5e/assets-v1/98f3877b-33b0-48bc-8ec4-41817cf6f1f6/IMG-20260825-WA0088.jpg",
      "/__l5e/assets-v1/51fade36-863e-40dd-a3f3-44f9d9488d11/IMG-20260825-WA0075.jpg",
      "/__l5e/assets-v1/5e03ef8f-50a6-4aee-b3c7-e837acc96c6f/IMG-20260825-WA0078.jpg",
    ],
    highlights: ["Keitt, Naomi, Zebda", "Hand-selected", "Ripeness-controlled"],
    season: "June – October",
    packaging: "4 kg / 5 kg cartons",
  },
  {
    slug: "pomegranate",
    name: "Pomegranates",
    category: "fruits",
    categoryLabel: "Fruits",
    shortDescription: "Juicy Egyptian pomegranates with distinctive taste",
    description:
      "Deep-red Egyptian pomegranates with high juice content and long storage life, perfect for retail and juicing.",
    image: "/__l5e/assets-v1/2469613d-0ae2-46bd-b882-81bea3d1e4fe/IMG-20260825-WA0112.jpg",
    gallery: [
      "/__l5e/assets-v1/2469613d-0ae2-46bd-b882-81bea3d1e4fe/IMG-20260825-WA0112.jpg",
      "/__l5e/assets-v1/bea980dc-8765-4804-8324-3117042f392b/IMG-20260825-WA0113.jpg",
    ],
    highlights: ["Wonderful variety", "Rich in antioxidants", "Sea & air freight"],
    season: "September – December",
    packaging: "4.5 kg carton",
  },
  {
    slug: "guava",
    name: "Guava",
    category: "fruits",
    categoryLabel: "Fruits",
    shortDescription: "Fresh white guava rich in Vitamin C",
    description:
      "Aromatic Egyptian white guavas with balanced sweetness, harvested and cooled within hours of picking.",
    image: "https://www.genex-corp.com/__l5e/assets-v1/04c99c6b-ee7c-44c7-9765-2cde3bc3880d/gv1.jpg",
    highlights: ["Rich Vitamin C", "Firm texture", "Uniform sizing"],
    season: "August – December",
    packaging: "4 kg carton",
  },
  {
    slug: "watermelon",
    name: "Watermelon",
    category: "fruits",
    categoryLabel: "Fruits",
    shortDescription: "Sweet Egyptian watermelon with rich red flesh",
    description:
      "Large, sweet Egyptian watermelons with deep red flesh and thin rind — dependable summer volume for export markets.",
    image: "https://www.genex-corp.com/__l5e/assets-v1/df091d01-c2a7-4701-bf37-23c3bb3ef6e3/watermelon-real.jpg",
    highlights: ["High Brix", "Bulk & retail packs", "Consistent supply"],
    season: "April – September",
    packaging: "Bulk / bin",
  },
  {
    slug: "lemon",
    name: "Lemons",
    category: "fruits",
    categoryLabel: "Fruits",
    shortDescription: "Fresh Egyptian lemons with rich juice and perfect acidity",
    description:
      "Bright, thin-skinned Egyptian lemons with high juice yield, sorted and waxed for extended shelf life.",
    image: "https://www.genex-corp.com/__l5e/assets-v1/57d3223c-4367-4f32-8203-bb3770e211bb/lemon-real2.jpg",
    highlights: ["Adalia & Eureka", "Waxed & polished", "Year-round availability"],
    season: "Year-round",
    packaging: "15 kg carton",
  },
  {
    slug: "peach",
    name: "Peaches",
    category: "fruits",
    categoryLabel: "Fruits",
    shortDescription: "Egyptian peaches with bright color and wonderful taste",
    description:
      "Fragrant Egyptian peaches picked at optimal ripeness for premium retail programs.",
    image: "https://www.genex-corp.com/assets/peach-D1tlyZZq.jpg",
    highlights: ["Yellow & white flesh", "Careful grading", "Cushioned trays"],
    season: "May – July",
    packaging: "4 kg tray",
  },
  {
    slug: "tomato",
    name: "Tomatoes",
    category: "vegetables",
    categoryLabel: "Vegetables",
    shortDescription: "Fresh tomatoes of high export quality",
    description:
      "Round, roma, and cluster tomatoes with strong shelf life, grown under controlled agricultural programs.",
    image: "https://www.genex-corp.com/__l5e/assets-v1/b65547a4-0964-4baf-a72d-1359e9f4f7e4/tomato-real.webp",
    highlights: ["Round, Roma, Cluster", "Uniform ripeness", "Cold-chain ready"],
    season: "Year-round",
    packaging: "6 kg / 10 kg carton",
  },
  {
    slug: "pepper",
    name: "Peppers",
    category: "vegetables",
    categoryLabel: "Vegetables",
    shortDescription: "Colorful peppers in various types",
    description:
      "Red, yellow, green and mixed bell peppers with thick walls and vibrant color for retail displays.",
    image: "https://www.genex-corp.com/__l5e/assets-v1/5ff84ae9-12c3-4da2-8950-7562ca4305a3/pepper-real.jpg",
    highlights: ["Mixed color packs", "Thick-walled", "GlobalGAP farms"],
    season: "October – May",
    packaging: "5 kg carton",
  },
  {
    slug: "cucumber",
    name: "Cucumbers",
    category: "vegetables",
    categoryLabel: "Vegetables",
    shortDescription: "Fresh Egyptian cucumbers of excellent export quality",
    description:
      "Crisp, straight cucumbers with dark green skin, individually sized for export retail programs.",
    image: "https://www.genex-corp.com/assets/cucumber-Dg8pD5MB.jpg",
    highlights: ["Beit Alpha type", "Uniform length", "Flow-wrap option"],
    season: "Year-round",
    packaging: "5 kg carton",
  },
  {
    slug: "sweet-potato",
    name: "Sweet Potatoes",
    category: "vegetables",
    categoryLabel: "Vegetables",
    shortDescription: "Egyptian sweet potatoes packed for export",
    description:
      "Premium Egyptian sweet potatoes, washed, graded by size and packed in export cartons for European and Gulf markets.",
    image: "/__l5e/assets-v1/0304cc86-7496-4560-b2ad-980e9dbec329/IMG-20260825-WA0090.jpg",
    gallery: [
      "/__l5e/assets-v1/0304cc86-7496-4560-b2ad-980e9dbec329/IMG-20260825-WA0090.jpg",
      "/__l5e/assets-v1/7f91e863-971f-4e06-8020-6486fc5940e1/IMG-20260825-WA0089.jpg",
      "/__l5e/assets-v1/2ee2c278-3eb3-4b99-87e8-ec8de2ee9e50/IMG-20260716-WA0157.jpg",
      "/__l5e/assets-v1/1f91b5fc-c3fe-4046-9b12-763822a523d8/IMG-20260716-WA0173.jpg",
    ],
    highlights: ["Beauregard variety", "Sizes 150–600 gm+", "Export cartons, Product of Egypt"],
    season: "September – April",
    packaging: "5 kg / 6 kg carton",
  },
];

export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((p) => p.category === category);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
