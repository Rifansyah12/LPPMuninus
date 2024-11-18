<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDbDosenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('db_dosen', function (Blueprint $table) {
            $table->id(); // ID untuk tabel, biasanya berupa BIGINT UNSIGNED
            $table->string('nama_lengkap'); // Kolom untuk nama lengkap
            $table->string('NIDN', 10)->unique(); // Kolom untuk NIDN, dengan panjang 10 karakter dan unik
            $table->string('prodi'); // Program Studi
            $table->string('jabatan'); // Jabatan
            $table->string('email')->unique(); // Kolom untuk email, harus unik
            $table->string('kontak'); // Kolom untuk kontak
            $table->string('password'); // Kolom untuk password
            $table->enum('jenis_kelamin', ['L', 'P']); // Kolom untuk jenis kelamin (Laki-laki / Perempuan)
            $table->string('tempat_lahir'); // Kolom untuk tempat lahir
            $table->date('tanggal_lahir'); // Kolom untuk tanggal lahir
            $table->text('alamat'); // Kolom untuk alamat
            $table->string('foto_profil')->nullable(); // Kolom untuk foto profil (nullable karena tidak wajib)
            $table->timestamps(); // Menambahkan kolom created_at dan updated_at

            // Menambahkan indeks untuk beberapa kolom jika perlu untuk mempercepat pencarian
            $table->index(['NIDN', 'email']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_dosen'); // Menghapus tabel db_dosen jika rollback migrasi
    }
}
