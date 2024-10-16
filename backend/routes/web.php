<?php

use App\Http\Controllers\PengusulanController;

// Route untuk menampilkan daftar pengusulan
Route::get('/pengusulan', [PengusulanController::class, 'index'])->name('pengusulan.index');

// Route untuk menampilkan form tambah pengusulan
Route::get('/pengusulan/create', [PengusulanController::class, 'create'])->name('pengusulan.create');

// Route untuk menyimpan pengusulan
Route::post('/pengusulan', [PengusulanController::class, 'store'])->name('pengusulan.store');

// Route untuk menampilkan form edit pengusulan
Route::get('/pengusulan/{id}/edit', [PengusulanController::class, 'edit'])->name('pengusulan.edit');

// Route untuk mengupdate pengusulan
Route::put('/pengusulan/{id}', [PengusulanController::class, 'update'])->name('pengusulan.update');

// Route untuk menghapus pengusulan
Route::delete('/pengusulan/{id}', [PengusulanController::class, 'destroy'])->name('pengusulan.destroy');
