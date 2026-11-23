import { useRemoveVerticalScrolling } from "@/shared/hooks/use-remove-vertical-scrolling";
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

describe("useRemoveVerticalScrolling", () => {
  beforeEach(() => {
    document.documentElement.classList.remove(
      "overflow-y-hidden",
      "scrollbar-gutter-stable",
    );
  });

  it("removes vertical scrolling when shouldRemove is true", () => {
    renderHook(() => useRemoveVerticalScrolling({ shouldRemove: true }));

    expect(document.documentElement).toHaveClass(
      "overflow-y-hidden",
      "scrollbar-gutter-stable",
    );
  });

  it("does not remove vertical scrolling when shouldRemove is false", () => {
    renderHook(() => useRemoveVerticalScrolling({ shouldRemove: false }));

    expect(document.documentElement).not.toHaveClass(
      "overflow-y-hidden",
      "scrollbar-gutter-stable",
    );
  });

  it("restores vertical scrolling when shouldRemove changes to false", () => {
    const { rerender } = renderHook(
      ({ shouldRemove }) => useRemoveVerticalScrolling({ shouldRemove }),
      { initialProps: { shouldRemove: true } },
    );

    rerender({ shouldRemove: false });

    expect(document.documentElement).not.toHaveClass(
      "overflow-y-hidden",
      "scrollbar-gutter-stable",
    );
  });

  it("restores vertical scrolling when unmounted", () => {
    const { unmount } = renderHook(() =>
      useRemoveVerticalScrolling({ shouldRemove: true }),
    );

    unmount();

    expect(document.documentElement).not.toHaveClass(
      "overflow-y-hidden",
      "scrollbar-gutter-stable",
    );
  });

  it("restores the previous vertical scrolling state when unmounted", () => {
    document.documentElement.classList.add("overflow-y-hidden");

    const { unmount } = renderHook(() =>
      useRemoveVerticalScrolling({ shouldRemove: true }),
    );

    unmount();

    expect(document.documentElement).toHaveClass("overflow-y-hidden");
    expect(document.documentElement).not.toHaveClass("scrollbar-gutter-stable");
  });
});
