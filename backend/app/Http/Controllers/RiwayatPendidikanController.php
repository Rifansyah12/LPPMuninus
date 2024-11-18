<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RiwayatPendidikan;
use Illuminate\Support\Facades\Auth;

class RiwayatPendidikanController extends Controller
{
    /**
     * API untuk menyimpan data riwayat pendidikan.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */

     public function store(Request $request)
     {
         // Validasi input
         $request->validate([
             'pendidikan_s1' => 'required|string|max:100',
             'pendidikan_s2' => 'nullable|string|max:100',
             'asal_pendidikan_s1' => 'required|string|max:100',
             'asal_pendidikan_s2' => 'nullable|string|max:100',
             'upload_ijazah' => 'nullable|file|mimes:pdf,jpg,png|max:2048', // Ukuran max 2MB
         ]);

          // Mendapatkan NIDN dari dosen yang sedang login
        $nidn = Auth::user()->NIDN;

        // Menyimpan data riwayat pendidikan
        $riwayatPendidikan = new RiwayatPendidikan([
            'NIDN' => $nidn,
            'pendidikan_s1' => $request->input('pendidikan_s1'),
            'pendidikan_s2' => $request->input('pendidikan_s2'),
            'asal_pendidikan_s1' => $request->input('asal_pendidikan_s1'),
            'asal_pendidikan_s2' => $request->input('asal_pendidikan_s2'),
        ]);

        // Proses upload ijazah jika ada
        if ($request->hasFile('upload_ijazah')) {
            $path = $request->file('upload_ijazah')->store('ijazah');
            $riwayatPendidikan->upload_ijazah = $path;
        }

        $riwayatPendidikan->save();

        return response()->json([
            'success' => true,
            'message' => 'Data riwayat pendidikan berhasil disimpan.',
            'data' => $riwayatPendidikan
        ], 201);
    }

    /**
     * Show the riwayat pendidikan.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        // Mendapatkan NIDN dari dosen yang sedang login
        $nidn = Auth::user()->NIDN;

        // Mengambil riwayat pendidikan berdasarkan NIDN
        $riwayatPendidikan = RiwayatPendidikan::where('NIDN', $nidn)->first();

        if ($riwayatPendidikan) {
            return response()->json([
                'success' => true,
                'data' => $riwayatPendidikan
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Data riwayat pendidikan tidak ditemukan.'
            ], 404);
        }
    }
}