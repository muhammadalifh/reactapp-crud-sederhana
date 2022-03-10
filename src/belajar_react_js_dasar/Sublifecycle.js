import React, { Component } from 'react'

export default class Sublifecycle extends Component {

    componentWillUnmount() {
        this.props.ubah_nama('Jordi')
    }

  render() {
    return (
      <div>
          <h2 className="text-3xl font-bold">Halo dari Component Sub Lifecycle</h2>
            {/* <p>Halo namaku {this.props.nama_orang}</p> */}
      </div>
    )
  }
}
