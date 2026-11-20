export interface PricingPlan {
  name: string;
  description: string;
  pricing: {
    monthly: number;
    yearly: number;
  };
  isFeatured: boolean;
}
