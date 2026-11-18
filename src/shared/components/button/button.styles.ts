import { cva } from "class-variance-authority";

export const buttonStyles = cva("cursor-pointer", {
  variants: {
    variant: {
      arrow: "",
      normal:
        "px-6 py-3 inline-flex items-center justify-center text-center uppercase text-preset-7 hover:bg-neutral-300 hover:text-neutral-950",
    },
    tone: {
      light: "bg-neutral-0 text-neutral-950",
      dark: "bg-neutral-950 text-neutral-0",
    },
  },
  defaultVariants: {
    variant: "normal",
    tone: "light",
  },
});
