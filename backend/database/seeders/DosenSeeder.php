<?php

<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class DosenSeeder extends Seeder
{
    public function run()
    {
        DB::table('db_dosen')->insert([
            [
                'nama_lengkap' => 'Rifan',
                'NIDN' => '1234567890',
                'prodi' => 'Ilmu Komputer',
                'jabatan' => 'Dosen',
                'email' => 'syahr9610@gmail.com',
                'kontak' => '081234567890',
                'password' => bcrypt('password'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nama_lengkap' => 'Andi',
                'NIDN' => '0987654321',
                'prodi' => 'Sistem Informasi',
                'jabatan' => 'Dosen',
                'email' => 'andi@gmail.com',
                'kontak' => '082234567890',
                'password' => bcrypt('password123'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
};


