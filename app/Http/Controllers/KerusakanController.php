<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Dashboard/Kerusakan/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'nama_kerusakan' => 'required',
            'solusi' => 'required',
        ]);
        
        $lastNumberData = Kerusakan::orderBy('id', 'desc')->first();
        $lastNumber = $lastNumberData ? (int)explode("K", $lastNumberData->kode_kerusakan)[1] : 0;

        $newCode = 'K' . ($lastNumber + 1);

        $validatedData['uuid'] = Str::uuid()->toString();
        $validatedData['kode_kerusakan'] = $newCode;

        Kerusakan::create($validatedData);
        
        return Redirect::route('kerusakan.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kerusakan $kerusakan): Response
    {
        return Inertia::render('Dashboard/Kerusakan/Edit', compact('kerusakan'));
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

        Kerusakan::where('id', $kerusakan->id)->update($validatedData);
        
        return Redirect::route('kerusakan.index');
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
        
        return Redirect::route('kerusakan.index');
    }
}
