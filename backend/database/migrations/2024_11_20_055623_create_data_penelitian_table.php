<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataPenelitianTable extends Migration
{
    public function up()
    {
        Schema::create('data_penelitian', function (Blueprint $table) {
            $table->id();
            $table->string('jenis_penelitian');
            $table->string('nama_lengkap');
            $table->string('id_sinta')->nullable();
            $table->string('nidn');
            $table->string('telepon');
            $table->string('judul_penelitian');
            $table->string('rumpun_ilmu');
            $table->year('tahun');
            $table->string('skema');
            $table->string('tema');
            $table->date('durasi_awal');
            $table->date('durasi_akhir');
            $table->string('anggota_1_dosen')->nullable();
            $table->string('nidn_anggota_1_dosen')->nullable();
            $table->string('anggota_2_mahasiswa')->nullable();
            $table->string('nim_anggota_2_mahasiswa')->nullable();
            $table->longText('latar_belakang')->nullable();
            $table->string('kata_kunci')->nullable();
            $table->longText('rumusan_masalah')->nullable();
            $table->longText('state_of_the_art')->nullable();
            $table->longText('roadmap')->nullable();
            $table->longText('metodologi')->nullable();
            $table->string('kategori_luaran');
            $table->string('status');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('data_penelitian');
    }
}
