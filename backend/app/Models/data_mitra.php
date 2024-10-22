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
        'desa/kecamatan',
        'kota/kabupaten',
        'provinsi',
        'jarak_dari_USK',
        'Durasi_dari_USK'
    ];
    public function getStatusDatamitra()
    {

    }
}
