<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Symfony\Component\HttpFoundation\Response;

use App\Models\ValidationAppointment;

use App\Models\Appointments;
use App\Models\Collaborator;
use App\Models\Rooms;

use Carbon\Carbon;

class AppointmentController extends Controller
{
    private $model;

    public function __construct(Appointments $appointments, Rooms $rooms)
    {
        $this->model = $appointments;
    }

    public function get(){
        $appointments = $this->model
        ->join('room', 'appointment.room_id', '=', 'room.id')
        ->join('collaborator', 'appointment.collaborator_id', '=', 'collaborator.id')
        ->select('appointment.*', 'room.name as room_name', 'collaborator.name as collaborator_name')->get();

        return response()->json($appointments, Response::HTTP_OK);
    }

    public function store(Request $request){

        $validator = Validator::make(
            $request->all(),ValidationAppointment::RULE_APPOINTMENT
        );
        if($validator->fails()){
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $appointments = $this->model->create($request->all());

        return response()->json($appointments,Response::HTTP_CREATED);
    }

    public function update($id, Request $request){
        $appointments = $this->model->find($id);

        if(!$appointments){
            return response()->json('Value not found',Response::HTTP_NOT_FOUND);
        }

        $validator = Validator::make(
            $request->all(),ValidationAppointment::RULE_APPOINTMENT
        );
        if($validator->fails()){
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }


        $appointments->update($request->all());

        return response()->json($appointments, Response::HTTP_OK);

    }

    public function destroy($id){
        $appointments = $this->model->find($id);

        if(!$appointments){
            return response()->json('Value not found',Response::HTTP_NOT_FOUND);
        }

        $appointments->delete();

        return response()->json(null, Response::HTTP_OK);
    }
}
