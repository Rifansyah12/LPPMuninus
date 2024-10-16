<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengusulan extends Model
{
    use HasFactory;

    protected $table = 'tb_pengusulan'; // Nama tabel di database

    protected $fillable = [
        'jenis_usulan',
        'identitas_pengusul',
        'identitas_usulan',
        'file_proposal',
        'rencana_anggaran',
        'dokumen_pendukung',
    ];
}
