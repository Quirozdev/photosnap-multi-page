import { cn } from "@/shared/utils/cn";
import { getImageProps } from "next/image";

export interface ArtDirectedImageProps extends React.ComponentProps<"img"> {
  alt: string;
  mobile: {
    src: string;
    width: number;
    height: number;
  };
  tablet: {
    src: string;
    width: number;
    height: number;
  };
  desktop: {
    src: string;
    width: number;
    height: number;
  };
}

export default function ArtDirectedImage({
  alt,
  mobile,
  tablet,
  desktop,
  className,
}: ArtDirectedImageProps) {
  const common = { alt };

  const {
    props: { ...rest },
  } = getImageProps({
    ...common,
    width: mobile.width,
    height: mobile.height,
    src: mobile.src,
  });

  const {
    props: { srcSet: tabletSrcSet },
  } = getImageProps({
    ...common,
    width: tablet.width,
    height: tablet.height,
    src: tablet.src,
  });

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    width: desktop.width,
    height: desktop.height,
    src: desktop.src,
  });

  return (
    <picture>
      <source media="(min-width: 80rem)" srcSet={desktopSrcSet} />
      <source media="(min-width: 48rem)" srcSet={tabletSrcSet} />
      <img
        {...rest}
        alt={common.alt}
        className={cn("h-full w-full object-cover", className)}
      />
    </picture>
  );
}
