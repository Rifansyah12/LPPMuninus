import ListMenu from "@/components/ListMenu";
import Head from "next/head";
import { useState } from "react";

export default function Profile() {
  const [searchValue, setSearchValue] = useState("");

  // Fungsi untuk menangani klik dan enter
  const handleSearch = () => {
    console.log(searchValue); // Menampilkan nilai input di console
  };

  // Fungsi untuk menangani tombol "Enter"
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="">
      <Head>
        <title>Dasboard - profile</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <div className="flex w-full bg-primary text-black">
        {/* Side Bar Start */}
        <div className="w-[17rem] bg-[#1C532A] block text-[#FFFFFF]">
          <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-4 pb-2 text-center">
            <h1 className="text-2xl font-semibold">SIMPPM</h1>
            <h2 className="text-sm font-semibold">
              Universitas Islam Nusantara
            </h2>
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
        {/* Side Bar End */}

        {/* Content Start */}

        <div className="w-full">
          <div className="h-[130px] py-[1.5rem] px-7 bg-white text-black shadow-md">
            <div className="flex justify-between  items-center ">
              <h1 className="text-3xl text-[#1C532A] text-shadow font-semibold">
                Dashboard
              </h1>
              <div className="flex items-center gap-4">
                <button className="btn btn-ghost">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                </button>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDown} // Event handler untuk tombol "Enter"
                    className="h-[35px] bg-[#F4F6F9] text-[#000000] outline-none border-none px-2"
                    placeholder="Search..."
                  />
                  <span
                    className="material-symbols-outlined bg-[#F4F6F9] text-[35px] cursor-pointer"
                    onClick={handleSearch} // Event handler untuk klik ikon
                  >
                    search
                  </span>
                </div>
                <div className="btn btn-ghost">
                  <span className="material-symbols-outlined">settings</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80%] -mt-[2.5rem] mx-auto pl-[3.5rem] flex bg-[#FFCC00] text-white h-[98px] items-center shadow-md">
            <h2 className="text-2xl font-semibold">Profile</h2>
          </div>

          {/* Head Profile Dashboard Start */}
          <div className="w-full py-7 flex justify-center items-center flex-col bg-white shadow-md mt-[3rem] text-primary">
            <span className="material-symbols-outlined text-[10rem]">
              account_circle
            </span>
            <h2 className="text-2xl font-semibold">Nama Disisni</h2>
            <p className="text-2xl font-semibold">
              Lorem ipsum sit amet dolor consectetur adipiscing elit
            </p>
          </div>
          {/* Head Profile Dashboard End */}

          {/* Head Dashboard End */}
          <div className=""></div>
        </div>

        {/* Content End */}
      </div>
    </div>
  );
}
