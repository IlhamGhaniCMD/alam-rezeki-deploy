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
  specifications: string[];
  shipment: string[];
};

export const products: Product[] = [
  {
    slug: "rbd-coconut-oil",
    name: "RBD Coconut Oil",
    fullName: "Refined, Bleached, and Deodorized (RBD) Coconut Oil",
    summary:
      "RBD coconut oil is obtained from the dried kernel of coconuts. It undergoes refining, bleaching, and deodorizing processes to remove impurities, odor, and color. RBD coconut oil has a neutral flavor and a higher smoke point, making it suitable for cooking, frying, and baking.",
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
    specifications: [
      "Moisture: 0.1% max",
      "Free fatty acid: 0.1% max",
      "Iodine value: 6.2 - 11",
      "Color: 1.5R max",
    ],
    shipment: [
      "Jerrycan @ 18 Litre each, Max 480 pcs",
      "Steel Drum @ 185 kg each, Max 80 pcs",
      "Flexi Tank: Max 21,500kg",
    ],
  },
  {
    slug: "virgin-coconut-oil",
    name: "Virgin Coconut Oil (VCO)",
    fullName: "Virgin Coconut Oil (VCO)",
    summary:
      "VCO is extracted from fresh coconut meat without undergoing any refining processes. It is considered a more natural form of coconut oil. VCO is typically produced through methods like cold-pressing or fermentation. It retains a distinct coconut flavor and aroma. VCO is often used in culinary applications, skincare products, haircare, and as a dietary supplement.",
    portfolioDescription:
      "Cold-pressed from selected fresh coconut meat without chemicals or high heat. Naturally rich in lauric acid (>50%) with a gentle coconut aroma for nutritional supplements and premium skincare.",
    tags: [
      { label: "Cold Pressed", highlight: true },
      { label: "Food & Cosmetic Grade" },
      { label: "Drums & IBC" },
    ],
    image: virginCoconutOil,
    specifications: [
      "Moisture: 0.1% max",
      "Free fatty acid: 0.02% max",
      "Iodine value: 5.7",
      "Color: Colorless",
      "Peroxide value: 0.4",
    ],
    shipment: ['FCL 20": Max 450 pcs (plastic pail + PE bag 15 Litre each)'],
  },
  {
    slug: "coconut-sugar",
    name: "Coconut Sugar",
    fullName: "Coconut Sugar",
    summary:
      "Coconut sugar, also known as coconut palm sugar, is derived from the sap of the coconut palm tree's flowers. The sap is collected, heated, and dehydrated to create granulated coconut sugar. It has a caramel-like flavor and can be used as a substitute for regular table sugar. Coconut sugar is considered a more natural and less processed sweetener option.",
    portfolioDescription:
      "Natural unrefined sweetener derived from fresh coconut palm blossoms. Features a low glycemic index, warm caramel taste, and fine granulated consistency for health-conscious food producers.",
    tags: [
      { label: "Granulated / Block", highlight: true },
      { label: "Low GI" },
      { label: "25kg Kraft Bags" },
    ],
    image: coconutSugar,
    specifications: [
      "Moisture: 2% max",
      "Fructose: 2-5%",
      "Glucose: 3-5%",
      "Sucrose: >80%",
      "Size: Mesh 14/16",
      "Form: Powder / Granulated",
      "Peroxide value: 0.4",
    ],
    shipment: [
      'FCL 20": Max 17-18 MT, 25kg kraft with polyethylene liner',
      'FCL 40": Max 24-25 MT, 25kg kraft with polyethylene liner',
    ],
  },
  {
    slug: "desiccated-coconut",
    name: "Desiccated Coconut",
    fullName: "Desiccated Coconut (Medium, Fine, Extra Fine)",
    summary:
      "Desiccated coconut is the flesh of the coconut that has been grated and dried. It is available in different textures, including medium, fine, and extra fine. Desiccated coconut is commonly used in baking, confectionery, and dessert recipes. It adds a rich coconut flavor and texture to dishes.",
    portfolioDescription:
      "Grated, dried, and unsweetened fresh coconut meat. Offered in Medium, Fine, and Extra Fine cuts with high fat content, ideal for confectionery, baking, toppings, and dairy applications.",
    tags: [
      { label: "High Fat & Low Fat", highlight: true },
      { label: "Fine / Medium Cuts" },
      { label: "25kg Poly Bags" },
    ],
    image: desiccatedCoconut,
    specifications: [
      "Moisture: 3% max",
      "Free fatty acid: 0.1% max",
      "Fat Content +-5%: 50% (Reduced), 65% High",
      "PH: 6.1 - 6.7",
      "Residual SO2: <10",
    ],
    shipment: [
      'FCL 20": Max 17-18 MT, 25kg kraft with polyethylene liner or PP bag, PE bag inside',
      'FCL 40": Max 24-25 MT, 25kg kraft with polyethylene liner or PP bag, PE bag inside',
    ],
  },
  {
    slug: "coconut-fiber",
    name: "Coconut Fiber (Dried)",
    fullName: "Coconut Fiber (Dried)",
    summary:
      "Coconut fiber, also known as coir or coconut coir, refers to the outer husk of the coconut fruit. It is the fibrous material that surrounds the coconut shell. Coconut fiber is often extracted and dried to remove moisture. It is widely used for various applications such as making ropes, mats, brushes, and as a growing medium in horticulture.",
    portfolioDescription:
      "Strong, thoroughly cleaned, and sun-dried natural golden coir fiber extracted from coconut husks. Widely used for mattresses, erosion control geotextiles, ropes, and automotive seating upholstery.",
    tags: [
      { label: "Baled (100–110 kg)", highlight: true },
      { label: "Low Moisture" },
      { label: "High Tensile" },
    ],
    image: coconutFiber,
    specifications: [
      "Moisture: 0.1% max",
      "Free fatty acid: 0.1% max",
      "Iodine value: 6.2 - 11",
      "Color: 1.5R max",
    ],
    shipment: ['FCL 40": Max 18-19 MT, 160-165 bale (120-125kg each)'],
  },
  {
    slug: "cocopeat-block",
    name: "Cocopeat Block",
    fullName: "Cocopeat Block",
    summary:
      "Cocopeat, also known as coconut coir pith or coco peat, is the fibrous material that remains after extracting the coconut fiber. It is a byproduct of coconut processing. Cocopeat has excellent water retention properties and is used as a growing medium in horticulture and hydroponic systems. It is often compressed into blocks or bricks, which can be rehydrated and used as a soil amendment.",
    portfolioDescription:
      "Washed, low-EC compressed coir pith blocks for premium horticultural substrates, greenhouse cultivation, and hydroponics. Exceptional water retention and aeration capacity.",
    tags: [
      { label: "5kg Compressed Blocks", highlight: true },
      { label: "Low EC (<0.5 mS/cm)" },
      { label: "High Expansion" },
    ],
    image: cocopeatBlock,
    specifications: [
      "Size: 30 × 30 × 15 cm",
      "Weight: 5kg each",
      "Free fatty acid: 0.1% max",
      "Organic & Sand matter: <2.5%",
      "PH: 5.5 - 6.8",
      "Compression Ratio: 5:1",
      "Expansion: 1 : 13-15",
    ],
    shipment: ['FCL 40": 22MT or 20 pallet (224 blocks each)'],
  },
];
