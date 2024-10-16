@extends('layouts.app')

@section('content')
    <h1>Daftar Pengusulan</h1>
    <a href="{{ route('pengusulan.create') }}">Tambah Pengusulan</a>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Jenis Usulan</th>
                <th>Identitas Pengusul</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            @foreach($pengusulan as $item)
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>{{ $item->jenis_usulan }}</td>
                    <td>{{ $item->identitas_pengusul }}</td>
                    <td>
                        <a href="{{ route('pengusulan.edit', $item->id) }}">Edit</a>
                        <form action="{{ route('pengusulan.destroy', $item->id) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit">Hapus</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
