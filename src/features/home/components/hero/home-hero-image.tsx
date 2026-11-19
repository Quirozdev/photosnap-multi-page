import { getImageProps } from "next/image";

export default function HomeHeroImage() {
  const common = { alt: "Man watching the horizon in a precious river" };

  const {
    props: { srcSet: _, ...rest },
  } = getImageProps({
    ...common,
    width: 375,
    height: 294,
    src: "/images/home/mobile/create-and-share.jpg",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 273,
    height: 650,
    src: "/images/home/tablet/create-and-share.jpg",
  });

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 830,
    height: 650,
    src: "/images/home/desktop/create-and-share.jpg",
  });

  return (
    <picture>
      <source media="(min-width: 80rem)" srcSet={desktop} />
      <source media="(min-width: 48rem)" srcSet={tablet} />
      <img {...rest} alt={common.alt} className="h-full w-full object-cover" />
    </picture>
  );
}
