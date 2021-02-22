<?php namespace App\Controllers;

class Anasayfa extends BaseController
{
	public function index()
	{
		return view('index');
	}


	public function girisyap(){

	    return view('login');
    }
    public function tablo(){
	    return view('tablo');
    }
	//--------------------------------------------------------------------

}
