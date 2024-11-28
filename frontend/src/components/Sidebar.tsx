import ListMenu from "@/components/ListMenu";
import Image from "next/image";
import Link from "next/link";

// Definisikan tipe props dengan benar
type SidebarProps = {
  menu: string;
};

export default function Sidebar({ menu }: SidebarProps) {
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
          {/* Aktifkan sesuai dengan props menu */}
          <ListMenu
            text="Profile"
            icon="/icon/profile.png"
            active={menu === "profile"} // Set active jika menu = "profile"
            href={"/dashboard/profile"}
          />

          {/* <div
            className={`${
              menu === "usulan-new" || menu === "usulan-recap"
                ? "bg-white text-[#1C532A]"
                : " bg-[#1C532A] text-white"
            } flex  gap-2 p-4`}
          >
            <Image
              src="/icon/usulan.png"
              alt="icon-usulan"
              width={30}
              height={30}
              className={`${
                menu === "usulan-new" || menu === "usulan-recap"
                  ? "filter-green"
                  : ""
              }`}
            />
            <ul className="menu menu-horizontal">
              <li>
                <details>
                  <summary className="font-semibold text-lg text">
                    Pengusulan
                  </summary>
                </details>
              </li>
            </ul>
          </div> */}

          {/* Tambahkan active props pada item lain */}
          <ListMenu
            text="Pengusulan"
            icon="/icon/usulan.png"
            active={menu === "Pengusulan"} // Aktifkan jika menu = "tahapan"
            href={"/dashboard/proposal/pengusulan"}
          />

          <ListMenu
            text="Tahapan"
            icon="/icon/tahapan.png"
            active={menu === "tahapan"} // Aktifkan jika menu = "tahapan"
            href={"/dashboard/tahapan"}
          />
          {/* <ListMenu
            text="Hasil"
            icon="/icon/hasil.png"
            active={menu === "hasil"} // Aktifkan jika menu = "hasil"
            href={"/dashboard/hasil"}
          /> */}
          <ListMenu
            text="Statistik"
            icon="/icon/piechart.png"
            active={menu === "statistik"} // Aktifkan jika menu = "statistik"
            href={"/dashboard/rekap"}
          />
          {/* <ListMenu
            text="Reviewer"
            icon="/icon/review.png"
            active={menu === "reviewer"} // Aktifkan jika menu = "reviewer"
            href={"/dashboard/reviewer"}
          /> */}
        </div>
      </div>
      <h3 className="pl-4 text-base font-semibold">USER</h3>
      <div className="">
        <div className="">
          <ListMenu
            text="Dashboard"
            icon="/icon/dashboard.png"
            active={menu === "dashboard"} // Aktifkan jika menu = "dashboard"
            href={"/dashboard"}
          />
          <ListMenu
            text="Riwayat Pengajuan"
            icon="/icon/summary.svg"
            active={menu === "rekap"} // Aktifkan jika menu = "rekap"
            href={"/dashboard/summary"}
          />
          <ListMenu
            text="Ajuan Anggota"
            icon="/icon/group.svg"
            active={menu === "anggota"} // Aktifkan jika menu = "anggota"
            href={"/dashboard/group"}
          />
        </div>
      </div>
    </div>
  );
}
