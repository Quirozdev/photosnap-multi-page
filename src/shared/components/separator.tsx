import { cn } from "@/shared/utils/cn";

type Props = React.ComponentProps<"div">;

export default function Separator({ className, ...props }: Props) {
  return (
    <div
      className={cn("h-px bg-neutral-950 opacity-25", className)}
      {...props}
    ></div>
  );
}
