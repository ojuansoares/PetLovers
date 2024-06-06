import React, { useState } from 'react';
import "../styles/bg5.css"
import "../index.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Produto() {
    const [produto, setProduto] = useState({
        nome: 'Produto Exemplo',
        descricao: 'Descrição do Produto',
        valor: 100,
    });

    const handleDelete = () => {
        confirmAlert({
            title: 'Deletar Produto',
            message: 'Tem certeza que deseja deletar este produto?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        const notify = () => toast.success("Produto deletado com sucesso!");
                        notify();
                        setTimeout(() => {
                            window.location.href = '/produtos';
                        }, 1200);
                    }
                },
                {
                    label: 'Não',
                }
            ]
        });
    }

    const handleEdit = () => {
        window.location.href = `/editarproduto/:id`;
    }

    return (
        <div>
            <div className="bg5"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Informações do Produto</h2>
                <hr></hr>
                <p><strong>Nome:</strong> {produto.nome}</p>
                <p><strong>Descrição:</strong> {produto.descricao}</p>
                <p><strong>Valor:</strong> {produto.valor}</p>
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