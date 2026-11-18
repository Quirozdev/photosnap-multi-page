import Button from "@/shared/components/button/button";
import HomeHeroImage from "@/features/home/components/hero/home-hero-image";

export default function HomeHeroSection() {
  return (
    <section className="flex flex-col md:flex-row-reverse">
      <HomeHeroImage />
      <article className="relative flex h-105 flex-col items-center justify-center bg-neutral-950 md:h-auto md:flex-1 md:items-stretch">
        <div className="absolute top-0 flex w-full max-w-79.5 md:hidden">
          <div className="bg-gradient-6 h-1.5 w-32"></div>
        </div>

        <div className="relative flex flex-col items-center gap-y-6 md:gap-y-12">
          <div className="bg-gradient-6 absolute left-0 hidden h-full w-1.5 md:block"></div>

          <div className="flex max-w-79.5 flex-col gap-y-4 md:gap-y-5">
            <h1 className="text-preset-2 md:text-preset-1 text-neutral-0">
              CREATE AND SHARE YOUR PHOTO STORIES.
            </h1>
            <p className="text-preset-5 text-neutral-0 opacity-60">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
          </div>
          <div className="flex w-full max-w-79.5">
            <Button variant="arrow" tone="dark" className="self-start">
              Get an invite
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}
