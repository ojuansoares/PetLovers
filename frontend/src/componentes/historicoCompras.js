import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/bg14.css";
import "../index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HistoricoCompras() {
    const [compras, setCompras] = useState([]);

    useEffect(() => {
        const fetchCompras = async () => {
            try {
                const response = await axios.get('http://localhost:8080/compras');
                setCompras(response.data);
            } catch (error) {
                toast.error("Erro ao carregar histórico de compras!");
            }
        };

        fetchCompras();
    }, []);

    const renderCompra = (id, data, comprador, item, pet, valor) => {
        return (
            <div className="list-group-item list-group-item-action d-flex flex-column" key={id}>
                <div className="d-flex justify-content-between mb-2">
                    <strong>ID: {id}</strong>
                    <strong>{data}</strong>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between"><strong>ID & Comprador:</strong> <span>{comprador}</span></div>
                    <div className="d-flex justify-content-between"><strong>Item:</strong> <span>{item}</span></div>
                    <div className="d-flex justify-content-between"><strong>Pet:</strong> <span>{pet}</span></div>
                    <div className="d-flex justify-content-between"><strong>Valor:</strong> <span>{Number(valor).toFixed(2)}</span></div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="bg14"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Histórico de Compras</h2>
                <hr></hr>
                <div className="list-group">
                {compras.map((compra, index) => {
                    const dataFormatada = new Date(compra.dataCompra).toLocaleString();
                    return renderCompra(
                        index + 1,
                        dataFormatada,
                        `(${index + 1}) ${compra.clienteNome}`,
                        compra.tipoCompra + ": " + (compra.itemComprado ? compra.itemComprado.nome : "Item não disponível"),
                        compra.pet ? compra.pet.nome : "Compra Sem Pet!",
                        compra.valor
                    );
                })}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
