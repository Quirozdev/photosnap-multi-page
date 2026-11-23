import CompareFeaturesList from "@/features/pricing/components/compare-features/compare-features-list";
import CompareFeaturesTable from "@/features/pricing/components/compare-features/compare-features-table";

export default function CompareFeaturesSection() {
  return (
    <section className="flex flex-col gap-y-16 px-8 md:px-10 xl:gap-y-14">
      <h2 className="text-preset-1 sr-only text-center text-neutral-950 uppercase md:not-sr-only md:inline-block">
        Compare
      </h2>
      <div className="hidden md:block">
        <CompareFeaturesTable />
      </div>
      <div className="md:hidden">
        <CompareFeaturesList />
      </div>
    </section>
  );
}
