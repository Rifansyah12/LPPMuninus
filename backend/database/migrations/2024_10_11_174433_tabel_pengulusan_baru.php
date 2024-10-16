<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_pengusulan', function (Blueprint $table) {
            $table->id();
            $table->string('jenis_usulan');
            $table->string('identitas_pengusul');
            $table->string('identitas_usulan');
            $table->string('file_proposal');
            $table->decimal('rencana_anggaran', 15, 2);
            $table->string('dokumen_pendukung');
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
        Schema::dropIfExists('tb_pengusulan');
    }

};
