import StoryCard from "@/features/stories/components/story-card";
import { Story } from "@/features/stories/types/story";

interface Props {
  stories: Story[];
  showDateLabel?: boolean;
}

export default function StoriesGrid({ stories, showDateLabel }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {stories.map((story) => {
        return (
          <StoryCard key={story.id} {...story} showDateLabel={showDateLabel} />
        );
      })}
    </section>
  );
}
