<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FriendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function invite(Request $request)
    {
        $sender_id = Auth::id();
        $invited_id = $request->get('user_id');
        $checkWasInRelation_1 = Friend::where('sender_id', $sender_id)->where('invited_id', $invited_id)->first();
        $checkWasInRelation_2 = null;
        if (!$checkWasInRelation_1) {
            $checkWasInRelation_2 = Friend::where('invited_id', $sender_id)->where('sender_id', $invited_id)->first();
            if (!$checkWasInRelation_2) {
                $new_friendship = Friend::create([
                    'sender_id' => $sender_id,
                    'invited_id' => $invited_id,
                ]);
                $new_notification = Notification::create([
                    'message' => 'inviteToFriend',
                    'user_id' => $invited_id,
                    'generating_user_id' => $sender_id
                ]);
            };
        };
        
        return redirect()->back();
        // return redirect()->back()->with('success', 'Twoja opinia została opublikowana, dziękujemy.');
    }

    public function remove(Request $request)
    {
        $sender_id = Auth::id();
        $invited_id = $request->get('user_id');
        $checkWasInRelation_1 = Friend::select('id')->where('sender_id', $sender_id)->where('invited_id', $invited_id)->first();
        // invited == 1
        // sender == 3
        if ($checkWasInRelation_1) {
            $checkWasInRelation_1->delete();
            $delete_notification = Notification::
            where(function ($query) use ($invited_id, $sender_id) {
                $query->where('message', 'approvedFriend')->where('user_id', $sender_id)->where('generating_user_id', $invited_id);
            })->
            orWhere(function ($query) use ($invited_id, $sender_id) {
                $query->where('message', 'inviteToFriend')->where('user_id', $invited_id)->where('generating_user_id', $sender_id);
            })->delete();
        } else {
            $checkWasInRelation_2 = Friend::select('id')->where('invited_id', $sender_id)->where('sender_id', $invited_id)->first();
            if ($checkWasInRelation_2) {
                $checkWasInRelation_2->delete();
                $delete_notification = Notification::
                 where(function ($query) use ($invited_id, $sender_id) {
                    $query->where('message', 'approvedFriend')->where('user_id', $invited_id)->where('generating_user_id', $sender_id);
                })->
                orWhere(function ($query) use ($invited_id, $sender_id) {
                    $query->where('message', 'inviteToFriend')->where('user_id', $sender_id)->where('generating_user_id', $invited_id);
                })->delete();
            };
        };        
        return redirect()->back();
        // return redirect()->back()->with('success', 'Twoja opinia została opublikowana, dziękujemy.');
    }

    public function approve(Request $request)
    {
        $invited_id = Auth::id();
        $sender_id = $request->get('user_id');
        $friendship = Friend::select('id', 'approved')->where('sender_id', $sender_id)->where('invited_id', $invited_id);
        $checkWasInvited = $friendship->first();
        if ($checkWasInvited && (!$checkWasInvited->approved)) {
            $friendship->update(['approved' => true]);
            $new_notification_1 = Notification::create([
                'message' => 'approvedFriend',
                'user_id' => $sender_id,
                'generating_user_id' => $invited_id
            ]);
            $new_notification_2 = Notification::create([
                'message' => 'approvedFriend',
                'user_id' => $invited_id,
                'generating_user_id' => $sender_id
            ]);
            $delete_notification = Notification::where('message', 'inviteToFriend')->where('user_id', $invited_id)->where('generating_user_id', $sender_id)->delete();
        };      
        return redirect()->back();
        // return redirect()->back()->with('success', 'Twoja opinia została opublikowana, dziękujemy.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Opinion  $opinion
     * @return \Illuminate\Http\Response
     */
    public function show(Opinion $opinion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Opinion  $opinion
     * @return \Illuminate\Http\Response
     */
    public function edit(Opinion $opinion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Opinion  $opinion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Opinion $opinion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Opinion  $opinion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Opinion $opinion)
    {
        //
    }
}
