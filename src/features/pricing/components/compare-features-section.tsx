import CompareFeaturesTable from "@/features/pricing/components/compare-features-table";

export default function CompareFeaturesSection() {
  return (
    <section className="flex flex-col gap-y-16 px-8 md:px-10 xl:gap-y-14">
      <h2 className="text-preset-1 hidden text-center text-neutral-950 uppercase md:inline-block">
        Compare
      </h2>
      <CompareFeaturesTable />
    </section>
  );
}
