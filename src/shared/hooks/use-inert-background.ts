import { useEffect } from "react";

interface Props {
  shouldBeInert: boolean;
}

export function useInertBackground({ shouldBeInert }: Props) {
  useEffect(() => {
    const main = document.getElementsByTagName("main")[0];
    const footer = document.getElementsByTagName("footer")[0];

    const previousMainInert = main?.inert ?? false;
    const previousFooterInert = footer?.inert ?? false;

    if (main) {
      main.inert = shouldBeInert;
    }
    if (footer) {
      footer.inert = shouldBeInert;
    }

    return () => {
      if (main) {
        main.inert = previousMainInert;
      }
      if (footer) {
        footer.inert = previousFooterInert;
      }
    };
  }, [shouldBeInert]);
}
