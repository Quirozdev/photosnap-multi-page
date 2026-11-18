import Button from "@/shared/components/button/button";
import MenuButton from "@/shared/components/header/menu-button";
import Navbar from "@/shared/components/header/navbar";
import Logo from "@/shared/components/logo";

export default function Header() {
  return (
    <header className="flex h-18 items-center justify-between px-6 md:px-10 xl:mx-auto xl:w-6xl">
      <Logo />
      <MenuButton className="md:hidden" />
      <Navbar className="hidden md:flex" />
      <Button variant="normal" tone="dark" className="hidden md:inline-flex">
        Get an invite
      </Button>
    </header>
  );
}
