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
  specifications: string[];
  shipment: string[];
};

export const products: Product[] = [
  {
    slug: "rbd-coconut-oil",
    name: "Refined, Bleached, and Deodorized (RBD) Coconut Oil",
    summary:
      "RBD coconut oil is obtained from the dried kernel of coconuts. It undergoes refining, bleaching, and deodorizing processes to remove impurities, odor, and color. RBD coconut oil has a neutral flavor and a higher smoke point, making it suitable for cooking, frying, and baking.",
    image: rbdCoconutOil,
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
    summary:
      "VCO is extracted from fresh coconut meat without undergoing any refining processes. It is considered a more natural form of coconut oil. VCO is typically produced through methods like cold-pressing or fermentation. It retains a distinct coconut flavor and aroma. VCO is often used in culinary applications, skincare products, haircare, and as a dietary supplement.",
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
    summary:
      "Coconut sugar, also known as coconut palm sugar, is derived from the sap of the coconut palm tree's flowers. The sap is collected, heated, and dehydrated to create granulated coconut sugar. It has a caramel-like flavor and can be used as a substitute for regular table sugar. Coconut sugar is considered a more natural and less processed sweetener option.",
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
    slug: "coconut-fiber",
    name: "Coconut Fiber (Dried)",
    summary:
      "Coconut fiber, also known as coir or coconut coir, refers to the outer husk of the coconut fruit. It is the fibrous material that surrounds the coconut shell. Coconut fiber is often extracted and dried to remove moisture. It is widely used for various applications such as making ropes, mats, brushes, and as a growing medium in horticulture.",
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
    slug: "desiccated-coconut",
    name: "Desiccated Coconut (Medium, Fine, Extra Fine)",
    summary:
      "Desiccated coconut is the flesh of the coconut that has been grated and dried. It is available in different textures, including medium, fine, and extra fine. Desiccated coconut is commonly used in baking, confectionery, and dessert recipes. It adds a rich coconut flavor and texture to dishes.",
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
    slug: "cocopeat-block",
    name: "Cocopeat Block (30 × 30 × 15 cm)",
    summary:
      "Cocopeat, also known as coconut coir pith or coco peat, is the fibrous material that remains after extracting the coconut fiber. It is a byproduct of coconut processing. Cocopeat has excellent water retention properties and is used as a growing medium in horticulture and hydroponic systems. It is often compressed into blocks or bricks, which can be rehydrated and used as a soil amendment.",
    image: cocopeatBlock,
    specifications: [
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
