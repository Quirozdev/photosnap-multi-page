import { ComparisonFeature } from "@/features/pricing/types/comparison-feature";
import CheckIcon from "@/shared/icons/check-icon";

type Props = ComparisonFeature;

export default function CompareFeaturesTableItem({
  label,
  basic,
  pro,
  business,
}: Props) {
  return (
    <tr className="border-b border-neutral-300">
      <th scope="row" className="text-preset-7 p-6 text-left text-neutral-950">
        {label}
      </th>
      <td className="p-6">
        {basic && <CheckIcon aria-hidden="true" className="mx-auto block" />}
        <span className="sr-only">{basic ? "Included" : "Not included"}</span>
      </td>
      <td className="p-6">
        {pro && <CheckIcon className="mx-auto block" />}
        <span className="sr-only">{pro ? "Included" : "Not included"}</span>
      </td>
      <td className="p-6">
        {business && <CheckIcon className="mx-auto block" />}
        <span className="sr-only">
          {business ? "Included" : "Not included"}
        </span>
      </td>
    </tr>
  );
}
