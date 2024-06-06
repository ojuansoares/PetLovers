import { Component } from "react";
import "../styles/bg10.css"
import "../index.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface State {
    nome: string;
    descricao: string;
    valor: number;
}

export default class Servico extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            nome: 'Serviço Exemplo',
            descricao: 'Descrição do Serviço',
            valor: 100,
        };
    }

    handleDelete = () => {
        confirmAlert({
            title: 'Deletar Serviço',
            message: 'Tem certeza que deseja deletar este serviço?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        const notify = () => toast.success("Serviço deletado com sucesso!");
                        notify();
                        setTimeout(() => {
                            window.location.href = '/servicos';
                        }, 1200);
                    }
                },
                {
                    label: 'Não',
                }
            ]
        });
    }

    handleEdit = () => {
        window.location.href = `/editarservico/:id`;
    }

    render() {
        return (
        <div>
            <div className="bg10"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Informações do Serviço</h2>
                <hr></hr>
                <p><strong>Nome:</strong> {this.state.nome}</p>
                <p><strong>Descrição:</strong> {this.state.descricao}</p>
                <p><strong>Valor:</strong> {this.state.valor}</p>
                <div className="gap-2 d-flex">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleEdit}>Editar</button>
                    <button className="btn btn-outline-danger" type="button" onClick={this.handleDelete}>Deletar</button>
                </div>
            </div>
            <ToastContainer
            position="top-center"
            theme="dark"
            />
        </div>
        )
    }
}