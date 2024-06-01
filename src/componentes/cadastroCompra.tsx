import { Component } from "react";
import "../styles/bg8.css"
import "../index.css"

interface State {
    idComprador: number;
    tipoCompra: string;
    produtoServico: string;
    idPet: number;
}

export default class CadastroCompra extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            idComprador: 1,
            tipoCompra: '',
            produtoServico: '',
            idPet: 1,
        };
    }

    handleInputChange = (event: { target: { name: keyof State; value: any; }; }) => {
        this.setState({
            [event.target.name]: event.target.value
        } as Pick<State, keyof State>);
    }

    handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Aqui você pode lidar com a submissão do formulário
    };

    render() {
        return (
        <div>
            <div className="bg8"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastro de Compra</h2>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <select className="form-control" name="idComprador">
                            <option value="" disabled selected>ID do Comprador</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-control" name="tipoCompra">
                            <option value="" disabled selected>Tipo da compra</option>
                            <option value="Produto">Produto</option>
                            <option value="Serviço">Serviço</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-control" name="produtoServico">
                            <option value="" disabled selected>Qual Produto/Serviço</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-control" name="idPet">
                            <option value="" disabled selected>ID do Pet para a Compra</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}