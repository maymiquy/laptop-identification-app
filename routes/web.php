<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GejalaController;
use App\Http\Controllers\KerusakanController;
use App\Http\Controllers\AturanController;
use App\Http\Controllers\OSController;
use App\Http\Controllers\KonsultasiController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/konsultasi');
});

Route::get('/konsultasi', [KonsultasiController::class, 'start'])->name('konsultasi.index');
Route::post('/konsultasi', [KonsultasiController::class, 'store'])->name('konsultasi.store');
Route::get('/konsultasi/pertanyaan/{gejala}', [KonsultasiController::class, 'question'])->name('konsultasi.question');
Route::post('/konsultasi/pertanyaan', [KonsultasiController::class, 'next'])->name('konsultasi.next');

Route::get('/konsultasi/hasil/{konsultasi}', [KonsultasiController::class, 'result'])->name('konsultasi.result');

Route::get('/dashboard', function () {
    return view('dashboard.index');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::resource('/dashboard/gejala', GejalaController::class)->except('show')->middleware(['auth', 'verified']);

Route::resource('/dashboard/kerusakan', KerusakanController::class)->except('show')->middleware(['auth', 'verified']);

Route::resource('/dashboard/aturan', AturanController::class)->except('show')->middleware(['auth', 'verified']);

Route::resource('/dashboard/os', OSController::class)->except('show')
    ->parameters([
        'os' => 'os'
    ])->middleware(['auth', 'verified']);

Route::get('/dashboard/konsultasi', [KonsultasiController::class, 'index'])->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/test-aturan', [AturanController::class, 'test']);
Route::get('/test-konsul', [KonsultasiController::class, 'test']);

require __DIR__ . '/auth.php';
