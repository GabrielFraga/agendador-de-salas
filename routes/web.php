<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => '/collaborator'], function () use ($router) {

    $router->get("/", 'CollaboratorController@get');
    $router->post("/", 'CollaboratorController@store');
    $router->put("{id}", 'CollaboratorController@update');
    $router->delete("{id}", 'CollaboratorController@destroy');
});


$router->group(['prefix' => '/room'], function () use ($router) {

    $router->get("/", 'RoomController@get');
    $router->post("/", 'RoomController@store');
    $router->put("{id}", 'RoomController@update');
    $router->delete("{id}", 'RoomController@destroy');
});
