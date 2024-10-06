import Image from "next/image";
import Link from "next/link";

type ListMenuProps = {
  text: string;
  icon: string;
  href: string | object;
  active?: boolean;
  filterIcon?: boolean;
};

export default function ListMenu({
  text,
  icon,
  active = false,
  filterIcon = false,
  href
}: ListMenuProps) {
  return (
    <Link href={href}>
    <div
      className={`${
        active ? "bg-white text-[#1C532A]" : " bg-[#1C532A] text-white"
      } flex  gap-2 p-4`}
    >
      <Image
        src={icon}
        alt={icon}
        width={30}
        height={30}
        className={`${filterIcon ? "filter-green" : ""}`}
      />
      <p className=" font-semibold text-lg">{text}</p>
    </div>
    </Link>
  );
}