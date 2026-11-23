import Button from "@/shared/components/button/button";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Learn more</Button>);

    expect(
      screen.getByRole("button", { name: "Learn more" }),
    ).toBeInTheDocument();
  });

  it("defaults to button type", () => {
    render(<Button>Learn more</Button>);

    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("supports submit type", () => {
    render(<Button type="submit">Submit</Button>);

    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("renders the arrow icon when variant is arrow", () => {
    render(<Button variant="arrow">Read story</Button>);

    expect(
      screen.getByRole("button", { name: "Read story" }),
    ).toBeInTheDocument();

    expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
  });

  it("does not render the arrow icon when variant is not arrow", () => {
    render(<Button>Learn more</Button>);

    expect(
      screen.getByRole("button").querySelector("svg"),
    ).not.toBeInTheDocument();
  });

  it("forward native button attributes", () => {
    render(<Button disabled>Learn more</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
