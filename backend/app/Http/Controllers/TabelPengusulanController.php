<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TabelPengusulan;

class TabelPengusulanController extends Controller
{
    /**
     * Menampilkan semua data pengusulan.
     */
    public function index()
    {
        $pengusulan = TabelPengusulan::all();
        return response()->json($pengusulan);
    }

    /**
     * Menyimpan data pengusulan baru.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'skema' => 'required|string|max:255',
            'judul' => 'required|string|max:255',
            'tahun_pelaksanaan' => 'required|digits:4|integer|min:2000|max:' . date('Y'),
            'peran' => 'required|string|max:255',
            'status' => 'required|in:Pending,Approved,Rejected',
            'aksi' => 'nullable|string',
        ]);

        $pengusulan = TabelPengusulan::create($validatedData);

        return response()->json([
            'message' => 'Pengusulan berhasil dibuat.',
            'data' => $pengusulan,
        ]);
    }

    /**
     * Menampilkan detail pengusulan berdasarkan ID.
     */
    public function show($id)
    {
        $pengusulan = TabelPengusulan::findOrFail($id);
        return response()->json($pengusulan);
    }

    /**
     * Memperbarui data pengusulan berdasarkan ID.
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'skema' => 'required|string|max:255',
            'judul' => 'required|string|max:255',
            'tahun_pelaksanaan' => 'required|digits:4|integer|min:2000|max:' . date('Y'),
            'peran' => 'required|string|max:255',
            'status' => 'required|in:Pending,Approved,Rejected',
            'aksi' => 'nullable|string',
        ]);

        $pengusulan = TabelPengusulan::findOrFail($id);
        $pengusulan->update($validatedData);

        return response()->json([
            'message' => 'Pengusulan berhasil diperbarui.',
            'data' => $pengusulan,
        ]);
    }

    /**
     * Menghapus data pengusulan berdasarkan ID.
     */
    public function destroy($id)
    {
        $pengusulan = TabelPengusulan::findOrFail($id);
        $pengusulan->delete();

        return response()->json([
            'message' => 'Pengusulan berhasil dihapus.',
        ]);
    }
}
