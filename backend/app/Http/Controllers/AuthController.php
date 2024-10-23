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
            'file_proposal' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
            'rencana_anggaran' => 'required|numeric',
            'dokumen_pendukung' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);
    
        // Upload dokumen pendukung
        $pathDokumenPendukung = null;
        if ($request->hasFile('dokumen_pendukung')) {
            $file = $request->file('dokumen_pendukung');
            $filename = time() . '_' . $file->getClientOriginalName();
            $pathDokumenPendukung = $file->storeAs('public/dokumen_pendukung', $filename);
        }
    
        // Upload file proposal jika ada
        $pathProposal = null;
        if ($request->hasFile('file_proposal')) {
            $proposal = $request->file('file_proposal');
            $proposalName = time() . '_' . $proposal->getClientOriginalName();
            $pathProposal = $proposal->storeAs('public/proposal', $proposalName);
        }
    
        // Simpan data pengusulan ke database
        $pengusulan = Pengusulan::create([
            'jenis_usulan' => $request->jenis_usulan,
            'identitas_pengusul' => $request->identitas_pengusul,
            'identitas_usulan' => $request->identitas_usulan,
            'file_proposal' => $pathProposal,
            'rencana_anggaran' => $request->rencana_anggaran,
            'dokumen_pendukung' => $pathDokumenPendukung,
        ]);
    
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
            // Tambahkan URL untuk dokumen pendukung dan file proposal
            $pengusulan->dokumen_pendukung_url = asset('storage/dokumen_pendukung/' . basename($pengusulan->dokumen_pendukung));
            $pengusulan->file_proposal_url = asset('storage/proposal/' . basename($pengusulan->file_proposal));
            
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
            'file_proposal' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
            'rencana_anggaran' => 'required|numeric',
            'dokumen_pendukung' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);
    
        // Cari pengusulan berdasarkan ID
        $pengusulan = Pengusulan::find($id);
    
        if ($pengusulan) {
            // Upload dan update dokumen pendukung jika ada
            if ($request->hasFile('dokumen_pendukung')) {
                $file = $request->file('dokumen_pendukung');
                $filename = time() . '_' . $file->getClientOriginalName();
                $pathDokumenPendukung = $file->storeAs('public/dokumen_pendukung', $filename);
                $pengusulan->dokumen_pendukung = $pathDokumenPendukung;
            }
    
            // Upload dan update file proposal jika ada
            if ($request->hasFile('file_proposal')) {
                $proposal = $request->file('file_proposal');
                $proposalName = time() . '_' . $proposal->getClientOriginalName();
                $pathProposal = $proposal->storeAs('public/proposal', $proposalName);
                $pengusulan->file_proposal = $pathProposal;
            }
    
            // Update data lainnya
            $pengusulan->update($request->except(['file_proposal', 'dokumen_pendukung']));
    
            return response()->json([
                'message' => 'Pengusulan berhasil diperbarui',
                'data' => $pengusulan,
            ]);
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
