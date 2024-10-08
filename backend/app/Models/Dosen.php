<?php

namespace App\Models;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dosen extends Model
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
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public $timestamps = true; // Untuk created_at dan updated_at
}
