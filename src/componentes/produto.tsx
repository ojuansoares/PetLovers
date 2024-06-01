import { Component } from "react";
import "../styles/bg5.css"
import "../index.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

interface State {
    nome: string;
    descricao: string;
    valor: number;
}

export default class Produto extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            nome: 'Produto Exemplo',
            descricao: 'Descrição do Produto',
            valor: 100,
        };
    }

    handleDelete = () => {
        confirmAlert({
            title: 'Deletar Produto',
            message: 'Tem certeza que deseja deletar este produto?',
            buttons: [
              {
                label: 'Sim',
              },
              {
                label: 'Não',
              }
            ]
          });
    }

    handleEdit = () => {
        window.location.href = `/editarproduto/:id`;
    }

    render() {
        return (
        <div>
            <div className="bg5"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Informações do Produto</h2>
                <hr></hr>
                <p><strong>Nome:</strong> {this.state.nome}</p>
                <p><strong>Descrição:</strong> {this.state.descricao}</p>
                <p><strong>Valor:</strong> {this.state.valor}</p>
                <div className="gap-2 d-flex">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleEdit}>Editar</button>
                    <button className="btn btn-outline-danger" type="button" onClick={this.handleDelete}>Deletar</button>
                </div>
            </div>
        </div>
        )
    }
}