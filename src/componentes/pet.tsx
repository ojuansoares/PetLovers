import { Component } from "react";
import "../index.css"
import "../styles/bg13.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

interface State {
    nome: string;
    raca: string;
    genero: string;
    tipo: string;
    idDono: number;
}

export default class Pet extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            nome: 'Rex',
            raca: 'Pitbull',
            genero: 'Macho',
            tipo: 'Cachorro',
            idDono: 1,
        };
    }

    handleDelete = () => {
        confirmAlert({
            title: 'Deletar Pet',
            message: 'Tem certeza que deseja deletar este pet?',
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
        window.location.href = `/editarpet/:id`;
    }

    render() {
        return (
        <div>
            <div className="bg13"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Informações do Pet</h2>
                <hr></hr>
                <p><strong>Nome:</strong> {this.state.nome}</p>
                <p><strong>Raça:</strong> {this.state.raca}</p>
                <p><strong>Gênero:</strong> {this.state.genero}</p>
                <p><strong>Tipo:</strong> {this.state.tipo}</p>
                <p><strong>ID do Dono:</strong> {this.state.idDono}</p>
                <div className="gap-2 d-flex">
                    <button className="btn btn-outline-secondary" type="button" onClick={this.handleEdit}>Editar</button>
                    <button className="btn btn-outline-danger" type="button" onClick={this.handleDelete}>Deletar</button>
                </div>
            </div>
        </div>
        )
    }
}