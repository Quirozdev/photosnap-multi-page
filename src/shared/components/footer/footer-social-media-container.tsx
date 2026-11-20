import SocialMediaLink from "@/shared/components/footer/social-media-link";
import FacebookIcon from "@/shared/icons/social-medias/facebook-icon";
import InstagramIcon from "@/shared/icons/social-medias/instagram-icon";
import PinterestIcon from "@/shared/icons/social-medias/pinterest-icon";
import TwitterIcon from "@/shared/icons/social-medias/twitter-icon";
import YoutubeIcon from "@/shared/icons/social-medias/youtube-icon";
import { cn } from "@/shared/utils/cn";

type Props = React.ComponentProps<"div">;

export default function FooterSocialMediaContainer({
  className,
  ...props
}: Props) {
  return (
    <div className={cn("flex items-center gap-x-3", className)} {...props}>
      <SocialMediaLink
        href="https://facebook.com"
        label="Facebook"
        icon={FacebookIcon}
      />
      <SocialMediaLink
        href="https://youtube.com"
        label="Youtube"
        icon={YoutubeIcon}
      />
      <SocialMediaLink
        href="https://x.com"
        label="Twitter (X)"
        icon={TwitterIcon}
      />
      <SocialMediaLink
        href="https://pinterest.com"
        label="Pinterest"
        icon={PinterestIcon}
      />
      <SocialMediaLink
        href="https://instagram.com"
        label="Instagram"
        icon={InstagramIcon}
      />
    </div>
  );
}
