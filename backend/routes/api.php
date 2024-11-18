<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\RekapPengusulanController;
use App\Http\Controllers\RiwayatPendidikanController;
use App\Http\Controllers\DataRiwayatPenelitianController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TabelPengusulanController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', [AuthController::class, 'login']);
Route::get('dosen', [AuthController::class, 'getDosenFromToken'])->middleware('auth:api');
Route::post('/reset-password', [AuthController::class, 'resetPassword']);
Route::get('/dosen/{NIDN}', [AuthController::class, 'getDosenDetail']);
Route::post('/dosen/{NIDN}/foto', [AuthController::class, 'updateFotoProfil']);
Route::post('/dosen', [AuthController::class, 'storeDosen']);
Route::get('/dosen', [AuthController::class, 'getAllDosen']);

Route::post('/submit-proposal', [AuthController::class, 'submitProposal']);

// Route baru untuk ambil data dosen berdasarkan NIDN
Route::get('/dosen/{NIDN}/category', [AuthController::class, 'getDosenDetailByCategory']);
// profile
Route::middleware('auth:sanctum')->get('/profile', [ProfileController::class, 'getProfile']);

// Tabel_pengusulan
Route::get('/pengusulan', [TabelPengusulanController::class, 'index']);
Route::post('/pengusulan', [TabelPengusulanController::class, 'store']);
Route::get('/pengusulan/{id}', [TabelPengusulanController::class, 'show']);
Route::put('/pengusulan/{id}', [TabelPengusulanController::class, 'update']);
Route::delete('/pengusulan/{id}', [TabelPengusulanController::class, 'destroy']);

// Riwayat_pendidikan
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/riwayat-pendidikan', [RiwayatPendidikanController::class, 'store']);
    Route::get('/riwayat-pendidikan', [RiwayatPendidikanController::class, 'show']);
});


// riwayat penelitian
Route::get('data-riwayat-penelitian', [DataRiwayatPenelitianController::class, 'index']);
Route::post('data-riwayat-penelitian', [DataRiwayatPenelitianController::class, 'store']);

// REKAP_PENGUSULAN
Route::get('/rekap/{id}/proposal', [RekapPengusulanController::class, 'detailProposal'])->name('rekap.detailProposal');
Route::get('/rekap/{id}/tahapan', [RekapPengusulanController::class, 'detailTahapan'])->name('rekap.detailTahapan');

Route::get('/proposals', [ProposalController::class, 'index']);


// PROPOSAL
// Route untuk menyimpan proposal baru
Route::post('/proposals', [ProposalController::class, 'store']);

// Route untuk mengupdate proposal berdasarkan ID
Route::put('/proposals/{id}', [ProposalController::class, 'update']);

// Route untuk menghapus proposal berdasarkan ID
Route::delete('/proposals/{id}', [ProposalController::class, 'destroy']);



