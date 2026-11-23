import { useEffect } from "react";

interface Props {
  shouldRemove: boolean;
}

export function useRemoveVerticalScrolling({ shouldRemove }: Props) {
  useEffect(() => {
    if (!shouldRemove) return;

    const root = document.documentElement;

    const hadOverflowHidden = root.classList.contains("overflow-y-hidden");
    const hadScrollbarGutterStable = root.classList.contains(
      "scrollbar-gutter-stable",
    );

    root.classList.add("overflow-y-hidden", "scrollbar-gutter-stable");

    return () => {
      if (!hadOverflowHidden) {
        root.classList.remove("overflow-y-hidden");
      }
      if (!hadScrollbarGutterStable) {
        root.classList.remove("scrollbar-gutter-stable");
      }
    };
  }, [shouldRemove]);
}
