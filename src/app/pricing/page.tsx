import CompareFeaturesSection from "@/features/pricing/components/compare-features/compare-features-section";
import PricingHeroSection from "@/features/pricing/components/pricing-hero-section";
import PricingPlansSection from "@/features/pricing/components/pricing-plans-section";
import BetaInvitationSection from "@/shared/components/beta-invitation-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-y-16 md:gap-y-30 xl:gap-y-40">
      <PricingHeroSection />
      <PricingPlansSection />
      <CompareFeaturesSection />
      <BetaInvitationSection />
    </div>
  );
}
