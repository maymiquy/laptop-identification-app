<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kerusakan extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $table = 'kerusakan';

    public function getRouteKeyName() {
        return 'kode_kerusakan';
    }
}
