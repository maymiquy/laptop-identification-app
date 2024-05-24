<?php

namespace App\Http\Controllers;

use App\Models\Aturan;
use App\Models\Gejala;
use App\Models\Kerusakan;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AturanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard/Aturan/Index', [
            "aturan" => Aturan::with('gejala')->first()->get(),
            'gejala' => Gejala::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $lastNumberData = Aturan::orderBy('id', 'desc')->first();
        $lastNumber = $lastNumberData ? (int)explode("R", $lastNumberData->kode_aturan)[1] : 0;
        $newCode = 'R' . ($lastNumber + 1);

        $gejala = Gejala::all();
        $aturan = Kerusakan::all();

        return Inertia::render('Dashboard/Aturan/Create', compact('newCode', 'gejala', 'aturan'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'kode_aturan' => 'required',
            'gejala_id' => 'required',
            'gejala_sebelum' => 'nullable',
            'next_true' => 'nullable',
            'next_false' => 'nullable',
        ]);

        $lastNumberData = Aturan::orderBy('id', 'desc')->first();
        $lastNumber = $lastNumberData ? (int)explode("R", $lastNumberData->kode_aturan)[1] : 0;
        $newCode = 'R' . ($lastNumber + 1);

        if ($validatedData['kode_aturan'] != $newCode) {
            return redirect()->back()->withInput()->with('failed', 'Dilarang merubah kode aturan!');
        }

        $validatedData['uuid'] = Str::uuid()->toString();

        Aturan::create($validatedData);

        return Redirect::route('aturan.index')->with('success', 'Data aturan berhasil ditambahkan');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Aturan $aturan): Response
    {
        $gejala = Gejala::all();
        $kerusakan = Kerusakan::all();

        return Inertia::render('Dashboard/Aturan/Edit', compact('aturan', 'gejala', 'kerusakan'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Aturan $aturan): RedirectResponse
    {
        $validatedData = $request->validate([
            'gejala_id' => 'required',
            'gejala_sebelum' => 'nullable',
            'next_true' => 'nullable',
            'next_false' => 'nullable',
        ]);

        Aturan::where('id', $aturan->id)->update($validatedData);

        return Redirect::route('aturan.index')->with('success', "Data aturan: $aturan->kode_aturan berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Aturan $aturan)
    {
        Aturan::destroy($aturan->id);

        return Redirect::route('aturan.index')->with('success', "Data aturan: $aturan->kode_aturan berhasil dihapus");
    }

    public function test()
    {
        // dd(Aturan::with('gejala')->latest()->get());

        $lastNumberData = Aturan::orderBy('id', 'desc')->first();
        // dd(explode("R", $lastNumberData->kode_aturan));
        $lastNumber = $lastNumberData ? (int)explode("R", $lastNumberData->kode_aturan)[1] : 0;
        $newCode = 'R' . ($lastNumber + 1);
        dd($newCode);
    }
}
