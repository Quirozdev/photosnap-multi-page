import { LINKS } from "@/core/config/navigation.config";
import Button from "@/shared/components/button/button";
import NavbarButton from "@/shared/components/header/navbar-button";
import Separator from "@/shared/components/separator";
import { cn } from "@/shared/utils/cn";

export interface Props extends React.ComponentProps<"nav"> {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  className,
  ...props
}: Props) {
  return (
    <nav
      id="mobile-navigation"
      inert={!isOpen}
      className={cn(
        "pointer-events-none flex flex-col",
        isOpen && "pointer-events-auto",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-neutral-0 relative -left-6 flex w-screen flex-col gap-y-5 px-6 py-8 transition-opacity duration-500 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      >
        <ul className="flex flex-col gap-y-5">
          {LINKS.filter((link) => link.href !== "/").map((link) => {
            return (
              <li key={link.href} className="text-center">
                <NavbarButton
                  label={link.label}
                  href={link.href}
                  onNavigate={onClose}
                />
              </li>
            );
          })}
        </ul>
        <Separator />
        <Button variant="normal" tone="dark">
          Get an invite
        </Button>
      </div>
      <div
        className={cn(
          "relative -left-6 w-screen flex-1 bg-neutral-950 transition-opacity duration-500 ease-in-out",
          isOpen ? "opacity-50" : "opacity-0",
        )}
        aria-hidden="true"
        onClick={onClose}
      ></div>
    </nav>
  );
}
