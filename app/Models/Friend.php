<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friend extends Model
{
    use HasFactory;

    public function user() {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function user_commented() {
        return $this->belongsTo(User::class, 'invited_user');
    }
    
    protected $fillable = [
        'sender_id',
        'invited_id',
        'approved'
    ];
}