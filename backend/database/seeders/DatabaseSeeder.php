<?php

namespace Database\Seeders; 

use Illuminate\Database\Seeder;
use Database\Seeders\DosenSeeder; 

class DatabaseSeeder extends Seeder
{
    public function run()
    {

        $this->call(DosenSeeder::class);
    }
}
