import Link from "next/link";
import { ComponentType, CSSProperties, useId } from "react";

interface Props {
  href: string;
  label: string;
  icon: ComponentType<{ gradientId: string }>;
}

export default function SocialMediaLink({ href, label, icon: Icon }: Props) {
  const id = useId();

  const gradientId = `social-gradient-${id.replace(/:/g, "")}`;

  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener no-referrer"
      style={{ "--social-hover-fill": `url(#${gradientId})` } as CSSProperties}
      className="[&_path]:fill-white hover:[&_path]:fill-(--social-hover-fill)"
    >
      <Icon gradientId={gradientId} />
    </Link>
  );
}
