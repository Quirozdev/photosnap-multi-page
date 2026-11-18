import { cn } from "@/shared/utils/cn";
import Image from "next/image";

type Props = React.ComponentProps<"button">;

export default function MenuButton({ className, ...props }: Props) {
  return (
    <button
      className={cn(
        "flex cursor-pointer items-center justify-center",
        className,
      )}
      {...props}
    >
      <Image
        src="/images/shared/mobile/menu.svg"
        width={20}
        height={6}
        alt=""
      />
    </button>
  );
}
