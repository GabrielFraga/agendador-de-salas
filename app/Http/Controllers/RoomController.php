<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rooms;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

use App\Models\ValidationRoom;

class RoomController extends Controller
{
    private $model;

    public function __construct(Rooms $rooms)
    {
        $this->model = $rooms;
    }

    public function get(Request $request){

        $rooms = $this->model->where($request->all())->get();

        if(!count($rooms) > 0){
            return response()->json([],Response::HTTP_OK);
        }

        return response()->json($rooms, Response::HTTP_OK);
    }

    public function store(Request $request){

        $validator = Validator::make(
            $request->all(),ValidationRoom::RULE_ROOM
        );

        if($validator->fails()){
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $rooms = $this->model->create($request->all());

        return response()->json($rooms, Response::HTTP_CREATED);
    }

    public function update($id, Request $request){
        $rooms = $this->model->find($id);

        if(!$rooms){
            return response()->json('Value not found',Response::HTTP_NOT_FOUND);
        }

        $rooms->update($request->all());

        return response()->json($rooms, Response::HTTP_OK);

    }

    public function destroy($id){
        $rooms = $this->model->find($id);

        if(!$rooms){
            return response()->json('Value not found',Response::HTTP_NOT_FOUND);
        }

        $rooms->delete();

        return response()->json(null, Response::HTTP_OK);
    }
}
