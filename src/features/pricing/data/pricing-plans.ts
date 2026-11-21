import { PricingPlan } from "@/features/pricing/types/pricing-plan";

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    pricing: {
      monthly: 19.0,
      yearly: 190.0,
    },
    isFeatured: false,
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    pricing: {
      monthly: 39.0,
      yearly: 390.0,
    },
    isFeatured: true,
  },
  {
    id: "business",
    name: "Business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    pricing: {
      monthly: 99.0,
      yearly: 990.0,
    },
    isFeatured: false,
  },
];
