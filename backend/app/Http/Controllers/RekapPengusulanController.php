<?php

namespace App\Http\Controllers;

use App\Models\RekapPengusulan;
use Illuminate\Http\Request;

class RekapPengusulanController extends Controller
{
    public function detailProposal($id)
    {
        $data = RekapPengusulan::findOrFail($id);
        return view('rekap.detail_proposal', compact('data'));
    }

    public function detailTahapan($id)
    {
        $data = RekapPengusulan::findOrFail($id);
        return view('rekap.detail_tahapan', compact('data'));
    }
}
