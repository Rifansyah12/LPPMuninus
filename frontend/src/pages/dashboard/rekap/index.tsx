import HeadDashboard from "@/components/HeadDashboard";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Profile() {
  const [isMobile, setIsMobile] = useState(false);

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
        <title>Dashboard - Rekap</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>

      <div className="flex flex-grow">
        {/* Sidebar */}
        {!isMobile && <Sidebar menu="Statistik" />}

        {/* Content */}
        <div className="w-full flex flex-col">
          {/* Header Dashboard */}
          <HeadDashboard title="Statistik" />

          {/* Konten Utama */}
          <div className="flex flex-row items-start gap-5 p-5">
            {/* Kiri: Panel Button */}
            <div className="flex flex-col gap-5">
              {/* Penelitian Button */}
              <div className="flex items-center bg-white shadow-lg p-5 rounded-lg border border-gray-300">
                <div className="bg-[#1C532A] p-4 rounded-md">
                  <img
                    src="/icon/research.png"
                    alt="Science Icon"
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Penelitian
                  </h3>
                  <p className="text-sm text-gray-500">
                    4 Penelitian terlaksana
                  </p>
                </div>
                <div className="flex-grow flex items-center justify-end">
                  <img
                    src="/icon/icnstatis.png"
                    alt="Deskripsi Gambar"
                    className="h-10 w-8 object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Pengabdian Button */}
              <div className="flex items-center bg-white shadow-lg p-5 rounded-lg border border-gray-300">
                <div className="bg-[#FFCC00] p-4 rounded-md">
                  <img
                    src="/icon/Vector.png"
                    alt="Science Icon"
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Pengabdian
                  </h3>
                  <p className="text-sm text-gray-500">
                    1 Pengabdian terlaksana
                  </p>
                </div>
                <div className="flex-grow flex items-rigth justify-end">
                  <img
                    src="/icon/icnstatis.png"
                    alt="Deskripsi Gambar"
                    className="h-10 w-8 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Kanan: Tabel Data Proposal */}
            <div className="flex-grow bg-white shadow-lg p-5 rounded-lg border-t-4 border-[#1C532A] w-96">
              <h4 className="text-black-500 font-semibold mb-1 text-center">
                Data Proposal
              </h4>
              <div className="border-t-2 border-[#949494] w-full mb-4"></div>
              <table className="table-auto w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1C532A] to-[#1C532A] text-white">
                    <th className="px-2 py-1">Tahun</th>
                    <th className="px-2 py-1">Proposal Masuk</th>
                    <th className="px-2 py-1">Proposal Dibiayai</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Baris 2024 */}
                  <tr className="border-b">
                    <td className="px-2 py-1">2024</td>
                    <td className="px-2 py-1">1</td>
                    <td className="px-2 py-1 text-green-500">1</td>
                  </tr>
                  {/* Baris 2023 */}
                  <tr className="border-b">
                    <td className="px-2 py-1">2023</td>
                    <td className="px-2 py-1">1</td>
                    <td className="px-2 py-1 text-red-500">0</td>
                  </tr>
                  {/* Baris 2022 */}
                  <tr className="border-b">
                    <td className="px-2 py-1">2022</td>
                    <td className="px-2 py-1">1</td>
                    <td className="px-2 py-1 text-yellow-500">0</td>
                  </tr>
                  {/* Total */}
                  <tr className="border-b bg-gray-100">
                    <td className="px-2 py-1 font-semibold">Total</td>
                    <td className="px-2 py-1 font-semibold">3</td>
                    <td className="px-2 py-1 font-semibold">1</td>
                  </tr>
                </tbody>
              </table>
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
