<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class DosenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('db_dosen')->insert([
            [
                'nama_lengkap' => 'Rifan',
                'NIDN' => '123456789',
                'prodi' => 'Teknik Informatika',
                'jabatan' => 'Dosen',
                'email' => 'Syahr9610@gmail.com',
                'kontak' => '089696120616',
                'password' => bcrypt('123456789'),
            ],
            [
                'nama_lengkap' => 'inal',
                'NIDN' => '987654321',
                'prodi' => 'Sistem Informasi',
                'jabatan' => 'Dosen',
                'email' => 'inal@gmail',
                'kontak' => '08123456789',
                'password' => bcrypt('123456789'),
            ],
        
        ]);
    }
}
