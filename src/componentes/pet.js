import React, { useState } from 'react';
import "../index.css"
import "../styles/bg13.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Pet() {
    const [pet, setPet] = useState({
        nome: 'Rex',
        raca: 'Pitbull',
        genero: 'Macho',
        tipo: 'Cachorro',
        idDono: 1,
    });

    const handleDelete = () => {
        confirmAlert({
            title: 'Deletar Pet',
            message: 'Tem certeza que deseja deletar este pet?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        const notify = () => toast.success("Pet deletado com sucesso!");
                        notify();
                        setTimeout(() => {
                            window.location.href = '/pets';
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
        window.location.href = `/editarpet/:id`;
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
                <p><strong>ID do Dono:</strong> {pet.idDono}</p>
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