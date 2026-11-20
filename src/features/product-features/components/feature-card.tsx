import { Feature } from "@/features/product-features/types/feature";
import Image from "next/image";

type Props = Feature;

export default function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="flex h-full flex-col items-center gap-y-12 md:max-w-114.5 md:justify-between xl:max-w-87.5">
      <Image
        src={icon.src}
        width={icon.width}
        height={icon.height}
        alt={icon.alt}
        className="my-auto"
      />
      <div className="flex flex-col gap-y-4 text-center">
        <p className="text-preset-4 text-neutral-950">{title}</p>
        <p className="text-preset-5 min-h-[3lh] text-neutral-950 opacity-60">
          {description}
        </p>
      </div>
    </div>
  );
}
