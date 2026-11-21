import { cn } from "@/shared/utils/cn";
import { getImageProps } from "next/image";

const TABLET_BREAKPOINT = "(min-width: 48rem)";
const DESKTOP_BREAKPOINT = "(min-width: 80rem)";

export interface ArtDirectedImageProps extends React.ComponentProps<"img"> {
  alt: string;
  sizes?: string;
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
  sizes: customSizes,
  mobile,
  tablet,
  desktop,
  className,
  ...props
}: ArtDirectedImageProps) {
  const sizes =
    customSizes ??
    `${DESKTOP_BREAKPOINT} ${desktop.width}px, ${TABLET_BREAKPOINT} ${tablet.width}px, ${mobile.width}px`;

  const common = { alt, sizes };

  const {
    props: { ...mobileProps },
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
      <source
        media={DESKTOP_BREAKPOINT}
        srcSet={desktopSrcSet}
        sizes={sizes}
        width={desktop.width}
        height={desktop.height}
      />
      <source
        media={TABLET_BREAKPOINT}
        srcSet={tabletSrcSet}
        sizes={sizes}
        width={tablet.width}
        height={tablet.height}
      />
      <img
        {...mobileProps}
        alt={common.alt}
        className={cn("h-full w-full object-cover", className)}
        {...props}
      />
    </picture>
  );
}
