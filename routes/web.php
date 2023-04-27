<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminPanelController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\WineController;
use App\Http\Controllers\OpinionController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FriendController;
use App\Http\Controllers\RateController;
use App\Http\Controllers\NotificationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WineController::class, 'index'])->name('dashboard');
Route::get('/dashboard', [WineController::class, 'index'])->name('dashboard');
Route::get('/rules', [ProfileController::class, 'rules'])->name('rules');
Route::get('/filter', [WineController::class, 'filter'])->name('filter');
Route::get('/contact', [ProfileController::class, 'contact'])->name('contact');
Route::post('/contact', [ProfileController::class, 'storeContact'])->name('storeContact');
Route::get('/search-{wineName}', [WineController::class, 'find'])->name('find');

Route::get('status', [ProfileController::class, 'userOnlineStatus']);

Route::post('/storeOpinion', [OpinionController::class, 'store'])->name('storeOpinion');
Route::post('/storeComment', [CommentController::class, 'store'])->name('storeComment');
Route::post('/storeRate', [RateController::class, 'store'])->name('storeRate');


Route::get('/users', [ProfileController::class, 'list']);

Route::get('/wine-{wineId}-{wineName}', [WineController::class, 'show'])->middleware('changeUrl')->name('wine.show');;


Route::middleware('auth')->group(function () {
    Route::delete('/destroyWine', [AdminPanelController::class, 'destroyWine']);
    Route::patch('/publicWine', [AdminPanelController::class, 'publicWine']);
    Route::get('/addwine', [WineController::class, 'add']);
    Route::post('/addwine', [WineController::class, 'store'])->name('wine.store');
    Route::post('/addToFavorite', [WineController::class, 'addToFavorite']);
    Route::delete('/removeFromFavorite', [WineController::class, 'removeFromFavorite']);
    Route::post('/inviteToFriend', [FriendController::class, 'invite']);
    Route::patch('/approveFriend', [FriendController::class, 'approve']);
    Route::delete('/removeFromFriends', [FriendController::class, 'remove']);
    Route::get('/notifications', [NotificationController::class, 'list']);
    Route::post('/addNotification', [NotificationController::class, 'store'])->name('addNotification');
    Route::patch('/readNotification', [NotificationController::class, 'readNotification']);
    Route::post('/shareWine', [NotificationController::class, 'shareWine']);
});

Route::resource('/admin', AdminPanelController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth']);

Route::get('/profile-{userId}-{userNick}', [ProfileController::class, 'show'])->middleware('changeProfileUrl')->name('profile.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/avatar', [ProfileController::class, 'deleteAvatar'])->name('avatar.delete');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
