import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import "../styles/bg13.css";
import "../index.css";

export default function ListaPets() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        async function getPets() {
            try {
                const response = await axios.get('/pets');
                console.log("Dados dos pets:", response.data);
                setPets(response.data);
            } catch (error) {
                console.error("Erro ao buscar pets:", error);
            }
        }
        getPets();
    }, []);

    return (
        <div>
            <div className="bg13"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Pets</h2>
                <hr></hr>
                <div className="list-group">
                    {pets.length > 0 ? (
                        pets.map((pet, index) => (
                            <a key={index} href={`/pet/${index + 1}`} className="list-group-item list-group-item-action d-flex justify-content-between">
                                ID: {pet.id} | Nome: {pet.nome}
                            </a>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center">
                            <p>Nenhum pet encontrado.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}