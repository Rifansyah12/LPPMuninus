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
            $table->increments('id'); 
            $table->string('nama_lengkap', 100);
            $table->string('NIDN', 10)->unique();
            $table->string('prodi', 100);
            $table->string('jabatan', 100)->nullable();
            $table->string('email', 100);
            $table->string('kontak', 15)->nullable();
            $table->string('password', 255);
            $table->enum('jenis_kelamin', ['Laki-laki', 'Perempuan']);
            $table->string('tempat_lahir', 100);
            $table->date('tanggal_lahir');
            $table->text('alamat');
            $table->string('foto_profil', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_dosen');
    }

};
