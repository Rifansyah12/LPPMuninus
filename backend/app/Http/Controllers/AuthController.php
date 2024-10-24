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
public function getDosenDetail($NIDN)
{
    // Dapatkan data dosen berdasarkan NIDN
    $dosen = Dosen::where('NIDN', $NIDN)->first();

    if ($dosen) {
        return response()->json([
            'message' => 'Detail dosen ditemukan',
            'dosen' => [
                'id' => $dosen->id,
                'nama_lengkap' => $dosen->nama_lengkap,
                'NIDN' => $dosen->NIDN,
                'jenis_kelamin' => $dosen->jenis_kelamin,
                'alamat' =>$dosen->alamat,
                'tempat_lahir'=>$dosen ->tempat_lahir,     
                'tanggal_lahir'=>$dosen ->tempat_lahir,
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
        $pengusulan = Pengusulan::all();
        return response()->json($pengusulan);
    }

    public function store(Request $request)
    {
        $request->validate([
            'jenis_usulan' => 'required|string',
            'identitas_pengusul' => 'required|string',
            'identitas_usulan' => 'required|string',
            'file_proposal' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
            'rencana_anggaran' => 'required|numeric',
            'dokumen_pendukung' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);

        $pathDokumenPendukung = null;
        if ($request->hasFile('dokumen_pendukung')) {
            $file = $request->file('dokumen_pendukung');
            $filename = time() . '_' . $file->getClientOriginalName();
            $pathDokumenPendukung = $file->storeAs('public/dokumen_pendukung', $filename);
        }

        $pathProposal = null;
        if ($request->hasFile('file_proposal')) {
            $proposal = $request->file('file_proposal');
            $proposalName = time() . '_' . $proposal->getClientOriginalName();
            $pathProposal = $proposal->storeAs('public/proposal', $proposalName);
        }

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
        $pengusulan = Pengusulan::find($id);

        if ($pengusulan) {
            $pengusulan->dokumen_pendukung_url = asset('storage/dokumen_pendukung/' . basename($pengusulan->dokumen_pendukung));
            $pengusulan->file_proposal_url = asset('storage/proposal/' . basename($pengusulan->file_proposal));

            return response()->json($pengusulan);
        }

        return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'jenis_usulan' => 'required|string',
            'identitas_pengusul' => 'required|string',
            'identitas_usulan' => 'required|string',
            'file_proposal' => 'nullable|file|mimes:pdf,doc,docx|max:2048',
            'rencana_anggaran' => 'required|numeric',
            'dokumen_pendukung' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);

        $pengusulan = Pengusulan::find($id);

        if ($pengusulan) {
            if ($request->hasFile('dokumen_pendukung')) {
                $file = $request->file('dokumen_pendukung');
                $filename = time() . '_' . $file->getClientOriginalName();
                $pathDokumenPendukung = $file->storeAs('public/dokumen_pendukung', $filename);
                $pengusulan->dokumen_pendukung = $pathDokumenPendukung;
            }

            if ($request->hasFile('file_proposal')) {
                $proposal = $request->file('file_proposal');
                $proposalName = time() . '_' . $proposal->getClientOriginalName();
                $pathProposal = $proposal->storeAs('public/proposal', $proposalName);
                $pengusulan->file_proposal = $pathProposal;
            }

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
        $pengusulan = Pengusulan::find($id);

        if ($pengusulan) {
            $pengusulan->delete();
            return response()->json(['message' => 'Pengusulan berhasil dihapus']);
        }

        return response()->json(['message' => 'Pengusulan tidak ditemukan'], 404);
    }
}
