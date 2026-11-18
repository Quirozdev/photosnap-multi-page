import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/shared/desktop/logo.svg"
        alt="Photosnap Logo"
        width={170}
        height={16}
      />
    </Link>
  );
}
