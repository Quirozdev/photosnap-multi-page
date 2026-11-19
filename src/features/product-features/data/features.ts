import { Feature } from "@/features/product-features/types/feature";

export const features: Feature[] = [
  {
    title: "100% Responsive",
    description:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    icon: {
      src: "/images/features/desktop/responsive.svg",
      width: 72,
      height: 72,
      alt: "Multiple devices like a cellphone, tablet and laptop",
    },
  },
  {
    title: "No Photo Upload Limit",
    description:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    icon: {
      src: "/images/features/desktop/no-limit.svg",
      width: 72,
      height: 36,
      alt: "Infinite symbol",
    },
  },
  {
    title: "Available to Embed",
    description:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    icon: {
      src: "/images/features/desktop/embed.svg",
      width: 71,
      height: 72,
      alt: "Multiple social medias like facebook",
    },
  },
];
