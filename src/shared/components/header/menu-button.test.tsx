import MenuButton from "@/shared/components/header/menu-button";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("MenuButton", () => {
  it("exposes the correct accesible attributes when closed", () => {
    render(<MenuButton isOpen={false} onToggle={vi.fn()} />);

    const button = screen.getByRole("button", {
      name: "Open mobile menu",
    });

    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-controls", "mobile-navigation");
  });

  it("exposes the correct accesible attributes when open", () => {
    render(<MenuButton isOpen onToggle={vi.fn()} />);

    const button = screen.getByRole("button", {
      name: "Close mobile menu",
    });

    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAttribute("aria-controls", "mobile-navigation");
  });

  it("calls onToggle when clicked", async () => {
    const onToggle = vi.fn();

    render(<MenuButton isOpen={false} onToggle={onToggle} />);

    const button = screen.getByRole("button", {
      name: "Open mobile menu",
    });

    button.click();

    expect(onToggle).toHaveBeenCalledOnce();
  });
});
