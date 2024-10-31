<?php

namespace App\Http\Controllers;

use App\Models\DataRiwayatPenelitian;
use Illuminate\Http\Request;

class DataRiwayatPenelitianController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $penelitian = DataRiwayatPenelitian::with('dosen')->get();
        return response()->json($penelitian);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nidn' => 'required|exists:db_dosen,NIDN',
            'tempat_penelitian' => 'required|string|max:100',
            'metode_penelitian' => 'required|string|max:100',
            'objek_penelitian' => 'required|string|max:100',
            'judul_penelitian' => 'required|string|max:255',
        ]);

        $penelitian = DataRiwayatPenelitian::create($request->all());

        return response()->json([
            'message' => 'Data riwayat penelitian berhasil ditambahkan',
            'data' => $penelitian
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $penelitian = DataRiwayatPenelitian::with('dosen')->findOrFail($id);

        return response()->json($penelitian);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'nidn' => 'required|exists:db_dosen,NIDN',
            'tempat_penelitian' => 'required|string|max:100',
            'metode_penelitian' => 'required|string|max:100',
            'objek_penelitian' => 'required|string|max:100',
            'judul_penelitian' => 'required|string|max:255',
        ]);

        $penelitian = DataRiwayatPenelitian::findOrFail($id);
        $penelitian->update($request->all());

        return response()->json([
            'message' => 'Data riwayat penelitian berhasil diperbarui',
            'data' => $penelitian
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $penelitian = DataRiwayatPenelitian::findOrFail($id);
        $penelitian->delete();

        return response()->json([
            'message' => 'Data riwayat penelitian berhasil dihapus'
        ]);
    }
}
