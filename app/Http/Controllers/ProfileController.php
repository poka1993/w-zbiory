<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use App\Models\Comment;
use App\Models\Favorite;
use App\Models\Opinion;
use App\Models\Wine;
use App\Models\Rate;
use App\Models\Friend;
use Cache;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Rules\Recaptcha;
use Mail;
use App\Mail\SendMail;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    // public function userOnlineStatus()
    // {
    //     $users = User::all();
    //     foreach ($users as $user) {
    //         if (Cache::has('user-is-online-' . $user->id))
    //             echo $user->name . " jest online. Last seen: " . Carbon::parse($user->last_seen)->diffForHumans() . " <br>";
    //         else
    //             echo $user->name . " jest offline. Last seen: " . Carbon::parse($user->last_seen)->diffForHumans() . " <br>";
    //     }
    // }

    public function show(Request $request, int $userId, string $userNick)
    {
        $user_id = Auth::id();
        $user = User::select('id', 'name', 'created_at', 'avatar', 'nick', 'sex', 'birthday', 'locality', 'description', 'last_seen')->where('id', $userId)->first();
        $online;
        $comments_data = Comment::with('user:id,nick,sex,avatar')->where('commented_user', $userId);
        $total_comments = $comments_data->count();
        $comments = $comments_data->latest()->paginate(6)->onEachSide(0.5);

        $friendship = null;
        if ($user_id && ($user_id !== $userId)) {
            $sender = Friend::select('id', 'approved')->where('sender_id', $user_id)->where('invited_id', $userId)->first();
            $invited = null;
            if($sender) {
                if ($sender->approved) {
                    $friendship = 'friends';
                } else {
                    $friendship = 'sender';
                }
            } else {
                $invited = Friend::select('id', 'approved')->where('invited_id', $user_id)->where('sender_id', $userId)->first();  
                if($invited) {
                    if ($invited->approved) {
                        $friendship = 'friends';
                    } else {
                        $friendship = 'invited';
                    }
                }
            };
        }
        $user->friendship = $friendship;
////////////////
        $selected_list = $request->get('selectedList');
        if (!$selected_list) {
            $selected_list = "opinions";
        }
        $wines = null;
        $total_wines = null;
        $opinions = null;
        $total_opinions = null;
        $users = null;
        $total_friends = null;

        switch ($selected_list) {
            case "opinions":
                $opinions_data = Opinion::with('wine:id,name,image')->where('opinions.user_id', $userId)->select('opinions.id', 'opinions.user_id', 'opinions.wine_id', 'opinions.opinion', 'opinions.created_at');
                $total_opinions = $opinions_data->count();
                $opinions = $opinions_data->leftJoin('rates', function($join){
                    $join->on('opinions.wine_id', '=', 'rates.wine_id')
                         ->on('opinions.user_id', '=', 'rates.user_id');
                })->select('opinions.id', 'opinions.user_id', 'opinions.wine_id', 'opinions.opinion', 'opinions.created_at', 'rates.rate')->latest()->paginate(6)->onEachSide(0.5);
                break;

            case "wines":

                $wines = Wine::
                leftJoin('rates', 'wines.id', '=', 'rates.wine_id')->
                leftJoin('favorites', 'wines.id', '=', 'favorites.wine_id')->
                select('wines.id', 'wines.name', 'wines.color', 'wines.taste', 'wines.country', 'wines.type', 'wines.image', 'wines.prize', 'wines.vol', 'wines.dishes', 'wines.author_id', 'wines.approved', 'wines.created_at',  Rate::raw("avg(rates.rate) as rate"))
                ->groupBy("wines.id")->where('favorites.user_id', $userId)->where('wines.approved', true);
                $total_wines = $wines->get()->count();
                $wines = $wines->paginate(9)->appends(request()->query())->onEachSide(0.5);
        
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
                break;

            case "friends":
                $users = User::
                leftjoin('friends as senders', 'users.id', '=', 'senders.sender_id')->
                leftjoin('friends as invited', 'users.id', '=', 'invited.invited_id')->
                select('users.id', 'name', 'users.created_at', 'avatar', 'nick', 'sex', 'birthday', 'locality', 'last_seen')->
                where(function ($query) use ($userId) {
                    $query->where('senders.approved', true)->where('senders.invited_id', $userId);
                })->
                orWhere(function ($query) use ($userId) {
                    $query->where('invited.approved', true)->where('invited.sender_id', $userId);
                });
                $total_friends = $users->get()->count();
                $users = $users->groupBy("users.nick")->paginate(12)->appends(request()->query())->onEachSide(0.5);

                foreach ($users as $user_checked) {
                    if (Cache::has('user-is-online-' . $user_checked->id)) {
                        $online = true;
                    } else {
                        $online = false;
                    }
                    $user_checked->online = $online;
                }

                break;
        }      
        if (Cache::has('user-is-online-' . $user->id)) {
            $online = true;
        } else {
            $online = false;
        }

        return Inertia::render('Profile/ProfilePage', [
            'notifications' => $request->get('notifications'),
            'new_notifications' => $request->get('new_notifications'),
            'user' => $user,
            'online' => $online,
            'opinions' => $opinions,
            'total_opinions' => $total_opinions,
            'total_comments' => $total_comments,
            'comments' => $comments,
            'wines' => $wines,
            'total_wines' => $total_wines,
            'selected_list' => $selected_list,
            'total_friends' => $total_friends,
            'friends' => $users
        ]);
    }

    public function list(Request $request)
    {
        $users = User::
        leftJoin('opinions', 'users.id', '=', 'opinions.user_id')->
        leftJoin('favorites', 'users.id', '=', 'favorites.user_id')->
        select('users.id', 'name', 'users.created_at', 'avatar', 'nick', 'sex', 'birthday', 'locality', 'last_seen', Opinion::raw("count(DISTINCT(opinions.id)) as opinions"), Favorite::raw("count(DISTINCT(favorites.id)) as favorites"))->
        groupBy("users.id"); 
        $searchPhrase = $request->get('searchPhrase');
        $selectedList = $request->get('selectedList');

        if ($searchPhrase) {
            $users->where('nick', 'like', $searchPhrase. '%');
        };
                
        if (!$selectedList) {
            $selectedList = "Najnowsze konta";
        };
        switch ($selectedList) {
            case "Najnowsze konta":
                $users->orderBy('users.created_at', 'DESC');
                break;
            case "Ostatnio online":
                $users->orderBy('last_seen', 'DESC');
                break;
            case "Alfabetycznie":
                $users->orderBy('nick', 'ASC');
                break;
            case "Najwięcej opinii":
                $users->orderBy('opinions', 'DESC');
                break;
        };


        $users = $users->paginate(12)->appends(request()->query())->onEachSide(0.5);  
        

        // join('users', 'users.id', '=', 'opinions.user_id')->select('users.id', 'name', 'users.created_at', 'avatar', 'nick', 'sex', 'birthday', 'locality', 'last_seen')->withcount('opinions.opinion')->get();

        foreach ($users as $user) {
            if (Cache::has('user-is-online-' . $user->id)) {
                $online = true;
            } else {
                $online = false;
            }
            $user->online = $online;
        }

        return Inertia::render('Users/Users', [
            'notifications' => $request->get('notifications'),
            'new_notifications' => $request->get('new_notifications'),
            'users' => $users,
            'search_phrase' => $searchPhrase,
            'selected_list' => $selectedList
        ]);
    }


    public function edit(Request $request)
    {
        return redirect()->back()->with(
            ['mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status')]
        );
        // return Inertia::render('Profile/Partials/UpdateProfileInformationForm', [
        //     'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
        //     'status' => session('status'),
        // ]);
    }

    /**
     * Update the user's profile information.
     *
     * @param  \App\Http\Requests\ProfileUpdateRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ProfileUpdateRequest $request)
    {
        $user = Auth::user();
        $prevAvatar = $user->avatar;
        $data = $request->validated();

        $request->user()->fill($request->validated());
        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $path = null;
                
        if (!empty($data['avatar'])) {
            $path = $data['avatar']->store('avatars', 'public');
            //$path = $data['avatar']->storeAs('avatars', $user->id() . '.png', 'public');

            if ($path) {
                if ($prevAvatar) {
                    Storage::disk('public')->delete($prevAvatar);
                }
            }

            $request->user()->avatar = $path;
        }
        // //
        // $path = $data['avatar']->store('avatars', 'public');
        // $request->user()->avatar = $path;
        
        // if ($path) {
        //     $request->user()->avatar = $path;
            
        // }
        // //

        $request->user()->save();

        return 
        Redirect::route('profile.edit');
    }

    public function deleteAvatar(Request $request)
    {
        $user = Auth::user();

        if (!empty($user->avatar)) {
            Storage::disk('public')->delete($user->avatar);
            $request->user()->avatar = null;
        }

        $request->user()->save();
    }

    /**
     * Delete the user's account.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ], [
            'required' => 'Te pole jest obowiązkowe.',
            'current_password' => 'Wprowadzone hasło jest nie prawidłowe.'
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function rules(Request $request)
    {
        return Inertia::render('Rules', [
            'notifications' => $request->get('notifications'),
            'new_notifications' => $request->get('new_notifications'),
        ]);
    }

    public function contact(Request $request)
    {
        return Inertia::render('Contact', [
            'notifications' => $request->get('notifications'),
            'new_notifications' => $request->get('new_notifications'),
        ]);
    }

    public function storeContact(Request $request)
    {
        $email = $request->get('email');
        $subject = $request->get('subject');
        $message = $request->get('message');
        $token = $request->get('token');
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'message' => ['required', 'string', 'min: 20', 'max:2500'],
            'subject' => ['required', 'string', 'min: 10', 'max:150'],
            'token' => ['required', new Recaptcha]
        ], [
            'required' => 'Te pole jest obowiązkowe.',
            'min' => 'Pole musi zawierać minimalnie :min znaków.',
            'max' => 'Pole może zawierać maksymalnie :max znaków.',
            'email' => 'Pole nie spełnia kryteriów prawidłowego adresu email.',
        ]);
        $mailData = [
            'email' => $email,
            'title' => $subject,
            'body' => $message
        ];
        Mail::to("kontakt@winozbiory.pl")->send(new SendMail($mailData));
        return redirect()->back();
    }
}
