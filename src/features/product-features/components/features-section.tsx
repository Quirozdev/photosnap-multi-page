import FeatureCard from "@/features/product-features/components/feature-card";
import { Feature } from "@/features/product-features/types/feature";
import { cn } from "@/shared/utils/cn";

interface Props extends React.ComponentProps<"section"> {
  features: Feature[];
}

export default function FeaturesSection({
  features,
  className,
  ...props
}: Props) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 place-items-center gap-x-375 gap-y-14 px-8 py-20 md:gap-y-20 md:py-30 xl:grid-cols-3",
        className,
      )}
      {...props}
    >
      {features.map((feature) => {
        return <FeatureCard key={feature.title} {...feature} />;
      })}
    </section>
  );
}
