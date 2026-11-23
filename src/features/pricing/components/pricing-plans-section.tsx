"use client";

import PricingPlanCard from "@/features/pricing/components/pricing-plan-card/pricing-plan-card";
import { pricingPlans } from "@/features/pricing/data/pricing-plans";
import Toggle from "@/shared/components/toggle";
import { useState } from "react";

export default function PricingPlansSection() {
  const [isYearlySelected, setIsYearlySelected] = useState(false);

  return (
    <section className="px-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-y-10 xl:gap-y-12">
        <Toggle
          isActive={isYearlySelected}
          onToggle={() => setIsYearlySelected((curr) => !curr)}
          inactiveLabel="Monthly"
          activeLabel="Yearly"
          aria-label="Yearly billing"
        />
        <h2 className="sr-only">Plans</h2>
        <div className="flex flex-col gap-y-6 xl:flex-row xl:items-center xl:gap-x-375">
          {pricingPlans.map((pricingPlan) => {
            return (
              <PricingPlanCard
                key={pricingPlan.id}
                {...pricingPlan}
                priceDisplay={!isYearlySelected ? "monthly" : "yearly"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
