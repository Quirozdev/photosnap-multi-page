import Button from "@/shared/components/button/button";
import NavbarButton from "@/shared/components/header/navbar-button";
import { cn } from "@/shared/utils/cn";

export interface Props extends React.ComponentProps<"nav"> {
  onClose: () => void;
}

export default function MobileMenu({ onClose, className, ...props }: Props) {
  return (
    <nav className={cn("bg-neutral-0 flex flex-col", className)} {...props}>
      <div className="flex flex-col gap-y-5 py-8">
        <ul className="flex flex-col gap-y-5">
          <li className="text-center">
            <NavbarButton label="Stories" href="#" />
          </li>
          <li className="text-center">
            <NavbarButton label="Features" href="#" />
          </li>
          <li className="text-center">
            <NavbarButton label="Pricing" href="#" />
          </li>
        </ul>
        <div className="h-px bg-neutral-950 opacity-25"></div>
        <Button variant="normal" tone="dark">
          Get an invite
        </Button>
      </div>
      <div
        className="relative -left-6 w-screen flex-1 bg-neutral-950 opacity-50"
        aria-hidden="true"
        onClick={onClose}
      ></div>
    </nav>
  );
}
