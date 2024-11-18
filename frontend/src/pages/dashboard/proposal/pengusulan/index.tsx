import React, { useState, useEffect } from "react";
import axios from "axios";
import WrapperDashboard from "@/components/WrapperDashboard";

export default function TabelPengusulan() {
  const [data, setData] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/pengusulan"
        ); // URL API Laravel Anda
        setData(response.data); // Set data yang diterima ke state 'data'
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // Handle checkbox selection
  const handleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Filtered data
  const filteredData = data.filter((row) =>
    row.judul.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginated data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle delete selected rows
  const handleDelete = async () => {
    try {
      // Delete selected rows from backend
      await axios.delete(
        `http://localhost/api/pengusulan/${selectedRows.join(",")}`
      );
      setData(data.filter((row) => !selectedRows.includes(row.id)));
      setSelectedRows([]);
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  // Pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <WrapperDashboard title="Pengusulan" menu="crud-pengusulan">
      <div className="w-full p-7 bg-white">
        <div className="flex justify-between items-center mb-2">
          <button className="btn bg-[#1C532A] text-white">Tambah Data</button>
          <button
            className="btn btn-sm bg-red-500 text-white"
            onClick={handleDelete}
            disabled={selectedRows.length === 0}
          >
            Hapus Data yang Dipilih
          </button>
          <input
            type="text"
            placeholder="Cari Judul"
            value={searchQuery}
            onChange={handleSearch}
            className="input input-sm bg-[#D9D9D9] text-primary max-w-xs"
          />
        </div>

        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedRows(
                      e.target.checked ? data.map((row) => row.id) : []
                    )
                  }
                  checked={
                    selectedRows.length > 0 &&
                    selectedRows.length === data.length
                  }
                />
              </th>
              <th className="border border-gray-300 px-4 py-2">Skema</th>
              <th className="border border-gray-300 px-4 py-2">Judul</th>
              <th className="border border-gray-300 px-4 py-2">Tahun</th>
              <th className="border border-gray-300 px-4 py-2">Peran</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelection(row.id)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.skema}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.judul}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.tahun_pelaksanaan}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.peran}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="btn btn-sm bg-blue-500 text-white mr-2">
                    Lihat
                  </button>
                  <button className="btn btn-sm bg-red-500 text-white">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <button
              className="btn btn-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <p className="mx-2">
              Halaman {currentPage} dari {totalPages}
            </p>
            <button
              className="btn btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </WrapperDashboard>
  );
}
