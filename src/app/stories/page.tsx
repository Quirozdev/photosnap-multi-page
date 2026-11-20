import StoriesHeroSection from "@/features/stories/components/stories-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories",
};

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <StoriesHeroSection />
    </div>
  );
}
