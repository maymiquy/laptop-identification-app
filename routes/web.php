<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GejalaController;
use App\Http\Controllers\KerusakanController;
use App\Http\Controllers\AturanController;
use App\Http\Controllers\OSController;
use App\Http\Controllers\KonsultasiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Route::get('/gejala', [GejalaController::class, 'index'])->name('gejala.index');
    // Route::get('/gejala/create', [GejalaController::class, 'create'])->name('gejala.create');
    // Route::post('/gejala', [GejalaController::class, 'store'])->name('gejala.store');
    // Route::get('/gejala/{gejala}/edit', [GejalaController::class, 'edit'])->name('gejala.edit');
    // Route::patch('/gejala/{gejala}', [GejalaController::class, 'update'])->name('gejala.update');
    // Route::delete('/gejala/{gejala}', [GejalaController::class, 'destroy'])->name('gejala.destroy');

    Route::resource('/gejala', GejalaController::class)->except('show')
        // ->names('gejala')
        ;
        // ->names([
        //     'index' => 'gejala.index',
        //     'create' => 'gejala.create',
        //     'store' => 'gejala.store',
        //     'edit' => 'gejala.edit'
        // ]);
    
    Route::resource('/dashboard/kerusakan', KerusakanController::class)->except('show')
        // ->names('kerusakan')
        ;
    
    Route::resource('/dashboard/aturan', AturanController::class)->except('show')
        // ->names('aturan')
        ;
    
    Route::resource('/dashboard/os', OSController::class)->except('show')
        // ->names('os')
        ->parameters([
            'os' => 'os'
        ]);

    Route::get('/konsultasi', [KonsultasiController::class, 'start'])->name('konsultasi.index');
    Route::post('/konsultasi', [KonsultasiController::class, 'store'])->name('konsultasi.store');
    Route::get('/konsultasi/pertanyaan/{gejala}', [KonsultasiController::class, 'question'])->name('konsultasi.question');
    Route::post('/konsultasi/pertanyaan', [KonsultasiController::class, 'next'])->name('konsultasi.next');

    Route::get('/konsultasi/hasil/{konsultasi}', [KonsultasiController::class, 'result'])->name('konsultasi.result');
});

Route::get('/test-aturan', [AturanController::class, 'test']);
Route::get('/test-konsul', [KonsultasiController::class, 'test']);

require __DIR__.'/auth.php';
