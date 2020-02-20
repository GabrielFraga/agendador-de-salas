<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rooms extends Model {

    protected $table = 'room';

    protected $fillable = [
        'name',
        'qntd_chairs',
        'has_computer',
        'has_projector',
        'has_video_chat'
    ];

}
