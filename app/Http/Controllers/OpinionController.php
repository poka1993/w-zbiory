<?php

namespace App\Http\Controllers;

use App\Models\Opinion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OpinionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_id = Auth::id();
        $wine_id = $request->get('wine_id');
        $opinion = $request->get('opinion');

        $validated = $request->validate([
            'wine_id' => 'required|int',
            'opinion' => 'required|string|min:10|max:3000',
        ], [
            'required' => 'Przed wysłaniem należy uzupełnić treść opinii.',
            'min' => 'Opinia musi zawierać minimalnie :min znaków.',
            'max' => 'Opinia może zawierać maksymalnie :max znaków.',
        ]);

        $new_opinion = Opinion::create([
            'user_id' => $user_id,
            'wine_id' => $wine_id,
            'opinion' => $opinion
        ]);

        return redirect()->back();
        // return redirect()->back()->with('success', 'Twoja opinia została opublikowana, dziękujemy.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Opinion  $opinion
     * @return \Illuminate\Http\Response
     */
    public function show(Opinion $opinion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Opinion  $opinion
     * @return \Illuminate\Http\Response
     */
    public function edit(Opinion $opinion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Opinion  $opinion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Opinion $opinion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Opinion  $opinion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Opinion $opinion)
    {
        //
    }
}
