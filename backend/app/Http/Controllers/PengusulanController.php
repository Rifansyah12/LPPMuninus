<?php

namespace App\Http\Controllers;

use App\Models\Pengusulan;
use Illuminate\Http\Request;

class PengusulanController extends Controller
{
    public function index()
    {
        $pengusulan = Pengusulan::all();
        return response()->json($pengusulan);
    }

    public function store(Request $request)
    {
        $request->validate([
            'jenis_usulan' => 'required|string',
            'SKIM' => 'required|string',
            'nama_SKIM' => 'required|string',
            'identitas_pengusul' => 'required|string',
            'identitas_usulan' => 'required|string',
            'file_proposal' => 'required|file|mimes:pdf,doc,docx|max:2048', // Ubah nullable menjadi required
            'sumber_dana' => 'required|string',
            'rencana_anggaran' => 'required|numeric',
            'dokumen_pendukung' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);
    
        // Proses upload file proposal
        $pathProposal = $request->file('file_proposal')->store('public/proposal');
    
        // Proses upload dokumen pendukung (jika ada)
        $pathDokumen = $request->file('dokumen_pendukung') 
            ? $request->file('dokumen_pendukung')->store('public/dokumen_pendukung') 
            : null;
    
        $pengusulan = Pengusulan::create([
            'jenis_usulan' => $request->jenis_usulan,
            'SKIM' => $request->SKIM,
            'nama_SKIM' => $request->nama_SKIM,
            'identitas_pengusul' => $request->identitas_pengusul,
            'identitas_usulan' => $request->identitas_usulan,
            'file_proposal' => $pathProposal,
            'sumber_dana' => $request->sumber_dana,
            'rencana_anggaran' => $request->rencana_anggaran,
            'dokumen_pendukung' => $pathDokumen,
        ]);
    
        return response()->json([
            'message' => 'Pengusulan berhasil dibuat',
            'data' => $pengusulan,
        ], 201);
    }
    
    public function show($id)
    {
        $pengusulan = Pengusulan::find($id);

        if ($pengusulan) {
            $pengusulan->file_proposal_url = asset('storage/' . $pengusulan->file_proposal);
            $pengusulan->dokumen_pendukung_url = asset('storage/' . $pengusulan->dokumen_pendukung);

            return response()->json($pengusulan);
        }

        return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
    }

    public function update(Request $request, $id)
    {
        $pengusulan = Pengusulan::find($id);

        if (!$pengusulan) {
            return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
        }

        $request->validate([
            'jenis_usulan' => 'required|string',
            'SKIM' => 'required|string',
            'nama_SKIM' => 'required|string',
            'identitas_pengusul' => 'required|string',
            'identitas_usulan' => 'required|string',
            'file_proposal' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
            'sumber_dana' => 'required|string',
            'rencana_anggaran' => 'required|numeric',
            'dokumen_pendukung' => 'nullable|file|mimes:pdf,jpg,jpeg,png,docx,doc|max:2048',
        ]);

        if ($request->hasFile('file_proposal')) {
            $pathProposal = $request->file('file_proposal')->store('public/proposal');
            $pengusulan->file_proposal = $pathProposal;
        }

        if ($request->hasFile('dokumen_pendukung')) {
            $pathDokumen = $request->file('dokumen_pendukung')->store('public/dokumen_pendukung');
            $pengusulan->dokumen_pendukung = $pathDokumen;
        }

        $pengusulan->update($request->except(['file_proposal', 'dokumen_pendukung']));

        return response()->json([
            'message' => 'Pengusulan berhasil diperbarui',
            'data' => $pengusulan,
        ]);
    }

    public function destroy($id)
    {
        $pengusulan = Pengusulan::find($id);

        if ($pengusulan) {
            $pengusulan->delete();
            return response()->json(['message' => 'Pengusulan berhasil dihapus']);
        }

        return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
    }
}
