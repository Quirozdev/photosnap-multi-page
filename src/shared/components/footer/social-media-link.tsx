import Link from "next/link";
import { CSSProperties } from "react";

interface Props {
  href: string;
  label: string;
  icon: React.ReactNode;
  hoverFill: string;
}

export default function SocialMediaLink({
  href,
  label,
  icon,
  hoverFill,
}: Props) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener no-referrer"
      style={{ "--social-hover-fill": hoverFill } as CSSProperties}
      className="[&_path]:fill-white hover:[&_path]:fill-(--social-hover-fill)"
    >
      {icon}
    </Link>
  );
}
