import HomeHeroSection from "@/features/home/components/hero/home-hero-section";
import HomeStoriesSection from "@/features/home/components/stories/home-stories-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HomeHeroSection />
      <HomeStoriesSection />
    </div>
  );
}
