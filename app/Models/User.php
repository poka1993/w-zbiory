<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function posts() {
        return $this->hasMany(Post::class);
    }

    public function wines() {
        return $this->hasMany(Wine::class);
    }

    public function opinion() {
        return $this->hasMany(Opinion::class);
    }

    public function comment() {
        return $this->hasMany(Opinion::class);
    }

    public function rate() {
        return $this->hasMany(Rate::class);
    }

    public function favorite() {
        return $this->hasMany(Favorite::class);
    }

    public function natification() {
        return $this->hasMany(Notification::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nick',
        'name',
        'email',
        'password',
        'sex',
        'birthday',
        'locality',
        'avatar',
        'description'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function isAdmin(): bool {
        return (bool) $this->admin;
    }
}
