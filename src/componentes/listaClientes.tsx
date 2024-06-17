import React, { Component } from 'react';
import "../styles/bg17.css"
import "../index.css"

export default class ListaListagens extends Component {
    state = {
        clientes: [] as {
            id: any; 
            nome: string
            nomeSocial: string
        }[]
    }

    componentDidMount() {
        fetch('http://localhost:32831/cliente/clientes')
            .then(res => res.json())
            .then(clientes => this.setState({ clientes }))
            .catch(error => console.error("Error fetching data: ", error));
    }

    render() {
        return (
            <div>
                <div className="bg17"></div>
                <div className="container-fluid fundo-escuro">
                    <h2>Clientes</h2>
                    <hr></hr>
                    <div className="list-group">
                    {this.state.clientes.map(cliente => (
                        <a key={cliente.id} href={`/cliente/${cliente.id}`} className="list-group-item list-group-item-action">
                            Cliente {cliente.id}: {cliente.nomeSocial}
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}