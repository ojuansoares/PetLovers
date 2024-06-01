/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "../index.css"
import "../styles/bg10.css"

export default class ListaServicos extends Component{
    render() {
        return (
        <div>
            <div className="bg10"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Serviços</h2>
                <hr></hr>
                <div className="list-group">
                    <a href="/servico/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Serviço 1
                    </a>
                    <a href="/servico/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Serviço 2
                    </a>
                    <a href="/servico/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Serviço 3
                    </a>
                    <a href="/servico/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Serviço 4
                    </a>
                    <a href="/servico/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Serviço 5
                    </a>
                    <a href="/servico/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Serviço 6
                    </a>
                </div>
            </div>
        </div>
        )
    }
}