/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "../styles/bg5.css"
import "../index.css"

export default class ListaProdutos extends Component{
    render() {
        return (
        <div>
            <div className="bg5"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Produtos</h2>
                <hr></hr>
                <div className="list-group">
                    <a href="/produto/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Produto 1
                    </a>
                    <a href="/produto/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Produto 2
                    </a>
                    <a href="/produto/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Produto 3
                    </a>
                    <a href="/produto/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Produto 4
                    </a>
                    <a href="/produto/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Produto 5
                    </a>
                    <a href="/produto/:id" className="list-group-item list-group-item-action d-flex justify-content-between">
                        Produto 6
                    </a>
                </div>
            </div>
        </div>
        )
    }
}