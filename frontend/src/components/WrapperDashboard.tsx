import Head from "next/head";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import HeadDashboard from "./HeadDashboard";

export default function WrapperDashboard({
  children,
  title,
  menu,
}: {
  children: React.ReactNode;
  title: string;
  menu: string;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Ukuran 768px sesuai dengan breakpoint mobile
    };

    // Jalankan pertama kali untuk mengecek ukuran awal
    handleResize();

    // Dengarkan setiap kali ukuran berubah
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <Head>
        <title>Dasboard - {title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <div className="flex w-full bg-primary text-black">
        {/* Side Bar Start */}
        {!isMobile && <Sidebar menu={menu} />}
        {/* Side Bar End */}

        {/* Content Start */}

        <div className="w-full">
          {/* Header Dashboard Start */}
          <HeadDashboard title={title} />
          {/* Header Dashboard End */}

          {children}

          <footer className="w-full text-center bg-white mt-5 py-2">
            <p>Copyright 2024 © LPPM Universitas Islam Nusantara </p>
          </footer>
        </div>
        {/* Content End */}
      </div>
    </div>
  );
}
