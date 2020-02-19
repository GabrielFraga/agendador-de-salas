<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CollaboratorController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function get(){
        return "get " ;
    }

    public function store(Request $request){
        dd($request->all);
    }

    public function update($id, Request $request){
        dd($id, $request->all);
    }

    public function destroy($id){
        dd($id);
    }
}
