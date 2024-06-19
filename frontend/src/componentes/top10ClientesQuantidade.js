import React from "react";
import "../styles/bg14.css"
import "../index.css"

export default function Top10ClientesQuantidade() {
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
                    <h2>Top 10 clientes que mais consumiram (Quantidade):</h2>
                    <hr></hr>
                    {renderCliente("(11) Rafael", 6)}
                    {renderCliente("(3) Juan", 4)}
                    {renderCliente("(7) Lucas", 4)}
                    {renderCliente("(9) Gabriel", 4)}
                    {renderCliente("(1) Sheila", 3)}
                    {renderCliente("(6) Ana", 3)}
                    {renderCliente("(10) Luisa", 3)}
                    {renderCliente("(2) Gilberto", 2)}
                    {renderCliente("(4) Maria", 2)}
                    {renderCliente("(5) Pedro", 2)}
                </div>
            </div>
        </div>
    )
}