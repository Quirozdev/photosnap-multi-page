import PricingHeroSection from "@/features/pricing/components/pricing-hero-section";
import BetaInvitationSection from "@/shared/components/beta-invitation-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <PricingHeroSection />
      <BetaInvitationSection />
    </div>
  );
}
