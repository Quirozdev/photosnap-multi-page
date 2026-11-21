import Link from "next/link";

interface Props {
  label: string;
  href: string;
  onNavigate?: () => void;
}

export default function NavbarButton({ label, href, onNavigate }: Props) {
  return (
    <Link href={href} onNavigate={onNavigate}>
      <span className="text-preset-7 text-neutral-950 uppercase hover:opacity-30">
        {label}
      </span>
    </Link>
  );
}
