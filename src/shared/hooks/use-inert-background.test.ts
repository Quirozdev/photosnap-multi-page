import { useInertBackground } from "@/shared/hooks/use-inert-background";
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

describe("useInertBackground", () => {
  let main: HTMLElement;
  let footer: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `
    <main></main>
    <footer></footer>
    `;

    main = document.querySelector("main")!;
    footer = document.querySelector("footer")!;
  });

  it("makes the main and footer elements inert when shouldBeInert is true", () => {
    renderHook(() => useInertBackground({ shouldBeInert: true }));

    expect(main.inert).toBe(true);
    expect(footer.inert).toBe(true);
  });

  it("removes inert when shouldBeInert changes to false", () => {
    const { rerender } = renderHook(
      ({ shouldBeInert }) => useInertBackground({ shouldBeInert }),
      { initialProps: { shouldBeInert: true } },
    );

    rerender({ shouldBeInert: false });

    expect(main.inert).toBe(false);
    expect(footer.inert).toBe(false);
  });

  it("restores the previous inert state when unmounted", () => {
    main.inert = true;
    footer.inert = true;

    const { unmount } = renderHook(() =>
      useInertBackground({ shouldBeInert: false }),
    );

    expect(main.inert).toBe(false);
    expect(footer.inert).toBe(false);

    unmount();

    expect(main.inert).toBe(true);
    expect(footer.inert).toBe(true);
  });
});
