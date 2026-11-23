import Toggle from "@/shared/components/toggle";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("Toggle", () => {
  it("renders the lablels and exposes the correct accesible attributes", () => {
    render(
      <Toggle
        isActive={false}
        onToggle={vi.fn()}
        inactiveLabel="Monthly"
        activeLabel="Yearly"
        aria-label="Yearly billing"
      />,
    );

    expect(screen.getByText("Monthly")).toBeInTheDocument();
    expect(screen.getByText("Yearly")).toBeInTheDocument();

    expect(
      screen.getByRole("switch", { name: "Yearly billing" }),
    ).toHaveAttribute("aria-checked", "false");
  });

  it("exposes the checked state when active", () => {
    render(
      <Toggle
        isActive
        onToggle={vi.fn()}
        inactiveLabel="Monthly"
        activeLabel="Yearly"
        aria-label="Yearly billing"
      />,
    );

    expect(
      screen.getByRole("switch", { name: "Yearly billing" }),
    ).toHaveAttribute("aria-checked", "true");
  });

  it("calls onToggle when clicked", async () => {
    const onToggle = vi.fn();

    render(
      <Toggle
        isActive={false}
        onToggle={onToggle}
        inactiveLabel="Monthly"
        activeLabel="Yearly"
        aria-label="Yearly billing"
      />,
    );

    screen.getByRole("switch", { name: "Yearly billing" }).click();

    expect(onToggle).toHaveBeenCalledOnce();
  });
});
