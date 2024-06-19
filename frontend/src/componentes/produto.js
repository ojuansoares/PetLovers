import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "../styles/bg5.css";
import "../index.css";

export default function Produto() {
    const [produto, setProduto] = useState({});
    let { id } = useParams();

    useEffect(() => {
        async function getProduto() {
            try {
                const response = await axios.get(`/produto/${id}`);
                setProduto(response.data);
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        }
        getProduto();
    }, [id]);

    const handleDelete = () => {
        confirmAlert({
            title: 'Deletar Produto',
            message: 'Tem certeza que deseja deletar este produto?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        try {
                            await axios.post(`/removerProduto`, { id: id });
                            toast.success("Produto deletado com sucesso!");
                            setTimeout(() => {
                                window.location.href = '/produtos';
                            }, 1200);
                        } catch (error) {
                            toast.error("Erro ao deletar produto!");
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
        window.location.href = `/editarproduto/${id}`;
    }

    return (
        <div>
            <div className="bg5"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Informações do Produto</h2>
                <hr></hr>
                <p><strong>Nome:</strong> {produto.nome}</p>
                <p><strong>Descrição:</strong> {produto.descricao}</p>
                <p><strong>Valor:</strong> R$: {produto.valor},00</p>
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
