import DesignedForEveryoneImage from "@/features/home/components/designed-for-everyone/designed-for-everyone-image";
import HomeSectionWrapper from "@/features/home/components/home-section-wrapper/home-section-wrapper";

export default function DesignedForEveryoneSection() {
  return (
    <HomeSectionWrapper
      variant="section"
      image={<DesignedForEveryoneImage />}
      title="DESIGNED FOR EVERYONE"
      description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.."
      button={{ label: "View the stories" }}
      className="md:flex-row-reverse"
    />
  );
}
