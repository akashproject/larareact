<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;

class PageController extends Controller
{
    //
    public function index($slug)
    {
        $contentMain = Page::where('slug', $slug)->where('status', '1')->first();

        if (! $contentMain) {
            return redirect()->route('website');
        }

        return Inertia::render('page/'.$contentMain->template, compact('contentMain'));
    }
}
