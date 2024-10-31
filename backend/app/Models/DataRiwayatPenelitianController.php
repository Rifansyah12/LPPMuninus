<?php

namespace App\Http\Controllers;

use App\Models\DataRiwayatPenelitian;
use App\Models\Dosen;
use Illuminate\Http\Request;

class DataRiwayatPenelitianController extends Controller
{
    /**
     * Display a listing of the research records.
     */
    public function index()
    {
        $penelitian = DataRiwayatPenelitian::with('dosen')->get();
        return view('data_riwayat_penelitian.index', compact('penelitian'));
    }

    /**
     * Show the form for creating a new research record.
     */
    public function create()
    {
        $dosen = Dosen::all(); // Mengambil data dosen untuk pilihan NIDN
        return view('data_riwayat_penelitian.create', compact('dosen'));
    }

    /**
     * Store a newly created research record in storage.
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

        DataRiwayatPenelitian::create($request->all());

        return redirect()->route('data_riwayat_penelitian.index')
                         ->with('success', 'Data riwayat penelitian berhasil ditambahkan.');
    }

    /**
     * Display the specified research record.
     */
    public function show($id)
    {
        $penelitian = DataRiwayatPenelitian::with('dosen')->findOrFail($id);
        return view('data_riwayat_penelitian.show', compact('penelitian'));
    }

    /**
     * Show the form for editing the specified research record.
     */
    public function edit($id)
    {
        $penelitian = DataRiwayatPenelitian::findOrFail($id);
        $dosen = Dosen::all(); // Mengambil data dosen untuk pilihan NIDN
        return view('data_riwayat_penelitian.edit', compact('penelitian', 'dosen'));
    }

    /**
     * Update the specified research record in storage.
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

        return redirect()->route('data_riwayat_penelitian.index')
                         ->with('success', 'Data riwayat penelitian berhasil diperbarui.');
    }

    /**
     * Remove the specified research record from storage.
     */
    public function destroy($id)
    {
        $penelitian = DataRiwayatPenelitian::findOrFail($id);
        $penelitian->delete();

        return redirect()->route('data_riwayat_penelitian.index')
                         ->with('success', 'Data riwayat penelitian berhasil dihapus.');
    }
}
