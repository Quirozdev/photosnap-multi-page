import { cn } from "@/shared/utils/cn";

interface Props {
  isActive: boolean;
  onToggle: () => void;
  inactiveLabel: string;
  activeLabel: string;
}

export default function Toggle({
  isActive,
  onToggle,
  inactiveLabel,
  activeLabel,
}: Props) {
  return (
    <div className="flex items-center gap-x-8">
      <p
        className={cn(
          "text-preset-4 text-neutral-950 transition-opacity duration-500 ease-in-out",
          {
            "opacity-100": !isActive,
            "opacity-50": isActive,
          },
        )}
      >
        {inactiveLabel}
      </p>
      <button
        type="button"
        role="switch"
        aria-checked={isActive}
        className={cn(
          "flex h-8 w-16 cursor-pointer items-center rounded-full p-1 transition-colors duration-500 ease-in-out",
          { "bg-neutral-300": !isActive },
          { "bg-neutral-950": isActive },
        )}
        onClick={onToggle}
      >
        <span
          className={cn(
            "inline-block size-6 rounded-full transition-transform duration-500 ease-in-out",
            {
              "translate-x-0 bg-neutral-950": !isActive,
              "bg-neutral-0 translate-x-8": isActive,
            },
          )}
        ></span>
      </button>
      <p
        className={cn(
          "text-preset-4 text-neutral-950 transition-opacity duration-500 ease-in-out",
          {
            "opacity-100": isActive,
            "opacity-50": !isActive,
          },
        )}
      >
        {activeLabel}
      </p>
    </div>
  );
}
