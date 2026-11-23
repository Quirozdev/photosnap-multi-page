import { useKeyDown } from "@/shared/hooks/use-key-down";
import { fireEvent, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("useKeyDown", () => {
  it("calls onKeyDown when the specified key is pressed", () => {
    const onKeyDown = vi.fn();

    renderHook(() => useKeyDown({ key: "Escape", onKeyDown }));

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledWith(
      expect.objectContaining({ key: "Escape" }),
    );
  });

  it("does not call onKeyDown when a different key is pressed", () => {
    const onKeyDown = vi.fn();

    renderHook(() => useKeyDown({ key: "Escape", onKeyDown }));

    fireEvent.keyDown(document, { key: "Enter" });

    expect(onKeyDown).not.toHaveBeenCalled();
  });

  it("removes the event listener when unmounted", () => {
    const onKeyDown = vi.fn();

    const { unmount } = renderHook(() =>
      useKeyDown({ key: "Escape", onKeyDown }),
    );

    unmount();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onKeyDown).not.toHaveBeenCalled();
  });

  it("listens for the updated key when key changes", () => {
    const onKeyDown = vi.fn();

    const { rerender } = renderHook(
      ({ key }) => useKeyDown({ key, onKeyDown }),
      { initialProps: { key: "Escape" } },
    );

    rerender({ key: "Enter" });

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onKeyDown).not.toHaveBeenCalled();

    fireEvent.keyDown(document, { key: "Enter" });
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });
});
