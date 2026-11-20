import { cva } from "class-variance-authority";

export const sectionStyles = cva("flex flex-col md:flex-row", {
  variants: {
    variant: {
      hero: "",
      section: "",
    },
  },
});

export const contentStyles = cva(
  "relative flex min-h-105 flex-col items-center justify-center md:h-auto md:flex-1 md:items-stretch",
  {
    variants: {
      variant: {
        hero: "bg-neutral-950",
        section: "bg-neutral-0",
      },
    },
  },
);

export const titleStyles = cva("text-preset-2 md:text-preset-1", {
  variants: {
    variant: {
      hero: "text-neutral-0",
      section: "text-neutral-950",
    },
  },
});

export const descriptionStyles = cva("text-preset-5 opacity-60", {
  variants: {
    variant: {
      hero: "text-neutral-0",
      section: "text-neutral-950",
    },
  },
});
