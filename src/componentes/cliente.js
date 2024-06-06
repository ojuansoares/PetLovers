import React, { useState } from 'react';
import "../index.css"
import "../styles/bg17.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cliente() {
    const [state, setState] = useState({
        id: 1,
        nome: 'João Silva',
        nomeSocial: 'Joana Silva',
        cpf: '123.456.789-00',
        dataEmissaoCpf: '01/01/2000',
        numRgs: 1,
        rgs: [{ rg: '12.345.678-9', dataEmissao: '01/01/1999' }],
        numTelefones: 2,
        telefones: ['(11) 1234-5678', '(11) 9876-5432'],
        pets: ['Pet 1', 'Pet 2'],
        produtosConsumidos: ['Produto 1', 'Produto 2'],
        servicosConsumidos: ['Serviço 1', 'Serviço 2'],
    });

    const handleDelete = () => {
        confirmAlert({
            title: 'Deletar Cliente',
            message: 'Tem certeza que deseja deletar este cliente?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        const notify = () => toast.success("Cliente deletado com sucesso!");
                        notify();
                        setTimeout(() => {
                            window.location.href = '/clientes';
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
        window.location.href = `/editarcliente/:id`;
    }

    return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Informações do Cliente</h2>
                <hr></hr>
                <p><strong>ID:</strong> {state.id}</p>
                <p><strong>Nome:</strong> {state.nome}</p>
                <p><strong>Nome Social:</strong> {state.nomeSocial}</p>
                <p><strong>CPF:</strong> {state.cpf}</p>
                <p><strong>Data de Emissão do CPF:</strong> {state.dataEmissaoCpf}</p>
                <hr></hr>
                <h3>RGs</h3>
                {state.rgs.map((rg, index) => (
                    <div key={index}>
                        <p><strong>RG:</strong> {rg.rg}</p>
                        <p><strong>Data de Emissão:</strong> {rg.dataEmissao}</p>
                    </div>
                ))}
                <hr></hr>
                <h3>Telefones</h3>
                {state.telefones.map((telefone, index) => (
                    <p key={index}><strong>Telefone:</strong> {telefone}</p>
                ))}
                <hr></hr>
                <h3>Pets</h3>
                {state.pets.map((pet, index) => (
                    <p key={index}><strong>Pet:</strong> {pet}</p>
                ))}
                <hr></hr>
                <h3>Produtos Consumidos</h3>
                <p><strong>Produtos:</strong> {state.produtosConsumidos.join(', ')}</p>
                <h3>Serviços Consumidos</h3>
                <p><strong>Serviços:</strong> {state.servicosConsumidos.join(', ')}</p>
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