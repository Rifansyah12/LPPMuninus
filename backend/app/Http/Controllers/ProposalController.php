<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use Illuminate\Http\Request;

class ProposalController extends Controller
{
    // Create
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'jenis_penelitian' => 'required|string',
            'nama_lengkap' => 'required|string',
            'id_sinta' => 'required|string',
            'nidn' => 'required|string',
            'no_handphone' => 'required|string',
            'judul' => 'required|string',
            'rumpun_ilmu' => 'required|string',
            'tahun_usulan' => 'required|integer',
            'skema' => 'required|string',
            'tema' => 'required|string',
            'lama_kegiatan' => 'required|string', // Mengubah ke integer jika lama_kegiatan adalah angka
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date',
            'anggota_dosen' => 'required|array', // Pastikan ini adalah array
            'nidn_anggota_dosen' => 'required|array', // Pastikan ini adalah array
            'anggota_mahasiswa' => 'required|array', // Pastikan ini adalah array
            'nim_anggota_mahasiswa' => 'required|array', // Pastikan ini adalah array
        ]);

        Proposal::create($validatedData);
        return response()->json(['message' => 'Proposal created successfully!']);
    }

    // Read
    public function index()
    {
        return Proposal::all();
    }

    // Update
    public function update(Request $request, $id)
    {
        $proposal = Proposal::findOrFail($id);
        $validatedData = $request->validate([
            'jenis_penelitian' => 'required|string',
            'nama_lengkap' => 'required|string',
            'id_sinta' => 'required|string',
            'nidn' => 'required|string',
            'no_handphone' => 'required|string',
            'judul' => 'required|string',
            'rumpun_ilmu' => 'required|string',
            'tahun_usulan' => 'required|integer',
            'skema' => 'required|string',
            'tema' => 'required|string',
            'lama_kegiatan' => 'required|integer', // Pastikan tipe data sesuai
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date',
            'anggota_dosen' => 'required|json',
            'nidn_anggota_dosen' => 'required|json',
            'anggota_mahasiswa' => 'required|json',
            'nim_anggota_mahasiswa' => 'required|json',
        ]);

        $proposal->update($validatedData);
        return response()->json(['message' => 'Proposal updated successfully!']);
    }

    // Delete
    public function destroy($id)
    {
        $proposal = Proposal::findOrFail($id);
        $proposal->delete();
        return response()->json(['message' => 'Proposal deleted successfully!']);
    }
}
