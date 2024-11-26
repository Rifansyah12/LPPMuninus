import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function HeadDashboard({ title }: { title: string }) {
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
    <header>
      <div className="lg:h-[130px] h-[5rem] lg:py-[1.5rem] py-[0.5rem]  lg:px-7 px-3 bg-white text-black shadow-md">
        <div className="flex justify-between  items-center ">
          <div className="flex gap-4">
            <div className="drawer md:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}

                <label
                  htmlFor="my-drawer"
                  className=" swap swap-rotate bg-transparent border-none text-primary"
                >
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" />

                  {/* hamburger icon */}
                  <svg
                    className="swap-off fill-current "
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>

                  {/* close icon */}
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <Sidebar menu="profile" />
              </div>
            </div>

            <h1 className="lg:text-3xl text-lg text-[#1C532A] text-shadow font-semibold">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="">
              <span className="material-symbols-outlined hover:text-[#FFCC00]">
                notifications
              </span>
            </button>
            <div className="flex items-center">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown} // Event handler untuk tombol "Enter"
                className="lg:h-[35px] h-[1.7rem] max-w-[6rem] bg-[#F4F6F9] text-[#000000] outline-none border-none px-2"
                placeholder="Search..."
              />
              <span
                className="material-symbols-outlined bg-[#F4F6F9] lg:text-[35px] text-[1.7rem] cursor-pointer"
                onClick={handleSearch} // Event handler untuk klik ikon
              >
                search
              </span>
            </div>
            <Link href="/Settings">
              <button className="">
                <span className="material-symbols-outlined hover:text-[#FFCC00]">
                  settings
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[80%] lg:-mt-[2.5rem] -mt-[1rem] mx-auto pl-[3.5rem] flex bg-[#FFCC00] text-white lg:h-[98px] h-[3.2rem] items-center shadow-md">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
    </header>
  );
}
