import { getImageProps } from "next/image";

export default function DesignedForEveryoneImage() {
  const common = {
    alt: "A man preparing a camera",
  };

  const {
    props: { srcSet, ...rest },
  } = getImageProps({
    ...common,
    width: 375,
    height: 271,
    src: "/images/home/mobile/designed-for-everyone.jpg",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 273,
    height: 600,
    src: "/images/home/tablet/designed-for-everyone.jpg",
  });

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 830,
    height: 600,
    src: "/images/home/desktop/designed-for-everyone.jpg",
  });

  return (
    <picture>
      <source media="(min-width: 80rem)" srcSet={desktop} />
      <source media="(min-width: 48rem)" srcSet={tablet} />
      <img {...rest} alt={common.alt} className="w-full" />
    </picture>
  );
}
