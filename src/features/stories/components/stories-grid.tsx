import StoryCard from "@/features/stories/components/story-card";
import { stories } from "@/features/stories/data/stories";

export default function StoriesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {stories.map((story) => {
        return <StoryCard key={story.title} {...story} />;
      })}
    </section>
  );
}
