import { getImageProps } from "next/image";

export default function HomeStoriesImage() {
  const common = {
    alt: "Desk with books and a laptop with an editing software open",
  };

  const {
    props: { srcSet, ...rest },
  } = getImageProps({
    ...common,
    width: 375,
    height: 271,
    src: "/images/home/mobile/beautiful-stories.jpg",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 273,
    height: 600,
    src: "/images/home/tablet/beautiful-stories.jpg",
  });

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 830,
    height: 600,
    src: "/images/home/desktop/beautiful-stories.jpg",
  });

  return (
    <picture>
      <source media="(min-width: 80rem)" srcSet={desktop} />
      <source media="(min-width: 48rem)" srcSet={tablet} />
      <img {...rest} alt={common.alt} className="h-full w-full object-cover" />
    </picture>
  );
}
