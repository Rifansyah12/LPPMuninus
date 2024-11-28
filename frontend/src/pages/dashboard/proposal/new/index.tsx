import { useState } from "react";
import WrapperDashboard from "@/components/WrapperDashboard";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NewProposal() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content: string) => {
    setEditorContent(content); // Perbarui konten editor di state
  };

  const [step, setStep] = useState(1); // State untuk melacak bagian aktif

  // // Fungsi untuk berpindah ke langkah berikutnya
  // const nextStep = () => {
  //   if (step < 3) {
  //     setStep(step + 1);
  //   }
  // };

  // Fungsi untuk berpindah ke langkah sebelumnya
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const validateStep1 = () => {
    const requiredFields = [
      "fullname",
      "id_sinta",
      "nidn",
      "phone",
      "title",
      "rumpun_ilmu",
      "year",
      "scema",
      "theme",
      "duration_from",
      "duration_to",
      "member_1",
      "nidn_1",
      "member_2",
      "nidn_2",
    ];
    for (const field of requiredFields) {
      const value = (
        document.querySelector(`[name="${field}"]`) as HTMLInputElement
      )?.value;

      if (!value || value.trim() === "") {
        alert(`Field ${field} wajib diisi!`);
        return false;
      }
    }
    return true;
  };

  const validateStep2 = () => {
    const requiredFields = [
      "keywords",
      "state_of_the_art",
      "roadmap",
      "methodology",
      "output_category",
      "status",
    ];
    const textEditorContent = editorContent; // Content dari ReactQuill
    if (!textEditorContent || textEditorContent.trim() === "") {
      alert("Latar Belakang dan Rumusan Masalah wajib diisi!");
      return false;
    }
    for (const field of requiredFields) {
      const value = (
        document.querySelector(`[name="${field}"]`) as HTMLInputElement
      )?.value;

      if (!value || value.trim() === "") {
        alert(`Field ${field} wajib diisi!`);
        return false;
      }
    }
    return true;
  };

  const validateStep3 = () => {
    const requiredFields = ["background", "component"];
    for (const field of requiredFields) {
      const value = (
        document.querySelector(`[name="${field}"]`) as HTMLInputElement
      )?.value;

      if (!value || value.trim() === "") {
        alert(`Field ${field} wajib diisi!`);
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3 && validateStep3()) {
      alert("Semua langkah selesai!");
    }
  };

  return (
    <WrapperDashboard title="Usulan Baru" menu="Pengusulan">
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
            }`}
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
              }`}
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
              width: "calc(32% - 70px)",
              left: "calc(70% - 35px)",
              top: "calc(45% - 5px)",
              marginTop: "-3px",
            }}
          ></div>

          {/* Langkah 3: RAB */}
          <div className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step >= 3 ? "bg-green-600 text-white" : "bg-gray-300"
              }`}
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
                <InputForm label="Nama Dosen" type="text" name="member_1" />
                <InputForm label="NIDN" type="text" name="nidn_1" />
                <InputForm label="Nama Mahasiswa" type="text" name="member_2" />
                <InputForm label="NIDN" type="text" name="nidn_2" />

                {/* Tombol Tambah Anggota */}
                <div className="mt-5 flex flex-row gap-4">
                  {/* Tombol Tambah Anggota Dosen */}
                  <button
                    type="button"
                    onClick={() =>
                      alert("Fitur tambah dosen diimplementasikan.")
                    }
                    className="relative flex items-center h-[30px] w-[233px] bg-transparent group"
                  >
                    {/* Rectangle Kiri */}
                    <div className="absolute left-0 h-[25px] w-[30px] bg-[#1C532A] flex justify-center items-center">
                      <span className="text-white font-bold text-[20px] leading-[30px]">
                        +
                      </span>
                    </div>
                    {/* Rectangle Tengah */}
                    <div className="absolute left-[30px] h-[25px] w-[201px] bg-[#1C532A] flex justify-center items-center">
                      <span className="text-[#F5F3F3] font-semibold text-[12px] leading-[18px]">
                        Tambah Anggota Dosen
                      </span>
                    </div>
                  </button>

                  {/* Tombol Tambah Anggota Mahasiswa */}
                  <button
                    type="button"
                    onClick={() =>
                      alert("Fitur tambah mahasiswa diimplementasikan.")
                    }
                    className="relative flex items-center h-[30px] w-[233px] bg-transparent group"
                  >
                    {/* Rectangle Kiri */}
                    <div className="absolute left-0 h-[25px] w-[30px] bg-[#1C532A] flex justify-center items-center">
                      <span className="text-white font-bold text-[20px] leading-[30px]">
                        +
                      </span>
                    </div>
                    {/* Rectangle Tengah */}
                    <div className="absolute left-[30px] h-[25px] w-[201px] bg-[#1C532A] flex justify-center items-center">
                      <span className="text-[#F5F3F3] font-semibold text-[12px] leading-[18px]">
                        Tambah Anggota Mahasiswa
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-between mt-5">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-[#1C532A] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Sebelumnya
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className="bg-[#1C532A] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition ml-auto"
              >
                Selanjutnya
              </button>
            ) : (
              <button
                onClick={() => alert("Semua langkah selesai!")}
                className="bg-[#1C532A] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition ml-auto"
              >
                Selesai
              </button>
            )}
          </div>
        </div>
      )}

      {/* Step2 */}
      {step === 2 && (
        <div className="w-full p-7 text-center text-primary mt-7 bg-white">
          <h2 className="text-2xl font-bold mb-5 text-left">Bagian 2</h2>
          <h2 className="text-2xl font-bold mb-5">Substansi Usulan</h2>
          <form action="" className="space-y-6">
            {/* WYSIWYG Editor untuk Latar Belakang */}
            <div className="flex items-start gap-6">
              <label htmlFor="background" className="w-1/4 text-left">
                Latar Belakang
              </label>
              <div className="w-3/4">
                <ReactQuill
                  value={editorContent}
                  onChange={handleEditorChange}
                  theme="snow"
                  className="bg-white text-primary"
                />
              </div>
            </div>

            {/* Input Kata Kunci */}
            <div className="flex items-center gap-6">
              <div className="w-3/4">
                <InputForm label="Kata Kunci" type="text" name="keywords" />
              </div>
            </div>

            {/* WYSIWYG Editor untuk Rumusan Masalah */}
            <div className="flex items-start gap-6">
              <label htmlFor="problem_statement" className="w-1/4 text-left">
                Rumusan Masalah
              </label>
              <div className="w-3/4">
                <ReactQuill
                  value={editorContent}
                  onChange={handleEditorChange}
                  theme="snow"
                  className="bg-white text-primary"
                />
              </div>
            </div>

            {/* Input State Of The Art */}
            <div className="flex items-start gap-6">
              <div className="w-3/4">
                <InputForm
                  label="State Of The Art"
                  type="textarea"
                  name="state_of_the_art"
                />
              </div>
            </div>

            {/* Input Peta Jalan */}
            <div className="flex items-start gap-6">
              <div className="w-3/4">
                <InputForm label="Peta jalan" type="textarea" name="roadmap" />
              </div>
            </div>

            {/* Input Metode */}
            <div className="flex items-start gap-6">
              <div className="w-3/4">
                <InputForm label="Metode" type="textarea" name="methodology" />
              </div>
            </div>

            {/* Dropdown Kategori */}
            <div className="flex items-center gap-6">
              <label htmlFor="output_category" className="w-1/4 text-left">
                Kategori Luaran
              </label>
              <div className="w-1/4">
                <select
                  className="select w-full max-w-xs select-sm bg-white text-primary"
                  name="output_category"
                >
                  <option disabled selected>
                    Pilih
                  </option>
                  <option>Buku</option>
                  <option>Jurnal</option>
                  <option>Produk</option>
                </select>
              </div>

              <label htmlFor="status" className="w-1/4 text-left">
                Status
              </label>
              <div className="w-1/4">
                <select
                  className="select w-full max-w-xs select-sm bg-white text-primary"
                  name="status"
                >
                  <option disabled selected>
                    Pilih
                  </option>
                  <option>Terelaksana</option>
                  <option>Tidak</option>
                </select>
              </div>
            </div>
          </form>
          <div className="flex justify-between mt-5">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-[#1C532A] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Sebelumnya
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className="bg-[#1C532A] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition ml-auto"
              >
                Selanjutnya
              </button>
            ) : (
              <button
                onClick={() => alert("Semua langkah selesai!")}
                className="bg-[#1C532A] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition ml-auto"
              >
                Selesai
              </button>
            )}
          </div>
        </div>
      )}

      {/* Step3 */}
      {step === 3 && (
        <div className="w-full p-7 text-center text-primary mt-7 bg-white">
          <h2 className="text-2xl font-bold mb-5 text-left">Bagian 3</h2>
          <h2 className="text-2xl font-bold mb-5">
            Rencana Anggaran Biaya (RAB)
          </h2>
          <form action="" className="space-y-6">
            {/* Latar Belakang dan Komponen */}
            <div className="flex items-center gap-6">
              <label htmlFor="background" className="w-1/4 text-left">
                Latar Belakang
              </label>
              <div className="w-1/4">
                <select
                  className="select w-full select-sm bg-white text-primary"
                  name="background"
                >
                  <option disabled selected>
                    Pilih
                  </option>
                  <option>Latar Belakang 1</option>
                  <option>Latar Belakang 2</option>
                </select>
              </div>

              <label htmlFor="component" className="w-1/4 text-left">
                Komponen
              </label>
              <div className="w-1/4">
                <select
                  className="select w-full select-sm bg-white text-primary"
                  name="component"
                >
                  <option disabled selected>
                    Pilih
                  </option>
                  <option>Komponen 1</option>
                  <option>Komponen 2</option>
                </select>
              </div>
            </div>

            {/* Satuan dan Volume */}
            <div className="flex items-center gap-6">
              <label htmlFor="unit" className="w-1/4 text-left">
                Satuan
              </label>
              <div className="w-1/4">
                <input
                  type="text"
                  name="unit"
                  className="input w-full input-sm bg-white text-primary border"
                  placeholder="Masukkan satuan"
                />
              </div>

              <label htmlFor="volume" className="w-1/4 text-left">
                Volume
              </label>
              <div className="w-1/4">
                <input
                  type="number"
                  name="volume"
                  className="input w-full input-sm bg-white text-primary border"
                  placeholder="Masukkan volume"
                />
              </div>
            </div>

            {/* Item dan Harga Satuan */}
            <div className="flex items-center gap-6">
              <label htmlFor="item" className="w-1/4 text-left">
                Item
              </label>
              <div className="w-3/4">
                <input
                  type="text"
                  name="item"
                  className="input w-full bg-white text-primary border"
                  placeholder="Masukkan item"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <label htmlFor="unit_price" className="w-1/4 text-left">
                Harga Satuan
              </label>
              <div className="w-1/4">
                <input
                  type="number"
                  name="unit_price"
                  className="input w-full input-sm bg-white text-primary border"
                  placeholder="Rp."
                />
              </div>
            </div>

            {/* Total Anggaran Biaya */}
            <div className="flex items-center gap-6">
              <label
                htmlFor="total_budget"
                className="w-1/4 text-left font-bold text-lg"
              >
                Total Anggaran Biaya
              </label>
              <div className="w-1/4">
                <input
                  type="text"
                  name="total_budget"
                  className="input w-full input-sm bg-gray-200 text-primary border font-bold"
                  placeholder="Rp."
                  readOnly
                />
              </div>
            </div>
          </form>
          <div className="flex justify-between mt-5">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-[#1C532A] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Sebelumnya
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className="bg-[#1C532A] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition ml-auto"
              >
                Selanjutnya
              </button>
            ) : (
              <button
                onClick={() => alert("Semua langkah selesai!")}
                className="bg-[#1C532A] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition ml-auto"
              >
                Selesai
              </button>
            )}
          </div>
        </div>
      )}
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
