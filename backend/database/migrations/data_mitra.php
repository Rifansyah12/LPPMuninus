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
        schema::create('data_mitra', function (Blueprint $table) {
            $table->id();
            $table->string('nama_mitra');
            $table->text('alamat');
            $table->string('pimpinan_mitra');
            $table->string('no_hp');
            $table->string('konstribusi');
            $table->string('surat_ketersediaan_path')->nullable();
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
     schema::dropIfExists('data_mitra');
    }
};
