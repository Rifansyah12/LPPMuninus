<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use App\Models\Pengusulan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validasi input
        $request->validate([
            'NIDN' => 'required|string',
            'password' => 'required|string',
        ]);

        // Cari dosen berdasarkan NIDN
        $dosen = Dosen::where('NIDN', $request->NIDN)->first();

        // Log untuk debugging
        \Log::info('Mencoba login dengan NIDN: ' . $request->NIDN);

        // Dosen ditemukan dan password cocok
        if ($dosen && Hash::check($request->password, $dosen->password)) {
            // Jika password masih NIDN, arahkan untuk reset password
            if ($request->NIDN === $request->password) {
                return response()->json([
                    'message' => 'Password harus diubah.',
                    'change_password_required' => true,
                ], 200);
            }

            // Jika password sudah diubah, berikan token login
            $token = $dosen->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Login berhasil',
                'token' => $token,
                'dosen' => $dosen,
                'change_password_required' => false,
            ], 200);
        }

        // Jika gagal
        \Log::warning('Login gagal untuk NIDN: ' . $request->NIDN);
        return response()->json(['message' => 'NIDN atau password salah'], 401);
    }
    
    // Function untuk mengambil data dosen sesuai dengan NIDN
    public function getDosenDetailByCategory(Request $request, $NIDN)
    {
        // Dapatkan data dosen berdasarkan NIDN
        $dosen = Dosen::where('NIDN', $NIDN)->first();
    
        if ($dosen) {
            // Kirim hanya data tertentu ke frontend berdasarkan permintaan category
            return response()->json([
                'message' => 'Detail dosen ditemukan',
                'dosen' => [
                    'nama_lengkap' => $dosen->nama_lengkap,
                    'kontak' => $dosen->kontak,
                    // Jika kategori lain diperlukan, tambahkan di sini
                ]
            ], 200);
        }
    
        return response()->json([
            'message' => 'Dosen tidak ditemukan',
        ], 404);
    }

    // CRUD untuk Pengusulan

    public function index()
    {
        // Ambil semua data pengusulan
        $pengusulan = Pengusulan::all();
        return response()->json($pengusulan);
    }

    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'jenis_usulan' => 'required|string',
            'identitas_pengusul' => 'required|string',
            'identitas_usulan' => 'required|string',
            'file_proposal' => 'required|string',
            'rencana_anggaran' => 'required|numeric',
            'dokumen_pendukung' => 'required|string',
        ]);

        // Buat pengusulan baru
        $pengusulan = Pengusulan::create($request->all());

        return response()->json([
            'message' => 'Pengusulan berhasil dibuat',
            'data' => $pengusulan,
        ], 201);
    }

    public function show($id)
    {
        // Cari pengusulan berdasarkan ID
        $pengusulan = Pengusulan::find($id);
        
        if ($pengusulan) {
            return response()->json($pengusulan);
        }
        
        return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
    }

    public function update(Request $request, $id)
    {
        // Validasi input
        $request->validate([
            'jenis_usulan' => 'required|string',
            'identitas_pengusul' => 'required|string',
            'identitas_usulan' => 'required|string',
            'file_proposal' => 'required|string',
            'rencana_anggaran' => 'required|numeric',
            'dokumen_pendukung' => 'required|string',
        ]);

        // Cari pengusulan berdasarkan ID
        $pengusulan = Pengusulan::find($id);

        if ($pengusulan) {
            // Update data pengusulan
            $pengusulan->update($request->all());
            return response()->json(['message' => 'Pengusulan berhasil diperbarui', 'data' => $pengusulan]);
        }

        return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
    }

    public function destroy($id)
    {
        // Cari pengusulan berdasarkan ID
        $pengusulan = Pengusulan::find($id);

        if ($pengusulan) {
            // Hapus pengusulan
            $pengusulan->delete();
            return response()->json(['message' => 'Pengusulan berhasil dihapus']);
        }

        return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
    }
}
