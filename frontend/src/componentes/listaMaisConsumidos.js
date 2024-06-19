import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/bg14.css";
import "../index.css";

export default function MaisConsumidos() {
    const [tipo, setTipo] = useState("produto");
    const [itensConsumidos, setItensConsumidos] = useState([]);

    useEffect(() => {
        const fetchCompras = async () => {
            try {
                const response = await axios.get("http://localhost:8080/compras");
                const compras = response.data;

                const consumoMap = compras.reduce((acc, compra) => {
                    if (compra.tipoCompra === tipo) {
                        const itemNome = compra.itemComprado.nome;
                        if (!acc[itemNome]) {
                            acc[itemNome] = 0;
                        }
                        acc[itemNome] += 1;
                    }
                    return acc;
                }, {});

                const consumoArray = Object.entries(consumoMap).map(([item, quantidade]) => ({ item, quantidade }));
                consumoArray.sort((a, b) => b.quantidade - a.quantidade);

                setItensConsumidos(consumoArray);
            } catch (error) {
                console.error("Erro ao carregar dados de compras:", error);
            }
        };

        fetchCompras();
    }, [tipo]);

    const renderItem = (item, quantidade, key) => {
        return (
            <div key={key} className="list-group-item list-group-item-action d-flex justify-content-between">
                <div>
                    <p><strong>Produto/Serviço:</strong> <span className="item-text">{item}</span></p>
                    <p><strong>Quantidade Consumida:</strong> <span className="quantidade-text">{quantidade}</span></p>
                </div>
            </div>
        );
    };

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
                    {itensConsumidos.map(({ item, quantidade }, index) => renderItem(item, quantidade, index))}
                </div>
            </div>
        </div>
    );
}
