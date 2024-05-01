<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OS extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $table = 'os';

    public function getRouteKeyName() {
        return 'uuid';
    }
}
