<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminPanelController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\WineController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Route::get('/', [UserController::class, 'index']);

Route::get('/', [WineController::class, 'index'])->name('dashboard');
Route::get('/filter', [WineController::class, 'filter'])->name('filter');

Route::get('/dashboard', [WineController::class, 'index'])->name('dashboard');

Route::resource('posts', PostController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth']);

Route::get('/post/{postId}', [PostController::class, 'show']);

Route::get('/users', [UserController::class, 'show']);

// Route::get('/wine', [WineController::class, 'show']);

Route::get('/wine-{wineId}-{wineName}', [WineController::class, 'show'])->middleware('changeUrl')->name('wine.show');;


Route::middleware('auth')->group(function () {
    Route::get('/addwine', [WineController::class, 'add']);
    Route::post('/addwine', [WineController::class, 'store'])->name('wine.store');
});

Route::resource('admin', AdminPanelController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth']);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/avatar', [ProfileController::class, 'deleteAvatar'])->name('avatar.delete');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
