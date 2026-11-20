import {
  contentStyles,
  descriptionStyles,
  sectionStyles,
  titleStyles,
} from "@/shared/components/section-wrapper/section-wrapper.styles";
import Button from "@/shared/components/button/button";
import { cn } from "@/shared/utils/cn";
import { VariantProps } from "class-variance-authority";

type SectionVariant = NonNullable<
  VariantProps<typeof sectionStyles>["variant"]
>;

interface Props extends React.ComponentProps<"section"> {
  variant: SectionVariant;
  image: React.ReactNode;
  title: string;
  description: string;
  button?: {
    label: string;
  };
}

export default function SectionWrapper({
  variant,
  image,
  title,
  description,
  button,
  className,
  ...props
}: Props) {
  const Heading = variant === "hero" ? "h1" : "h2";

  return (
    <section className={cn(sectionStyles({ variant }), className)} {...props}>
      {image}
      <article className={contentStyles({ variant })}>
        {variant === "hero" && (
          <div className="absolute top-0 flex w-full max-w-79.5 md:hidden">
            <div className="bg-gradient-6 h-1.5 w-32"></div>
          </div>
        )}
        <div className="relative flex flex-col items-center gap-y-6 md:gap-y-12">
          {variant === "hero" && (
            <div className="bg-gradient-6 absolute left-0 hidden h-full w-1.5 md:block"></div>
          )}
          <div className="flex max-w-79.5 flex-col gap-y-4 md:gap-y-5">
            <Heading className={titleStyles({ variant })}>{title}</Heading>
            <p className={descriptionStyles({ variant })}>{description}</p>
          </div>
          {button && (
            <div className="flex w-full max-w-79.5">
              <Button
                variant="arrow"
                tone={variant === "hero" ? "dark" : "light"}
                className="self-start"
              >
                {button.label}
              </Button>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
