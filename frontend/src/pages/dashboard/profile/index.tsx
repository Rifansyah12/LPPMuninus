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
        <title>Dasboard - profile</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <div className="flex w-full bg-primary text-black">
        {/* Side Bar Start */}
        {!isMobile && <Sidebar menu="profile" />}
        {/* Side Bar End */}

        {/* Content Start */}

        <div className="w-full">
          {/* Header Dashboard Start */}
          <HeadDashboard title="Profile" />
          {/* Header Dashboard End */}

          {/* Head Profile Dashboard Start */}
          <div className="w-full py-7 flex justify-center items-center flex-col bg-white shadow-md lg:mt-[3rem] mt-[2rem] text-primary">
            <span className="material-symbols-outlined text-[10rem]">
              account_circle
            </span>
            <h2 className="lg:text-2xl font-semibold text-center">
              Nama Disini
            </h2>
            <p className="lg:text-2xl font-semibold text-center">
              Lorem ipsum sit amet dolor consectetur adipiscing elit
            </p>
          </div>
          {/* Head Profile Dashboard End */}

          {/* Head Dashboard End */}
          <div className="flex flex-col">
            <div className="flex w-full justify-center lg:justify-between mt-5 lg:gap-2 gap-5 lg:px-5 px-2">
              <ProfileMenu
                active={activeMenu === "Identitas Diri"}
                title="Identitas Diri"
                icon="account_circle"
                onClick={() => setActiveMenu("Identitas Diri")} // Set menu aktif
              />
              <ProfileMenu
                active={activeMenu === "Riwayat Pendidikan"}
                title="Riwayat Pendidikan"
                icon="school"
                onClick={() => setActiveMenu("Riwayat Pendidikan")} // Set menu aktif
              />
              <ProfileMenu
                active={activeMenu === "Riwayat Penelitian"}
                title="Riwayat Penelitian"
                icon="history_edu"
                onClick={() => setActiveMenu("Riwayat Penelitian")} // Set menu aktif
              />
              <ProfileMenu
                active={activeMenu === "Riwayat Pengabdian"}
                title="Riwayat Pengabdian"
                icon="groups"
                onClick={() => setActiveMenu("Riwayat Pengabdian")} // Set menu aktif
              />
              <ProfileMenu
                active={activeMenu === "Data Baru"}
                title="Data Baru"
                icon="note_stack"
                onClick={() => setActiveMenu("Data Baru")} // Set menu aktif
              />
            </div>

            {/* Conditional rendering untuk form yang aktif */}
            {activeMenu === "Identitas Diri" && <FormProfile />}
            {activeMenu === "Riwayat Pendidikan" && <EducationHistory />}
            {activeMenu === "Riwayat Penelitian" && <PenelitianHistory />}
            {activeMenu === "Riwayat Pengabdian" && <PengabdianHistory />}
            {activeMenu === "Data Baru" && <DataBaru />}
            {/* Tambahkan komponen lain jika diperlukan */}
          </div>
          <div className="w-full text-center bg-white mt-5 py-2">
            <p>Copyright 2024 © LPPM Universitas Islam Nusantara </p>
          </div>
        </div>
        {/* Content End */}
      </div>
    </div>
  );
}

const ProfileMenu = ({
  active = false,
  title,
  icon,
  onClick,
}: {
  active?: boolean;
  title: string;
  icon: string;
  onClick: () => void; // Tambahkan onClick sebagai prop
}) => {
  return (
    <div
      onClick={onClick} // Panggil onClick ketika diklik
      className={` ${
        active ? "bg-white cursor-default" : "bg-[#D9D9D9] hover:bg-white"
      } flex items-center justify-center flex-col lg:w-[178px] w-[4rem]  lg:h-[84px] shadow-lg text-primary rounded-xl cursor-pointer py-1 px-2`}
    >
      <span className="material-symbols-outlined text-">{icon}</span>
      <p className="lg:text-lg text-xs text-center">{title}</p>
    </div>
  );
};

