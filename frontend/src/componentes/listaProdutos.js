import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import "../styles/bg5.css";
import "../index.css";

export default function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function getProdutos() {
            try {
                const response = await axios.get('/produtos');
                console.log("Dados dos produtos:", response.data);
                setProdutos(response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }
        getProdutos();
    }, []);

    return (
        <div>
            <div className="bg5"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Produtos</h2>
                <hr></hr>
                <div className="list-group">
                    {produtos.length > 0 ? (
                        produtos.map((produto, index) => (
                            <a key={index} href={`/produto/${produto.id}`} className="list-group-item list-group-item-action d-flex justify-content-between">
                                {produto.nome}
                            </a>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center">
                            <p>Nenhum produto encontrado.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
