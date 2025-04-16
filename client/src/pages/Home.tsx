import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import CodeExample from "@/components/CodeExample";
import ProductCards from "@/components/ProductCards";
import Testimonial from "@/components/Testimonial";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="bg-lightbg text-darkbg">
      <HeroSection />
      <TrustedBy />
      <Features />
      <CodeExample />
      <ProductCards />
      <Testimonial />
      <PricingSection />
      <CTASection />
    </div>
  );
}
