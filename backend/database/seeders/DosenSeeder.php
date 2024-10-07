<?php
namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;

class DosenSeeder extends Seeder
{

    
    public function run()
    {
        DB::table('db_dosen')->insert([
            [
                'nama_lengkap' => 'Rifansyah',
                'NIDN' => '123456789',
                'prodi' => 'Ilmu Komputer',
                'jabatan' => 'Dosen',
                'email' => 'syahr9610@gmail.com',
                'kontak' => '081234567890',
                'password' =>   Hash::make('Rifansyah'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            
        ]);
    }
};


