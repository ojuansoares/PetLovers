import { Component } from "react";
import "../styles/bg14.css"
import "../index.css"

export default class HistoricoCompras extends Component{
    render() {
        return (
        <div>
            <div className="bg14"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Histórico de Compras</h2>
                <hr></hr>
                <div className="list-group">
                    {this.renderCompra(37, "31/05/2024 às 00:49:48", "(1) Sheila", "Produto X", "Rex", 10.00)}
                    {this.renderCompra(38, "01/06/2024 às 10:30:00", "(2) João", "Serviço Y", "Bella", 20.00)}
                    {this.renderCompra(39, "02/06/2024 às 14:15:30", "(3) Maria", "Produto Z", "Max", 30.00)}
                    {this.renderCompra(40, "03/06/2024 às 16:45:15", "(4) Carlos", "Serviço A", "Luna", 40.00)}
                    {this.renderCompra(41, "04/06/2024 às 09:00:00", "(5) Ana", "Produto B", "Charlie", 50.00)}
                    {this.renderCompra(42, "05/06/2024 às 12:30:45", "(6) Pedro", "Serviço C", "Milo", 60.00)}
                    {this.renderCompra(43, "06/06/2024 às 18:00:00", "(1) Sheila", "Produto D", "Rex", 70.00)}
                </div>
            </div>
        </div>
        )
    }

    renderCompra(id: number, data: string, comprador: string, item: string, pet: string, valor: number) {
        return (
            <div className="list-group-item list-group-item-action d-flex flex-column">
                <div className="d-flex justify-content-between mb-2">
                    <strong>ID: {id}</strong>
                    <strong>{data}</strong>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between"><strong>ID & Comprador:</strong> <span>{comprador}</span></div>
                    <div className="d-flex justify-content-between"><strong>Item:</strong> <span>{item}</span></div>
                    <div className="d-flex justify-content-between"><strong>Pet:</strong> <span>{pet}</span></div>
                    <div className="d-flex justify-content-between"><strong>Valor:</strong> <span>{valor.toFixed(2)}</span></div>
                </div>
            </div>
        )
    }
}