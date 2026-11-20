import ArtDirectedImage from "@/shared/components/art-directed-image";
import Button from "@/shared/components/button/button";

export default function BetaInvitationSection() {
  return (
    <section className="relative px-8 py-16 md:px-10 md:py-17">
      <div className="bg-gradient-6 absolute top-0 h-1.5 w-32 md:left-0 md:h-full md:w-1.5"></div>
      <ArtDirectedImage
        alt="Desert filled with sand mountains"
        mobile={{
          src: "/images/shared/mobile/bg-beta.jpg",
          width: 375,
          height: 288,
        }}
        tablet={{
          src: "/images/shared/tablet/bg-beta.jpg",
          width: 768,
          height: 280,
        }}
        desktop={{
          src: "/images/shared/desktop/bg-beta.jpg",
          width: 1440,
          height: 280,
        }}
        className="absolute top-0 left-0 -z-10"
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-y-6 md:flex-row md:items-center md:justify-between">
        <h3 className="text-preset-2 md:text-preset-1 text-neutral-0 uppercase md:max-w-[400px]">
          We’re in beta. Get your invite today!
        </h3>
        <Button variant="arrow" tone="dark" className="min-w-fit">
          Get an invite
        </Button>
      </div>
    </section>
  );
}
