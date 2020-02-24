<?php
namespace App\Models;

class ValidationAppointment {

    const RULE_APPOINTMENT = [
                'date_start'=>'date|required',
                'date_end'=>"date|after:date_start|required",
                'collaborator_id'=>"required",
                'room_id'=>"required",
    ];
}
