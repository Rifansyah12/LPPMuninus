import Image from "next/image";
import { Poppins } from "next/font/google";
import Head from "next/head";

// Ini adalah module scope
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Login() {
  return (
    <div className="">
      <Head>
        <title>Login</title>
      </Head>
      <div
        className={`${poppins.className} w-full min-h-screen flex bg-[url('/bg-login.png')] bg-cover bg-center sm:py-0 lg:py-5 md:items-center md:justify-center `}
      >
        <div className="bg-[rgba(224,224,224,0.5)] p-5 w-full my-auto md:w-[480px] md:my-0">
          <div className="bg-[#1C532A] py-7">
            <Image
              src={"/logo-LPPM.png"}
              alt={"LPPM"}
              width={477}
              height={136}
              className="mx-auto"
            />
            <h1 className="text-center text-sm font-semibold text-white">
              SELAMAT DATANG DI <br /> SIMPPM{" "}
            </h1>
            <h2 className="text-center text-sm font-normal text-white">
              Sistem Informasi Manajemen Penelitian dan Pengabdian Kepada
              Masyarakat
            </h2>
            <h2 className="text-center text-sm font-semibold text-white">
              UNIVERSITAS ISLAM NUSANTARA
            </h2>
          </div>
          <div className="bg-[#E0E0E0E0] opacity-90 py-7 flex justify-center items-center flex-col gap-7">
            <input
              type="text"
              placeholder="NIP / NIDN"
              className="input w-full max-w-xs bg-white text-black"
            />
            <input
              type="text"
              placeholder="Password"
              className="input w-full max-w-xs bg-white text-black"
            />
            <div className="form-control md:self-start md:ml-14">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox bg-white" />
                <span className="label-text text-black px-3">Remember me</span>
              </label>
            </div>
            <button className="btn bg-[#1C532A] w-[75%] hover:bg-[#247538] text-white">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
