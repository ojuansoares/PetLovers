import React from 'react';
import "../styles/bg17.css"
import "../index.css"

export default function ListaClientes() {
    return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Clientes</h2>
                <hr></hr>
                <div className="list-group">
                    <a href="/cliente/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Cliente 1
                    </a>
                    <a href="/cliente/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Cliente 2
                    </a>
                    <a href="/cliente/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Cliente 3
                    </a>
                    <a href="/cliente/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Cliente 4
                    </a>
                    <a href="/cliente/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Cliente 5
                    </a>
                    <a href="/cliente/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Cliente 6
                    </a>
                </div>
            </div>
        </div>
    )
}