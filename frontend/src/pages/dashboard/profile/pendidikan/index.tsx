import React from "react";
import InputForm from "../../../../components/InputForm";

const EducationHistory = () => {
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
        className="w-full bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex flex-col gap-4">
          {/* Input untuk Pendidikan S1 */}
          <InputForm
            label="Pendidikan S1"
            type="text"
            name="educationS1"
            placeholder="Masukkan nama institusi S1"
          />
          {/* Input untuk Pendidikan S2 */}
          <InputForm
            label="Pendidikan S2"
            type="text"
            name="educationS2"
            placeholder="Masukkan nama institusi S2"
          />
          {/* Input untuk Pendidikan S3 */}
          <InputForm
            label="Pendidikan S3"
            type="text"
            name="educationS3"
            placeholder="Masukkan nama institusi S3"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default EducationHistory;
