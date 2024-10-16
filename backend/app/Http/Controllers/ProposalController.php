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
            'lama_kegiatan' => 'required|string',
            'tanggal_mulai' => 'required|date',
            'tanggal_selesai' => 'required|date',
            'anggota' => 'required|json',
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
            // Tambahkan validasi lainnya sesuai kebutuhan
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

