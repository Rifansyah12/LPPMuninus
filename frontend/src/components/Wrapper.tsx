import Head from "next/head";
import Navbar from "./Navbar";

export default function Wrapper({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="bg-[#F4F6F9] w-full min-h-screen px-16 py-7">
        {children}
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