import React from "react";

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

export default PenelitianHistory;
