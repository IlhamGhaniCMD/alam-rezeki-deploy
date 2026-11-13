import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BreathingDot } from "@/components/ui/breathing-dot";
import { home } from "@/content/home";
import { type ProductTag, products } from "@/content/products";

function ProductTagPills({ tags }: { tags: ProductTag[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag.label}
          className={
            tag.highlight
              ? "rounded-full border border-[#52946b]/55 bg-[#25854a]/25 px-3 py-1 text-[11px] font-medium text-[#9be2b0]"
              : "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/75"
          }
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}

export function ProductsSection() {
  const { about, productSection } = home;
  const [flagshipProduct, wideProduct, ...restProducts] = products;
  const compactProducts = restProducts.slice(0, 2);
  const bottomProducts = restProducts.slice(2, 4);

  return (
    <section
      id="products"
      className="relative isolate overflow-hidden bg-[#12261b] text-white"
    >
      {/* Subtle Ambient Emerald Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-112 w-240 -translate-x-1/2 rounded-full bg-[#25854a]/20 blur-3xl"
      />

      {/* Top Atmospheric Plantation Banner fading into Dark Green */}
      <div className="relative isolate overflow-hidden pt-32 pb-14 sm:pt-48 sm:pb-16">
        <Image
          src={about.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Bottom fade blends the photo into the section; the left fade keeps the copy readable. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0f2217]/25 via-[#12261b]/45 via-55% to-[#12261b]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0f2217]/80 via-[#0f2217]/35 to-transparent"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-2xl font-heading text-3xl leading-tight font-bold sm:text-4xl lg:text-[42px]">
            {productSection.bannerHeadingSegments.map((segment) => (
              <span
                key={segment.text}
                className={segment.highlight ? "text-[#7cc694]" : "text-white"}
              >
                {segment.text}
              </span>
            ))}
          </h2>

          <div className="mt-8 flex flex-col justify-between gap-6 border-t border-white/15 pt-6 md:flex-row md:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-white/80">
              {productSection.description}
            </p>

            <Link
              href={productSection.cta.href}
              className="group inline-flex h-11 shrink-0 items-center gap-3 self-start rounded-full border border-white/35 bg-white/10 pr-2.5 pl-5 text-xs font-semibold text-white backdrop-blur-xs transition-all hover:border-white hover:bg-white hover:text-[#12261b] md:self-auto"
            >
              {productSection.cta.label}
              <span className="flex size-7 items-center justify-center rounded-full border border-white/35 transition-colors group-hover:border-[#12261b]/25 group-hover:bg-[#12261b] group-hover:text-white">
                <ChevronRightIcon className="size-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Portfolio Header & 6-Product Asymmetric Bento Grid */}
      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="grid items-end gap-6 border-t border-white/10 pt-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2.5">
              <BreathingDot
                colorClassName="bg-[#38b868]"
                pulseClassName="bg-[#5ce08e]/55"
              />
              <span className="text-xs font-semibold tracking-widest text-[#7cc694] uppercase">
                {productSection.eyebrow}
              </span>
            </div>
            <h3 className="mt-2.5 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {productSection.headingSegments.map((segment) => (
                <span
                  key={segment.text}
                  className={
                    segment.highlight ? "text-[#7cc694]" : "text-white"
                  }
                >
                  {segment.text}
                </span>
              ))}
            </h3>
          </div>

          <p className="text-xs leading-relaxed text-white/75 sm:text-sm lg:max-w-md lg:justify-self-end">
            {productSection.packagingNote}
          </p>
        </div>

        {/* 6-Product Interlocking Bento Grid */}
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* 1. Left Tall Flagship Bento Card (Spans 5 columns) */}
          {flagshipProduct && (
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#152a1e] shadow-xl shadow-black/20 transition-all duration-300 hover:border-[#7cc694]/40 lg:col-span-5">
              <div className="relative min-h-48 w-full flex-1 overflow-hidden sm:min-h-52">
                <Image
                  src={flagshipProduct.image}
                  alt={flagshipProduct.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#152a1e] via-[#152a1e]/35 to-transparent"
                />
                <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold tracking-widest text-[#9be2b0] uppercase backdrop-blur-md">
                  Flagship Export Commodity
                </span>
              </div>

              <div className="relative flex flex-col justify-between p-6 pt-3 sm:p-7 sm:pt-4">
                <div>
                  <h4 className="font-heading text-xl leading-snug font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-[#8fd4a4] sm:text-2xl">
                    {flagshipProduct.fullName}
                  </h4>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/75 sm:text-sm">
                    {flagshipProduct.portfolioDescription}
                  </p>

                  {flagshipProduct.samples && (
                    <div className="mt-5">
                      <p className="text-[10px] font-semibold tracking-widest text-[#7cc694] uppercase">
                        Actual Refinery Specimens
                      </p>
                      <div className="mt-2 grid grid-cols-2 gap-3">
                        {flagshipProduct.samples.map((sample) => (
                          <div
                            key={sample.caption}
                            className="group/sample relative h-28 overflow-hidden rounded-2xl border border-white/12 bg-[#102117] sm:h-32"
                          >
                            <Image
                              src={sample.image}
                              alt={sample.alt}
                              fill
                              sizes="(max-width: 1024px) 45vw, 18vw"
                              className="object-cover transition-transform duration-500 group-hover/sample:scale-105"
                            />
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                            />
                            <span className="absolute bottom-2 left-2.5 right-2.5 truncate text-[10px] font-medium text-white/90">
                              {sample.caption}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <ProductTagPills tags={flagshipProduct.tags} />
                </div>
              </div>
            </article>
          )}

          {/* Right Column Stack (Spans 7 columns: 1 Wide Horizontal + 2 Compact Twin Cards) */}
          <div className="grid gap-5 lg:col-span-7">
            {/* 2. Top-Right Wide Horizontal Bento Card */}
            {wideProduct && (
              <article className="group relative grid overflow-hidden rounded-3xl border border-white/10 bg-[#152a1e] shadow-xl shadow-black/20 transition-all duration-300 hover:border-[#7cc694]/40 sm:grid-cols-12">
                <div className="flex flex-col justify-between p-6 sm:col-span-7 sm:p-7">
                  <div>
                    <h4 className="font-heading text-lg leading-snug font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-[#8fd4a4] sm:text-xl">
                      {wideProduct.fullName}
                    </h4>
                    <p className="mt-2.5 text-xs leading-relaxed text-white/70 sm:text-[13px]">
                      {wideProduct.portfolioDescription}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <ProductTagPills tags={wideProduct.tags} />
                  </div>
                </div>

                <div className="relative order-first min-h-52 overflow-hidden sm:order-last sm:col-span-5 sm:min-h-full">
                  <Image
                    src={wideProduct.image}
                    alt={wideProduct.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 28vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#152a1e] via-[#152a1e]/25 to-transparent sm:bg-gradient-to-r"
                  />
                </div>
              </article>
            )}

            {/* 3 & 4. Middle-Right Twin Bento Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {compactProducts.map((product) => (
                <article
                  key={product.slug}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#152a1e] shadow-xl shadow-black/20 transition-all duration-300 hover:border-[#7cc694]/40"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#152a1e] via-[#152a1e]/30 to-transparent"
                      />
                    </div>

                    <div className="px-5 pt-2 sm:px-6">
                      <h4 className="font-heading text-base leading-snug font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-[#8fd4a4] sm:text-lg">
                        {product.name}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-white/70">
                        {product.portfolioDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 px-5 pb-5 sm:px-6 sm:pb-6">
                    <div className="border-t border-white/10 pt-3.5">
                      <ProductTagPills tags={product.tags} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* 5 & 6. Bottom Row Equal-Width Compact Horizontal Bento Cards (6 cols + 6 cols) */}
          {bottomProducts.map((product) => (
            <article
              key={product.slug}
              className="group relative grid overflow-hidden rounded-3xl border border-white/10 bg-[#152a1e] shadow-xl shadow-black/20 transition-all duration-300 hover:border-[#7cc694]/40 sm:grid-cols-12 lg:col-span-6"
            >
              <div className="flex flex-col justify-between p-5 sm:col-span-8 sm:px-6 sm:py-5">
                <div>
                  <h4 className="font-heading text-base leading-snug font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-[#8fd4a4] sm:text-lg">
                    {product.fullName}
                  </h4>
                  <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-white/70">
                    {product.portfolioDescription}
                  </p>
                </div>

                <div className="mt-4 border-t border-white/10 pt-3">
                  <ProductTagPills tags={product.tags} />
                </div>
              </div>

              <div className="relative order-first min-h-40 overflow-hidden sm:order-last sm:col-span-4 sm:min-h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 22vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#152a1e] via-[#152a1e]/25 to-transparent sm:bg-gradient-to-r"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
