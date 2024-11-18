<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dosen;

class ProfileController extends Controller
{
    public function getProfile(Request $request)
{
      // Asumsi NIDN sudah disimpan dalam session atau token
      $nidn = $request->user()->NIDN; // NIDN pengguna yang sedang login
        
      $userProfile = DbDosen::where('NIDN', $nidn)->first();

      if ($userProfile) {
          return response()->json($userProfile, 200);
      } else {
          return response()->json(['message' => 'Profil tidak ditemukan'], 404);
      }
}
}
