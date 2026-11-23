import { cn } from "@/shared/utils/cn";
import Image from "next/image";

interface Props extends React.ComponentProps<"button"> {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MenuButton({
  isOpen,
  onToggle,
  className,
  ...props
}: Props) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      className={cn(
        "flex size-5 cursor-pointer items-center justify-center",
        className,
      )}
      onClick={onToggle}
      {...props}
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
