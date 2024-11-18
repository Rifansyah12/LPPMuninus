<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PengusulanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tabel_pengusulan')->insert([
            [
                'skema' => 'Penelitian Unggulan',
                'judul' => 'Pengembangan Teknologi AI untuk Pertanian',
                'tahun_pelaksanaan' => 2024,
                'peran' => 'Ketua Peneliti',
                'status' => 'approved',
                'aksi' => 'dilihat',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'skema' => 'Pengabdian Kepada Masyarakat',
                'judul' => 'Pelatihan Digital Marketing untuk UMKM',
                'tahun_pelaksanaan' => 2023,
                'peran' => 'Anggota',
                'status' => 'pending',
                'aksi' => 'hapus',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'skema' => 'Pengabdian',
                'judul' => 'Pelatihan Digital Marketing untuk UMKM',
                'tahun_pelaksanaan' => 2024,
                'peran' => 'Ketua',
                'status' => 'pending',
                'aksi' => 'hapus',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'skema' => 'Pengabdian',
                'judul' => 'Pelatihan Digital Marketing untuk UMKM',
                'tahun_pelaksanaan' => 2024,
                'peran' => 'Ketua',
                'status' => 'pending',
                'aksi' => 'hapus',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'skema' => 'Pengabdian',
                'judul' => 'Pelatihan Digital Marketing untuk UMKM',
                'tahun_pelaksanaan' => 2024,
                'peran' => 'Ketua',
                'status' => 'pending',
                'aksi' => 'hapus',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'skema' => 'Pengabdian',
                'judul' => 'Pelatihan Digital Marketing untuk UMKM',
                'tahun_pelaksanaan' => 2024,
                'peran' => 'Ketua',
                'status' => 'pending',
                'aksi' => 'hapus',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'skema' => 'Pengabdian',
                'judul' => 'Pelatihan Digital Marketing untuk UMKM',
                'tahun_pelaksanaan' => 2024,
                'peran' => 'Ketua',
                'status' => 'pending',
                'aksi' => 'hapus',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
        
    }
}
