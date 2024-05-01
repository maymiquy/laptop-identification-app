<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gejala extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $table = 'gejala';

    public function getRouteKeyName() {
        return 'kode_gejala';
    }
}
