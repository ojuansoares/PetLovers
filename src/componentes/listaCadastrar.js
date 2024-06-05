import React from "react";
import "../styles/bg4.css"
import "../index.css"

export default function ListaCadastrar() {
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
                    <a href="/cadastropet" className="list-group-item list-group-item-action">
                        Pet
                    </a>
                    <a href="/cadastroproduto" className="list-group-item list-group-item-action">
                        Produto
                    </a>
                    <a href="/cadastroservico" className="list-group-item list-group-item-action">
                        Serviço
                    </a>
                </div>
            </div>
        </div>
    )
}