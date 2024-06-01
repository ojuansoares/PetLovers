import { Component } from "react";
import "../index.css"
import "../styles/bg5.css"

interface State {
    nome: string;
    descricao: string;
    valor: number;
}

export default class EditarProduto extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        // Aqui você deve substituir os valores atuais do produto
        this.state = {
            nome: 'Produto Exemplo',
            descricao: 'Descrição do Produto',
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
        window.location.href = '/produto/id:';
    };

    handleCancel = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        window.location.href = '/produto/id:';
    };

    render() {
        return (
        <div>
            <div className="bg5"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Produto</h2>
                <hr></hr>
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" name="nome" value={this.state.nome} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Descrição" name="descricao" value={this.state.descricao} onChange={this.handleInputChange} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Valor" name="valor" value={this.state.valor} onChange={this.handleInputChange} />
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.handleSave}>Salvar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={this.handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}