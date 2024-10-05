import ListMenu from "@/components/ListMenu";
export default function Sidebar() {
  return (
    <div className="min-w-[17rem] bg-[#1C532A] block text-[#FFFFFF]">
      <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-4 pb-2 text-center">
        <h1 className="text-2xl font-semibold">SIMPPM</h1>
        <h2 className="text-sm font-semibold">Universitas Islam Nusantara</h2>
      </div>
      <h2 className="text-center text-lg font-semibold py-5">
        Rekapitulasi SIMPPM
      </h2>
      <h3 className="pl-4 text-base font-semibold">MENU</h3>
      <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] my-5">
        <div className="">
          <ListMenu text="Profile" icon="/icon/profile.png" active={true} />
          <ListMenu text="Usulan" icon="/icon/usulan.png" />
          <ListMenu text="Tahapan" icon="/icon/tahapan.png" />
          <ListMenu text="Hasil" icon="/icon/hasil.png" />
          <ListMenu text="Statistik" icon="/icon/piechart.png" />
          <ListMenu text="Reviewer" icon="/icon/review.png" />
        </div>
      </div>
      <h3 className="pl-4 text-base font-semibold">USER</h3>
      <div className="">
        <div className="">
          <ListMenu text="Dashboard" icon="/icon/dashboard.png" />
          <ListMenu text="Rekap Pengusulan" icon="/icon/summary.svg" />
          <ListMenu text="Ajuan Anggota" icon="/icon/group.svg" />
        </div>
      </div>
    </div>
  );
}
