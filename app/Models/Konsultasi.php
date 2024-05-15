<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Konsultasi extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $table = 'konsultasi';

    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public function kerusakan()
    {
        return $this->belongsTo(Kerusakan::class);
    }
}
