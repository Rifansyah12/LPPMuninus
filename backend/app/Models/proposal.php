<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory;

    protected $table = 'proposal';

    protected $fillable = [
        'NIDN',
        'jenis_proposal',
        'kode_skim',
        'nama_skim',
        'sumber_dana',
    ];

    // Relasi dengan model Dosen
    public function dosen()
    {
        return $this->belongsTo(Dosen::class, 'NIDN', 'NIDN');
    }
}

