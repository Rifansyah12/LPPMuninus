<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\RekapPengusulanController;
use App\Http\Controllers\PengusulanController;

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
Route::post('/submit-proposal', [AuthController::class, 'submitProposal']);
// Route baru untuk ambil data dosen berdasarkan NIDN
Route::get('/dosen/{NIDN}/category', [AuthController::class, 'getDosenDetailByCategory']);
// Route::resource('pengusulan', AuthController::class);
// pengusulan
Route::get('/pengusulan', [PengusulanController::class, 'index']);
Route::post('/pengusulan', [PengusulanController::class, 'store']);
Route::get('/pengusulan/{id}', [PengusulanController::class, 'show']);
Route::put('/pengusulan/{id}', [PengusulanController::class, 'update']);
Route::delete('/pengusulan/{id}', [PengusulanController::class, 'destroy']);

// crud_proposal(usulan)
// Route::post('/proposals', [ProposalController::class, 'store']);
// Route::get('/proposals', [ProposalController::class, 'index']);
// Route::put('/proposals/{id}', [ProposalController::class, 'update']);
// Route::delete('/proposals/{id}', [ProposalController::class, 'destroy']);

// REKAP_PENGUSULAN
Route::get('/rekap/{id}/proposal', [RekapPengusulanController::class, 'detailProposal'])->name('rekap.detailProposal');
Route::get('/rekap/{id}/tahapan', [RekapPengusulanController::class, 'detailTahapan'])->name('rekap.detailTahapan');



