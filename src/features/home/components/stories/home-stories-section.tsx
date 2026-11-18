import Button from "@/shared/components/button/button";
import HomeStoriesImage from "@/features/home/components/stories/home-stories-image";

export default function HomeStoriesSection() {
  return (
    <section className="flex flex-col md:flex-row">
      <HomeStoriesImage />
      <article className="bg-neutral-0 relative flex h-105 flex-col items-center justify-center md:h-auto md:flex-1 md:items-stretch">
        <div className="relative flex flex-col items-center gap-y-6 md:gap-y-12">
          <div className="flex max-w-79.5 flex-col gap-y-4 md:gap-y-5">
            <h2 className="text-preset-2 md:text-preset-1 text-neutral-950">
              BEAUTIFUL STORIES EVERY TIME
            </h2>
            <p className="text-preset-5 text-neutral-950 opacity-60">
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
          </div>
          <div className="flex w-full max-w-79.5">
            <Button variant="arrow" tone="light" className="self-start">
              View the stories
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}
