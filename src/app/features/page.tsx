import FeaturesHeroSection from "@/features/product-features/components/features-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
};

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <FeaturesHeroSection />
    </div>
  );
}
