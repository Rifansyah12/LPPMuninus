<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateProposalsTable extends Migration
{
    public function up()
    {
        Schema::create('proposals', function (Blueprint $table) {
            $table->id();
            $table->string('jenis_penelitian'); // Penelitian / Pengabdian
            // Identitas Pengusul
            $table->string('nama_lengkap');
            $table->string('id_sinta');
            $table->string('nidn');
            $table->string('no_handphone');
            // Identitas Usulan
            $table->string('judul');
            $table->string('rumpun_ilmu');
            $table->year('tahun_usulan');
            $table->string('skema');
            $table->string('tema');
            $table->string('lama_kegiatan');
            // Tanggal
            $table->date('tanggal_mulai');
            $table->date('tanggal_selesai');
            // Anggota
            $table->json('anggota'); // Untuk menyimpan data anggota sebagai JSON
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('proposals');
    }
}
