// Import necessary dependencies
import Image from "next/image";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios"; // Impor AxiosError

// Initialize Poppins font with required properties
const poppins = Poppins({
  weight: ["100", "400", "700"], // Add your desired weights
  subsets: ["latin"],
});

const Login = () => {
  const [NIDN, setNIDN] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]); // Dependency array

  // Specify the type for event parameter
  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        {
          NIDN,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setMessage("Login Successfully");
      setTimeout(() => {
        router.push("/main");
      }, 2000);
      console.log(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setMessage(axiosError.response?.data?.error || "Login failed");
    }
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div
        className={`w-full min-h-screen flex bg-[url('/all-uninus.jpg')] bg-cover bg-center sm:py-0 lg:py-5 md:items-center md:justify-center `}
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
              value={NIDN}
              onChange={(e) => setNIDN(e.target.value)} // Capture NIDN input
            />
            <input
              type="password"
              placeholder="Password"
              className="input w-full max-w-xs bg-white text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Capture Password input
            />
            <div className="form-control md:self-start md:ml-14">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox bg-white" />
                <span className="label-text text-black px-3">Remember me</span>
              </label>
            </div>
            <button
              className="btn bg-[#1C532A] w-[75%] hover:bg-[#247538] text-white"
              onClick={handleLogin} // Call handleLogin on button click
            >
              Login
            </button>
          </div>
          {message && <p className="text-red-500 text-center">{message}</p>}{" "}
          {/* Display error message */}
        </div>
      </div>
    </div>
  );
};

export default Login;
