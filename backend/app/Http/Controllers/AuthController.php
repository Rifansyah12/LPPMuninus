<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use App\Models\Pengusulan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Tymon\JWTAuth\Facades\JWTAuth;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'NIDN' => 'required|string',
            'password' => 'required|string',
        ]);

        $dosen = Dosen::where('NIDN', $request->NIDN)->first();
        Log::info('Mencoba login dengan NIDN: ' . $request->NIDN);

        if ($dosen && Hash::check($request->password, $dosen->password)) {
            if ($request->NIDN === $request->password) {
                return response()->json([
                    'message' => 'Password harus diubah.',
                    'change_password_required' => true,
                ], 200);
            }

            // Menghasilkan token
            $token = JWTAuth::fromUser($dosen);

            return response()->json([
                'message' => 'Login berhasil',
                'token' => $token,
                'change_password_required' => false,
            ], 200);
        }

        Log::warning('Login gagal untuk NIDN: ' . $request->NIDN);
        return response()->json(['message' => 'NIDN atau password salah'], 401);
    }

    public function getDosenFromToken()
    {
        try {
            $payload = JWTAuth::parseToken()->getPayload();

            return response()->json([
                'message' => 'Data ditemukan',
                'data' => $payload->toArray(),
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Token tidak valid atau kedaluwarsa'], 401);
        }
    }
// mengambil data dosen 
public function storeDosen(Request $request)
{
    $request->validate([
        'NIDN' => 'required|string|unique:db_dosen,NIDN',
        'nama_lengkap' => 'required|string',
        'prodi' => 'required|string',
        'jabatan' => 'required|string',
        'jenis_kelamin' => 'required|string',
        'alamat' => 'required|string',
        'tempat_lahir' => 'required|string',
        'tanggal_lahir' => 'required|date',
        'kontak' => 'required|string',
        'email' => 'required|string|email|unique:db_dosen,email',
        'status' => 'required|string',
        'foto_profil' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        'password' => 'required|string|min:8', // Validasi password
    ]);

    $pathFotoProfil = null;
    if ($request->hasFile('foto_profil')) {
        $file = $request->file('foto_profil');
        $filename = time() . '_' . $file->getClientOriginalName();
        $pathFotoProfil = $file->storeAs('public/foto_profil', $filename);
    }

    $dosen = Dosen::create([
        'NIDN' => $request->NIDN,
        'nama_lengkap' => $request->nama_lengkap,
        'prodi' => $request->prodi, 
        'jabatan' => $request->jabatan,
        'jenis_kelamin' => $request->jenis_kelamin,
        'alamat' => $request->alamat,
        'tempat_lahir' => $request->tempat_lahir,
        'tanggal_lahir' => $request->tanggal_lahir,
        'kontak' => $request->kontak,
        'email' => $request->email,
        'status' => $request->status,
        'foto_profil' => $pathFotoProfil ? basename($pathFotoProfil) : null,
        'password' => bcrypt($request->password), // Enkripsi password sebelum menyimpan
    ]);

    return response()->json([
        'message' => 'Dosen berhasil ditambahkan',
        'data_dosen' => $dosen,
    ], 201);
}

public function getDosenDetail($NIDN)
{
    $dosen = Dosen::where('NIDN', $NIDN)->first();

    if ($dosen) {
        return response()->json([
            'message' => 'Detail dosen ditemukan',
            'detail_data_dosen' => [
                'id' => $dosen->id,
                'nama_lengkap' => $dosen->nama_lengkap,
                'NIDN' => $dosen->NIDN,
                'prodi' => $dosen->prodi,
                'jenis_kelamin' => $dosen->jenis_kelamin,
                'alamat' => $dosen->alamat,
                'tempat_lahir' => $dosen->tempat_lahir,
                'tanggal_lahir' => $dosen->tanggal_lahir,
                'kontak' => $dosen->kontak,
                'email' => $dosen->email,
                'status' => $dosen->status,
                'foto_profil' => asset('storage/foto_profil/' . $dosen->foto_profil),
            ]
        ], 200);
    }

    return response()->json(['message' => 'Dosen tidak ditemukan'], 404);
}

// Mengunggah atau memperbarui foto profil dosen
public function updateFotoProfil(Request $request, $NIDN)
{
    $request->validate([
        'foto_profil' => 'required|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    $dosen = Dosen::where('NIDN', $NIDN)->first();

    if ($dosen) {
        // Hapus foto profil lama jika ada
        if ($dosen->foto_profil && Storage::exists('public/foto_profil/' . $dosen->foto_profil)) {
            Storage::delete('public/foto_profil/' . $dosen->foto_profil);
        }

        // Simpan foto profil baru
        $file = $request->file('foto_profil');
        $filename = time() . '_' . $file->getClientOriginalName();
        $path = $file->storeAs('public/foto_profil', $filename);

        // Update path foto_profil di database
        $dosen->foto_profil = $filename;
        $dosen->save();

        return response()->json([
            'message' => 'Foto profil berhasil diperbarui',
            'foto_profil_url' => asset('storage/foto_profil/' . $filename),
        ], 200);
    }

    return response()->json(['message' => 'Dosen tidak ditemukan'], 404);
}
    public function getAllDosen()
{
    // Misalkan Anda mengambil data dari model Dosen
    $dosen = Dosen::select('NIDN', 'name')->get();
    return response()->json($dosen);
}

}

//     // CRUD untuk Pengusulan
//     public function index()
//     {
//         $pengusulan = Pengusulan::all();
//         return response()->json($pengusulan);
//     }

//     public function store(Request $request)
//     {
//         $request->validate([
//             'jenis_usulan' => 'required|string',
//             'identitas_pengusul' => 'required|string',
//             'identitas_usulan' => 'required|string',
//             'file_proposal' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
//             'rencana_anggaran' => 'required|numeric',
//             'dokumen_pendukung' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
//         ]);

//         $pathDokumenPendukung = null;
//         if ($request->hasFile('dokumen_pendukung')) {
//             $file = $request->file('dokumen_pendukung');
//             $filename = time() . '_' . $file->getClientOriginalName();
//             $pathDokumenPendukung = $file->storeAs('public/dokumen_pendukung', $filename);
//         }

//         $pathProposal = null;
//         if ($request->hasFile('file_proposal')) {
//             $proposal = $request->file('file_proposal');
//             $proposalName = time() . '_' . $proposal->getClientOriginalName();
//             $pathProposal = $proposal->storeAs('public/proposal', $proposalName);
//         }

//         $pengusulan = Pengusulan::create([
//             'jenis_usulan' => $request->jenis_usulan,
//             'identitas_pengusul' => $request->identitas_pengusul,
//             'identitas_usulan' => $request->identitas_usulan,
//             'file_proposal' => $pathProposal,
//             'rencana_anggaran' => $request->rencana_anggaran,
//             'dokumen_pendukung' => $pathDokumenPendukung,
//         ]);

//         return response()->json([
//             'message' => 'Pengusulan berhasil dibuat',
//             'data' => $pengusulan,
//         ], 201);
//     }

//     public function show($id)
//     {
//         $pengusulan = Pengusulan::find($id);

//         if ($pengusulan) {
//             $pengusulan->dokumen_pendukung_url = asset('storage/dokumen_pendukung/' . basename($pengusulan->dokumen_pendukung));
//             $pengusulan->file_proposal_url = asset('storage/proposal/' . basename($pengusulan->file_proposal));

//             return response()->json($pengusulan);
//         }

//         return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
//     }

//     public function update(Request $request, $id)
//     {
//         $request->validate([
//             'jenis_usulan' => 'required|string',
//             'identitas_pengusul' => 'required|string',
//             'identitas_usulan' => 'required|string',
//             'file_proposal' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
//             'rencana_anggaran' => 'required|numeric',
//             'dokumen_pendukung' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
//         ]);

//         $pengusulan = Pengusulan::find($id);

//         if ($pengusulan) {
//             if ($request->hasFile('dokumen_pendukung')) {
//                 $file = $request->file('dokumen_pendukung');
//                 $filename = time() . '_' . $file->getClientOriginalName();
//                 $pathDokumenPendukung = $file->storeAs('public/dokumen_pendukung', $filename);
//                 $pengusulan->dokumen_pendukung = $pathDokumenPendukung;
//             }

//             if ($request->hasFile('file_proposal')) {
//                 $proposal = $request->file('file_proposal');
//                 $proposalName = time() . '_' . $proposal->getClientOriginalName();
//                 $pathProposal = $proposal->storeAs('public/proposal', $proposalName);
//                 $pengusulan->file_proposal = $pathProposal;
//             }

//             $pengusulan->update($request->except(['file_proposal', 'dokumen_pendukung']));

//             return response()->json([
//                 'message' => 'Pengusulan berhasil diperbarui',
//                 'data' => $pengusulan,
//             ]);
//         }

//         return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
//     }

//     public function destroy($id)
//     {
//         $pengusulan = Pengusulan::find($id);

//         if ($pengusulan) {
//             $pengusulan->delete();
//             return response()->json(['message' => 'Pengusulan berhasil dihapus']);
//         }

//         return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
//     }
// }
