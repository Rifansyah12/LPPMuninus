<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class data_mitra extends Model
{
    use HasFactory;

    protected $table = 'data_mitra';

    protected $fillable = [
        'nama_mitra',
        'alamat',
        'pimpinan_mitra',
        'no_hp',
        'konstribusi',
        'surat_ketersediaan_path'
    ];
    public function getStatusDatamitra()
    {

    }
}
