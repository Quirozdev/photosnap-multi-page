import CompareFeaturesTableItem from "@/features/pricing/components/compare-features/compare-features-table-item";
import { comparisonFeatures } from "@/features/pricing/data/comparison-features";
import { pricingPlans } from "@/features/pricing/data/pricing-plans";

export default function CompareFeaturesTable() {
  return (
    <table className="w-full table-fixed xl:mx-auto xl:max-w-183">
      <colgroup>
        <col className="w-2/5" />
        <col span={3} />
      </colgroup>
      <thead className="border-b border-neutral-950">
        <tr>
          <th
            scope="col"
            className="text-preset-7 p-6 pt-0 text-left text-neutral-950 uppercase"
          >
            The features
          </th>
          {pricingPlans.map((pricingPlan) => {
            return (
              <th
                key={pricingPlan.id}
                scope="col"
                className="text-preset-7 p-6 pt-0 text-center text-neutral-950 uppercase"
              >
                {pricingPlan.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {comparisonFeatures.map((comparisonFeature) => {
          return (
            <CompareFeaturesTableItem
              key={comparisonFeature.id}
              {...comparisonFeature}
            />
          );
        })}
      </tbody>
    </table>
  );
}
