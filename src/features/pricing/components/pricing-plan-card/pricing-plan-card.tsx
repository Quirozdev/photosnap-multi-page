import {
  containerStyles,
  descriptionStyles,
  nameStyles,
  priceTextContainerStyles,
} from "@/features/pricing/components/pricing-plan-card/pricing-plan-card.styles";
import { PricingPlan } from "@/features/pricing/types/pricing-plan";
import Button from "@/shared/components/button/button";
import { VariantProps } from "class-variance-authority";

type Variant = NonNullable<VariantProps<typeof containerStyles>["variant"]>;

interface Props extends PricingPlan {
  priceDisplay: "monthly" | "yearly";
}

export default function PricingPlanCard({
  name,
  description,
  pricing,
  isFeatured,
  priceDisplay,
}: Props) {
  const priceToDisplay =
    priceDisplay === "monthly" ? pricing.monthly : pricing.yearly;

  const variant: Variant = isFeatured ? "featured" : "normal";

  return (
    <div className={containerStyles({ variant })}>
      {isFeatured && (
        <div className="bg-gradient-6 absolute top-0 left-0 h-1.5 w-full"></div>
      )}

      <div className="flex flex-col gap-y-5 text-center text-neutral-950 md:text-left xl:text-center">
        <h3 className={nameStyles({ variant })}>{name}</h3>
        <p className={descriptionStyles({ variant })}>{description}</p>
      </div>
      <div className={priceTextContainerStyles({ variant })}>
        <p className="text-preset-1">${priceToDisplay.toFixed(2)}</p>
        <p className="text-preset-5 opacity-60">
          per {priceDisplay === "monthly" ? "month" : "year"}
        </p>
      </div>
      <Button variant="normal" tone={isFeatured ? "light" : "dark"}>
        Pick plan
      </Button>
    </div>
  );
}
