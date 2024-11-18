<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory;

    // Tentukan nama tabel jika tidak mengikuti konvensi
    protected $table = 'proposals';

    // Tentukan kolom yang dapat diisi massal
    protected $fillable = [
        'jenis_penelitian',
        'nama_lengkap',
        'id_sinta',
        'nidn',
        'no_handphone',
        'judul',
        'rumpun_ilmu',
        'tahun_usulan',
        'skema',
        'tema',
        'lama_kegiatan',
        'tanggal_mulai',
        'tanggal_selesai',
        'anggota_dosen',
        'nidn_anggota_dosen',
        'anggota_mahasiswa',
        'nim_anggota_mahasiswa',
    ];

    // Menyatakan kolom yang akan di-cast menjadi tipe data tertentu
    protected $casts = [
        'anggota_dosen' => 'array',
        'nidn_anggota_dosen' => 'array',
        'anggota_mahasiswa' => 'array',
        'nim_anggota_mahasiswa' => 'array',
    ];
}
