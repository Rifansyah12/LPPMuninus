<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataPenelitian extends Model
{
    use HasFactory;

    protected $table = 'data_penelitian';

    protected $fillable = [
        'jenis_penelitian',
        'nama_lengkap',
        'id_sinta',
        'nidn',
        'telepon',
        'judul_penelitian',
        'rumpun_ilmu',
        'tahun',
        'skema',
        'tema',
        'durasi_awal',
        'durasi_akhir',
        'anggota_1_dosen',
        'nidn_anggota_1_dosen',
        'anggota_2_mahasiswa',
        'nim_anggota_2_mahasiswa',
        'latar_belakang',
        'kata_kunci',
        'rumusan_masalah',
        'state_of_the_art',
        'roadmap',
        'metodologi',
        'kategori_luaran',
        'status',
    ];
}
