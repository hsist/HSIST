<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'profiles';

    protected $fillable = [
        'name',
        'image',
        'creation_date',
        'repository_quantity',
    ];

    protected $cast = [
        'creation_date' => 'datetime'
    ];
}
