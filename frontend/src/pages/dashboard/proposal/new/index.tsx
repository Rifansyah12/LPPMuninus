import { useState } from "react";
import WrapperDashboard from "@/components/WrapperDashboard";

export default function NewProposal() {
  const [step, setStep] = useState(1); // State untuk melacak bagian aktif

  // Fungsi untuk berpindah ke langkah berikutnya
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Fungsi untuk berpindah ke langkah sebelumnya
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <WrapperDashboard title="Usulan Baru" menu="usulan-new">
      <div className="w-full p-7 text-primary mt-7">
        {/* Indikator Langkah */}
        <div className="flex justify-evenly items-center mb-5 relative">
          {/* Langkah 1: Identitas Usulan */}
          <div className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step >= 1 ? "bg-green-600 text-white" : "bg-gray-300"
              }`} // Ubah menjadi hijau jika step >= 1
            >
              1
            </div>
            <p className="text-sm mt-1 text-center">Identitas Usulan</p>
          </div>
          {/* Garis antara langkah 1 dan 2 */}
          <div
            className={`absolute top-1/2 left-1/2 h-1 transform -translate-x-1/2 ${
              step >= 2 ? "bg-yellow-500" : "bg-gray-300"
            }`} // Garis tetap kuning jika step >= 2
            style={{
              width: "calc(35% - 40px)",
              left: "calc(40% - 20px)",
              top: "calc(45% - 5px)",
              marginTop: "-3px",
            }}
          ></div>

          {/* Langkah 2: Substansi Usulan */}
          <div className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step >= 2 ? "bg-green-600 text-white" : "bg-gray-300"
              }`} // Ubah menjadi hijau jika step >= 2
            >
              2
            </div>
            <p className="text-sm mt-2">Substansi Usulan</p>
          </div>

          {/* Garis antara langkah 2 dan 3 */}
          <div
            className={`absolute top-1/2 left-1/2 h-1 transform -translate-x-1/2 ${
              step >= 3 ? "bg-yellow-500" : "bg-gray-300"
            }`} // Garis tetap kuning jika step >= 3
            style={{
              width: "calc(32% - 70px)", // Menyesuaikan lebar garis untuk menghubungkan indikator 2 dan 3
              left: "calc(70% - 35px)", // Menyesuaikan posisi garis untuk indikator 2 dan 3
              top: "calc(45% - 5px)", // Menjaga posisi garis agar sejajar dengan garis sebelumnya
              marginTop: "-3px", // Menjaga agar garis tetap lurus
            }}
          ></div>

          {/* Langkah 3: RAB */}
          <div className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step >= 3 ? "bg-green-600 text-white" : "bg-gray-300"
              }`} // Ubah menjadi hijau jika step >= 3
            >
              3
            </div>
            <p className="text-sm mt-2">RAB</p>
          </div>
        </div>
      </div>

      {/* Step1 */}
      {step === 1 && (
        <div className="w-full p-7 text-center text-primary mt-7 bg-white">
          <h2 className="text-2xl font-bold mb-5 text-left">Bagian 1</h2>
          <h2 className="text-2xl font-bold mb-5">Identitas Pengusulan</h2>
          <form action="" className="">
            <div className="flex items-center gap-4">
              <label htmlFor="label">Jenis Penelitian</label>
              <select className="select w-full max-w-xs select-sm bg-white text-primary">
                <option disabled selected>
                  pilih
                </option>
                <option>Pengabdian</option>
                <option>Penelitian</option>
              </select>
            </div>
            <p className="text-left my-[2rem] text-lg font-bold">
              Identitas Pengusul
            </p>
            <div className="flex flex-col lg:flex-row gap-7 items-center">
              <div className="lg:w-[50%] w-full flex flex-col gap-4">
                <InputForm label="Nama Lengkap" type="text" name="fullname" />
                <InputForm label="Id Sinta" type="text" name="id_sinta" />
              </div>
              <div className="lg:w-[50%] w-full flex flex-col gap-4 ">
                <InputForm label="NIDN" type="text" name="nidn" />
                <InputForm label="No. Handphone" type="text" name="phone" />
              </div>
            </div>

            <p className="text-left my-[2rem] text-lg font-bold">
              Identitas Usulan
            </p>

            <div className="flex flex-col lg:flex-row gap-7">
              <div className="lg:w-[50%] w-full flex flex-col gap-4">
                <InputForm label="Judul" type="text" name="title" />
                <InputForm label="Rumpun Ilmu" type="text" name="rumpun_ilmu" />
                <InputForm label="Tahun Usulan" type="number" name="year" />
                <InputForm label="Skema" type="text" name="scema" />
                <InputForm label="Tema" type="text" name="theme" />
                <div className="flex justify-between items-center gap-4">
                  <InputForm
                    label="Lama Kegiatan"
                    type="date"
                    name="duration_from"
                  />
                  <p>To</p>
                  <input
                    type="date"
                    className="input max-w-xs input-sm bg-[#D9D9D9] text-primary"
                    name="duration_to"
                  />
                </div>
              </div>
              <div className="lg:w-[50%] w-full flex flex-col gap-4 ">
                <InputForm label="Nama Anggota 1" type="text" name="member_1" />
                <InputForm label="ID Sinta" type="text" name="id_sinta_1" />
                <InputForm label="NIDN" type="text" name="nidn_1" />
                <InputForm label="Nama Anggota 2" type="text" name="member_2" />
                <InputForm label="ID Sinta" type="text" name="id_sinta_2" />
                <InputForm label="NIDN" type="text" name="nidn_2" />
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Step2 */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-5 text-left">Bagian 2</h2>
          <h2 className="text-2xl font-bold mb-5">Substansi Usulan</h2>
          <p>Form untuk bagian 2 akan ditambahkan di sini.</p>
        </div>
      )}

      {/* Step3 */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-5 text-left">Bagian 3</h2>
          <h2 className="text-2xl font-bold mb-5">Rencana Anggaran Belanja</h2>
          <p>Form untuk bagian 3 akan ditambahkan di sini.</p>
        </div>
      )}

      {/* Tombol Navigasi */}
      {/* Tombol Navigasi */}
      <div className="flex justify-end mt-4">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="btn bg-gray-400 text-white px-5 py-2"
          >
            Sebelumnya
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={nextStep}
            className="btn bg-green-600 text-white px-4 py-2 ml-4" // tambahkan margin kiri agar ada jarak antar tombol
          >
            Selanjutnya
          </button>
        ) : (
          <button className="btn bg-blue-600 text-white px-4 py-2 ml-4">
            Selesai
          </button>
        )}
      </div>
    </WrapperDashboard>
  );
}

const InputForm = ({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name: string;
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="input max-w-xs input-sm bg-[#D9D9D9] text-primary"
      />
    </div>
  );
};
