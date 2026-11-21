export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  pricing: {
    monthly: number;
    yearly: number;
  };
  isFeatured: boolean;
}
