import HomeHeroSection from "@/features/home/components/home-hero-section";
import HomeStoriesSection from "@/features/home/components/home-stories-section";
import DesignedForEveryoneSection from "@/features/home/components/designed-for-everyone-section";
import StoriesGrid from "@/features/stories/components/stories-grid";
import FeaturesSection from "@/features/product-features/components/features-section";
import { stories } from "@/features/stories/data/stories";
import { features } from "@/features/product-features/data/features";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHeroSection />
      <HomeStoriesSection />
      <DesignedForEveryoneSection />
      <StoriesGrid stories={stories.slice(0, 4)} />
      <FeaturesSection features={features.slice(0, 3)} />
    </div>
  );
}
