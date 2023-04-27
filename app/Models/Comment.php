<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function user_commented() {
        return $this->belongsTo(User::class, 'commented_user');
    }
    
    protected $fillable = [
        'user_id',
        'commented_user',
        'comment'
    ];
}