<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataRiwayatPenelitianTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_riwayat_penelitian', function (Blueprint $table) {
            $table->engine = 'InnoDB'; // Pastikan tabel menggunakan InnoDB
            $table->id(); // Primary key utama untuk tabel ini
            $table->string('nidn', 10); // Kolom untuk menyimpan NIDN
            $table->string('tempat_penelitian', 100);
            $table->string('metode_penelitian', 100);
            $table->string('objek_penelitian', 100);
            $table->string('judul_penelitian', 255);
            $table->timestamps();
        
            // Menambahkan foreign key ke tabel db_dosen
            $table->foreign('nidn')
                ->references('NIDN')
                ->on('db_dosen')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_riwayat_penelitian');
    }
}
