<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class tabel_pengusulan_baru extends Migration
{
    /**
     * Jalankan migration.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_pengusulan', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('jenis_usulan'); 
            $table->string('SKIM');
            $table->string('nama_SKIM'); 
            $table->string('identitas_pengusul');
            $table->string('identitas_usulan'); 
            $table->string('file_proposal'); 
            $table->string('sumber_dana'); 
            $table->decimal('rencana_anggaran', 15, 2); 
            $table->string('dokumen_pendukung');
            $table->timestamps();       
        });
    }

    /**
     * Batalkan migration.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_pengusulan'); // Hapus tabel
    }
};
