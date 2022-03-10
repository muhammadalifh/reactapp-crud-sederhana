import React from 'react'

const FormComponent = ({nama, username, email_address, nomor_hp, handleChange, handleSubmit, id}) => {
    return (
    <form onSubmit={handleSubmit}>
        <div class="main w-max m-auto mt-10">
            <div class="login">
                <h2 class="text-2xl mb-6 justify-center">{id ? "Edit Data" : "Tambah Data"}</h2>
                <div class="flex border rounded text-gray-500 mb-4">
                    <input onChange={(event) => handleChange(event)} value={nama} name="nama" class="outline-none px-2 h-full py-2 text-lg" type="text" placeholder="nama" />
                </div>
                <div class="flex border rounded text-gray-500 mb-4">
                    <input onChange={(event) => handleChange(event)} value={username} name="username" class="outline-none px-2 h-full py-2 text-lg" type="text" placeholder="username" />
                </div>
                <div class="flex border rounded text-gray-500 mb-4">
                    <input onChange={(event) => handleChange(event)} value={email_address} name="email_address" class="outline-none px-2 h-full py-2 text-lg" type="email" placeholder="email address" />
                </div>

                <div class="password flex border rounded text-gray-500 mb-4">
                    <input onChange={(event) => handleChange(event)} value={nomor_hp} name="nomor_hp" class="outline-none px-2 h-full py-2 text-lg" type="number" placeholder="nomor hp" />
                </div>

                <div class="show_info text-sm mb-4 w-max text-red-400"></div>

                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">
                        Submit
                    </button>  
            </div>
        </div>
    </form>
    )
}

export default FormComponent