import { LINKS } from "@/core/config/navigation.config";
import FooterButton from "@/shared/components/footer/footer-button";
import { cn } from "@/shared/utils/cn";

type Props = React.ComponentProps<"div">;

export default function FooterLinksContainer({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-y-5 md:flex-row md:gap-x-6",
        className,
      )}
      {...props}
    >
      {LINKS.map((link) => {
        return (
          <FooterButton key={link.href} label={link.label} href={link.href} />
        );
      })}
    </div>
  );
}
