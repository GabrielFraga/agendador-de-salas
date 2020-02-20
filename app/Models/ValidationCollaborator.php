<?php
namespace App\Models;

class ValidationCollaborator {

    const RULE_COLLABORATOR = [
                "name"=>"required",
                "email"=>"required|email",
                "phone"=> "nullable"
    ];
}
