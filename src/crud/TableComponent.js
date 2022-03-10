import React from 'react'

const TableComponent = ({semua, editData, hapusData}) => {
    return (
        <table class="min-w-full border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
			<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">#</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Nama</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Nomor HP</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Aksi</th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
			{semua.map((semuas, index) =>{
				return (
				<tr key={index} class="bg-white border border-grey-500 md:border-none block md:table-row">
					<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{index+1}</td>
					<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{semuas.nama}</td>
					<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{semuas.username}</td>
					<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{semuas.email_address}</td>
					<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{semuas.nomor_hp}</td>
					<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
						<span class="inline-block w-1/3 md:hidden font-bold">Aksi</span>
						<button onClick={() => editData(semuas.id)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button> <button onClick={() => hapusData(semuas.id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
					</td>
			</tr>
			)
			})}	
		</tbody>
	</table>
    )
}

export default TableComponent