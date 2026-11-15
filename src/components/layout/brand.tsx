import Image from "next/image";
import Link from "next/link";

export function Brand({onClick}: {onClick?: () => void}) {
  return <Link href="/" className="ops-brand" aria-label="Avixzon home" onClick={onClick}>
    <Image src="/avixzon-mark.svg" alt="" width={44} height={44} />
    <span>avixzon</span>
  </Link>;
}
