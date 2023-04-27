<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    use HasFactory;

    public function user() {
        return $this->belongsTo(User::class);
    }
    
    public function wine() {
        return $this->belongsTo(Wine::class);
    }

    public function opinion() {
        return $this->hasMany(Opinion::class);
    }

    protected $fillable = [
        'user_id',
        'wine_id',
        'rate'
    ];
}
