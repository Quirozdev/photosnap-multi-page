import FeaturesHeroSection from "@/features/product-features/components/features-hero-section";
import FeaturesSection from "@/features/product-features/components/features-section";
import { features } from "@/features/product-features/data/features";
import BetaInvitationSection from "@/shared/components/beta-invitation-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Discover the features and tools available for creating and sharing photo stories.",
  alternates: {
    canonical: "/features",
  },
};

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <FeaturesHeroSection />
      <FeaturesSection features={features} className="md:grid-cols-2" />
      <BetaInvitationSection />
    </div>
  );
}
