
export default function Navbar() {
  return (
    <div className="navbar bg-[#1C532A] text-white">
      <div className="navbar-start">
        <a className="font-bold text-2xl text-[#FFFFFF] ">SIMPPM UNINUS</a>
      </div>
      <div className="navbar-center hidden sm:hidden lg:block">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          <li className="text-[#FFCC00]">
            <a>Beranda</a>
          </li>
          <li>
            <a>Tentang</a>
          </li>
          <li>
            <details>
              <summary className="-mb-3">Proposal</summary>
              <ul className="bg-white">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Panduang SIMPPM</a>
          </li>
          <li>
            <a>Statistik</a>
          </li>
          <li>
            <a>pengusulan</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end menu menu-horizontal px-1">
        <div className="hidden lg:flex items-center">
          <input
            type="text"
            className="input bg-white text-black py-1 rounded-r-none h-9"
            placeholder="Cari"
          />
          <button className="bg-white h-9 w-9 hover:bg-slate-100 text-black rounded-r-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="  "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="block lg:hidden">
          <div className="drawer drawer-end">
            <input
              id="drawer-triger"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="drawer-triger"
                className="btn btn-square btn-ghost drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <div className="flex"></div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="drawer-triger"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-white text-black min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li className="text-[#FFCC00]">
                  <a>Beranda</a>
                </li>
                <li>
                  <a>Tentang</a>
                </li>
                <li>
                  <details>
                    <summary className="">Proposal</summary>
                    <ul className="bg-white">
                      <li>
                        <a>Link 1</a>
                      </li>
                      <li>
                        <a>Link 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Panduang SIMPPM</a>
                </li>
                <li>
                  <a>Statistik</a>
                </li>
                <li>
                  <a>pengusulan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
