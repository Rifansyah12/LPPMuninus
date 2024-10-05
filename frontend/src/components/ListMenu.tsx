import Image from "next/image";

type ListMenuProps = {
  text: string;
  icon: string;
  active?: boolean;
  filterIcon?: boolean;
};

export default function ListMenu({
  text,
  icon,
  active = false,
  filterIcon = false,
}: ListMenuProps) {
  return (
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
  );
}