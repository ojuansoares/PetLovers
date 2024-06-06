import { Component } from "react";
import "../styles/bg10.css"
import "../index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface State {
    nome: string;
    descricao: string;
    valor: number;
}

export default class EditarServico extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        // Aqui você deve substituir os valores atuais do serviço
        this.state = {
            nome: 'Serviço Exemplo',
            descricao: 'Descrição do Serviço',
            valor: 100,
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
        const notify = () => toast.success("Serviço editado com sucesso!");
        notify();
        setTimeout(() => {
            window.location.href = '/servico/id:';
        }, 1200);
    };

    handleCancel = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        window.location.href = '/servico/id:';
    };

    render() {
        return (
        <div>
            <div className="bg10"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Serviço</h2>
                <hr></hr>
                <form>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" name="nome" value={this.state.nome} onChange={this.handleInputChange} />
                    </div>
                    <label>Descrição</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Descrição" name="descricao" value={this.state.descricao} onChange={this.handleInputChange} />
                    </div>
                    <label>Valor</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Valor" name="valor" value={this.state.valor} onChange={this.handleInputChange} />
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