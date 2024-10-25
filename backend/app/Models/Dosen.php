<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject; // Import JWTSubject

class Dosen extends Model implements JWTSubject // Implementasikan JWTSubject
{
    use HasApiTokens;

    protected $table = 'db_dosen';

    protected $fillable = [
        'nama_lengkap',
        'NIDN',
        'prodi',
        'jabatan',
        'email',
        'kontak',
        'password',
        'jenis_kelamin',    
        'tempat_lahir',     
        'tanggal_lahir',   
        'alamat',
        'foto_profil',  
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public $timestamps = true; // Untuk created_at dan updated_at

    // Mengembalikan identifikasi token
    public function getJWTIdentifier()
    {
        return $this->getKey(); // ID dari model
    }

    // Mengembalikan klaim kustom token
    public function getJWTCustomClaims()
    {
        return [
            'id' => $this->getKey(),          // ID dari model
            'nama_lengkap' => $this->nama_lengkap, // Menambahkan nama lengkap
            'NIDN' => $this->NIDN,            // Menambahkan NIDN
        ];
    }
}
