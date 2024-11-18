<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TabelPengusulan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tabel_pengusulan', function (Blueprint $table) {
                $table->id(); // Membuat kolom id sebagai primary key
                $table->string('skema', 100); // Kolom skema (misalnya jenis pengusulan)
                $table->string('judul', 255); // Kolom judul pengusulan
                $table->year('tahun_pelaksanaan'); // Kolom tahun pelaksanaan pengusulan
                $table->string('peran', 100); // Kolom peran (misalnya peran dalam pengusulan)
                $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending'); // Kolom status dengan pilihan tertentu
                $table->enum('aksi', ['dilihat', 'hapus'])->default('dilihat'); // Kolom aksi dengan nilai enum
                $table->timestamps(); // Kolom created_at dan updated_at
                
                // Anda bisa menambahkan foreign key atau constraints lainnya di sini jika diperlukan
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tabel_pengusulan');
    }
};
