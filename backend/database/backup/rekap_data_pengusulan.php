<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class rekap_data_pengusulan extends Migration
{
    /**
     * Jalankan migration.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rekap_pengusulan', function (Blueprint $table) {
            $table->id();  // Kolom No (Auto Increment Primary Key)
            $table->string('skim'); // Kolom SKIM - Sumber Dana
            $table->string('keanggotaan'); // Kolom Keanggotaan
            $table->string('judul_proposal'); // Kolom Judul Proposal
            $table->year('tahun_usul'); // Kolom Tahun Usul
            $table->string('status_proposal'); // Kolom Status Proposal
            $table->string('status_tahapan'); // Kolom Status Tahapan
            $table->timestamps(); // Kolom created_at & updated_at
        });
    }

    /**
     * Batalkan migration.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rekap_pengusulan');
    }
};
