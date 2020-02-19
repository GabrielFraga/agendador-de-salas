<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Collaborators;

class CollaboratorController extends Controller
{
    private $model;

    public function __construct(Collaborators $collaborators)
    {
        $this->model = $collaborators;
    }

    public function get(){
        $collaborators = $this->model->all();

        return response()->json($collaborators);
    }

    public function store(Request $request){
        $collaborators = $this->model->create($request->all());

        return response()->json($collaborators);
    }

    public function update($id, Request $request){
        $this->model->find($id)->update($request->all());
        $collaborators = $this->model->find($id);

        return response()->json($collaborators);

    }

    public function destroy($id){
        $collaborators = $this->model->find($id)->delete();

        return response()->json(null);
    }
}
