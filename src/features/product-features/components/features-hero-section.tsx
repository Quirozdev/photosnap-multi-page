import SectionWrapper from "@/shared/components/section-wrapper/section-wrapper";
import ArtDirectedImage from "@/shared/components/art-directed-image";

export default function FeaturesHeroSection() {
  return (
    <SectionWrapper
      variant="hero"
      image={
        <ArtDirectedImage
          alt="Man holding a camera in a mountain"
          mobile={{
            width: 375,
            height: 294,
            src: "/images/features/mobile/hero.jpg",
          }}
          tablet={{
            width: 273,
            height: 490,
            src: "/images/features/tablet/hero.jpg",
          }}
          desktop={{
            width: 830,
            height: 490,
            src: "/images/features/desktop/hero.jpg",
          }}
        />
      }
      title="FEATURES"
      description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
      className="md:flex-row-reverse"
    />
  );
}
