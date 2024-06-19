import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import "../styles/bg10.css";
import "../index.css";

export default function ListaServicos() {
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        async function getServicos() {
            try {
                const response = await axios.get('/servicos');
                console.log("Dados dos serviços:", response.data);
                setServicos(response.data);
            } catch (error) {
                console.error("Erro ao buscar serviços:", error);
            }
        }
        getServicos();
    }, []);

    return (
        <div>
            <div className="bg10"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Serviços</h2>
                <hr></hr>
                <div className="list-group">
                    {servicos.length > 0 ? (
                        servicos.map((servico, index) => (
                            <a key={index} href={`/servico/${servico.id}`} className="list-group-item list-group-item-action d-flex justify-content-between">
                                {servico.nome}
                            </a>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center">
                            <p>Nenhum serviço encontrado.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}