<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;

class ChangeProfileUrl
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next)
    {
        $userId = $request->route()->parameters['userId'];
         $userData = User::where('id', $userId)->first();

        if ($userData == null) {
            return redirect('/');
        }

        $userNick = str_replace(" ", "-", $request->route()->parameters['userNick']);
        $userDataNick = str_replace(" ", "-", $userData->nick);

        if ($userDataNick != $userNick) {
            $url = 'profile-' . $userId . '-' . $userDataNick;
            return redirect( '/' . $url);
        }
    
        return $next($request);
    }
}
