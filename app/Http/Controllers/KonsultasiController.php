<?php

namespace App\Http\Controllers;

use App\Models\Gejala;
use App\Models\Aturan;
use App\Models\Kerusakan;
use App\Models\Konsultasi;
use App\Models\OS;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

class KonsultasiController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Konsultasi/Index', [
            'data_konsultasi' => Konsultasi::latest()->get()
        ]);
    }

    public function start(): Response
    {
        Session::forget('informasi_konsultasi');

        return Inertia::render('Konsultasi/Index', [
            'data_os' => OS::all(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'nama_lengkap' => 'required',
            'email' => 'required|email',
            'os' => 'required',
        ]);

        Session::put('informasi_konsultasi', $validatedData);

        $mulaiPertanyaan = 'G1';

        $gejala = Gejala::where('kode_gejala', $mulaiPertanyaan)->first();

        $aturan = Aturan::where('gejala_id', $gejala->id)->first();

        return Redirect::route('konsultasi.question', [
            'gejala' => $aturan->gejala->kode_gejala
        ]);
    }

    public function question(Gejala $gejala): Response
    {
        $informasiKonsultasi = Session::get('informasi_konsultasi');
        if (!$informasiKonsultasi) {
            return redirect('/konsultasi')->with('failed', 'Silahkan isi form terlebih dahulu');
        }

        return Inertia::render('Konsultasi/Pertanyaan', [
            'aturan' => Aturan::where('gejala_id', $gejala->id)->first()
        ]);
    }

    public function next(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'next' => 'nullable',
        ]);

        if (str_contains($validatedData['next'], 'G')) {
            return Redirect::route('konsultasi.question', [
                'gejala' => $validatedData['next']
            ]);
        } else {
            $informasiKonsultasi = Session::get('informasi_konsultasi');
            $kerusakan = Kerusakan::where('kode_kerusakan', $validatedData['next'])->first();

            $informasiKonsultasi['kerusakan_id'] = $kerusakan ? $kerusakan->id : null;
            $informasiKonsultasi['uuid'] = Str::uuid()->toString();

            $konsultasi = Konsultasi::create($informasiKonsultasi);

            Session::forget('informasi_konsultasi');

            return Redirect::route('konsultasi.result', [
                'konsultasi' => $konsultasi->uuid
            ]);
        }
    }

    public function result(Konsultasi $konsultasi): Response
    {
        if ($konsultasi->kerusakan_id) {
            $gejala = '';
            $listGejala = json_decode($konsultasi->kerusakan->gejala);
            foreach ($listGejala as $key => $value) {
                $tableGejala = Gejala::where('kode_gejala', $value)->first();
                $gejala .= "- $tableGejala->nama_gejala\n";
            }
            $kerusakan = $konsultasi->kerusakan->nama_kerusakan;
            $solusi = $konsultasi->kerusakan->solusi;
        } else {
            $gejala = 'Tidak dapat mendeteksi indikasi pada perangkat';
            $kerusakan = 'Tidak dapat mendeteksi kerusakan perangkat';
            $solusi = 'Hubungi pihak professional terdekat, mohon maaf atas ketidaknyamanannya :)';
        }

        return Inertia::render('Konsultasi/Hasil', compact('konsultasi', 'gejala', 'kerusakan', 'solusi'));
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
