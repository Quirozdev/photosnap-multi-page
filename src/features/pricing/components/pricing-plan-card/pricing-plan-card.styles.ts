import { cva } from "class-variance-authority";

export const containerStyles = cva(
  "relative grid grid-cols-1 gap-y-10 px-9 py-12 md:grid-cols-2 md:px-11 md:py-10 xl:grid-cols-1 xl:px-10 ",
  {
    variants: {
      variant: {
        featured: "bg-neutral-950 xl:py-20",
        normal: "bg-neutral-100 xl:py-12",
      },
    },
  },
);

export const nameStyles = cva("text-preset-3", {
  variants: {
    variant: {
      featured: "text-neutral-0",
      normal: "text-neutral-950",
    },
  },
});

export const descriptionStyles = cva("text-preset-5 opacity-60", {
  variants: {
    variant: {
      featured: "text-neutral-0",
      normal: "text-neutral-950",
    },
  },
});

export const priceTextContainerStyles = cva(
  "flex flex-col items-center text-center md:items-end xl:items-center",
  {
    variants: {
      variant: {
        featured: "text-neutral-0",
        normal: "text-neutral-950",
      },
    },
  },
);
