import PricingPlanCard from "@/features/pricing/components/pricing-plan-card/pricing-plan-card";
import { pricingPlans } from "@/features/pricing/data/pricing-plans";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const pricingPlan = pricingPlans[0];

describe("PricingPlanCard", () => {
  it("renders the pricing plan information", () => {
    render(<PricingPlanCard {...pricingPlan} priceDisplay="monthly" />);

    expect(
      screen.getByRole("heading", { name: pricingPlan.name }),
    ).toBeInTheDocument();

    expect(screen.getByText(pricingPlan.description)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Pick plan" }),
    ).toBeInTheDocument();
  });

  it("displays the monthly price", () => {
    render(<PricingPlanCard {...pricingPlan} priceDisplay="monthly" />);

    expect(
      screen.getByText(`$${pricingPlan.pricing.monthly.toFixed(2)}`),
    ).toBeInTheDocument();

    expect(screen.getByText("per month")).toBeInTheDocument();
  });

  it("displays the yearly price", () => {
    render(<PricingPlanCard {...pricingPlan} priceDisplay="yearly" />);

    expect(
      screen.getByText(`$${pricingPlan.pricing.yearly.toFixed(2)}`),
    ).toBeInTheDocument();

    expect(screen.getByText("per year")).toBeInTheDocument();
  });
});
