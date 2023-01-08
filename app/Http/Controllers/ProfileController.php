<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function edit(Request $request)
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
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
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
