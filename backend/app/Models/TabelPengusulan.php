<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TabelPengusulan extends Model
{
    use HasFactory;

    // Nama tabel yang digunakan
    protected $table = 'tabel_pengusulan';

    // Kolom yang dapat diisi menggunakan mass assignment
    protected $fillable = [
        'skema',
        'judul',
        'tahun_pelaksanaan',
        'peran',
        'status',
        'aksi',
    ];
}
