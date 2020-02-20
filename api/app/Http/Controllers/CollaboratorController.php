<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Collaborators;
use Symfony\Component\HttpFoundation\Response;

use App\Models\ValidationCollaborator;


class CollaboratorController extends Controller
{
    private $model;

    public function __construct(Collaborators $collaborators)
    {
        $this->model = $collaborators;
    }

    public function get(){
        $collaborators = $this->model->all();

        if(!count($collaborators) > 0){
            return response()->json([],Response::HTTP_OK);
        }

        return response()->json($collaborators, Response::HTTP_OK);
    }

    public function store(Request $request){

        $validator = Validator::make(
            $request->all(),ValidationCollaborator::RULE_COLLABORATOR
        );
        if($validator->fails()){
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $collaborators = $this->model->create($request->all());

        return response()->json($collaborators,Response::HTTP_CREATED);
    }

    public function update($id, Request $request){
        $collaborators = $this->model->find($id);

        if(!$collaborators){
            return response()->json('Value not found',Response::HTTP_NOT_FOUND);
        }

        $validator = Validator::make(
            $request->all(),ValidationCollaborator::RULE_COLLABORATOR
        );
        if($validator->fails()){
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }


        $collaborators->update($request->all());

        return response()->json($collaborators, Response::HTTP_OK);

    }

    public function destroy($id){
        $collaborators = $this->model->find($id);

        if(!$collaborators){
            return response()->json('Value not found',Response::HTTP_NOT_FOUND);
        }

        $collaborators->delete();

        return response()->json(null, Response::HTTP_OK);
    }
}
