import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "../styles/bg13.css";
import "../index.css";

export default function Pet() {
    const [pet, setPet] = useState({});
    let { id } = useParams();

    useEffect(() => {
        async function getPet() {
            try {
                const response = await axios.get(`/pet/${id}`);
                setPet(response.data.informacoes);
            } catch (error) {
                console.error("Erro ao buscar pet:", error);
            }
        }
        getPet();
    }, [id]);

    const handleDelete = () => {
        confirmAlert({
            title: 'Deletar Pet',
            message: 'Tem certeza que deseja deletar este pet?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        try {
                            await axios.post(`/removerPet`, { id: pet.id });
                            toast.success("Pet deletado com sucesso!");
                            setTimeout(() => {
                                window.location.href = '/pets';
                            }, 1200);
                        } catch (error) {
                            toast.error("Erro ao deletar pet!");
                        }
                    }
                },
                {
                    label: 'Não',
                }
            ]
        });
    }

    const handleEdit = () => {
        window.location.href = `/editarpet/${id}`;
    }

    return (
        <div>
            <div className="bg13"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Informações do Pet</h2>
                <hr></hr>
                <p><strong>Nome:</strong> {pet.nome}</p>
                <p><strong>Raça:</strong> {pet.raca}</p>
                <p><strong>Gênero:</strong> {pet.genero}</p>
                <p><strong>Tipo:</strong> {pet.tipo}</p>
                <p><strong>CPF do Dono:</strong> {pet.iddono}</p>
                <div className="gap-2 d-flex">
                    <button className="btn btn-outline-secondary" type="button" onClick={handleEdit}>Editar</button>
                    <button className="btn btn-outline-danger" type="button" onClick={handleDelete}>Deletar</button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                theme="dark"
            />
        </div>
    )
}
