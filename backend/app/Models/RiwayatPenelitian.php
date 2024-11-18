<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RiwayatPenelitian extends Model
{
    use HasFactory;

    protected $table = 'data_riwayat_penelitian';

    protected $fillable = [
        'nidn',
        'tempat_penelitian',
        'metode_penelitian',
        'objek_penelitian',
        'judul_penelitian',
    ];

    /**
     * Relationship with Dosen.
     */
    public function dosen()
    {
        return $this->belongsTo(Dosen::class, 'nidn', 'NIDN');
    }
}
    