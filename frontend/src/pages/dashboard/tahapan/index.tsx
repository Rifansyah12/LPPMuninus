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
        <title>Dashboard - Tahapan</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>

      <div className="flex flex-grow">
        {/* Sidebar */}
        {!isMobile && <Sidebar menu="tahapan" />}

        {/* Content */}
        <div className="w-full flex flex-col">
          {/* Header Dashboard */}
          <HeadDashboard title="Tahapan" />

          {/* Konten Utama */}
          <div className="flex flex-grow justify-center items-center">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full min-h-[400px] border-t-4 border-primary">
              <h2 className="text-xl font-bold text-primary mb-5">
                Status Pengabdian
              </h2>
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Skema</th>
                    <th className="px-4 py-2">Judul</th>
                    <th className="px-4 py-2">Tahun</th>
                    <th className="px-4 py-2">Peran</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Contoh data */}
                  <tr className="border-b">
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Skema 1</td>
                    <td className="px-4 py-2">Pengabdian Desa</td>
                    <td className="px-4 py-2">2024</td>
                    <td className="px-4 py-2">Ketua</td>
                    <td className="px-4 py-2 text-warning">Di Proses</td>
                    <td className="px-4 py-2">
                      <button className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition">
                        Lihat Detail
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">Skema 2</td>
                    <td className="px-4 py-2">Pemberdayaan Anak</td>
                    <td className="px-4 py-2">2023</td>
                    <td className="px-4 py-2">Anggota</td>
                    <td className="px-4 py-2 text-success">Diterima</td>
                    <td className="px-4 py-2">
                      <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition">
                        Unduh Surat
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">3</td>
                    <td className="px-4 py-2">Skema 3</td>
                    <td className="px-4 py-2">Pelatihan UMKM</td>
                    <td className="px-4 py-2">2022</td>
                    <td className="px-4 py-2">Ketua</td>
                    <td className="px-4 py-2 text-red-500">Tidak Diterima</td>
                    <td className="px-4 py-2">
                      <button className="bg-warning text-white px-3 py-1 rounded-md hover:bg-warning-600 transition">
                        Lihat Alasan
                      </button>
                    </td>
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
