import { buttonStyles } from "@/shared/components/button/button.styles";
import RightArrowIcon from "@/shared/icons/right-arrow-icon";
import { cn } from "@/shared/utils/cn";
import { type VariantProps } from "class-variance-authority";

interface Props
  extends React.ComponentProps<"button">, VariantProps<typeof buttonStyles> {}

export default function Button({
  variant,
  tone,
  className,
  type = "button",
  children,
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={cn(buttonStyles({ variant, tone }), className)}
      {...props}
    >
      {children}
      {variant === "arrow" && <RightArrowIcon />}
    </button>
  );
}
