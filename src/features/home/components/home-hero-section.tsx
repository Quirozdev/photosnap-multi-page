import HomeSectionWrapper from "@/features/home/components/home-section-wrapper/home-section-wrapper";
import ArtDirectedImage from "@/shared/components/art-directed-image";

export default function HomeHeroSection() {
  return (
    <HomeSectionWrapper
      variant="hero"
      image={
        <ArtDirectedImage
          alt="Man watching the horizon in a precious river"
          mobile={{
            width: 375,
            height: 294,
            src: "/images/home/mobile/create-and-share.jpg",
          }}
          tablet={{
            width: 273,
            height: 650,
            src: "/images/home/tablet/create-and-share.jpg",
          }}
          desktop={{
            width: 830,
            height: 650,
            src: "/images/home/desktop/create-and-share.jpg",
          }}
        />
      }
      title="CREATE AND SHARE YOUR PHOTO STORIES."
      description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      button={{ label: "Get an invite" }}
      className="md:flex-row-reverse"
    />
  );
}
