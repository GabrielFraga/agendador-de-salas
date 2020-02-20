<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collaborators extends Model {

    protected $table = 'collaborator';

    protected $fillable = [
        'name',
        'email',
        'phone'
    ];

}
