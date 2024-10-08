<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

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

        // dosen ditemukan dan password cocok
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
    

    // functon untuk mengambil data dosen susuai dengan NIDN
    public function getDosenDetail($NIDN)
{
    $dosen = Dosen::where('NIDN', $NIDN)->first();
    if ($dosen) {
        return response()->json([
            'message' => 'Detail dosen ditemukan',
            'dosen' => $dosen,
        ], 200);
    }

    return response()->json([
        'message' => 'Dosen tidak ditemukan',
    ], 404);
}

  // Fungsi untuk menyimpan usulan proposal
  public function submitProposal(Request $request)
  {
      // Validasi input
      $request->validate([
          'NIDN' => 'required|string|exists:db_dosen,NIDN',
          'jenis_proposal' => 'required|string',
          'kode_skim' => 'required|string',
          'nama_skim' => 'required|string',
          'sumber_dana' => 'required|numeric',
      ]);
  
      // Simpan proposal ke database
      $proposal = Proposal::create([
          'NIDN' => $request->NIDN,
          'jenis_proposal' => $request->jenis_proposal,
          'kode_skim' => $request->kode_skim,
          'nama_skim' => $request->nama_skim,
          'sumber_dana' => $request->sumber_dana,
      ]);
  
      return response()->json([
          'message' => 'Proposal berhasil diajukan',
          'proposal' => $proposal
      ], 201);
  }
}
    
    

