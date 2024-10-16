@extends('layouts.app')

@section('content')
    <h1>Tambah Pengusulan</h1>
    <form action="{{ route('pengusulan.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div>
            <label for="jenis_usulan">Jenis Usulan:</label>
            <input type="text" name="jenis_usulan" id="jenis_usulan" required>
        </div>
        <div>
            <label for="identitas_pengusul">Identitas Pengusul:</label>
            <input type="text" name="identitas_pengusul" id="identitas_pengusul" required>
        </div>
        <div>
            <label for="identitas_usulan">Identitas Usulan:</label>
            <input type="text" name="identitas_usulan" id="identitas_usulan" required>
        </div>
        <div>
            <label for="file_proposal">File Proposal:</label>
            <input type="file" name="file_proposal" id="file_proposal">
        </div>
        <div>
            <label for="rencana_anggaran">Rencana Anggaran:</label>
            <input type="number" name="rencana_anggaran" id="rencana_anggaran" step="0.01" required>
        </div>
        <div>
            <label for="dokumen_pendukung">Dokumen Pendukung:</label>
            <input type="file" name="dokumen_pendukung" id="dokumen_pendukung">
        </div>
        <button type="submit">Simpan</button>
    </form>
@endsection
