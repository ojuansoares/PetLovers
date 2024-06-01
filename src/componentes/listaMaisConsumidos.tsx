import { Component } from "react";
import "../styles/bg14.css"
import "../index.css"

export default class MaisConsumidos extends Component {
    state = {
        tipo: "produto", // default é produto
    }

    render() {
        const { tipo } = this.state;
        return (
        <div>
            <div className="bg14"></div>
            <div className="container-fluid fundo-escuro">
                <div className="list-group">
                    <h2>{tipo === "produto" ? "Produtos mais consumidos:" : "Serviços mais consumidos:"}</h2>
                    <hr></hr>
                    <div>
                        <label htmlFor="listarPor">Listar por:</label>
                        <select id="listarPor" value={tipo} onChange={(e) => this.setState({ tipo: e.target.value })}>
                            <option value="produto">Produto</option>
                            <option value="servico">Serviço</option>
                        </select>
                    </div>
                    <br></br>
                    {tipo === "produto" ? this.renderProdutos() : this.renderServicos()}
                </div>
            </div>
        </div>
        )
    }

    renderProdutos() {
        return (
            <>
                {this.renderItem("Ossinho", 3)}
                {this.renderItem("Ração para Cães", 2)}
                {this.renderItem("Brinquedo para Gatos", 2)}
                {this.renderItem("Shampoo para Cães", 2)}
                {this.renderItem("Coleira", 2)}
                {this.renderItem("Cama para Gatos", 2)}
                {this.renderItem("Arranhador para Gatos", 2)}
                {this.renderItem("Ração para Gatos", 1)}
                {this.renderItem("Caixa de Areia", 1)}
                {this.renderItem("Bolinha", 1)}
                {this.renderItem("Comedouro", 1)}
                {this.renderItem("Bebedouro", 1)}
                {this.renderItem("Produtinhooo", 1)}
            </>
        );
    }

    renderServicos() {
        return (
            <>
                {this.renderItem("Limpeza de Dentes", 3)}
                {this.renderItem("Corte de Unhas", 2)}
                {this.renderItem("Adestramento", 2)}
                {this.renderItem("Tosa", 1)}
                {this.renderItem("Banho", 1)}
                {this.renderItem("Escovação de Pelo", 1)}
                {this.renderItem("Limpeza de Orelhas", 1)}
                {this.renderItem("Vacinação", 1)}
                {this.renderItem("Passeio", 1)}
                {this.renderItem("Hospedagem", 1)}
                {this.renderItem("Transporte", 1)}
                {this.renderItem("Consulta Veterinária", 1)}
            </>
        );
    }

    renderItem(item: string, quantidade: number) {
        return (
            <div className="list-group-item list-group-item-action d-flex justify-content-between">
                <div>
                    <p><strong>Produto/Serviço:</strong> <span className="item-text">{item}</span></p>
                    <p><strong>Quantidade Consumida:</strong> <span className="quantidade-text">{quantidade}</span></p>
                </div>
            </div>
        )
    }
}