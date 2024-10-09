import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import axios, { AxiosError } from "axios";

// Ini adalah module scope

export default function Login() {
  const [error, setError] = useState<string | null>(null); // State untuk menyimpan pesan kesalahan
  const [loading, setLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    NIDN: "",
    password: "",
  });

  type LoginPayload = {
    NIDN: string;
    password: string;
  };

  // Tipe untuk respons API
  type ApiResponse = {
    token: string;
    message?: string;
  };

  const login = async (payload: LoginPayload): Promise<ApiResponse> => {
    try {
      setLoading(true);
      const response = await axios.post<ApiResponse>(
        "http://localhost:8000/api/login",
        payload,
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      return response.data; // Ambil token dari response.data
    } catch (e) {
      const error = e as AxiosError<ApiResponse>;
      const errorMessage = error.response?.data?.message || "Login failed";
      setLoading(false);
      setError(errorMessage);
      throw new Error(errorMessage); // Lempar error agar bisa ditangani di handleSubmit
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    // Membuat salinan objek dan meng-update secara langsung menggunakan kunci yang valid
    setDataLogin((prevData) => ({
      ...prevData,
      [name]: value, // Mengandalkan TypeScript untuk mengetahui bahwa 'name' adalah salah satu kunci dataLogin
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const { token } = await login(dataLogin);
      console.log("Token:", token);
      if(token) {
        localStorage.setItem("token", token);
        window.location.href = "/main";
      }
      // Di sini Anda bisa menyimpan token atau mengalihkan pengguna ke halaman lain
    } catch (err) {
      console.error(err); // Error sudah ditangani di login function
    }
  };

  return (
    <div className="">
      <Head>
        <title>Login</title>
      </Head>
      <div
        className={`w-full min-h-screen flex bg-[url('/bg-login.png')] bg-cover bg-center sm:py-0 lg:py-5 md:items-center md:justify-center relative`}
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
          <form
            className="bg-[#E0E0E0E0] opacity-90 py-7 px-4 flex justify-center items-center flex-col gap-7"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="NIP / NIDN"
              name="NIDN"
              onChange={handleChange}
              className="input w-full max-w-xs bg-white text-black"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              className="input w-full max-w-xs bg-white text-black"
            />
            <div className="form-control md:self-start md:ml-14">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox bg-white" />
                <span className="label-text text-black px-3">Remember me</span>
              </label>
            </div>
            <button
              type="submit"
              className="btn bg-[#1C532A] w-[75%] hover:bg-[#247538] text-white"
            >
              Login
            </button>
            {error && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span className="">{error}</span>
            </div>
            )}
          </form>
        </div>
        {loading && (
          <div className="absolute z-10 bg-slate-200 w-full h-full opacity-80 flex justify-center items-center ">
            <span className="loading loading-dots w-[3rem] h-[3rem] text-[#1C532A]"></span>
          </div>
        )}
      </div>
    </div>
  );
}
