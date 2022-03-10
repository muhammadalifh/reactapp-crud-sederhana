import React, { Component } from 'react'

export default class Operan extends Component {

    // gantiMakanan = (makanan_baru) => {
    //     this.setState({
    //         makanan: makanan_baru
    //     })
    // }

    render() {
        const {makanan, gantiMakanan} = this.props;
    return (
        <div>
            <h2 className="text-3xl font-bold">Operan State yang menjadi Props : {makanan}</h2>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
        </div>
        )
    }
}
