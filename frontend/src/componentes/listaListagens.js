import React from "react";
import "../styles/bg14.css"
import "../index.css"

export default function ListaListagens() {
    return (
        <div>
            <div className="bg14"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Listagens</h2>
                <hr></hr>
                <div className="list-group">
                    <a href="/historicocompras" className="list-group-item list-group-item-action">
                        Histórico de Compras
                    </a>
                    <a href="/top10quantidade" className="list-group-item list-group-item-action">
                        Top 10 Clientes que mais consumiram (Quantidade)
                    </a>
                    <a href="/top5valor" className="list-group-item list-group-item-action">
                        Top 5 Clientes que mais consumiram (Valor)
                    </a>
                    <a href="/maisconsumidos" className="list-group-item list-group-item-action">
                        Produtos ou Serviços mais consumidos
                    </a>
                    <a href="/maisconsumidosportipoeraca" className="list-group-item list-group-item-action">
                        Produtos ou Serviços mais consumidos por Tipo e Raça de pet
                    </a>
                </div>
            </div>
        </div>
    )
}