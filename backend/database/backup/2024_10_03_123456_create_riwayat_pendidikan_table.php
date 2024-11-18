<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRiwayatPendidikanTable extends Migration


{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('riwayat_pendidikan', function (Blueprint $table) {
            $table->id();
            $table->string('NIDN', 10)->primary(); 
            $table->string('pendidikan_s1', 100);
            $table->string('pendidikan_s2', 100);
            $table->string('asal_pendidikan_s1', 100);
            $table->string('asal_pendidikan_s2', 100);
            $table->string('upload_ijazah', 255)->nullable();
            $table->timestamps();

            // Set foreign key for NIDN column to reference db_dosen table
            $table->foreign('NIDN')->references('NIDN')->on('db_dosen')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('riwayat_pendidikan');
    }
};
