import type { ArtDirectedImageProps } from "@/shared/components/art-directed-image";

export const imageFixture = {
  alt: "A photographer taking pictures",
  mobile: {
    src: "/images/mobile.jpg",
    width: 375,
    height: 294,
  },
  tablet: {
    src: "/images/tablet.jpg",
    width: 768,
    height: 600,
  },
  desktop: {
    src: "/images/desktop.jpg",
    width: 1440,
    height: 900,
  },
} satisfies ArtDirectedImageProps;
