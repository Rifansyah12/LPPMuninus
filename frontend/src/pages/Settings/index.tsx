import HeadDashboard from "@/components/HeadDashboard";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Profile() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Identitas Diri");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Ukuran 768px sesuai dengan breakpoint mobile
    };

    handleResize(); // Jalankan pertama kali untuk mengecek ukuran awal
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-primary text-black">
      <Head>
        <title>Dashboard - Settings</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>

      <div className="flex flex-grow">
        {/* Sidebar */}
        {!isMobile && <Sidebar menu="profile" />}

        {/* Content */}
        <div className="w-full flex flex-col">
          {/* Header Dashboard */}
          <HeadDashboard title="Pengaturan" />

          {/* Konten Utama */}
          <div className="flex flex-grow justify-center items-center">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full min-h-[400px] flex flex-col justify-between border-t-4 border-primary">
              <div className="flex flex-col items-center text-primary mb-10">
                <div className="flex flex-col items-left text-primary mb-10">
                  <button
                    className="bg-warning text-white px-20 py-5 rounded-md hover:bg-primary transition w-full mb-5 flex items-center justify-center space-x-3"
                    onClick={() =>
                      console.log("Navigasi ke halaman Ubah Sandi")
                    }
                  >
                    <span className="material-symbols-outlined text-xl">
                      security
                    </span>
                    <span>Ubah Sandi</span>
                  </button>

                  <div className="w-full border-t border-gray-300 my-5"></div>

                  <button
                    className="bg-red-600 text-white px-6 py-5 rounded-md hover:bg-red-700 transition w-full flex items-center justify-center space-x-3"
                    onClick={() => console.log("Logout pengguna")}
                  >
                    <span className="material-symbols-outlined text-xl">
                      logout
                    </span>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center bg-white py-3 shadow-lg">
            <p>Copyright 2024 © LPPM Universitas Islam Nusantara</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
