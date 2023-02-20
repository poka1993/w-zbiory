<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WineController extends Controller
{
    public function filterBy(?string $phrase, ?string $category)
    {
        $posts = Post::with('user:id,name')->latest();

        if ($phrase) {
            $posts->whereRaw('body like ?', ["$phrase%"]);
        }
        
        if ($category) {
            $posts->whereRaw('title like ?', ["$category"]);
        } else {
            $posts->whereRaw('title like "all"');
        }
        

        return $posts->paginate(2);
    }

    public function index(Request $request)
    {
        $phrase = $request->get('phrase');
        $category = $request->get('category');
        
        $result = $this->filterBy($phrase, $category);

        return Inertia::render('Posts/Index', [
            'posts' => $result,
            'prevPhrase' => $phrase,
            'prevCategory' => $category
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:10',
            'body' => 'required|string|max:255'
        ]);

        $request->user()->posts()->create($validated);

        return redirect(route('posts.index'));
    }

    public function add(Request $request)
    {
        return Inertia::render('Wine/AddWine', [

        ]);
    }

    public function show(Request $request)
    {
        return Inertia::render('Wine/Wine', [

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
