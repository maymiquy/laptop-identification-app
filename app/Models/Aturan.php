<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aturan extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $table = 'aturan';

    public function getRouteKeyName() {
        return 'kode_aturan';
    }

    public function gejala() {
        return $this->belongsTo(Gejala::class);
    }
}
