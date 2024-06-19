import React, { useState, useEffect } from 'react';
import axios from '../services/axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "../styles/bg17.css";
import "../index.css";

export default function Cliente() {
    const [cliente, setCliente] = useState({ pets: [] });
    let { id } = useParams();

    useEffect(() => {
        async function getCliente() {
            try {
                const response = await axios.get(`/cliente/${id}`);
                setCliente(response.data.informacoes);
            } catch (error) {
                console.error("Erro ao buscar cliente:", error);
            }
        }
        getCliente();
    }, [id]);

    const handleDelete = () => {
        const pets = cliente.pets;

        if (pets.length > 0) {
            confirmAlert({
                title: 'Deletar Cliente',
                message: 'Este cliente tem pets registrados. Deseja excluí-lo juntamente com seus pets?',
                buttons: [
                    {
                        label: 'Sim',
                        onClick: async () => {
                            try {
                                await axios.post(`/removerClienteComPets`, { id: id });
                                await axios.post(`/removerCliente`, { id: id })
                                toast.success("Cliente e pets deletados com sucesso!");
                                setTimeout(() => {
                                    window.location.href = '/clientes';
                                }, 1200);
                            } catch (error) {
                                toast.error("Erro ao deletar cliente e pets!");
                            }
                        }
                    },
                    {
                        label: 'Não',
                    }
                ]
            });
        } else {
            confirmAlert({
                title: 'Deletar Cliente',
                message: 'Tem certeza que deseja deletar este cliente?',
                buttons: [
                    {
                        label: 'Sim',
                        onClick: async () => {
                            try {
                                await axios.post(`/removerCliente`, { id: id });
                                toast.success("Cliente deletado com sucesso!");
                                setTimeout(() => {
                                    window.location.href = '/clientes';
                                }, 1200);
                            } catch (error) {
                                toast.error("Erro ao deletar cliente!");
                            }
                        }
                    },
                    {
                        label: 'Não',
                    }
                ]
            });
        }
    }

    return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Informações do Cliente</h2>
                <hr></hr>
                <p><strong>Nome:</strong> {cliente.nome}</p>
                <p><strong>Nome Social:</strong> {cliente.nomeSocial}</p>
                <p><strong>Data de Cadastro:</strong> {new Date(cliente.dataCadastro).toLocaleDateString()}</p>
                <p><strong>CPF:</strong> {cliente.cpf?.valor}</p>
                <p><strong>Data de Emissão:</strong> {cliente.cpf?.dataEmissao}</p>
                <hr></hr>
                <h3>RGs</h3>
                {cliente.rgs && cliente.rgs.map((rg, index) => (
                    <div key={index}>
                        <p><strong>RG {index + 1}:</strong> {rg.valor}</p>
                        <p><strong>Data de Emissão:</strong> {rg.dataEmissao}</p>
                    </div>
                ))}
                <hr></hr>
                <h3>Telefones</h3>
                {cliente.telefones && cliente.telefones.map((telefone, index) => (
                    <p key={index}><strong>Telefone {index + 1}:</strong> {telefone.numero}</p>
                ))}
                <hr></hr>
                <h3>Pets</h3>
                {cliente.pets && cliente.pets.length > 0 ? cliente.pets.map((pet, index) => (
                    <p key={index}><strong>Pet {index + 1}:</strong> {pet.nome} (ID: {pet.id})</p>
                )) : <p>Nenhum Pet Cadastrado</p>}
                <hr></hr>
                <h3>Serviços Consumidos</h3>
                {cliente.servicosConsumidos && cliente.servicosConsumidos.length > 0 ? cliente.servicosConsumidos.map((servico, index) => (
                    <p key={index}><strong>Serviço {index + 1}:</strong> {servico}</p>
                )) : <p>Nenhum Serviço Consumido</p>}
                <hr></hr>
                <h3>Produtos Consumidos</h3>
                {cliente.produtosConsumidos && cliente.produtosConsumidos.length > 0 ? cliente.produtosConsumidos.map((produto, index) => (
                    <p key={index}><strong>Produto {index + 1}:</strong> {produto}</p>
                )) : <p>Nenhum Produto Consumido</p>}

                <div className="gap-2 d-flex">
                    <button className="btn btn-outline-secondary" onClick={() => { window.location.href = `/editarcliente/${id}` }}>Editar</button>
                    <button className="btn btn-outline-danger" onClick={handleDelete}>Deletar</button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                theme="dark"
            />
        </div>
    );
}
