<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Wine;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class WineController extends Controller
{
    // public function filterBy(?string $phrase, ?string $category)
    public function filterBy(?array $color, ?array $taste, ?array $type, ?array $countries, ?array $vol, ?array $prize)
    {
        $wines = Wine::where(function($query){
            $query->where('approved', [true]);
        })
        ->latest();  

        if ($color) {
            $wines->where(function($query) use ($color) {
                foreach($color as $key => $param){
                if ($key == 0) $query->where('color', ["$param"]);
                else $query->orWhere('color', ["$param"]);
                };
            });
        }

        if ($taste) {
            $wines->where(function($query) use ($taste) {
                foreach($taste as $key => $param){
                if ($key == 0) $query->where('taste', ["$param"]);
                else $query->orWhere('taste', ["$param"]);
                };
            });
        }

        if ($type) {
            $wines->where(function($query) use ($type) {
                foreach($type as $key => $param){
                if ($key == 0) $query->where('type', ["$param"]);
                else $query->orWhere('type', ["$param"]);
                };
            });
        }

        if ($countries) {
            $wines->where(function($query) use ($countries) {
                foreach($countries as $key => $param){
                if ($key == 0) $query->where('country', ["$param"]);
                else $query->orWhere('country', ["$param"]);
                };
            });
        }

        if ($vol) {
            $wines->where(function($query) use ($vol) {
                $min = $vol["min"];
                $max = $vol["max"];

                $query->whereBetween('vol',  [$min, $max]);
            });
        }
        
        if ($prize) {
            $wines->where(function($query) use ($prize) {
                $min = $prize["min"];
                $max = $prize["max"];
                if ($min === null) {
                    $min = 0;
                } else {
                    settype($min, "float");
                }

                if ($max === null) {
                    $max = 99999999999999;
                } else {
                    settype($max, "float");
                }

                
                $query->whereBetween('prize',  [$min, $max]);
            });
        }

        
        // if ($category) {
        //     $posts->whereRaw('title like ?', ["$category"]);
        // } else {
        //     $posts->whereRaw('title like "all"');
        // }
        
        // return $wines->paginate(2);
        return $wines->get();
    }

    public function index(Request $request, ?bool $cookie = false)
    {
        $color = $request->get('wineColor');
        $taste = $request->get('wineTaste');
        $type = $request->get('wineType');
        $countries = $request->get('wineCountries');
        $vol = $request->get('wineVol');
        $prize = $request->get('winePrize');
        $alcoholFree = $request->get('alcoholFree');
        if (isset($_COOKIE["user_filter"]) && !$cookie) {
            $data = json_decode($_COOKIE['user_filter'], true);
            $color = $data["wineColor"];
            $taste = $data["wineTaste"];
            $type = $data["wineType"];
            $countries = $data["wineCountries"];
            $vol = $data["wineVol"];
            $prize = $data["winePrize"];
            $alcoholFree = $data["alcoholFree"];
        }


        // $data = setcookie('user_filter', json_encode($values), time()+3600);
        // $data = json_decode($_COOKIE['filter'], true);
        // dd($datta);
        $result = $this->filterBy($color, $taste, $type, $countries, $vol, $prize, $alcoholFree);

        
        return Inertia::render('Welcome', [
            'wines' => $result,
            'filter' => $request->query()
            // 'cookie' => cookie($data)

            // 'prevPhrase' => $phrase,
            // 'prevCategory' => $category,
        ]);
    }

    public function filter(Request $request)
    {
        $color = $request->get('wineColor');
        $taste = $request->get('wineTaste');
        $type = $request->get('wineType');
        $countries = $request->get('wineCountries');
        $vol = $request->get('wineVol');
        $prize = $request->get('winePrize');
        $alcoholFree = $request->get('alcoholFree');
   
        $values = ['wineColor' => $color, 'wineTaste' => $taste, 'wineType' => $type, 'wineCountries' => $countries, 'wineVol' => $vol, 'winePrize' => $prize, 'alcoholFree' => $alcoholFree];
        $cookie = setcookie('user_filter', json_encode($values), time()+3600);
        
        return $this->index($request, $cookie);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|min:3|max:100|unique:'.Wine::class,
            'color' => 'required|string|max:20',
            'taste' => 'required|string|max:20',
            'type' => 'required|string|max:20',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,tiff,svg',
            'country' => 'required|string|max:50',
            'vol' => 'required|numeric|min:0|max:50',
            'prize' => 'required|numeric|min:0',
            'dishes' => 'array|max:4',
            'description' => 'max:5000',
            'author' => 'required|numeric',
        ],        
        [
            'image' => 'Wysyłany plik musi być obrazem.',
            'required' => 'Te pole jest obowiązkowe.',
            'min' => 'Pole musi zawierać minimalnie :min znaki.',
            'max' => 'Pole może zawierać maksymalnie :max znaków.',
            'name.unique' => 'Istnieje już wino o takiej nazwie.',
        ]);
        $extension = "." . $request->image->getClientOriginalExtension();
        $path = $validated['image']->storeAs('wines', $request->name . $extension, 'public');

        // $serial = serialize($request->dishes);
        // dd(unserialize($serial));
        
        $wine = Wine::create([
            'name' => $request->name,
            'color' => $request->color,
            'taste' => $request->taste,
            'type' => $request->type,
            'image' => $path,
            'country' => $request->country,
            'vol' => $request->vol,
            'prize' => $request->prize,
            'dishes' => $request->dishes,
            'description' => $request->description,
            'author_id' => $request->author,
            'approved' => false
        ]);
        $id = $wine->id;
        // return redirect(route('posts.index'));
    }

    public function add(Request $request)
    {
        return Inertia::render('Wine/AddWine', [

        ]);
    }

    public function show(Request $request, int $wineId, string $wineName)
    {
        $page = Wine::where('id', $wineId)->first();
        $wine = Wine::findOrFail($wineId);
  

        return Inertia::render('Wine/Wine', [
            'wine' => $wine,
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $this->authorize('update', $post);
        $validated = $request->validate([
            'title' => 'required|string|max:10',
            'body' => 'required|string|max:255'
        ]);

        $post->update($validated);

        return redirect(route('posts.index'));
    }

    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        $post->delete();
        return redirect(route('posts.index'));
    }
}
