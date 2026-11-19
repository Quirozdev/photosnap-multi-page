import HomeHeroSection from "@/features/home/components/home-hero-section";
import HomeStoriesSection from "@/features/home/components/home-stories-section";
import DesignedForEveryoneSection from "@/features/home/components/designed-for-everyone-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHeroSection />
      <HomeStoriesSection />
      <DesignedForEveryoneSection />
    </div>
  );
}
