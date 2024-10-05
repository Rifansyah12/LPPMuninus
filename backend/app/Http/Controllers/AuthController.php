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
    
        // Cek apakah dosen ditemukan dan password cocok tanpa hashing
        if ($dosen) {
            if ($request->password === $dosen->password) {
                // Login berhasil, cek apakah password masih NIDN
                if ($dosen->NIDN === $dosen->password) {
                    // Jika password masih default (NIDN), arahkan untuk reset password
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
        }
    
        // Jika gagal
        \Log::warning('Login gagal untuk NIDN: ' . $request->NIDN);
        return response()->json(['message' => 'NIDN atau password salah'], 401);
    }
    
    
}
