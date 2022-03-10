import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan: 'Nasi Goreng',
        }
    }


    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan: makanan_baru
        })
    }

  render() {
    return (
    //   <div>
    //     <h1>{this.state.makanan}</h1>
    //     <button onClick={() => this.setState({makanan: "Bakso"})}>Ganti Makanan</button>
    //   </div>
      <div>
      <h1 className="text-3xl font-bold">{this.state.makanan}</h1>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => this.gantiMakanan("Bakso Ganti")}>Ganti Makanan</button>
      <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
    </div>
    )
  }
}
