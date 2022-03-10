import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Tablecomponent from './TableComponent'
import FormComponent from './FormComponent'

export default class Crud extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        semua: [],
        nama: "",
        username: "",
        email_address: "",
        nomor_hp: "",
        id: "",
        };
    };

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
};

handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.id === "") {
        this.setState({
            semua: [
                ...this.state.semua,
                {
                    id: this.state.semua.length + 1,
                    nama: this.state.nama,
                    username: this.state.username,
                    email_address: this.state.email_address,
                    nomor_hp: this.state.nomor_hp
                }
            ]
        })
    }

    else{
        const semuaUpdate = this.state.semua.filter((semuas) => semuas.id !== this.state.id).map((filterSemuas)=> {
            return filterSemuas
        });

        this.setState({
            semua: [
                ...semuaUpdate,
                {
                    id: this.state.semua.length + 1,
                    nama: this.state.nama,
                    username: this.state.username,
                    email_address: this.state.email_address,
                    nomor_hp: this.state.nomor_hp
                },
            ],
        });

    };



    this.setState({
        nama: "",
        username: "",
        email_address: "",
        nomor_hp: "",
    });
};

    editData = (id) => {
        // const data = this.state.semua.find(item => item.id === id)
        // this.setState({
        //     nama: data.nama,
        //     username: data.username,
        //     email_address: data.email_address,
        //     nomor_hp: data.nomor_hp,
        //     id: data.id
        // })

        const semuaEdit = this.state.semua.filter((semuas) => semuas.id === id).map((filterSemuas)=> {
            return filterSemuas
        });
        this.setState({
            nama: semuaEdit[0].nama,
            username: semuaEdit[0].username,
            email_address: semuaEdit[0].email_address,
            nomor_hp: semuaEdit[0].nomor_hp,
            id: semuaEdit[0].id
        });
    };

    hapusData = (id) => {
        // const semuaHapus = this.state.semua.filter((semuas) => semuas.id !== id).map((filterSemuas)=> {
        //     return filterSemuas
        // });
        // this.setState({
        //     semua: semuaHapus
        // });

        const semuaHapus = this.state.semua.filter((semuas) => semuas.id !== id).map((filterSemuas)=> {
            return filterSemuas
        });

        this.setState({
            semua: semuaHapus
        });
    }

    render() {
        // console.log(this.state.semua);
    return (
        <div>
            <NavbarComponent />
            <br />
            <br />
            <Tablecomponent semua={this.state.semua} editData={this.editData} hapusData={this.hapusData}/>
            <br />
            <br />
            <FormComponent {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
    )
    }
}
