import ArtDirectedImage from "@/shared/components/art-directed-image";
import { imageFixture } from "@/shared/test/fixtures/image.fixture";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ArtDirectedImage", () => {
  it("renders the mobile image as the fallback", () => {
    render(<ArtDirectedImage {...imageFixture} />);

    const image = screen.getByRole("img", { name: imageFixture.alt });

    expect(image).toHaveAttribute(
      "width",
      imageFixture.mobile.width.toString(),
    );
    expect(image).toHaveAttribute(
      "height",
      imageFixture.mobile.height.toString(),
    );

    expect(image.getAttribute("srcSet")).toContain(
      encodeURIComponent(imageFixture.mobile.src),
    );
  });

  it("renders desktop and tablet image sources", () => {
    render(<ArtDirectedImage {...imageFixture} />);

    const image = screen.getByRole("img", { name: imageFixture.alt });

    const sources = image.closest("picture")!.querySelectorAll("source");

    expect(sources).toHaveLength(2);

    expect(sources[0]).toHaveAttribute("media", "(min-width: 80rem)");
    expect(sources[0]).toHaveAttribute(
      "width",
      imageFixture.desktop.width.toString(),
    );
    expect(sources[0]).toHaveAttribute(
      "height",
      imageFixture.desktop.height.toString(),
    );
    expect(sources[0].getAttribute("srcset")).toContain(
      encodeURIComponent(imageFixture.desktop.src),
    );

    expect(sources[1]).toHaveAttribute("media", "(min-width: 48rem)");
    expect(sources[1]).toHaveAttribute(
      "width",
      imageFixture.tablet.width.toString(),
    );
    expect(sources[1]).toHaveAttribute(
      "height",
      imageFixture.tablet.height.toString(),
    );
    expect(sources[1].getAttribute("srcset")).toContain(
      encodeURIComponent(imageFixture.tablet.src),
    );
  });

  it("generates default sizes based on the image dimensions", () => {
    render(<ArtDirectedImage {...imageFixture} />);

    const image = screen.getByRole("img", {
      name: imageFixture.alt,
    });

    const expectedSizes =
      "(min-width: 80rem) 1440px, (min-width: 48rem) 768px, 375px";

    expect(image).toHaveAttribute("sizes", expectedSizes);

    const sources = image.closest("picture")!.querySelectorAll("source");

    expect(sources[0]).toHaveAttribute("sizes", expectedSizes);
    expect(sources[1]).toHaveAttribute("sizes", expectedSizes);
  });

  it("uses custom sizes when provided", () => {
    render(<ArtDirectedImage {...imageFixture} sizes="100vw" />);

    const image = screen.getByRole("img", {
      name: imageFixture.alt,
    });

    expect(image).toHaveAttribute("sizes", "100vw");

    const sources = image.closest("picture")!.querySelectorAll("source");

    expect(sources[0]).toHaveAttribute("sizes", "100vw");
    expect(sources[1]).toHaveAttribute("sizes", "100vw");
  });

  it("forwards native image attributes and applies custom classes", () => {
    render(
      <ArtDirectedImage
        {...imageFixture}
        loading="eager"
        fetchPriority="high"
        className="custom-image"
        pictureClassName="custom-picture"
      />,
    );

    const image = screen.getByRole("img", {
      name: imageFixture.alt,
    });

    const picture = image.closest("picture")!;

    expect(image).toHaveAttribute("loading", "eager");
    expect(image).toHaveAttribute("fetchpriority", "high");
    expect(image).toHaveClass(
      "h-full",
      "w-full",
      "object-cover",
      "custom-image",
    );

    expect(picture).toHaveClass("block", "custom-picture");
  });
});
