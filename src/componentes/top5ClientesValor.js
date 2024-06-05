import React from "react";
import "../styles/bg14.css"
import "../index.css"

export default function Top5ClientesValor() {
    const renderCliente = (cliente, total) => {
        return (
            <div className="list-group-item list-group-item-action d-flex justify-content-between">
                <div>
                    <p><strong>ID & Cliente:</strong> <span className="cliente-text">{cliente}</span></p>
                    <p><strong>Total Consumido:</strong> <span className="total-text">{total}</span></p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="bg14"></div>
            <div className="container-fluid fundo-escuro">
                <div className="list-group">
                    <h2>Top 5 clientes que mais consumiram (Valor):</h2>
                    <hr></hr>
                    {renderCliente("(11) Rafael", 670)}
                    {renderCliente("(9) Gabriel", 440)}
                    {renderCliente("(10) Luisa", 360)}
                    {renderCliente("(12) Carlos", 360)}
                    {renderCliente("(6) Ana", 300)}
                </div>
            </div>
        </div>
    )
}