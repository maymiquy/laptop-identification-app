<?php

namespace App\Http\Controllers;

use App\Models\Aturan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;

class AturanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard/Aturan/Index', [
            'data_aturan' => Aturan::all() 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Dashboard/Aturan/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'gejala_id' => 'required',
            'gejala_sebelum' => 'required',
            'next_true' => 'required',
            'next_false' => 'required',
        ]);
        
        $lastNumberData = Aturan::orderBy('id', 'desc')->first();
        $lastNumber = $lastNumberData ? (int)explode("R", $lastNumberData->kode_aturan)[1] : 0;

        $newCode = 'R' . ($lastNumber + 1);

        $validatedData['uuid'] = Str::uuid()->toString();
        $validatedData['kode_aturan'] = $newCode;

        Aturan::create($validatedData);
        
        return Redirect::route('aturan.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Aturan $aturan): Response
    {
        return Inertia::render('Dashboard/Aturan/Edit', compact('aturan'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Aturan $aturan): RedirectResponse
    {
        $validatedData = $request->validate([
            'gejala_id' => 'required',
            'gejala_sebelum' => 'required',
            'next_true' => 'required',
            'next_false' => 'required',
        ]);

        Aturan::where('id', $aturan->id)->update($validatedData);
        
        return Redirect::route('aturan.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Aturan $aturan): RedirectResponse
    {
        Aturan::destroy($aturan->id);
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
