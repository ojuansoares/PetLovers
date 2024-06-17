/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "../styles/bg4.css"
import "../index.css"

export default class ListaCadastrar extends Component{
    render() {
        return (
        <div>
            <div className="bg4"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastrar</h2>
                <hr></hr>
                <div className="list-group">
                    <a href="/cadastrocliente" className="list-group-item list-group-item-action">
                        Cliente
                    </a>
                </div>
            </div>
        </div>
        )
    }
}