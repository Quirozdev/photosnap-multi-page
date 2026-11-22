import StoriesGrid from "@/features/stories/components/stories-grid";
import { stories } from "@/features/stories/data/stories";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("StoriesGrid", () => {
  it("renders a card for each story", () => {
    render(<StoriesGrid stories={stories.slice(0, 2)} />);

    expect(screen.getByText(stories[0].title)).toBeInTheDocument();
    expect(screen.getByText(stories[1].title)).toBeInTheDocument();
  });

  it("displays date labels when showDateLabel is true", () => {
    render(<StoriesGrid stories={stories.slice(0, 1)} showDateLabel={true} />);

    expect(screen.getByText(stories[0].dateLabel)).toBeInTheDocument();
  });

  it("does not display date labels by default", () => {
    render(<StoriesGrid stories={stories.slice(0, 1)} />);

    expect(screen.queryByText(stories[0].dateLabel)).not.toBeInTheDocument();
  });
});
