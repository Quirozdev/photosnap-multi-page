import ArtDirectedImage from "@/shared/components/art-directed-image";
import Button from "@/shared/components/button/button";

export default function StoriesHeroSection() {
  return (
    <section className="relative flex flex-col">
      <ArtDirectedImage
        loading="eager"
        fetchPriority="high"
        pictureClassName="w-full aspect-375/317 md:aspect-768/650 xl:aspect-1440/650"
        sizes="100vw"
        alt="Moon of appalachia at the top of some mountains"
        mobile={{
          src: "/images/stories/mobile/moon-of-appalacia.jpg",
          width: 375,
          height: 317,
        }}
        tablet={{
          src: "/images/stories/tablet/moon-of-appalacia.jpg",
          width: 768,
          height: 650,
        }}
        desktop={{
          src: "/images/stories/desktop/moon-of-appalacia.jpg",
          width: 1440,
          height: 650,
        }}
      />
      <div className="relative flex flex-col gap-y-14 bg-neutral-950 px-7 py-12 md:absolute md:top-1/2 md:mx-10 md:max-w-96.75 md:-translate-y-1/2 md:gap-y-16 md:bg-transparent md:px-0 xl:mx-[112px]">
        <div className="bg-gradient-6 absolute top-0 h-1.5 w-32 md:hidden"></div>
        <div className="flex flex-col gap-y-4 md:gap-y-6">
          <p className="text-preset-7 text-neutral-0">
            LAST MONTH’S FEATURED STORY
          </p>
          <h1 className="text-preset-2 text-neutral-0 md:text-preset-1">
            HAZY FULL MOON OF APPALACHIA
          </h1>
        </div>
        <div className="flex flex-col gap-y-6">
          <p className="text-preset-6 text-neutral-0 inline-flex gap-x-2">
            <span className="opacity-75">March 2nd 2020</span>
            <span>by John Appleseed</span>
          </p>
          <p className="text-preset-5 text-neutral-0 opacity-60">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called &quot;mountains&quot;, especially in
            eastern Kentucky and West Virginia, and while the ridges are not
            high, the terrain is extremely rugged.
          </p>
          <Button variant="arrow" tone="dark">
            Read the story
          </Button>
        </div>
      </div>
    </section>
  );
}
