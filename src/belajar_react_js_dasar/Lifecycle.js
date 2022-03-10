import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'

export default class Lifecycle extends Component {
constructor(props) {
  super(props)

  this.state = {
    nama_orang : 'Fikri',
    data: {},
    tampilanHalamanSubLifecycle: false,
  }
}

// dapaet dari https://jsonplaceholder.typicode.com/
componentDidMount() { // fungsinya ambil data dari API lalu di tampung di state
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        this.setState({
            data: json
        })
    })
}

    ubah_nama(value){
        this.setState({
            nama_orang : value
        })
    }

    render() {
    return (
      <div>
        <h2 className="text-3xl font-bold">Halo Dari Lifecycle</h2>
        <p>Halo namaku {this.state.nama_orang}</p>
        {this.state.tampilanHalamanSubLifecycle && <Sublifecycle ubah_nama={(value) => this.ubah_nama(value)} />}
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => this.setState({tampilanHalamanSubLifecycle: !this.state.tampilanHalamanSubLifecycle})}>Tampil Halaman Ubah Nama</button>
      </div>
    )
  }
}
