import HomeHeroSection from "@/features/home/components/home-hero-section";
import HomeStoriesSection from "@/features/home/components/home-stories-section";
import DesignedForEveryoneSection from "@/features/home/components/designed-for-everyone-section";
import StoriesGrid from "@/features/stories/components/stories-grid";
import FeaturesSection from "@/features/product-features/components/features-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHeroSection />
      <HomeStoriesSection />
      <DesignedForEveryoneSection />
      <StoriesGrid />
      <FeaturesSection />
    </div>
  );
}
