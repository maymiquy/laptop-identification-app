<?php

namespace App\Http\Controllers;

use App\Models\OS;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;

class OSController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard/OS/Index', [
            'data_os' => OS::all() 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Dashboard/OS/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validatedData = $request->validate([
            'nama' => 'required'
        ]);

        $validatedData['uuid'] = Str::uuid()->toString();

        OS::create($validatedData);
        
        return Redirect::route('os.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OS $os): Response
    {
        return Inertia::render('Dashboard/OS/Edit', compact('os'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OS $os): RedirectResponse
    {
        $validatedData = $request->validate([
            'nama' => 'required'
        ]);

        OS::where('id', $os->id)->update($validatedData);
        
        return Redirect::route('os.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OS $os): RedirectResponse
    {
        OS::destroy($os->id);
        
        return Redirect::route('os.index');
    }
}
