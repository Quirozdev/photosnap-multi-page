import Button from "@/shared/components/button/button";
import { buttonStyles } from "@/shared/components/button/button.styles";
import { NotFoundIcon } from "@/shared/icons/not-found-icon";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-4">
      <NotFoundIcon
        aria-hidden="true"
        className="size-16 text-neutral-950 md:size-20 xl:size-24"
      />
      <h1 className="text-preset-3 xl:text-preset-2 text-center text-neutral-950">
        Page not found
      </h1>
      <Link
        href="/"
        className={buttonStyles({ variant: "normal", tone: "dark" })}
      >
        Go to homepage
      </Link>
    </div>
  );
}
