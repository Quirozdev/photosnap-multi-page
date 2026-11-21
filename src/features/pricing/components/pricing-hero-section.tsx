import SectionWrapper from "@/shared/components/section-wrapper/section-wrapper";
import ArtDirectedImage from "@/shared/components/art-directed-image";

export default function PricingHeroSection() {
  return (
    <SectionWrapper
      variant="hero"
      image={
        <ArtDirectedImage
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 80rem) 830px, (min-width: 48rem) 273px, 100vw"
          pictureClassName="aspect-375/294 w-full md:aspect-273/490 md:w-[273px] md:flex-none xl:aspect-830/490 xl:w-[830px]"
          alt="A woman preparing a camera in a sunset"
          mobile={{
            width: 375,
            height: 294,
            src: "/images/pricing/mobile/hero.jpg",
          }}
          tablet={{
            width: 273,
            height: 490,
            src: "/images/pricing/tablet/hero.jpg",
          }}
          desktop={{
            width: 830,
            height: 490,
            src: "/images/pricing/desktop/hero.jpg",
          }}
        />
      }
      title="PRICING"
      description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      className="md:flex-row-reverse"
    />
  );
}
