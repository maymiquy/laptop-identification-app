<?php

namespace App\Http\Controllers;

use App\Models\Aturan;
use App\Models\Gejala;
use App\Models\Kerusakan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;

class KerusakanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard/Kerusakan/Index', [
            'data_kerusakan' => Kerusakan::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $lastNumberData = Kerusakan::orderBy('id', 'desc')->first();
        $lastNumber = $lastNumberData ? (int)explode("K", $lastNumberData->kode_kerusakan)[1] : 0;
        $newCode = 'K' . ($lastNumber + 1);
        $data_gejala = Gejala::all();

        return Inertia::render('Dashboard/Kerusakan/Create', compact('newCode', 'data_gejala'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'kode_kerusakan' => 'required',
            'nama_kerusakan' => 'required',
            'solusi' => 'required',
        ]);

        if (!$request->gejala) {
            return redirect()->back()->withInput()->with('failed', 'Gejala tidak boleh kosong, pilih minimal 1 gejala');
        }

        $listGejala = [];
        foreach ($request->gejala as $key => $value) {
            array_push($listGejala, $value);
        }

        $validatedData['gejala'] = json_encode($listGejala);

        $lastNumberData = Kerusakan::orderBy('id', 'desc')->first();
        $lastNumber = $lastNumberData ? (int)explode("K", $lastNumberData->kode_kerusakan)[1] : 0;
        $newCode = 'K' . ($lastNumber + 1);

        if ($validatedData['kode_kerusakan'] != $newCode) {
            return redirect()->back()->withInput()->with('failed', 'Dilarang merubah kode kerusakan!');
        }

        $validatedData['uuid'] = Str::uuid()->toString();

        Kerusakan::create($validatedData);

        return Redirect::route('kerusakan.index')->with('success', 'Data kerusakan berhasil ditambahkan');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kerusakan $kerusakan): Response
    {
        $data_gejala = Gejala::all();
        $list = json_decode($kerusakan->gejala);

        return Inertia::render('Dashboard/Kerusakan/Edit', compact('kerusakan', 'list', 'data_gejala'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kerusakan $kerusakan): RedirectResponse
    {
        $validatedData = $request->validate([
            'nama_kerusakan' => 'required',
            'solusi' => 'required',
        ]);

        if (!$request->gejala) {
            return redirect()->back()->withInput()->with('failed', 'Gejala tidak boleh kosong, pilih minimal 1 gejala');
        }

        $listGejala = [];
        foreach ($request->gejala as $key => $value) {
            array_push($listGejala, $value);
        }

        $validatedData['gejala'] = json_encode($listGejala);

        Kerusakan::where('id', $kerusakan->id)->update($validatedData);

        return Redirect::route('kerusakan.index')->with('success', "Data kerusakan: $kerusakan->kode_kerusakan berhasil diupate");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kerusakan $kerusakan): RedirectResponse
    {
        Aturan::where('kerusakan_sebelum', $kerusakan->kode_kerusakan)->delete();
        Aturan::where('next_true', $kerusakan->kode_kerusakan)->delete();
        Aturan::where('next_false', $kerusakan->kode_kerusakan)->delete();
        Kerusakan::destroy($kerusakan->id);

        return Redirect::route('kerusakan.index')->with('success', "Data kerusakan: $kerusakan->kode_kerusakan berhasil dihapus");
    }
}
