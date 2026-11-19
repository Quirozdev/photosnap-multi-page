import HomeSectionWrapper from "@/features/home/components/home-section-wrapper/home-section-wrapper";
import ArtDirectedImage from "@/shared/components/art-directed-image";

export default function HomeStoriesSection() {
  return (
    <HomeSectionWrapper
      variant="section"
      image={
        <ArtDirectedImage
          alt="Desk with books and a laptop with an editing software open"
          mobile={{
            width: 375,
            height: 271,
            src: "/images/home/mobile/beautiful-stories.jpg",
          }}
          tablet={{
            width: 273,
            height: 600,
            src: "/images/home/tablet/beautiful-stories.jpg",
          }}
          desktop={{
            width: 830,
            height: 600,
            src: "/images/home/desktop/beautiful-stories.jpg",
          }}
        />
      }
      title="BEAUTIFUL STORIES EVERY TIME"
      description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      button={{ label: "View the stories" }}
    />
  );
}
