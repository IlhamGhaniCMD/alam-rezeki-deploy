import { AboutSection } from "@/components/sections/about-section";
import { CoaSection } from "@/components/sections/coa-section";
import { HaulageSection } from "@/components/sections/haulage-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LogisticsTimelineSection } from "@/components/sections/logistics-timeline-section";
import { ProductsSection } from "@/components/sections/products-section";
import { QuotationSection } from "@/components/sections/quotation-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CoaSection />
      <LogisticsTimelineSection />
      <HaulageSection />
      <TestimonialsSection />
      <QuotationSection />
    </div>
  );
}
