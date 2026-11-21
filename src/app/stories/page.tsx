import StoriesGrid from "@/features/stories/components/stories-grid";
import StoriesHeroSection from "@/features/stories/components/stories-hero-section";
import { stories } from "@/features/stories/data/stories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Explore inspiring photography stories from Photosnap and discover the visual stories shared by photographers.",
  alternates: {
    canonical: "/stories",
  },
};

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <StoriesHeroSection />
      <StoriesGrid stories={stories} showDateLabel={true} />
    </div>
  );
}
