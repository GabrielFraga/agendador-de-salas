<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rooms;

class RoomController extends Controller
{
    private $model;

    public function __construct(Rooms $rooms)
    {
        $this->model = $rooms;
    }

    public function get(Request $request){
        // $rooms = $this->model->all();
        $rooms = $this->model->where([
            ['has_computer', '=', $request->input('has_computer')],
            ['has_projector', '=', $request->input('has_projector')],
            ['has_video_chat', '=', $request->input('has_video_chat')],
            ['qntd_chairs', '>=', $request->input('qntd_chairs')]
            ])->get();

        return response()->json($rooms);
    }

    public function store(Request $request){
        $rooms = $this->model->create($request->all());

        return response()->json($rooms);
    }

    public function update($id, Request $request){
        $this->model->find($id)->update($request->all());
        $rooms = $this->model->find($id);

        return response()->json($rooms);

    }

    public function destroy($id){
        $rooms = $this->model->find($id)->delete();

        return response()->json(null);
    }
}
