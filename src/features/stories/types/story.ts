import { type ArtDirectedImageProps } from "@/shared/components/art-directed-image";

export interface Story {
  id: string;
  image: ArtDirectedImageProps;
  dateLabel: string;
  title: string;
  author: string;
}
