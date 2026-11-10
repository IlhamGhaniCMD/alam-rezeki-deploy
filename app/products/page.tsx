import type { Metadata } from "next";
import { ProductFeature } from "@/components/product-feature";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore coconut products supplied by Alam Rezeki, from coconut fiber and coco peat to coconut oils and food ingredients.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
      <header className="mb-12 text-center sm:mb-16">
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Our Coconut Products
        </h1>
      </header>

      <div className="space-y-12 sm:space-y-16">
        {products.map((product, index) => (
          <div
            key={product.slug}
            className={
              index > 0 ? "border-t border-border/70 pt-12 sm:pt-16" : ""
            }
          >
            <ProductFeature product={product} reversed={index % 2 === 1} />
          </div>
        ))}
      </div>
    </div>
  );
}
