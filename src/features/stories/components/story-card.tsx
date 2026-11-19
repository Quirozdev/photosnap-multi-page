import { Story } from "@/features/stories/types/story";
import ArtDirectedImage from "@/shared/components/art-directed-image";
import Button from "@/shared/components/button/button";
import Separator from "@/shared/components/separator";

interface Props extends Story {
  showDateLabel?: boolean;
}

export default function StoryCard({
  image,
  dateLabel,
  title,
  author,
  showDateLabel = false,
}: Props) {
  return (
    <div className="group relative cursor-pointer transition-transform duration-500 ease-in-out hover:-translate-y-6 md:max-h-125">
      <ArtDirectedImage {...image} />
      <div className="absolute right-10 bottom-10 left-10 z-10 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            {showDateLabel && (
              <p className="text-preset-6 text-neutral-0">{dateLabel}</p>
            )}
            <p className="text-preset-4 text-neutral-0">{title}</p>
            <p className="text-preset-6 text-neutral-0">by {author}</p>
          </div>
          <Separator className="bg-neutral-0" />
        </div>
        <Button variant="arrow" tone="dark" className="justify-between">
          Read Story
        </Button>
      </div>
      <div
        aria-hidden="true"
        className="bg-gradient-1 absolute bottom-0 left-0 h-87.5 w-full"
      ></div>
      <div className="bg-gradient-6 absolute bottom-0 left-0 h-1.5 w-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
    </div>
  );
}
