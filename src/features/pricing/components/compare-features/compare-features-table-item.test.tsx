import CompareFeaturesTableItem from "@/features/pricing/components/compare-features/compare-features-table-item";
import { ComparisonFeature } from "@/features/pricing/types/comparison-feature";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function renderTableItem(feature: ComparisonFeature) {
  return render(
    <table>
      <tbody>
        <CompareFeaturesTableItem {...feature} />
      </tbody>
    </table>,
  );
}

describe("CompareFeaturesTableItem", () => {
  it("renders the feature label as a row header", () => {
    renderTableItem({
      id: "test",
      label: "UNLIMITED STORY POSTING",
      basic: true,
      pro: true,
      business: true,
    });

    expect(
      screen.getByRole("rowheader", { name: "UNLIMITED STORY POSTING" }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole("cell")).toHaveLength(3);
  });

  it("displays check icons for supported plans", () => {
    renderTableItem({
      id: "test",
      label: "UNLIMITED STORY POSTING",
      basic: true,
      pro: false,
      business: true,
    });

    const cells = screen.getAllByRole("cell");

    expect(cells[0].querySelector("svg")).toBeInTheDocument();
    expect(cells[1].querySelector("svg")).not.toBeInTheDocument();
    expect(cells[2].querySelector("svg")).toBeInTheDocument();
  });

  it("does not display check icons when the feature is unsupported by all plans", () => {
    renderTableItem({
      id: "test",
      label: "UNLIMITED STORY POSTING",
      basic: false,
      pro: false,
      business: false,
    });

    expect(screen.getAllByRole("cell")).toHaveLength(3);

    expect(
      screen
        .getAllByRole("cell")
        .every((cell) => cell.querySelector("svg") === null),
    ).toBe(true);
  });
});
