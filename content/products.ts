import type { StaticImageData } from "next/image";
import exampleProduct from "@/public/images/operations/example-product.jpeg";
import exampleProductMultiple from "@/public/images/operations/example-product-multiple.jpeg";
import coconutFiber from "@/public/images/products/coconut-fiber.jpg";
import coconutSugar from "@/public/images/products/coconut-sugar.png";
import cocopeatBlock from "@/public/images/products/cocopeat-block.webp";
import desiccatedCoconut from "@/public/images/products/desiccated-coconut.jpg";
import rbdCoconutOil from "@/public/images/products/rbd-coconut-oil.jpg";
import virginCoconutOil from "@/public/images/products/virgin-coconut-oil.jpg";

export type ProductTag = {
  label: string;
  highlight?: boolean;
};

export type ProductSample = {
  image: StaticImageData;
  alt: string;
  caption: string;
};

export type Product = {
  slug: string;
  name: string;
  fullName: string;
  summary: string;
  portfolioDescription: string;
  tags: ProductTag[];
  image: StaticImageData;
  samples?: ProductSample[];
};

export const products: Product[] = [
  {
    slug: "rbd-coconut-oil",
    name: "RBD Coconut Oil",
    fullName: "Refined, Bleached, and Deodorized (RBD) Coconut Oil",
    summary:
      "Refined, bleached and deodorized oil from dried coconut kernel. A neutral flavor and high smoke point make it suitable for cooking, frying and baking.",
    portfolioDescription:
      "Premium physical refined coconut oil with high thermal stability, odorless profile, and clear Lovibond index. Ideal for commercial frying, shortenings, cosmetics, and oleochemicals.",
    tags: [
      { label: "Flexitank (22 MT)", highlight: true },
      { label: "IBC Totes" },
      { label: "Steel Drums" },
    ],
    image: rbdCoconutOil,
    samples: [
      {
        image: exampleProductMultiple,
        alt: "Bottled batch retention samples of refined coconut oil",
        caption: "Batch Retention Samples",
      },
      {
        image: exampleProduct,
        alt: "Clear refined coconut oil specimen bottle",
        caption: "Clear Lovibond Specimen",
      },
    ],
  },
  {
    slug: "virgin-coconut-oil",
    name: "Virgin Coconut Oil (VCO)",
    fullName: "Virgin Coconut Oil (VCO)",
    summary:
      "Extracted from fresh coconut meat by cold pressing or fermentation, without refining. It keeps its coconut flavor and aroma, and is used in food, skincare, haircare and supplements.",
    portfolioDescription:
      "Cold-pressed from selected fresh coconut meat without chemicals or high heat. Naturally rich in lauric acid (>50%) with a gentle coconut aroma for nutritional supplements and premium skincare.",
    tags: [
      { label: "Cold Pressed", highlight: true },
      { label: "Food & Cosmetic Grade" },
      { label: "Drums & IBC" },
    ],
    image: virginCoconutOil,
  },
  {
    slug: "coconut-sugar",
    name: "Coconut Sugar",
    fullName: "Coconut Sugar",
    summary:
      "Made from the sap of coconut palm flowers, heated and dried into granules. A caramel-like, less processed alternative to table sugar.",
    portfolioDescription:
      "Natural unrefined sweetener derived from fresh coconut palm blossoms. Features a low glycemic index, warm caramel taste, and fine granulated consistency for health-conscious food producers.",
    tags: [
      { label: "Granulated / Block", highlight: true },
      { label: "Low GI" },
      { label: "25kg Kraft Bags" },
    ],
    image: coconutSugar,
  },
  {
    slug: "desiccated-coconut",
    name: "Desiccated Coconut",
    fullName: "Desiccated Coconut (Medium, Fine, Extra Fine)",
    summary:
      "Grated and dried coconut flesh in medium, fine and extra fine grades. Used in baking, confectionery and desserts.",
    portfolioDescription:
      "Grated, dried, and unsweetened fresh coconut meat. Offered in Medium, Fine, and Extra Fine cuts with high fat content, ideal for confectionery, baking, toppings, and dairy applications.",
    tags: [
      { label: "High Fat & Low Fat", highlight: true },
      { label: "Fine / Medium Cuts" },
      { label: "25kg Poly Bags" },
    ],
    image: desiccatedCoconut,
  },
  {
    slug: "coconut-fiber",
    name: "Coconut Fiber (Dried)",
    fullName: "Coconut Fiber (Dried)",
    summary:
      "Coir from the outer husk of the coconut, dried to remove moisture. Used for ropes, mats and brushes, and as a growing medium in horticulture.",
    portfolioDescription:
      "Strong, thoroughly cleaned, and sun-dried natural golden coir fiber extracted from coconut husks. Widely used for mattresses, erosion control geotextiles, ropes, and automotive seating upholstery.",
    tags: [
      { label: "Baled (100–110 kg)", highlight: true },
      { label: "Low Moisture" },
      { label: "High Tensile" },
    ],
    image: coconutFiber,
  },
  {
    slug: "cocopeat-block",
    name: "Cocopeat Block",
    fullName: "Cocopeat Block",
    summary:
      "Coconut coir pith compressed into 30 x 30 x 15 cm blocks. It holds water well and is used in horticulture and hydroponics.",
    portfolioDescription:
      "Washed, low-EC compressed coir pith blocks for premium horticultural substrates, greenhouse cultivation, and hydroponics. Exceptional water retention and aeration capacity.",
    tags: [
      { label: "5kg Compressed Blocks", highlight: true },
      { label: "Low EC (<0.5 mS/cm)" },
      { label: "High Expansion" },
    ],
    image: cocopeatBlock,
  },
];
