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
            $table->string('desa_keecamatan');
            $table->string('kota_kabupaten');
            $table->string('provinsi');
            $table->decimal('jarak_dari_USK',8,2);
            $table->string('durasi_dari_USK');
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
