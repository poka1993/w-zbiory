<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Notification;

class FetchNotifications
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user_id = Auth::id();
        $notifications = [];
        $new_notifications = null;
        if ($user_id) {
            $notifications = Notification::
                leftjoin('users', 'users.id', '=', 'generating_user_id')->
                leftjoin('wines', 'wines.id', '=', 'wine_id')->
                select('notifications.id', 'notifications.message', 'notifications.readed', 'notifications.created_at', 'notifications.updated_at', 'users.id as user_id', 'users.nick as user_nick', 'users.avatar as user_avatar', 'users.sex as user_sex', 'wines.id as wine_id', 'wines.name as wine_name', 'wines.image as wine_image')->
                where('user_id', $user_id)->orderBy('notifications.created_at', 'DESC')->take(5)->get()->toArray();
            $new_notifications =  Notification::where('user_id', $user_id)->where('notifications.readed', false)->get()->count();
        }
        $request->merge(array("notifications" => $notifications, "new_notifications" => $new_notifications,));
        return $next($request);
    }
}
