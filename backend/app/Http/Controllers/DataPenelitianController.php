<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DataPenelitian;
use Illuminate\Http\Request;

class DataPenelitianController extends Controller
{
    // Mendapatkan semua data penelitian
    public function index()
    {
        $data = DataPenelitian::all();
        return response()->json(['success' => true, 'data' => $data], 200);
    }

    // Menyimpan data penelitian baru
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'jenis_penelitian' => 'required|string',
            'nama_lengkap' => 'required|string',
            'nidn' => 'required|string',
            'telepon' => 'required|string',
            'judul_penelitian' => 'required|string',
            'rumpun_ilmu' => 'required|string',
            'tahun' => 'required|integer',
            'skema' => 'required|string',
            'tema' => 'required|string',
            'durasi_awal' => 'required|date',
            'durasi_akhir' => 'required|date',
            'kategori_luaran' => 'required|string',
            'status' => 'required|string',
        ]);

        $data = DataPenelitian::create($validatedData + $request->only([
            'id_sinta',
            'anggota_1_dosen',
            'nidn_anggota_1_dosen',
            'anggota_2_mahasiswa',
            'nim_anggota_2_mahasiswa',
            'latar_belakang',
            'kata_kunci',
            'rumusan_masalah',
            'state_of_the_art',
            'roadmap',
            'metodologi',
        ]));

        return response()->json(['success' => true, 'data' => $data], 201);
    }

    // Mendapatkan data penelitian berdasarkan ID
    public function show($id)
    {
        $data = DataPenelitian::find($id);

        if (!$data) {
            return response()->json(['success' => false, 'message' => 'Data tidak ditemukan'], 404);
        }

        return response()->json(['success' => true, 'data' => $data], 200);
    }

    // Memperbarui data penelitian
    public function update(Request $request, $id)
    {
        $data = DataPenelitian::find($id);

        if (!$data) {
            return response()->json(['success' => false, 'message' => 'Data tidak ditemukan'], 404);
        }

        $validatedData = $request->validate([
            'jenis_penelitian' => 'required|string',
            'nama_lengkap' => 'required|string',
            'nidn' => 'required|string',
            'telepon' => 'required|string',
            'judul_penelitian' => 'required|string',
            'rumpun_ilmu' => 'required|string',
            'tahun' => 'required|integer',
            'skema' => 'required|string',
            'tema' => 'required|string',
            'durasi_awal' => 'required|date',
            'durasi_akhir' => 'required|date',
            'kategori_luaran' => 'required|string',
            'status' => 'required|string',
        ]);

        $data->update($validatedData + $request->only([
           'id_sinta',
            'anggota_1_dosen',
            'nidn_anggota_1_dosen',
            'anggota_2_mahasiswa',
            'nim_anggota_2_mahasiswa',
            'latar_belakang',
            'kata_kunci',
            'rumusan_masalah',
            'state_of_the_art',
            'roadmap',
            'metodologi',
        ]));

        return response()->json(['success' => true, 'data' => $data], 200);
    }

    // Menghapus data penelitian
    public function destroy($id)
    {
        $data = DataPenelitian::find($id);

        if (!$data) {
            return response()->json(['success' => false, 'message' => 'Data tidak ditemukan'], 404);
        }

        $data->delete();

        return response()->json(['success' => true, 'message' => 'Data berhasil dihapus'], 200);
    }
}
