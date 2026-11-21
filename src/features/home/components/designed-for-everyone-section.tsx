import SectionWrapper from "@/shared/components/section-wrapper/section-wrapper";
import ArtDirectedImage from "@/shared/components/art-directed-image";

export default function DesignedForEveryoneSection() {
  return (
    <SectionWrapper
      variant="section"
      image={
        <ArtDirectedImage
          alt="A man preparing a camera"
          sizes="(min-width: 80rem) 830px, (min-width: 48rem) 273px, 100vw"
          pictureClassName="aspect-375/271 w-full md:aspect-273/600 md:w-[273px] md:flex-none xl:aspect-830/600 xl:w-[830px]"
          mobile={{
            width: 375,
            height: 271,
            src: "/images/home/mobile/designed-for-everyone.jpg",
          }}
          tablet={{
            width: 273,
            height: 600,
            src: "/images/home/tablet/designed-for-everyone.jpg",
          }}
          desktop={{
            width: 830,
            height: 600,
            src: "/images/home/desktop/designed-for-everyone.jpg",
          }}
        />
      }
      title="DESIGNED FOR EVERYONE"
      description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.."
      button={{ label: "View the stories" }}
      className="md:flex-row-reverse"
    />
  );
}
