<?php
namespace App\Models;

class ValidationRoom {

    const RULE_ROOM = [
        "name"=> "String|required",
        "qntd_chairs"=> "required|Numeric",
        "has_computer"=> "required|boolean",
        "has_projector"=> "required|boolean",
        "has_video_chat"=> "required|boolean"
    ];
}
