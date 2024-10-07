<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableDbDosen extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('db_dosen', function (Blueprint $table) {
            $table->increments('id'); // Kolom ID, auto increment
            $table->string('nama_lengkap', 100); // Kolom nama_lengkap
            $table->string('NIDN', 10); // Kolom NIDN
            $table->string('prodi', 100); // Kolom prodi
            $table->string('jabatan', 100)->nullable(); // Kolom jabatan, nullable
            $table->string('email', 100); // Kolom email
            $table->string('kontak', 15)->nullable(); // Kolom kontak, nullable
            $table->timestamps(); // Kolom created_at dan updated_at
            $table->string('password', 20); // Kolom password
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_dosen'); // Menghapus tabel jika migrasi dirollback
    }

};
