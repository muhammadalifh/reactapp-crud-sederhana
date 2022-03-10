import React from 'react'

const minuman = [
    {
        name: 'Jus Jeruk',
        harga: 10000
    },
    {
        name: 'Jus Apel',
        harga: 12000
    },
    {
        name: 'Jus Mangga',
        harga: 7000
    },
    {
        name: 'Jus Lemon',
        harga: 25000
    },
];

//Reduce
const total_bayar = minuman.reduce((total_harga, minuman) => {
    return total_harga + minuman.harga;
}, 0);

const Map = () => {
  return (
    <div>
        <h2>Map Sederhana</h2>
        <ul>
            {minuman.map(minuman => (
                <li>{minuman.name} - Harga: {minuman.harga}</li>
            ))}
        </ul>

        <h2>Map Filter dengan ketentuan Harga kurang dari 12.000</h2>
        <ul>
            {minuman.filter((minuman) => minuman.harga < 12000)
            .map(minuman => (
                <li>{minuman.name} - Harga: {minuman.harga}</li>
            ))}
        </ul>

        <h2 className="text-3xl font-bold">Reduce dari map sederhana</h2>
        <h3>Total Harga : {total_bayar}</h3>
    </div>
  )
}

export default Map