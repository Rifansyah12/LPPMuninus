<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProposalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposal', function (Blueprint $table) {
            $table->increments('id'); 
            $table->string('NIDN', 10);
            $table->string('jenis_proposal', 50); // Penelitian atau Pengabdian
            $table->string('kode_skim', 50); // Kode SKIM yang dipilih dari dropdown
            $table->string('nama_skim', 100); // Nama SKIM yang diinput oleh user
            $table->decimal('sumber_dana', 15, 2); // Sumber dana yang diinput user
            $table->timestamps();

            // Menambahkan foreign key untuk NIDN
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
        Schema::dropIfExists('proposal');
    }
}
