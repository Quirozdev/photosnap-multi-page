import FeatureCard from "@/features/product-features/components/feature-card";
import { features } from "@/features/product-features/data/features";

export default function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 place-items-center gap-x-375 gap-y-14 px-8 py-20 md:gap-y-20 md:py-30 xl:grid-cols-3">
      {features.map((feature) => {
        return <FeatureCard key={feature.title} {...feature} />;
      })}
    </section>
  );
}
