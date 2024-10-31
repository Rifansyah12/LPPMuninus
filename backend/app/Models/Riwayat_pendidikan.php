<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Riwayat_pendidikan extends Model
{
    use HasFactory;
    protected $table = 'riwayat_pendidikan';
    /**
     * 
     * 
     * @var array
     */

     protected $fillable = [
        'NIDN',
        'pendidikan_s1',
        'pendidikan_s2',
        'asal_pendidikan_s1',
        'asal_pendidikan_s2',
        'upload_ijazah',
     ];
     /**
     * Get the dosen associated with the riwayat pendidikan.
     */
    public function dosen()
    {
        return $this->belongsTo(Dosen::class, 'NIDN', 'NIDN');
    }
}