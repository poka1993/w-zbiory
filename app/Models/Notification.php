<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function generating_user() {
        return $this->belongsTo(User::class, 'generating_user_id');
    }

    public function wine() {
        return $this->belongsTo(Wine::class, 'wine_id');
    }
    
    protected $fillable = [
        'message',
        'user_id',
        'generating_user_id',
        'wine_id',
        'readed'
    ];
}