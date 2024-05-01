<?php

namespace App\Http\Controllers;

use App\Models\Gejala;
use App\Models\Aturan;
use App\Models\Kerusakan;
use Illuminate\Http\Request;

class KonsultasiController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Konsultasi/Index', [
            'data_konsultasi' => Konsultasi::latest()
        ]);
    }

    public function start(): Response
    {
        return Inertia::render('Konsultasi/Index');
    }

    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'nama_lengkap' => 'required',
            'email' => 'required',
            'os_id' => 'required',
        ]);

        Session::put('informasi_konsultasi', $validatedData);

        $mulaiPertanyaan = 'G1';

        $gejala = Gejala::where('kode_gejala', $mulaiPertanyaan)->first();

        $aturan = Aturan::where('gejala_id', $gejala->id)->first();

        return Redirect::route('konsultasi.question', [
            'gejala' => $aturan->gejala->kode_gejala
        ]);

        // return redirect("/konsultasi/pertanyaan/" . $aturan->gejala->kode_gejala);

    }

    public function question(Gejala $gejala): Response
    {
        // $pertanyaan = Aturan::where('gejala_id', $gejala->id);
        return Inertia::render('Konsultasi/Pertanyaan', [
            'pertanyaan' => Aturan::where('gejala_id', $gejala->id)
        ]);
    }

    public function next(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'next' => 'nullable',
        ]);

        // $descision = Str::contains($validatedData['next'], 'G');

        if (str_contains($validatedData['next'], 'G')) {
            // return redirect('/konsultasi/pertanyaan/' . $validatedData['next']);
            return Redirect::route('konsultasi.question', [
                'gejala' => $validatedData['next']
            ]);
        } else {
            $informasiKonsultasi = Session::get('informasi_konsultasi');
            $kerusakan = Kerusakan::where('kode_kerusakan', $validatedData['next'])->first();
            $informasiKonsultasi['kerusakan_id'] = $kerusakan->id;
            $konsultasi = Konsultasi::create($informasiKonsultasi);

            // return redirect('/konsultasi/hasil/' . $konsultasi->uuid);
            return Redirect::route('konsultasi.result', [
                'konsultasi' => $konsultasi->uuid
            ]);
        }
    }

    public function result(Konsultasi $konsultasi): Response
    {
        return Inertia::render('Konsultasi/Hasil', compact('konsultasi'));
    }

    public function test()
    {
        $mulaiPertanyaan = 'G2';

        $gejala = Gejala::where('kode_gejala', $mulaiPertanyaan)->first();

        $aturan = Aturan::where('gejala_id', $gejala->id)->with('gejala')->first();

        dd($aturan);
        dd($aturan->gejala);

        return redirect("/konsultasi/pertanyaan/" . $aturan->gejala->kode_gejala);
    }
}
