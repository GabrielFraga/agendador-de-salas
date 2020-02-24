<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointments extends Model {

    protected $table = 'appointment';

    protected $fillable = [
        'date_start',
        'date_end',
        'collaborator_id',
        'room_id'
    ];

}
