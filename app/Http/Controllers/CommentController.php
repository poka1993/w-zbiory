<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CommentController extends Controller
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
    public function store(Request $request)
    {
        $user_id = Auth::id();
        $commented_user = $request->get('commented_user');
        $comment = $request->get('comment');
        $validated = $request->validate([
            'commented_user' => 'required|int',
            'comment' => 'required|string|min:10|max:2000',
        ], [
            'required' => 'Przed wysłaniem należy uzupełnić treść komentarza.',
            'min' => 'Komentarz musi zawierać minimalnie :min znaków.',
            'max' => 'Komentarz może zawierać maksymalnie :max znaków.',
        ]);

        $new_opinion = Comment::create([
            'user_id' => $user_id,
            'commented_user' => $commented_user,
            'comment' => $comment
        ]);
        
        if ($user_id !== $commented_user) {
            $new_notification = Notification::create([
                'message' => 'addedComment',
                'user_id' => $commented_user,
                'generating_user_id' => $user_id,
            ]);
        }

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
