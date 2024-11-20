<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposals', function (Blueprint $table) {
            $table->id();
            $table->string('jenis_penelitian');
            $table->string('nama_lengkap');
            $table->string('id_sinta');
            $table->string('nidn');
            $table->string('no_handphone');
            $table->string('judul');
            $table->string('rumpun_ilmu');
            $table->integer('tahun_usulan');
            $table->string('skema');
            $table->string('tema');
            $table->string('lama_kegiatan'); // Durasi kegiatan dalam bentuk string
            $table->date('tanggal_mulai');
            $table->date('tanggal_selesai');
            $table->json('anggota_dosen'); // Menyimpan data anggota dosen sebagai JSON
            $table->json('nidn_anggota_dosen'); // Menyimpan data nidn anggota dosen sebagai JSON
            $table->json('anggota_mahasiswa'); // Menyimpan data anggota mahasiswa sebagai JSON
            $table->json('nim_anggota_mahasiswa'); // Menyimpan data nim anggota mahasiswa sebagai JSON
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
        Schema::dropIfExists('proposals');
    }
} 