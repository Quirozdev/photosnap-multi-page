import NavbarButton from "@/shared/components/header/navbar-button";
import { cn } from "@/shared/utils/cn";

type Props = React.ComponentProps<"nav">;

export default function Navbar({ className, ...props }: Props) {
  return (
    <nav className={cn("flex items-center gap-x-10", className)} {...props}>
      <NavbarButton label="Stories" href="#" />
      <NavbarButton label="Features" href="#" />
      <NavbarButton label="Pricing" href="#" />
    </nav>
  );
}
