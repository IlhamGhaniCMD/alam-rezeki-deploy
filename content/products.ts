import type { StaticImageData } from "next/image";
import coconutFiber from "@/public/images/products/coconut-fiber.jpg";
import coconutSugar from "@/public/images/products/coconut-sugar.png";
import cocopeatBlock from "@/public/images/products/cocopeat-block.webp";
import desiccatedCoconut from "@/public/images/products/desiccated-coconut.jpg";
import rbdCoconutOil from "@/public/images/products/rbd-coconut-oil.jpg";
import virginCoconutOil from "@/public/images/products/virgin-coconut-oil.jpg";

export type Product = {
  slug: string;
  name: string;
  summary: string;
  image: StaticImageData;
};

export const products: Product[] = [
  {
    slug: "rbd-coconut-oil",
    name: "RBD Coconut Oil",
    summary:
      "Refined, bleached and deodorized oil from dried coconut kernel. A neutral flavor and high smoke point make it suitable for cooking, frying and baking.",
    image: rbdCoconutOil,
  },
  {
    slug: "virgin-coconut-oil",
    name: "Virgin Coconut Oil (VCO)",
    summary:
      "Extracted from fresh coconut meat by cold pressing or fermentation, without refining. It keeps its coconut flavor and aroma, and is used in food, skincare, haircare and supplements.",
    image: virginCoconutOil,
  },
  {
    slug: "coconut-sugar",
    name: "Coconut Sugar",
    summary:
      "Made from the sap of coconut palm flowers, heated and dried into granules. A caramel-like, less processed alternative to table sugar.",
    image: coconutSugar,
  },
  {
    slug: "coconut-fiber",
    name: "Coconut Fiber (Dried)",
    summary:
      "Coir from the outer husk of the coconut, dried to remove moisture. Used for ropes, mats and brushes, and as a growing medium in horticulture.",
    image: coconutFiber,
  },
  {
    slug: "desiccated-coconut",
    name: "Desiccated Coconut",
    summary:
      "Grated and dried coconut flesh in medium, fine and extra fine grades. Used in baking, confectionery and desserts.",
    image: desiccatedCoconut,
  },
  {
    slug: "cocopeat-block",
    name: "Cocopeat Block",
    summary:
      "Coconut coir pith compressed into 30 x 30 x 15 cm blocks. It holds water well and is used in horticulture and hydroponics.",
    image: cocopeatBlock,
  },
];
