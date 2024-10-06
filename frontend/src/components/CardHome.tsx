import Image from "next/image";

export function CardHome({
  backgroundColor,
  img = "/research.png",
  blue,
}: {
  backgroundColor: string;
  img?: string;
  blue?: boolean;
}) {
  return (
    <div className="w-[358px] flex shadow-md rounded-md">
      <div
        className={`w-[179px] h-[179px] ${
          blue ? "bg-blue-600" : `bg-[${backgroundColor}]`
        } flex justify-center items-center shadow-md rounded-l-md`}
      >
        <Image src={img} alt={"LPPM"} width={117} height={117} />
      </div>
      <div className="bg-white w-[179px] h-[179px] flex justify-center flex-col pl-2 shadow-md rounded-r-md">
        <h3 className="text-[#3C3C3C] font-bold text-lg">Lorem</h3>
        <p className="text-[#3C3C3C]">
          Lorem ipsum dolor sit amet, amet consectetur adipiscing elit. Nullam
          eget ullamcorper nisl....
        </p>
      </div>
    </div>
  );
}
