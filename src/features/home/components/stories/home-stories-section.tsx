import HomeStoriesImage from "@/features/home/components/stories/home-stories-image";
import HomeSectionWrapper from "@/features/home/components/home-section-wrapper/home-section-wrapper";

export default function HomeStoriesSection() {
  return (
    <HomeSectionWrapper
      variant="section"
      image={<HomeStoriesImage />}
      title="BEAUTIFUL STORIES EVERY TIME"
      description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      button={{ label: "View the stories" }}
    />
  );
}
