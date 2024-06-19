import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/bg14.css";
import "../index.css";

export default function MaisConsumidosPorTipoERaca() {
    const [tipo, setTipo] = useState("produto");
    const [data, setData] = useState({ racas: {}, tipos: {}, racasservico: {}, tiposervico: {} });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/compras");
                const compras = response.data;

                const result = {
                    racas: {},
                    tipos: {},
                    racasservico: {},
                    tiposervico: {},
                };

                compras.forEach(compra => {
                    const { tipoCompra, itemComprado, pet, valor } = compra;
                    if (!pet) {
                        console.warn('Pulando a compra por não ter pet:', compra);
                        return;
                    }
                    const { nome: itemNome } = itemComprado;
                    const { raca, tipo: petTipo } = pet;

                    if (tipoCompra === "produto") {
                        if (!result.racas[raca]) result.racas[raca] = {};
                        if (!result.racas[raca][itemNome]) result.racas[raca][itemNome] = 0;
                        result.racas[raca][itemNome] += 1;

                        if (!result.tipos[petTipo]) result.tipos[petTipo] = {};
                        if (!result.tipos[petTipo][itemNome]) result.tipos[petTipo][itemNome] = 0;
                        result.tipos[petTipo][itemNome] += 1;
                    } else {
                        if (!result.racasservico[raca]) result.racasservico[raca] = {};
                        if (!result.racasservico[raca][itemNome]) result.racasservico[raca][itemNome] = 0;
                        result.racasservico[raca][itemNome] += 1;

                        if (!result.tiposervico[petTipo]) result.tiposervico[petTipo] = {};
                        if (!result.tiposervico[petTipo][itemNome]) result.tiposervico[petTipo][itemNome] = 0;
                        result.tiposervico[petTipo][itemNome] += 1;
                    }
                });

                setData(result);
            } catch (error) {
                console.error("Erro ao carregar dados de compras:", error);
            }
        };

        fetchData();
    }, []);

    const renderItem = (item, quantidade) => (
        <div className="list-group-item list-group-item-action d-flex justify-content-between" key={item}>
            <div>
                <p><strong>Item:</strong> <span className="item-text">{item}</span></p>
                <p><strong>Quantidade:</strong> <span className="quantidade-text">{quantidade}</span></p>
            </div>
        </div>
    );

    const renderItems = (data) => {
        return Object.entries(data).map(([key, value]) => (
            <div key={key}>
                <h5>{key}</h5>
                {Object.entries(value).map(([item, quantidade]) => renderItem(item, quantidade))}
                <hr />
            </div>
        ));
    };

    return (
        <div>
            <div className="bg14"></div>
            <div className="container-fluid fundo-escuro">
                <div className="list-group">
                    <h2>{tipo === "produto" ? "Produtos mais consumidos:" : "Serviços mais consumidos:"}</h2>
                    <hr />
                    <div>
                        <label htmlFor="listarPor">Listar por:</label>
                        <select id="listarPor" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                            <option value="produto">Produto</option>
                            <option value="servico">Serviço</option>
                        </select>
                    </div>
                    <br />
                    {tipo === "produto" ? (
                        <>
                            <h4>Produtos mais consumidos por raça de pet:</h4>
                            <hr />
                            {renderItems(data.racas)}
                            <h4>Produtos mais consumidos por tipo de pet:</h4>
                            <hr />
                            {renderItems(data.tipos)}
                        </>
                    ) : (
                        <>
                            <h4>Serviços mais consumidos por raça de pet:</h4>
                            <hr />
                            {renderItems(data.racasservico)}
                            <h4>Serviços mais consumidos por tipo de pet:</h4>
                            <hr />
                            {renderItems(data.tiposervico)}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
