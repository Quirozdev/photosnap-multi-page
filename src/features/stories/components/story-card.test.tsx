import StoryCard from "@/features/stories/components/story-card";
import { stories } from "@/features/stories/data/stories";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const story = stories[0];

describe("StoryCard", () => {
  it("renders the story title and author", () => {
    render(<StoryCard {...story} />);

    expect(screen.getByText(story.title)).toBeInTheDocument();
    expect(screen.getByText(`by ${story.author}`)).toBeInTheDocument();
  });

  it("displays the date label when showDateLabel is true", () => {
    render(<StoryCard {...story} showDateLabel={true} />);

    expect(screen.getByText(story.dateLabel)).toBeInTheDocument();
  });

  it("does not display the date label by default", () => {
    render(<StoryCard {...story} />);

    expect(screen.queryByText(story.dateLabel)).not.toBeInTheDocument();
  });

  it("renders the Read Story button", () => {
    render(<StoryCard {...story} />);

    expect(
      screen.getByRole("button", { name: /read story/i }),
    ).toBeInTheDocument();
  });
});
