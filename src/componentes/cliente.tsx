import React, { useEffect, useState } from 'react';
import "../index.css"
import "../styles/bg17.css"
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

type Telefone = {
    id: number,
    numero: string,
    ddd: string,
    links: never[]
}

type Endereco = {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    codigoPostal: string;
    informacoesAdicionais: string;
}

type ClienteProps = {
    id: number,
    nome: string,
    nomeSocial: string,
    email: string,
    endId: number,
    rua: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    info: string,
    telefones: Telefone[],
    endereco: Endereco;
}

export default function Cliente() {
    let { id } = useParams<{ id: string }>();
    const [cliente, setCliente] = useState<ClienteProps | null>(null);

    useEffect(() => {
        fetch(`http://localhost:32831/cliente/${id}`)
            .then(res => res.json())
            .then(data => setCliente(data))
            .catch(error => {
                console.error("Error fetching data: ", error);
                toast.error("Error fetching data");
            });
    }, [id]);
    

    const handleEdit = () => {
        if (cliente) {
            window.location.href = `/editarcliente/${cliente.id}`;
        } else {
            console.error('Cliente is null');
        }
    }

    function handleDelete() {
        confirmAlert({
            title: 'Deletar Cliente',
            message: 'Tem certeza que deseja deletar este cliente?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        fetch('http://localhost:32831/cliente/excluir', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: cliente ? JSON.stringify({ id: cliente.id }) : null,
                        })
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

    return(
        <div>
            {cliente && (
            <div>
                <div className="bg17"></div>
                <div className="container-fluid fundo-escuro">

                    <h2>Informações do Cliente ID: {cliente.id}</h2>

                    <hr></hr>

                    <p><strong>Nome Completo: </strong>{cliente.nome}</p>
                    <p><strong>Nome Social: </strong>{cliente.nomeSocial}</p>
                    <p><strong>Email: </strong>{cliente.email}</p>

                    <hr></hr>

                    <h3>Telefones</h3>

                    {cliente.telefones.map((t: any, i: number) => { return <p key={t.id}><strong>Telefone {i+1}:  </strong>({t.ddd}) {t.numero}</p> })}

                    <hr></hr>

                    <h3>Endereço</h3>
                    <p><strong>Rua: </strong>{cliente.endereco.rua}</p>
                    <p><strong>Número: </strong>{cliente.endereco.numero}</p>
                    <p><strong>Bairro: </strong>{cliente.endereco.bairro}</p>
                    <p><strong>Cidade: </strong>{cliente.endereco.cidade}</p>
                    <p><strong>Estado: </strong>{cliente.endereco.estado}</p>
                    <p><strong>Código Postal: </strong>{cliente.endereco.codigoPostal}</p>
                    <p><strong>Informações Adicionais: </strong>{cliente.endereco.informacoesAdicionais}</p>

                    <br></br>

                    <div className="gap-2 d-flex">
                        <button className="btn btn-outline-secondary" type="button" onClick={handleEdit}>Editar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={handleDelete}>Deletar</button>
                    </div>

                </div> 
            </div>
            )}
            <ToastContainer
            position="top-center"
            theme="dark"
            />   
        </div>
    )
}