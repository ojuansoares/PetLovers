import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "../styles/bg10.css";
import "../index.css";

export default function Servico() {
    const [servico, setServico] = useState({});
    let { id } = useParams();

    useEffect(() => {
        async function getServico() {
            try {
                const response = await axios.get(`/servico/${id}`);
                setServico(response.data);
            } catch (error) {
                console.error("Erro ao buscar serviço:", error);
            }
        }
        getServico();
    }, [id]);

    const handleDelete = () => {
        confirmAlert({
            title: 'Deletar Serviço',
            message: 'Tem certeza que deseja deletar este serviço?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        try {
                            await axios.post(`/removerServico`, { id: id });
                            toast.success("Serviço deletado com sucesso!");
                            setTimeout(() => {
                                window.location.href = '/servicos';
                            }, 1200);
                        } catch (error) {
                            toast.error("Erro ao deletar serviço!");
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
        window.location.href = `/editarservico/${id}`;
    }

    return (
        <div>
            <div className="bg10"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Informações do Serviço</h2>
                <hr></hr>
                <p><strong>Nome:</strong> {servico.nome}</p>
                <p><strong>Descrição:</strong> {servico.descricao}</p>
                <p><strong>Valor:</strong> R$: {servico.valor},00</p>
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
    );
}