<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function __invoke(Request $request)
    {
        $creationDate = new \DateTime($request->registerDate);
        $profile = Profile::firstOrCreate(
            [
                'name' => $request->name
            ], 
            [
                'name' => $request->name,
                'image' => $request->img,
                'creation_date' => $creationDate,
                'repository_quantity' => $request->repos,
            ]
        );


        // return redirect()->route('incomings.index')
        //     ->with('success','Venda criada com sucesso.');
    }


}
