<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class tabel_pengusulan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pengusulan', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('skema'); // Skema pengusulan
            $table->string('judul'); // Judul pengusulan
            $table->year('tahun_pelaksanaan'); // Tahun pelaksanaan
            $table->string('peran'); // Peran pengguna
            $table->enum('status', ['Pending', 'Approved', 'Rejected']); // Status pengusulan
            $table->text('aksi')->nullable(); // Aksi tambahan, jika ada
            $table->timestamps(); // Timestamps (created_at & updated_at)
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pengusulan');
    }
};
