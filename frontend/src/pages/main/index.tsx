import { CardHome } from "@/components/CardHome";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useEffect } from "react";
export default function Main() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token.length === 0) {
      window.location.href = "/login";
    }
  })
  return (
    <div className="">
      <Head>
        <title>Beranda</title>
      </Head>
      <Navbar />
      <div className="bg-[#F4F6F9] w-full min-h-screen px-16 py-7">
        <div className="text-end">
          <a href="https://lppm.uninus.ac.id">
            <h2 className="text-blue-300">FAQS</h2>
          </a>
          <h2 className="text-black font-bold text-2xl py-2">BERANDA</h2>
        </div>

        <div className="bg-white w-full px-7 py-7 my-2">
          <div className="flex items-center gap-1">
            <h1 className="text-3xl font-bold text-[#3C3C3C]">SIMPPM</h1>
            <div className="block h-[7px] bg-[#FFCC00] w-[176px]"></div>
          </div>
          <p className="text-[#3C3C3C] font-semibold text-lg">
            Sistem Informasi Manajemen, Penelitian dan Pengabdian Kepada
            Masyarakat Universitas Islam Nusantara
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-4 my-[4rem]">
          <CardHome backgroundColor="#1C532A" />
          <CardHome backgroundColor="#FFCC00" img="/humans.png" />
          <CardHome backgroundColor="#015bab" blue={true} img="/box.png" />
        </div>

        <footer>
          <span className="h-[2px] block w-full bg-[#D9D9D9] mt-[9rem] mb-4"></span>
          <p className="text-md text-[#3C3C3C]">
            COPYRIGHT 2024 - LPPM UNIVERSITAS ISLAM NUSANTARA
          </p>
        </footer>
      </div>
    </div>
  );
}
