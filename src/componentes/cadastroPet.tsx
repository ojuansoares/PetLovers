import { Component } from "react";
import "../index.css"
import "../styles/bg2.css"

interface State {
    nome: string;
    raca: string;
    genero: string;
    tipo: string;
    idDono: number;
}

export default class CadastroPet extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            nome: '',
            raca: '',
            genero: '',
            tipo: '',
            idDono: 1,
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

    handleCancel = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        window.location.href = '/cadastrar';
    };

    render() {
        return (
        <div>
            <div className="bg2"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastro de Pet</h2>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" name="nome"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" name="raca"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" name="genero"/>
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-control" name="tipo">
                            <option value="" disabled selected>Tipo</option>
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-control" name="idDono">
                            <option value="" disabled selected>ID do Dono do Pet</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={this.handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}