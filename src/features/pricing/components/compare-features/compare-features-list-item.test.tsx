import CompareFeaturesListItem from "@/features/pricing/components/compare-features/compare-features-list-item";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("CompareFeaturesListItem", () => {
  it("renders the feature label and plan headings", () => {
    render(
      <CompareFeaturesListItem
        id="test"
        label="UNLIMITED STORY POSTING"
        basic
        pro
        business
      />,
    );

    expect(screen.getByText("UNLIMITED STORY POSTING")).toBeInTheDocument();
    expect(screen.getByText("BASIC")).toBeInTheDocument();
    expect(screen.getByText("PRO")).toBeInTheDocument();
    expect(screen.getByText("BUSINESS")).toBeInTheDocument();
  });

  it("displays check icons for supported plans", () => {
    const { container } = render(
      <CompareFeaturesListItem
        id="test"
        label="UNLIMITED STORY POSTING"
        basic
        pro={false}
        business
      />,
    );

    expect(container.querySelectorAll("svg")).toHaveLength(2);
  });

  it("does not display check icons when the feature is unsupported by all plans", () => {
    const { container } = render(
      <CompareFeaturesListItem
        id="test"
        label="UNLIMITED STORY POSTING"
        basic={false}
        pro={false}
        business={false}
      />,
    );

    expect(container.querySelectorAll("svg")).toHaveLength(0);
  });
});
