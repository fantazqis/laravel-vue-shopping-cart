<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getAllData', 'Mocking\Controllers\Controller@getData');
Route::post('/postData', 'Mocking\Controllers\Controller@postData');
Route::put('/putData', 'Mocking\Controllers\Controller@putData');
Route::patch('/patchData', 'Mocking\Controllers\Controller@patchData');
Route::delete('/deleteData/{id?}', 'Mocking\Controllers\Controller@deleteData');
