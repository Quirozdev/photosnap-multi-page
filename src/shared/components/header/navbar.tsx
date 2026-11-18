import { LINKS } from "@/core/config/navigation.config";
import NavbarButton from "@/shared/components/header/navbar-button";
import { cn } from "@/shared/utils/cn";

type Props = React.ComponentProps<"nav">;

export default function Navbar({ className, ...props }: Props) {
  return (
    <nav className={cn("flex items-center gap-x-10", className)} {...props}>
      {LINKS.filter((link) => link.href !== "/").map((link) => {
        return (
          <NavbarButton key={link.href} label={link.label} href={link.href} />
        );
      })}
    </nav>
  );
}
