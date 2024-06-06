import { Component } from "react";
import "../index.css"
import "../styles/bg13.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface State {
    nome: string;
    raca: string;
    genero: string;
    tipo: string;
    idDono: number;
}

export default class EditarPet extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        // Aqui você deve substituir os valores atuais do pet
        this.state = {
            nome: 'Rex',
            raca: 'Pitbull',
            genero: 'Macho',
            tipo: 'Cachorro',
            idDono: 1,
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name as keyof State;
        const value = event.target.value;
        this.setState({
            [name]: value
        } as unknown as Pick<State, keyof State>);
    }

    handleSave = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const notify = () => toast.success("Pet editado com sucesso!");
        notify();
        setTimeout(() => {
            window.location.href = '/pet/id:';
        }, 1200);
    };

    handleCancel = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        window.location.href = '/pet/id:';
    };

    render() {
        return (
        <div>
            <div className="bg13"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Pet</h2>
                <hr></hr>
                <form>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" name="nome" value={this.state.nome} onChange={this.handleInputChange} />
                    </div>
                    <label>Raça</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça" name="raca" value={this.state.raca} onChange={this.handleInputChange} />
                    </div>
                    <label>Gênero</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Gênero" name="genero" value={this.state.genero} onChange={this.handleInputChange} />
                    </div>
                    <label>Tipo</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo" name="tipo" value={this.state.tipo} onChange={this.handleInputChange} />
                    </div>
                    <label>ID do Dono</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="ID do Dono" name="idDono" value={this.state.idDono} onChange={this.handleInputChange} />
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.handleSave}>Salvar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={this.handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
            <ToastContainer
            position="top-center"
            theme="dark"
            />
        </div>
        )
    }
}