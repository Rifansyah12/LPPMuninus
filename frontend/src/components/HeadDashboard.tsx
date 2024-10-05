import { useState } from "react";

export default function HeadDashboard({title}: {title: string}) {
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
      <div className="h-[130px] py-[1.5rem] px-7 bg-white text-black shadow-md">
        <div className="flex justify-between  items-center ">
          <h1 className="text-3xl text-[#1C532A] text-shadow font-semibold">
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <button className="btn btn-ghost">
              <span className="material-symbols-outlined">notifications</span>
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
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
    </header>
  );
}