"use client";

import Button from "@/shared/components/button/button";
import MenuButton from "@/shared/components/header/menu-button";
import MobileMenu from "@/shared/components/header/mobile-menu";
import Navbar from "@/shared/components/header/navbar";
import Logo from "@/shared/components/logo";
import { useInertBackground } from "@/shared/hooks/use-inert-background";
import { useKeyDown } from "@/shared/hooks/use-key-down";
import { useRemoveVerticalScrolling } from "@/shared/hooks/use-remove-vertical-scrolling";
import { useCallback, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hideMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useKeyDown({
    key: "Escape",
    onKeyDown: () => {
      if (!isMobileMenuOpen) return;
      hideMobileMenu();
    },
  });

  useInertBackground({ shouldBeInert: isMobileMenuOpen });

  useRemoveVerticalScrolling({ shouldRemove: isMobileMenuOpen });

  return (
    <header className="bg-neutral-0 sticky top-0 z-50 flex h-18 items-center justify-between px-6 md:px-10 xl:justify-center xl:px-0">
      <div className="flex w-full items-center justify-between xl:w-6xl">
        <Logo onNavigate={hideMobileMenu} />
        <MenuButton
          className="md:hidden"
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen((curr) => !curr)}
        />
        <Navbar aria-label="Main navigation" className="hidden md:flex" />
        <Button variant="normal" tone="dark" className="hidden md:inline-flex">
          Get an invite
        </Button>
        {/* -4.5rem for the header fixed height */}
        <MobileMenu
          aria-label="Mobile navigation"
          className="absolute top-full right-0 left-0 h-[calc(100dvh-4.5rem)] px-6 md:hidden"
          isOpen={isMobileMenuOpen}
          onClose={hideMobileMenu}
        />
      </div>
    </header>
  );
}
