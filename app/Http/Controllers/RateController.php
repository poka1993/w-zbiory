<?php

namespace App\Http\Controllers;

use App\Models\Rate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;

class RateController extends Controller
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
        if (!$user_id) {            
            return redirect()->back();
        };

        $wine_id = $request->get('wine_id');
        $rate = $request->get('rate');

        $checkWasRated = Rate::where('wine_id', $wine_id)->where('user_id', $user_id)->first();

        if($checkWasRated) {
            $changeRate = $this->edit($checkWasRated, $rate);
            return redirect()->back();
        } else {
            $validated = $request->validate([
                'wine_id' => 'required|int',
                'rate' => 'required|int'
            ], [
                'required' => 'Przed wysłaniem należy wystawić ocenę.',
                'int' => 'Ocena musi być liczbą'
            ]);
            
            $new_rate = Rate::create([
                'user_id' => $user_id,
                'wine_id' => $wine_id,
                'rate' => $rate
            ]);
    
            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rate  $rate
     * @return \Illuminate\Http\Response
     */
    public function show(Rate $rate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Rate  $rate
     * @return \Illuminate\Http\Response
     */
    public function edit(Rate $checkWasRated, int $rate)
    {
        $checkWasRated->update([
            'rate' => $rate,
            'updated_at' => Carbon::now()->toDateTimeString()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rate  $rate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rate $rate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rate  $rate
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rate $rate)
    {
        //
    }
}
