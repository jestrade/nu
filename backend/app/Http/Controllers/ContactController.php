<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function Contact(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'subject'=>'required',
            'message' => 'required'
        ]);

        $contact = Contact::create($request->all());

        if ($contact) {
            return [
                "success" => true,
                "data" => $contact
            ];
        } else {
            return [
                "success" => false
            ];
        }
    }
}
