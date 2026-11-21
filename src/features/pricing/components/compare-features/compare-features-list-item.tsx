import { ComparisonFeature } from "@/features/pricing/types/comparison-feature";
import CheckIcon from "@/shared/icons/check-icon";

type Props = ComparisonFeature;

export default function CompareFeaturesListItem({
  label,
  basic,
  pro,
  business,
}: Props) {
  return (
    <div className="flex flex-col gap-y-4 border-b border-neutral-300 py-6">
      <p className="text-preset-7 text-neutral-950">{label}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <p className="text-[10px] leading-[auto] font-bold tracking-[1.67px] text-neutral-950 opacity-50">
            BASIC
          </p>
          {basic && <CheckIcon />}
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-[10px] leading-[auto] font-bold tracking-[1.67px] text-neutral-950 opacity-50">
            PRO
          </p>
          {pro && <CheckIcon />}
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-[10px] leading-[auto] font-bold tracking-[1.67px] text-neutral-950 opacity-50">
            BUSINESS
          </p>
          {business && <CheckIcon />}
        </div>
      </div>
    </div>
  );
}
