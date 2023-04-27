<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use App\Rules\AdultBirthday;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use App\Rules\Recaptcha;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'nick' => 'required|string|max:50|min:3|unique:'.User::class,
            'name' => 'required|string|max:50|min:3',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'sex' => 'required|string|max:20',
            'rules' => 'required|boolean|accepted',
            'birthday' => ['required', 'date', new AdultBirthday()],
            'locality' => 'required|string|max:50|min:3',
            'token' => ['required', new Recaptcha]
        ],
        [
            'required' => 'Te pole jest obowiązkowe.',
            'password.min' => 'Hasło musi zawierać minimalnie :min znaków.',
            'min' => 'Pole musi zawierać minimalnie :min znaki.',
            'max' => 'Pole może zawierać maksymalnie :max znaków.',
            'nick.unique' => 'Istnieje już użytkownik o takim nicku.',
            'email.unique' => 'Ten adres e-mail jest już zajęty.',
            'accepted' => 'Musisz zaakceptować regulamin serwisu.',
            'email' => 'Pole nie spełnia kryteriów prawidłowego adresu email.',
            'confirmed' => 'Podane hasła się nie zgadzają.'
        ]
    );

        $user = User::create([
            'nick' => $request->nick,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'sex' => $request->sex,
            'birthday' => $request->birthday,
            'locality' => $request->locality
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect('/')->with('message', "Dziękujemy za założenie konta i witamy na stronie.");
    }
}
