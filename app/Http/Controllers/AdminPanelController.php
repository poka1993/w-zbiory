<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class AdminPanelController extends Controller
{

    public function index(Request $request)
    {
        // if (Gate::denies('admin-level', true)) { //zamiast negacji Gates wystarczy podmienic allows na denies
        // if (!Gate::allows('admin-level', true)) {
        //     abort(403);
        // }
        //szybsza metoda:
        Gate::authorize('admin-level');

        //pod wlasna podstrone z bledem (samo echo bledu):
        // $response = Gate::inspect('admin-level');
        // if ($response->denied()) {
        //     echo $response->message();
        // }

        return Inertia::render('AdminPanel/Index', [
        ]);
    }

    public function store(Request $request)
    {

    }

    public function update(Request $request)
    {

    }

    public function destroy(Request $request)
    {

    }
}
