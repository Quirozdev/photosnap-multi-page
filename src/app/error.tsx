"use client";

import Button from "@/shared/components/button/button";
import { ErrorIcon } from "@/shared/icons/error-icon";

export default function Error({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-4">
      <ErrorIcon
        aria-hidden="true"
        className="size-16 text-neutral-950 md:size-20 xl:size-24"
      />
      <h1 className="text-preset-3 xl:text-preset-2 text-center text-neutral-950">
        Something went wrong
      </h1>
      <Button variant="normal" tone="dark" onClick={retry}>
        Try again
      </Button>
    </div>
  );
}
