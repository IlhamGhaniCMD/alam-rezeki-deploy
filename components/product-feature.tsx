import Image from "next/image";
import type { Product } from "@/content/products";

type ProductFeatureProps = {
  product: Product;
  reversed?: boolean;
};

export function ProductFeature({
  product,
  reversed = false,
}: ProductFeatureProps) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-md ${
          reversed ? "md:order-2" : ""
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className={`py-2 ${reversed ? "md:order-1" : ""}`}>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {product.fullName}
        </h2>
        <p className="mt-4 font-copy text-base leading-7 text-foreground/75">
          {product.summary}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-5 border-t border-border/80 pt-5 sm:gap-8">
          <ProductDetails
            title="Specifications"
            items={product.specifications}
          />
          <ProductDetails title="Shipment" items={product.shipment} />
        </div>
      </div>
    </article>
  );
}

type ProductDetailsProps = {
  title: string;
  items: string[];
};

function ProductDetails({ title, items }: ProductDetailsProps) {
  return (
    <section>
      <h3 className="font-sans text-md font-semibold text-foreground">
        {title}
      </h3>
      <ul className="mt-3 list-disc space-y-1 pl-4 font-copy text-sm leading-6 text-foreground/70 marker:text-primary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
