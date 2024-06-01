import { Component } from "react";
import "../styles/bg14.css"
import "../index.css"

export default class Top5ClientesValor extends Component{
    render() {
        return (
        <div>
            <div className="bg14"></div>
            <div className="container-fluid fundo-escuro">
                <div className="list-group">
                    <h2>Top 5 clientes que mais consumiram (Valor):</h2>
                    <hr></hr>
                    {this.renderCliente("(11) Rafael", 670)}
                    {this.renderCliente("(9) Gabriel", 440)}
                    {this.renderCliente("(10) Luisa", 360)}
                    {this.renderCliente("(12) Carlos", 360)}
                    {this.renderCliente("(6) Ana", 300)}
                </div>
            </div>
        </div>
        )
    }

    renderCliente(cliente: string, total: number) {
        return (
            <div className="list-group-item list-group-item-action d-flex justify-content-between">
                <div>
                    <p><strong>ID & Cliente:</strong> <span className="cliente-text">{cliente}</span></p>
                    <p><strong>Total Consumido:</strong> <span className="total-text">{total}</span></p>
                </div>
            </div>
        )
    }
}