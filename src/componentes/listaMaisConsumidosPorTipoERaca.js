import React, { useState } from "react";
import "../styles/bg14.css"
import "../index.css"

export default function MaisConsumidosPorTipoERaca() {
    const [tipo, setTipo] = useState("produto");

    const data = {
        racasservico: {
            "Pitbull": {
                "Banho": 3,
                "Tosa": 2
            },
            "Labrador": {
                "Tosa": 3,
                "Adestramento": 2
            },
            "Poodle": {
                "Corte de Unhas": 1,
                "Tosa": 1
            },
            "Bulldog": {
                "Consulta Veterinária": 3,
                "Banho": 1
            },
            "Beagle": {
                "Tosa": 1,
                "Adestramento": 3
            }
        },
        racas: {
            "Pitbull": {
                "Ração para Cães": 2,
                "Bolinha": 1
            },
            "Labrador": {
                "Ração para Cães": 3,
                "Coleira": 1
            },
            "Poodle": {
                "Ração para Cães": 1,
                "Cama para Gatos": 1
            },
            "Bulldog": {
                "Ração para Cães": 2,
                "Brinquedo para Gatos": 1
            },
            "Beagle": {
                "Ração para Cães": 1,
                "Bolinha": 2
            }
        },
        tiposervico: {
            "Cachorro": {
                "Banho": 5,
                "Tosa": 3,
                "Adestramento": 2
            },
            "Gato": {
                "Banho": 4,
                "Corte de Unhas": 3,
                "Consulta Veterinária": 2
            }
        },
        tipos: {
            "Cachorro": {
                "Ração para Cães": 9,
                "Ossinho": 5,
                "Bolinha": 4,
                "Brinquedo para Gatos": 2,
                "Cama para Gatos": 1
            },
            "Gato": {
                "Ração para Gatos": 5,
                "Arranhador para Gatos": 3,
                "Brinquedo para Gatos": 1
            }
        },
    };

    const renderItem = (item, quantidade) => {
        return (
            <div className="list-group-item list-group-item-action d-flex justify-content-between">
                <div>
                    <p><strong>Produto:</strong> <span className="item-text">{item}</span></p>
                    <p><strong>Quantidade:</strong> <span className="quantidade-text">{quantidade}</span></p>
                </div>
            </div>
        )
    }

    const renderItems = (data) => {
        return Object.entries(data).map(([item, quantidade]) => (
            <div key={item}>
                <h5>{item}</h5>
                {Object.entries(quantidade).map(([item, quantidade]) => renderItem(item, quantidade))}
                <hr />
            </div>
        ));
    }

    return (
        <div>
            <div className="bg14"></div>
            <div className="container-fluid fundo-escuro">
                <div className="list-group">
                    <h2>{tipo === "produto" ? "Produtos mais consumidos:" : "Serviços mais consumidos:"}</h2>
                    <hr></hr>
                    <div>
                        <label htmlFor="listarPor">Listar por:</label>
                        <select id="listarPor" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                            <option value="produto">Produto</option>
                            <option value="servico">Serviço</option>
                        </select>
                    </div>
                    <br></br>
                    {tipo === "produto" ? (
                        <>
                            <h4>Produtos mais consumidos por raça de pet:</h4>
                            <hr></hr>
                            {renderItems(data.racas)}
                            <h4>Produtos mais consumidos por tipo de pet:</h4>
                            <hr></hr>
                            {renderItems(data.tipos)}
                        </>
                    ) : (
                        <>
                            <h4>Serviços mais consumidos por raça de pet:</h4>
                            <hr></hr>
                            {renderItems(data.racasservico)}
                            <h4>Serviços mais consumidos por tipo de pet:</h4>
                            <hr></hr>
                            {renderItems(data.tiposervico)}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}