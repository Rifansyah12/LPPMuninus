<?php

namespace App\Http\Controllers;

use App\Models\DataRiwayatPenelitian;
use Illuminate\Http\Request;

class DataRiwayatPenelitianController extends Controller
{
    /**
     * Menampilkan semua data riwayat penelitian.
     */
    public function index()
    {
        // Mengambil semua data riwayat penelitian beserta informasi dosen terkait
        $penelitian = DataRiwayatPenelitian::with('dosen')->get();
        return response()->json($penelitian);
    }

    /**
     * Menyimpan data riwayat penelitian baru.
     */
    public function store(Request $request)
    {
        // Validasi input request
        $request->validate([
            'nidn' => 'required|exists:db_dosen,NIDN',
            'tempat_penelitian' => 'required|string|max:100',
            'metode_penelitian' => 'required|string|max:100',
            'objek_penelitian' => 'required|string|max:100',
            'judul_penelitian' => 'required|string|max:255',
        ]);

        // Menyimpan data riwayat penelitian
        $penelitian = DataRiwayatPenelitian::create($request->all());

        // Mengembalikan respons sukses
        return response()->json([
            'message' => 'Data riwayat penelitian berhasil ditambahkan',
            'data' => $penelitian
        ], 201);
    }
}
