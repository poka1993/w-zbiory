<?php

namespace App\Http\Controllers;

use App\Models\Rate;
use App\Models\User;
use App\Models\Wine;
use App\Models\Notification;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;

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
        $wines = Wine::leftJoin('rates', 'wines.id', '=', 'rates.wine_id')->leftJoin('users', 'wines.author_id', '=', 'users.id')
        ->select('wines.id', 'wines.name', 'wines.color', 'wines.taste', 'wines.country', 'wines.type', 'wines.image', 'wines.prize', 'wines.vol', 'wines.dishes', 'wines.author_id', 'wines.approved', 'wines.created_at',  Rate::raw("avg(rates.rate) as rate"), 'users.nick', 'users.sex', 'users.avatar')
        ->groupBy("wines.id")->where('approved', false);
        $total_wines = $wines->get()->count();
        $wines = $wines->paginate(12)->onEachSide(0.5);

        //pod wlasna podstrone z bledem (samo echo bledu):
        // $response = Gate::inspect('admin-level');
        // if ($response->denied()) {
        //     echo $response->message();
        // }

        return Inertia::render('AdminPanel/Index', [
            'notifications' => $request->get('notifications'),
            'new_notifications' => $request->get('new_notifications'),
            'wines' => $wines,
            'total_wines' => $total_wines,
        ]);
    }

    public function store(Request $request)
    {

    }

    public function publicWine(Request $request)
    {
        Gate::authorize('admin-level');
        $wine_id = $request->get('wine_id');
        $published_wine = Wine::where('id', $wine_id)->first();
        if ($published_wine) {
            $published_wine->update([
                'approved' => true
            ]);
            $author_id = $published_wine->author_id;
            $check_author = User::where('id', $author_id)->first();
            if ($check_author) {
                $notification = Notification::create([
                    'message' => 'addedWine',
                    'user_id' => $author_id,
                    'generating_user_id' => $author_id,
                    'wine_id' => $wine_id
                ]);
            };
        }
        return redirect()->back();
    }

    public function destroyWine(Request $request)
    {
        Gate::authorize('admin-level');
        $wine_id = $request->get('wine_id');
        $deleting_wine = Wine::where('id', $wine_id)->first();
        if ($deleting_wine) {
            $deleting_wine->delete();
            $message = 'Wino zostało usunięte z bazy danych.';
            return redirect('/admin')->with('message', $message);
        }
    }
}
