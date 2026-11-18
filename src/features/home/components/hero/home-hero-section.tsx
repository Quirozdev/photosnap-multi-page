import HomeHeroImage from "@/features/home/components/hero/home-hero-image";
import HomeSectionWrapper from "@/features/home/components/home-section-wrapper/home-section-wrapper";

export default function HomeHeroSection() {
  return (
    <HomeSectionWrapper
      variant="hero"
      image={<HomeHeroImage />}
      title="CREATE AND SHARE YOUR PHOTO STORIES."
      description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      button={{ label: "Get an invite" }}
      className="md:flex-row-reverse"
    />
  );
}
