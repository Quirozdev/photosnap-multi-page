import SectionWrapper from "@/shared/components/section-wrapper/section-wrapper";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const props = {
  image: <img src="/image.jpg" alt="A photographer taking pictures" />,
  title: "Designed for everyone",
  description: "Create and share your photo stories.",
};

describe("SectionWrapper", () => {
  it("renders an h1 heading for the hero variant", () => {
    render(<SectionWrapper {...props} variant="hero" />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: props.title,
      }),
    ).toBeInTheDocument();
  });

  it("renders an h2 heading for the section variant", () => {
    render(<SectionWrapper {...props} variant="section" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: props.title,
      }),
    ).toBeInTheDocument();
  });

  it("renders the provided image and description", () => {
    render(<SectionWrapper {...props} variant="section" />);

    expect(
      screen.getByRole("img", {
        name: "A photographer taking pictures",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it("renders the CTA button when provided", () => {
    render(
      <SectionWrapper
        {...props}
        variant="section"
        button={{ label: "View the stories", href: "/stories" }}
      />,
    );

    expect(
      screen.getByRole("link", { name: "View the stories" }),
    ).toBeInTheDocument();
  });

  it("does not render a CTA button when omitted", () => {
    render(<SectionWrapper {...props} variant="section" />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
