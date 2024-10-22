<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RekapPengusulan extends Model
{
    use HasFactory;

    // Nama tabel yang digunakan
    protected $table = 'rekap_pengusulan';

    // Kolom yang bisa diisi (fillable)
    protected $fillable = [
        'skim',
        'keanggotaan',
        'judul_proposal',
        'tahun_usul',
        'status_proposal',
        'status_tahapan',
    ];

    // Contoh fungsi untuk mengambil detail dari status proposal
    public function getStatusProposalDetail()
    {
        // Logika untuk mengambil detail (misalnya dari database atau API)
        return 'Detail informasi status proposal: ' . $this->status_proposal;
    }
}
