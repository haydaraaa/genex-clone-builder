import type { ProductCategory } from "./products";

export interface Category {
  slug: ProductCategory;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    slug: "fruits",
    name: "Fruits",
    description:
      "Oranges, strawberries, grapes, pomegranates, mangoes, guavas and more — export-grade Egyptian fruits.",
    image: "https://www.genex-corp.com/assets/category-fruits-b1JypkDD.jpg",
  },
  {
    slug: "vegetables",
    name: "Vegetables",
    description:
      "Tomatoes, peppers, onions, potatoes, green beans and a full range of fresh vegetables.",
    image: "https://www.genex-corp.com/assets/category-vegetables-psN3OUoF.jpg",
  },
  {
    slug: "canned",
    name: "Canned & Legumes",
    description:
      "Fava beans, lentils, chickpeas and white beans packed with modern technology for European markets.",
    image: "https://www.genex-corp.com/assets/category-canned-Cc-vhd2V.jpg",
  },
  {
    slug: "dates",
    name: "Dates",
    description:
      "Medjool, Ajwa, Sukkari, Barhi, Deglet Noor and Saidi dates of premium quality.",
    image: "https://www.genex-corp.com/assets/category-dates-b_Y43XJE.jpg",
  },
  {
    slug: "juices",
    name: "Juices",
    description:
      "Natural juices from oranges, mangoes, guavas, strawberries and pomegranates.",
    image: "https://www.genex-corp.com/assets/category-juices-Dkx3TL1I.jpg",
  },
  {
    slug: "frozen",
    name: "Frozen Products",
    description:
      "IQF frozen fruits and vegetables of the highest export quality for European clients.",
    image: "https://www.genex-corp.com/assets/category-frozen-BvW1DV_q.jpg",
  },
  {
    slug: "seafood",
    name: "Frozen Seafood",
    description:
      "Premium IQF frozen shrimp, calamari, and fish fillets for European export.",
    image: "https://www.genex-corp.com/assets/category-seafood-BMJkehST.jpg",
  },
  {
    slug: "pickles",
    name: "Pickles & Olives",
    description:
      "Green and black table olives, kalamata-style olives and pickled jalapeño peppers in brine.",
    image: "/__l5e/assets-v1/a9fbfc9d-59ff-4799-93ae-6a32220d0b61/IMG-20260825-WA0034.jpg",
  },
];

export const getCategory = (slug: ProductCategory) =>
  categories.find((c) => c.slug === slug)!;
