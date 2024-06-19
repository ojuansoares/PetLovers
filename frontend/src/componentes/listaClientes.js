import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import "../styles/bg17.css";
import "../index.css";

export default function ListaClientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        async function getClientes() {
            try {
                const response = await axios.get('/clientes');
                console.log("Dados dos clientes:", response.data);
                setClientes(response.data);
            } catch (error) {
                console.error("Erro ao buscar clientes:", error);
            }
        }
        getClientes();
    }, []);

    return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Clientes</h2>
                <hr></hr>
                <div className="list-group">
                    {clientes.length > 0 ? (
                        clientes.map((cliente, index) => (
                            <a key={index} href={`/cliente/${index + 1}`} className="list-group-item list-group-item-action d-flex justify-content-between">
                        {cliente.nomeSocial}
                            </a>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center">
                            <p>Nenhum cliente encontrado.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
