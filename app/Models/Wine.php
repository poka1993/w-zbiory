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
