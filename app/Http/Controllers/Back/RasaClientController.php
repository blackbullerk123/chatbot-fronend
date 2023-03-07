<?php

namespace App\Http\Controllers\back;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;

class RasaClientController extends Controller
{
    public function index()
    {
        return view('chatbot-view/index');
    }

    public function postRasaMessage(Request $request)
    {
        $data = $request->all();
        $client = new Client([
            'headers' => [ 'Content-Type' => 'application/json' ]
        ]);

        $response  = $client->post('http://localhost:5005/webhooks/rest/webhook', [
            'body' => json_encode($data)
        ]);
        
        return response()->json(json_decode($response->getBody()->getContents()));
    }
}
