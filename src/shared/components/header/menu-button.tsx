import { cn } from "@/shared/utils/cn";
import Image from "next/image";

interface Props extends React.ComponentProps<"button"> {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MenuButton({ isOpen, onToggle, className }: Props) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Open mobile menu" : "Close mobile menu"}
      className={cn(
        "flex size-5 cursor-pointer items-center justify-center",
        className,
      )}
      onClick={onToggle}
    >
      {isOpen ? (
        <Image
          src="/images/shared/mobile/close.svg"
          width={16}
          height={15}
          alt=""
        />
      ) : (
        <Image
          src="/images/shared/mobile/menu.svg"
          width={20}
          height={6}
          alt=""
        />
      )}
    </button>
  );
}
