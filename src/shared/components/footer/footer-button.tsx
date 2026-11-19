import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

export default function FooterButton({ label, href }: Props) {
  return (
    <Link href={href}>
      <span className="text-preset-7 text-neutral-0 uppercase hover:opacity-30">
        {label}
      </span>
    </Link>
  );
}
