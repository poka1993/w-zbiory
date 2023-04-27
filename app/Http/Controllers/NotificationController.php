<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use App\Models\Friend;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function readNotification(Request $request)
    {
        $notification_id = $request->get('notification_id');
        $notification = Notification::where('id', $notification_id)->first();
        if ($notification) {
            $notification->update([
                'readed' => true
            ]);
        }
    }

    public function list(Request $request)
    {
        $user_id = Auth::id();
        $all_notifications = Notification::
            leftjoin('users', 'users.id', '=', 'generating_user_id')->
            leftjoin('wines', 'wines.id', '=', 'wine_id')->
            select('notifications.id', 'notifications.message', 'notifications.readed', 'notifications.created_at', 'notifications.updated_at', 'users.id as user_id', 'users.nick as user_nick', 'users.avatar as user_avatar', 'users.sex as user_sex', 'wines.id as wine_id', 'wines.name as wine_name', 'wines.image as wine_image')->
            where('user_id', $user_id)->orderBy('notifications.created_at', 'DESC');

        $selectedList = $request->get('selectedList');     
        if (!$selectedList) {
            $selectedList = "Wszystkie powiadomienia";
        };
        switch ($selectedList) {
            case "Wszystkie powiadomienia":
                $all_notifications;
                break;
            case "Tylko nowe powiadomienia":
                $all_notifications->where('readed', false);
                break;
        };

        $all_notifications = $all_notifications->paginate(12)->appends(request()->query())->onEachSide(0.5);  

        return Inertia::render('Notifications/Notifications', [
            'notifications' => $request->get('notifications'),
            'new_notifications' => $request->get('new_notifications'),
            'all_notifications' => $all_notifications,
            'selected_list' => $selectedList
        ]);
    }

    public function shareWine(Request $request)
    {
        $user_id = Auth::id();
        $wine_id = $request->get('wine_id');
        $message;
            $friends = Friend::select('invited_id', 'sender_id')->
            where(function ($query) use ($user_id) {
                $query->where('invited_id', $user_id)->orWhere('sender_id', $user_id);
            })->
            where('approved', true)->get()->toArray();
            if ($friends) {
                foreach ($friends as $friend) {
                    $notification_user;
                    if ($friend["invited_id"] !== $user_id) {
                        $notification_user = $friend["invited_id"];
                    } else {
                        $notification_user = $friend["sender_id"];
                    };
                    $delete_old_notification = Notification::where('message', 'recommendsWine')->where('user_id', $notification_user)->
                    where('generating_user_id', $user_id)->where('wine_id', $wine_id)->limit(1)->delete();
                    $new_notification = Notification::create([
                        'message' => 'recommendsWine',
                        'user_id' => $notification_user,
                        'generating_user_id' => $user_id,
                        'wine_id' => $wine_id
                    ]);
                };
                $message = "Twoi znajomi zostali powiadomieni, że polecasz te wino.";
            } else {
                $message = "Nie można polecić wina ponieważ nie posiadasz żadnych znajomych w serwisie.";
            };



        return redirect()->back()->with('message', $message);
    }

}


// $user_id = Auth::id();
// if ($user_id) {
//     $checkWasAdded = Favorite::select('wine_id')->where('user_id', $user_id)->get()->toArray();

//     foreach ($result as $wine) {
//         if (in_array(["wine_id" => $wine['id']], $checkWasAdded)) {
//             $favorite = true;
//         } else {
//             $favorite = false;
//         }
//         $wine->favorite = $favorite;
//     };
// };