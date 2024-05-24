<?php

use App\Http\Controllers\GejalaController;
use App\Http\Controllers\KerusakanController;
use App\Http\Controllers\AturanController;
use App\Http\Controllers\OSController;
use App\Http\Controllers\KonsultasiController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('/konsultasi');
});

Route::get('/konsultasi', [KonsultasiController::class, 'start'])->name('konsultasi.index');
Route::post('/konsultasi', [KonsultasiController::class, 'store'])->name('konsultasi.store');
Route::get('/konsultasi/pertanyaan/{gejala}', [KonsultasiController::class, 'question'])->name('konsultasi.question');
Route::post('/konsultasi/pertanyaan', [KonsultasiController::class, 'next'])->name('konsultasi.next');

Route::get('/konsultasi/hasil/{konsultasi}', [KonsultasiController::class, 'result'])->name('konsultasi.result');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('/dashboard/gejala', GejalaController::class)->except('show')->middleware(['auth', 'verified'])
    ->names([
        'store' => 'dashboard.gejala.store',
        'edit' => 'dashboard.gejala.edit',
        'update' => 'dashboard.gejala.update',
        'destroy' => 'dashboard.gejala.destroy',
    ]);

Route::resource('/dashboard/kerusakan', KerusakanController::class)->except('show')->middleware(['auth', 'verified'])
    ->names([
        'store' => 'dashboard.kerusakan.store',
        'edit' => 'dashboard.kerusakan.edit',
        'update' => 'dashboard.kerusakan.update',
        'destroy' => 'dashboard.kerusakan.destroy',
    ]);

Route::resource('/dashboard/os', OSController::class)->except('show')
    ->parameters([
        'os' => 'os'
    ])->middleware(['auth', 'verified'])
    ->names([
        'store' => 'dashboard.os.store',
        'edit' => 'dashboard.os.edit',
        'update' => 'dashboard.os.update',
        'destroy' => 'dashboard.os.destroy',
    ]);

Route::resource('/dashboard/aturan', AturanController::class)->except('show')->middleware(['auth', 'verified'])
    ->names([
        'store' => 'dashboard.aturan.store',
        'edit' => 'dashboard.aturan.edit',
        'update' => 'dashboard.aturan.update',
        'destroy' => 'dashboard.aturan.destroy',
    ]);


Route::get('/dashboard/konsultasi', [KonsultasiController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard.konsultasi.index');

Route::get('/test-aturan', [AturanController::class, 'test']);
Route::get('/test-konsul', [KonsultasiController::class, 'test']);

require __DIR__ . '/auth.php';
