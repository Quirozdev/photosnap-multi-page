import Button from "@/shared/components/button/button";
import FooterLinksContainer from "@/shared/components/footer/footer-links-container";
import FooterSocialMediaContainer from "@/shared/components/footer/footer-social-media-container";
import Logo from "@/shared/components/logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-8 py-14 md:px-10 md:py-15">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-y-30 md:flex-row md:items-stretch md:justify-between">
        <div className="flex flex-col gap-y-12 md:gap-y-18">
          <div className="flex flex-col items-center gap-y-8 md:items-start">
            <Logo className="text-neutral-0" />
            <FooterSocialMediaContainer className="md:hidden xl:flex" />
            <FooterLinksContainer className="hidden md:flex xl:hidden" />
          </div>
          <FooterLinksContainer className="md:hidden" />
          <FooterSocialMediaContainer className="hidden md:flex xl:hidden" />
        </div>
        <FooterLinksContainer className="hidden xl:flex xl:flex-col xl:items-start" />
        <div className="flex flex-col items-center gap-y-8 md:justify-between">
          <Button variant="arrow" tone="dark" className="md:self-end">
            Get an invite
          </Button>
          <p className="text-preset-5 text-neutral-0 opacity-50">
            Copyright 2026. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
