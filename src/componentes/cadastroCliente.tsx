import { Component } from "react";
import "../index.css"
import "../styles/bg17.css"

interface State {
    nome: string;
    nomeSocial: string;
    cpf: string;
    dataEmissaoCpf: string;
    numRgs: number;
    rgs: { rg: string; dataEmissao: string; }[];
    numTelefones: number;
    telefones: string[];
}

export default class CadastroCliente extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            nome: '',
            nomeSocial: '',
            cpf: '',
            dataEmissaoCpf: '',
            numRgs: 1,
            rgs: [{ rg: '', dataEmissao: '' }],
            numTelefones: 1,
            telefones: [''],
        };
    }

    handleInputChange = (event: { target: { name: keyof State; value: any; }; }) => {
        this.setState({
            [event.target.name]: event.target.value
        } as Pick<State, keyof State>);
    }

    handleRgChange = (index: any, event: { target: { name: keyof State['rgs'][0]; value: any; }; }) => {
        const newRgs = this.state.rgs.map((rg: any, rgIndex: any) => {
            if (index !== rgIndex) return rg;
            return { ...rg, [event.target.name]: event.target.value };
        });

        this.setState({ rgs: newRgs });
    }

    handleTelefoneChange = (index: number, event: { target: { value: any; }; }) => {
        const newTelefones = this.state.telefones.map((telefone, telefoneIndex) => {
            if (index !== telefoneIndex) return telefone;
            return event.target.value;
        });

        this.setState({ telefones: newTelefones });
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
            <div className="bg1"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastro de Cliente</h2>
                <hr></hr>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" name="nome"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" name="nomeSocial"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" name="cpf" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Data de emissão do CPF" aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" name="dataEmissaoCpf" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantos RGs quer adicionar?" aria-label="Quantos RGs quer adicionar?" aria-describedby="basic-addon1" name="numRgs" />
                    </div>
                    {this.state.rgs.map((rg, index) => (
                        <div key={index}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" name="rg" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Data de emissão do RG" aria-label="Data de emissão do RG" aria-describedby="basic-addon1" name="dataEmissao" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
                            </div>
                        </div>
                    ))}
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantos Telefones quer adicionar?" aria-label="Quantos Telefones quer adicionar?" aria-describedby="basic-addon1" name="numTelefones" />
                    </div>
                    {this.state.telefones.map((telefone, index) => (
                        <div className="input-group mb-3" key={index}>
                            <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" name="telefone" />
                        </div>
                    ))}
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