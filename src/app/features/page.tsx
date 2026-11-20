import FeaturesHeroSection from "@/features/product-features/components/features-hero-section";
import FeaturesSection from "@/features/product-features/components/features-section";
import { features } from "@/features/product-features/data/features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
};

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <FeaturesHeroSection />
      <FeaturesSection features={features} className="md:grid-cols-2" />
    </div>
  );
}
