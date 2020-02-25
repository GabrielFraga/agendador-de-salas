<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Symfony\Component\HttpFoundation\Response;

use App\Models\ValidationAppointment;

use App\Models\Appointments;
use App\Models\Rooms;

use Carbon\Carbon;

class AppointmentRoomController extends Controller
{
    private $AppointmentModel;
    private $RoomModel;

    public function __construct(Appointments $appointments, Rooms $rooms)
    {
        $this->AppointmentModel = $appointments;
        $this->RoomModel = $rooms;
    }

    public function getAvaliableRooms(Request $request){

        $start_date = Carbon::parse($request->input('date_start'));
        $end_date =  Carbon::parse($request->input('date_end'));

        $input = $request->except(['date_start', 'date_end']);

        $rooms = $this->RoomModel->
        where($input)->get();

        if(!count($rooms) > 0){
            return response()->json([],Response::HTTP_OK);
        }

        if ($request->input('date_start') && $request->input('date_end')){
            foreach($rooms as $key=>$room){

                $futureAppointments = $this->AppointmentModel
                ->where('room_id', $room->id)
                ->whereDate('date_end','>',Carbon::today()->toDateString())->get();

                if($futureAppointments){
                    foreach($futureAppointments as $app){

                        $appointment_start = Carbon::parse( $app->date_start);
                        $appointment_end = Carbon::parse( $app->date_end);

                        if ( $start_date->between($appointment_start, $appointment_end)
                        || $end_date->between($appointment_start, $appointment_end)
                        ){

                            unset($rooms[$key]);
                        }

                    }
                }
            }
        }
        return response()->json($rooms, Response::HTTP_OK);
    }
}
