import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "cursor-pointer inline-flex items-center uppercase text-preset-7",
  {
    variants: {
      variant: {
        arrow: "gap-x-4 hover:underline",
        normal:
          "px-6 py-3 justify-center text-center hover:bg-neutral-300 hover:text-neutral-950",
      },
      tone: {
        light: "",
        dark: "",
      },
    },
    compoundVariants: [
      {
        variant: "normal",
        tone: "light",
        class: "bg-neutral-0 text-neutral-950",
      },
      {
        variant: "normal",
        tone: "dark",
        class: "bg-neutral-950 text-neutral-0",
      },
      {
        variant: "arrow",
        tone: "light",
        class: "text-neutral-950",
      },
      {
        variant: "arrow",
        tone: "dark",
        class: "text-neutral-0",
      },
    ],
    defaultVariants: {
      variant: "normal",
      tone: "light",
    },
  },
);
