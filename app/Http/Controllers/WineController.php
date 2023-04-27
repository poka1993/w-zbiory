<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use App\Models\Wine;
use App\Models\Opinion;
use App\Models\User;
use App\Models\Rate;
use App\Models\Favorite;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class WineController extends Controller
{
    // public function filterBy(?string $phrase, ?string $category)
    public function filterBy(?array $color, ?array $taste, ?array $type, ?array $countries, ?array $vol, ?array $prize, ?int $alcoholFree, ?string $selectedList)
    {
        $wines = Wine::leftJoin('rates', 'wines.id', '=', 'rates.wine_id')->select('wines.id', 'wines.name', 'wines.color', 'wines.taste', 'wines.country', 'wines.type', 'wines.image', 'wines.prize', 'wines.vol', 'wines.dishes', 'wines.author_id', 'wines.approved', 'wines.created_at',  Rate::raw("avg(rates.rate) as rate"))
        ->groupBy("wines.id")->where(function($query){
            $query->where('approved', [true]);
        });

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

        switch ($selectedList) {
            case "Ostatnio dodane":
                $wines->orderBy('wines.created_at', 'DESC');
                break;
            case "Najwyżej oceniane":
                $wines->orderBy('rate', 'DESC');
                break;
            case "Najtańsze cenowo":
                $wines->orderBy('prize', 'ASC');
                break;
        }
        
        // if ($category) {
        //     $posts->whereRaw('title like ?', ["$category"]);
        // } else {
        //     $posts->whereRaw('title like "all"');
        // }
        
        // return $wines->paginate(2);
        return $wines;
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
        $selectedList = $request->get('selectedList');
        if (isset($_COOKIE["user_filter"]) && !$cookie) {
            $data = json_decode($_COOKIE['user_filter'], true);
            $color = $data["wineColor"];
            $taste = $data["wineTaste"];
            $type = $data["wineType"];
            $countries = $data["wineCountries"];
            $vol = $data["wineVol"];
            $prize = $data["winePrize"];
            $alcoholFree = $data["alcoholFree"];
            $selectedList = $data["selectedList"];
        }

        // $data = setcookie('user_filter', json_encode($values), time()+3600);
        // $data = json_decode($_COOKIE['filter'], true);
        // dd($datta);
        if (!$selectedList) {
            $selectedList = "Ostatnio dodane";
        }
        $result = $this->filterBy($color, $taste, $type, $countries, $vol, $prize, $alcoholFree, $selectedList);
        $total_results = $result->get()->count();
        $result = $result->paginate(12)->appends(request()->query())->onEachSide(0.5);

        $user_id = Auth::id();
        if ($user_id) {
            $checkWasAdded = Favorite::select('wine_id')->where('user_id', $user_id)->get()->toArray();
        
            foreach ($result as $wine) {
                if (in_array(["wine_id" => $wine['id']], $checkWasAdded)) {
                    $favorite = true;
                } else {
                    $favorite = false;
                }
                $wine->favorite = $favorite;
            };
        };

        $added_wines = Wine::select('id')->where('approved', [true])->count();
        $registered_users = User::select('id')->count();
        $added_opinions = Opinion::select('id')->count();
        $added_rates = Rate::select('id')->count();


        
        return Inertia::render('Welcome', [
            'notifications' => $request->get('notifications'),
            'new_notifications' => $request->get('new_notifications'),
            'wines' => $result,
            'filter' => $request->query(),
            'total_wines' => $total_results,
            'added_wines' => $added_wines,
            'registered_users' => $registered_users,
            'added_opinions' => $added_opinions,
            'added_rates' => $added_rates
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
        $selectedList = $request->get('selectedList');
   
        $values = ['wineColor' => $color, 'wineTaste' => $taste, 'wineType' => $type, 'wineCountries' => $countries, 'wineVol' => $vol, 'winePrize' => $prize, 'alcoholFree' => $alcoholFree, 'selectedList' => $selectedList];
        $cookie = setcookie('user_filter', json_encode($values), time()+172800);

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
        $message = 'Wino zostało dodane i oczekuje teraz na weryfikację. Poinformujemy Cię jeżeli ją przejdzie.';
        return redirect('/')->with('message', $message);
    }

    public function add(Request $request)
    {
        return Inertia::render('Wine/AddWine', [
            'notifications' => $request->get('notifications')
        ]);
        
    }

    public function addToFavorite(Request $request)
    {
        $user_id = Auth::id();
        $wine_id = $request->get('wine_id');
        $checkWasAdded = Favorite::select('id')->where('user_id', $user_id)->where('wine_id', $wine_id)->first();
        if(!$checkWasAdded) {
            $addToFavorite = Favorite::create([
                'user_id' => $user_id,
                'wine_id' => $wine_id
            ]);
        };

        return redirect()->back();
    }

    public function removeFromFavorite(Request $request)
    {
        $user_id = Auth::id();
        $wine_id = $request->get('wine_id');
        $wine = Favorite::select('id')->where('user_id', $user_id)->where('wine_id', $wine_id)->first();
        if($wine) {
            $wine->delete();
        };

        return redirect()->back();
    }

    public function show(Request $request, int $wineId, string $wineName)
    {
        $wine = Wine::findOrFail($wineId);
        $user_id = Auth::id();
        $favorites = Favorite::leftJoin('users', 'users.id', '=', 'favorites.user_id')->select('favorites.user_id', 'users.nick', 'users.avatar', 'users.sex')->where('wine_id', $wineId);
        $total_favorites = $favorites->count();
        $users_favorite = $favorites->take(40)->get();
        $favorite = false;

        if ($user_id) {
            $checkWasAdded = $favorites->where('user_id', $user_id)->first();
            if ($checkWasAdded) {
                $favorite = true;
            } else {
                $favorite = false;
            }
        }
        $wine->favorite = $favorite;
        
        $opinions = Opinion::leftJoin('rates', function($join){
            $join->on('opinions.wine_id', '=', 'rates.wine_id')
                 ->on('opinions.user_id', '=', 'rates.user_id');
        })->with('user:id,nick,sex,avatar')->select('opinions.id', 'opinions.user_id', 'opinions.wine_id', 'opinions.opinion', 'opinions.created_at', 'rates.rate')
        ->where('opinions.wine_id', $wineId);
        $total_opinions = $opinions->count();

        $selectedList = $request->get('selectedList');
        if (!$selectedList) {
            $selectedList = "Najnowsze opinie";
        }
        switch ($selectedList) {
            case "Najnowsze opinie":
                $opinions->orderBy('opinions.created_at', 'DESC');
                break;
            case "Najstarsze opinie":
                $opinions->orderBy('opinions.created_at', 'ASC');
                break;
            case "Najwyżej ocenione":
                $opinions->orderBy('rates.rate', 'DESC');
                break;
            case "Najniżej ocenione":
                $opinions->orderBy('rates.rate', 'ASC');
                break;
        }

        $opinions = $opinions->paginate(6)->appends(request()->query())->onEachSide(0.5);

        $rate = Rate::select('rate')->where('wine_id', $wineId);
        $total_rates = $rate->count("rate");
        $avg_rate = $rate->avg("rate");
        $user_rate = null;

        $user_id = Auth::id();
        if ($user_id) {            
            $user_rate = $rate->where('user_id', $user_id)->first();
        };
  
        return Inertia::render('Wine/Wine', [
            'notifications' => $request->get('notifications'),
            'new_notifications' => $request->get('new_notifications'),
            'wine' => $wine,
            'opinions' => $opinions,
            'avg_rate' => $avg_rate,
            'user_rate' => $user_rate,
            'total_rates' => $total_rates,
            'total_opinions' => $total_opinions,
            'total_favorites' => $total_favorites,
            'users_favorite' => $users_favorite,
            'selected_list' => $selectedList
        ]);
    }

    public function find(Request $request, string $wineName) {
        $wines = Wine::leftJoin('rates', 'wines.id', '=', 'rates.wine_id')->select('wines.id', 'wines.name', 'wines.color', 'wines.taste', 'wines.country', 'wines.type', 'wines.image', 'wines.prize', 'wines.vol', 'wines.dishes', 'wines.author_id', 'wines.approved', 'wines.created_at',  Rate::raw("avg(rates.rate) as rate"))
        ->groupBy("wines.id")->where('approved', true)->where('name', 'like', '%' . $wineName. '%');
        $total_wines = $wines->get()->count();
        $wines = $wines->paginate(12)->onEachSide(0.5);

        $user_id = Auth::id();
        if ($user_id) {
            $checkWasAdded = Favorite::select('wine_id')->where('user_id', $user_id)->get()->toArray();
        
            foreach ($wines as $wine) {
                if (in_array(["wine_id" => $wine['id']], $checkWasAdded)) {
                    $favorite = true;
                } else {
                    $favorite = false;
                }
                $wine->favorite = $favorite;
            };
        };

        $added_wines = Wine::select('id')->where('approved', [true])->count();
        $registered_users = User::select('id')->count();
        $added_opinions = Opinion::select('id')->count();
        $added_rates = Rate::select('id')->count();

        return Inertia::render('Search', [
            'notifications' => $request->get('notifications'),
            'new_notifications' => $request->get('new_notifications'),
            'wines' => $wines,
            'total_wines' => $total_wines,
            'added_wines' => $added_wines,
            'registered_users' => $registered_users,
            'added_opinions' => $added_opinions,
            'added_rates' => $added_rates,
            'search_phrase' => $wineName
        ]);
    }

    // public function update(Request $request, Post $post)
    // {
    //     $this->authorize('update', $post);
    //     $validated = $request->validate([
    //         'title' => 'required|string|max:10',
    //         'body' => 'required|string|max:255'
    //     ]);

    //     $post->update($validated);

    //     return redirect(route('posts.index'));
    // }

    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        $post->delete();
        return redirect(route('posts.index'));
    }
}