const InputForm = ({
  label,
  type,
  name,
  placeholder,
  className,
}: {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
}) => {
  return (
    <div className="flex lg:justify-between items-center lg:gap-[6rem]">
      <label htmlFor={name} className="label text-lg min-w-[6.5rem] inline">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input bg-[#D9D9D9] text-black min-w-[70%] ${className}`}
      />
    </div>
  );
};

const FormProfile = () => {
  return (
    <form
      action=""
      className="flex flex-col lg:flex-row w-full bg-white -mt-2 px-7 py-[5rem] gap-[7rem] items-center justify-center"
    >
      <div className="flex justify-center flex-col items-center gap-7">
        <span className="material-symbols-outlined text-[4rem]">
          account_circle
        </span>
        <button className="btn bg-[#1C532A] text-white">Upload Foto</button>
      </div>
      <div className="flex justify-center flex-col gap-3">
        <InputForm
          label="Nama Lengkap"
          type="text"
          name="fullname"
          placeholder="Nama Lengkap"
        />
        <InputForm
          label="Alamat"
          type="text"
          name="address"
          placeholder="Alamat"
        />
        <div className="flex lg:justify-between items-center lg:gap-[6rem]">
          <label htmlFor="sex" className="label text-lg min-w-[6.5rem] inline">
            Jenis Kelamin
          </label>
          <select
            id="sex"
            name="sex"
            className="select select-bordered bg-[#D9D9D9] text-black min-w-[70%]"
          >
            <option disabled selected>
              Jenis Kelamin
            </option>
            <option value={"laki-laki"}>Laki-laki</option>
            <option value={"perempuan"}>Perempuan</option>
          </select>
        </div>
        <InputForm
          label="Tempat Lahir"
          type="text"
          name="place_birth"
          placeholder="Tempat Lahir"
        />
        <InputForm
          label="Tanggal Lahir"
          type="date"
          name="date_birth"
          placeholder="Tanggal Lahir"
        />
        <button className="btn bg-[#1C532A] text-white lg:-ml-[5rem] mt-6">
          Simpan
        </button>
      </div>
    </form>
  );
};
// riwayat edu

const EducationHistory = ({}) => {
  return (
    <div className="flex w-full bg-white px-4 py-12 flex-col items-center">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Riwayat Pendidikan
      </h1>

      {/* Form */}
      <form
        action=""
        style={{ width: "800px" }}
        className="w-full bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <div className="flex flex-col gap-4">
          {/* Input untuk Pendidikan S1 */}
          <InputForm
            label="Pendidikan S1"
            type="text"
            name="educationS1"
            placeholder="Masukkan nama pendidikan S1"
            className="border-none bg-gray-100 focus:ring-2 focus:ring-blue-500 px-4 py-2 rounded-md"
          />

          {/* Input untuk Pendidikan S2 */}
          <InputForm
            label="Pendidikan S2"
            type="text"
            name="educationS2"
            placeholder="Masukkan nama pendidikan S2"
            className="border-none bg-gray-100 focus:ring-2 focus:ring-blue-500 px-4 py-2 rounded-md"
          />

          {/* Input untuk Asal Pendidikan S1 */}
          <InputForm
            label="Asal Pendidikan S1"
            type="text"
            name="originEducationS1"
            placeholder="Masukkan asal pendidikan S1"
            className="border-none bg-gray-100 focus:ring-2 focus:ring-blue-500 px-4 py-2 rounded-md"
          />

          {/* Input untuk Asal Pendidikan S2 */}
          <InputForm
            label="Asal Pendidikan S2"
            type="text"
            name="originEducationS2"
            placeholder="Masukkan asal pendidikan S2"
            className="border-none bg-gray-100 focus:ring-2 focus:ring-blue-500 px-4 py-2 rounded-md"
          />

          {/* Tombol Simpan dan Edit */}
          <div className="flex gap-4 mt-4">
            <button className="btn bg-[#1C532A] text-white py-2 px-6 rounded-md">
              Simpan
            </button>
            <button className="btn bg-gray-300 text-gray-800 py-2 px-6 rounded-md">
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// form penelitian
const PenelitianHistory = () => {
  return (
    <div className="flex w-full bg-white px-2 py-[5rem] gap-[7rem] flex-col items-center justify-center">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">
              Tempat Penelitian
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Metode Penelitian
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Objek Penelitian
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Judul Penelitian
            </th>
            <th className="border border-gray-300 px-4 py-2">Peran</th>
          </tr>
        </thead>
        <tbody>
          {/* Contoh data */}
          <tr>
            <td className="border border-gray-300 px-4 py-2">Universitas A</td>
            <td className="border border-gray-300 px-4 py-2">Kualitatif</td>
            <td className="border border-gray-300 px-4 py-2">Mahasiswa</td>
            <td className="border border-gray-300 px-4 py-2">
              Pengaruh Teknologi
            </td>
            <td className="border border-gray-300 px-4 py-2">Peneliti Utama</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Universitas B</td>
            <td className="border border-gray-300 px-4 py-2">Kuantitatif</td>
            <td className="border border-gray-300 px-4 py-2">Guru</td>
            <td className="border border-gray-300 px-4 py-2">
              Studi Kasus Pendidikan
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Asisten Peneliti
            </td>
          </tr>
          {/* Tambahkan baris lain sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

//form pengabdian
const PengabdianHistory = () => {
  return (
    <div className="flex w-full bg-white px-2 py-[5rem] gap-[7rem] flex-col items-center justify-center">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">
              Tempat Pengabdian
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Metode Pengabdian
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Objek Pengabdian
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Judul Pengabdian
            </th>
            <th className="border border-gray-300 px-4 py-2">Peran</th>
          </tr>
        </thead>
        <tbody>
          {/* Contoh data */}
          <tr>
            <td className="border border-gray-300 px-4 py-2">Universitas A</td>
            <td className="border border-gray-300 px-4 py-2">Kualitatif</td>
            <td className="border border-gray-300 px-4 py-2">Mahasiswa</td>
            <td className="border border-gray-300 px-4 py-2">
              Pengaruh Teknologi
            </td>
            <td className="border border-gray-300 px-4 py-2">Peneliti Utama</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Universitas B</td>
            <td className="border border-gray-300 px-4 py-2">Kuantitatif</td>
            <td className="border border-gray-300 px-4 py-2">Guru</td>
            <td className="border border-gray-300 px-4 py-2">
              Studi Kasus Pendidikan
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Asisten Peneliti
            </td>
          </tr>
          {/* Tambahkan baris lain sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

//data baru

const DataBaru = () => {
  return (
    <div className="flex w-full bg-white px-2 py-[5rem] flex-col items-center justify-center">
      <button className="btn bg-[#1C532A] text-white">Tambah Data</button>
    </div>
  );
};
