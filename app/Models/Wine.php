<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wine extends Model
{
    use HasFactory;

    public function user() {
        return $this->belongsTo(User::class);
    }
    
    public function opinion() {
        return $this->hasMany(Opinion::class);
    }

    public function rate() {
        return $this->hasMany(Rate::class);
    }

    public function favorite() {
        return $this->hasMany(Favorite::class);
    }

    public function notification() {
        return $this->hasMany(Notification::class);
    }

    protected $fillable = [
        'name',
        'color',
        'taste',
        'type',
        'image',
        'country',
        'vol',
        'prize',
        'dishes',
        'description',
        'author_id',
        'approved'
    ];

    protected $casts = [
        'dishes' => 'array'
    ];
}
