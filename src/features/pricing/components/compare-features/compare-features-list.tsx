import CompareFeaturesListItem from "@/features/pricing/components/compare-features/compare-features-list-item";
import { comparisonFeatures } from "@/features/pricing/data/comparison-features";

export default function CompareFeaturesList() {
  return (
    <div className="flex flex-col gap-y-6">
      <h4 className="text-preset-7 text-neutral-950">THE FEATURES</h4>
      <div className="flex flex-col border-t border-neutral-950">
        {comparisonFeatures.map((comparisonFeature) => {
          return (
            <CompareFeaturesListItem
              key={comparisonFeature.id}
              {...comparisonFeature}
            />
          );
        })}
      </div>
    </div>
  );
}
