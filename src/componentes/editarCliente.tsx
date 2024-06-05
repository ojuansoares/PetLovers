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

export default class EditarCliente extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        // Aqui você deve substituir os valores atuais do cliente
        this.state = {
            nome: 'João Silva',
            nomeSocial: 'Joana Silva',
            cpf: '123.456.789-00',
            dataEmissaoCpf: '01/01/2000',
            numRgs: 2,
            rgs: [
                { rg: '12.345.678-9', dataEmissao: '01/01/1999' },
                { rg: '13.344.675-9', dataEmissao: '22/08/2002' },
            ],
            numTelefones: 2,
            telefones: ['(11) 1234-5678', '(11) 9876-5432'],
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name as keyof State;
        const value = event.target.value;
        this.setState({
            [name]: value
        } as unknown as Pick<State, keyof State>);
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

    handleSave = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        window.location.href = '/cliente/id:';
    };

    handleCancel = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        window.location.href = '/cliente/id:';
    };

    render() {
        return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Cliente</h2>
                <hr></hr>
                <form>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" name="nome" value={this.state.nome} onChange={this.handleInputChange} />
                    </div>
                    <label>Nome Social</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome Social" name="nomeSocial" value={this.state.nomeSocial} onChange={this.handleInputChange} />
                    </div>
                    <label>CPF</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" name="cpf" value={this.state.cpf} onChange={this.handleInputChange} />
                    </div>
                    <label>Data de Emissão do CPF</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Data de Emissão do CPF" name="dataEmissaoCpf" value={this.state.dataEmissaoCpf} onChange={this.handleInputChange} />
                    </div>
                    {this.state.rgs.map((rg, index) => (
                        <div key={index}>
                            <label>{`RG ${index + 1}`}</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={`RG ${index + 1}`} name="rg" value={rg.rg} onChange={event => this.handleRgChange(index, { target: { name: "rg", value: event.target.value } })} />
                            </div>
                            <label>{`Data de Emissão do RG ${index + 1}`}</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={`Data de Emissão do RG ${index + 1}`} name="dataEmissao" value={rg.dataEmissao} onChange={event => this.handleRgChange(index, { target: { name: "dataEmissao", value: event.target.value } })} />
                            </div>
                        </div>
                    ))}
                    {this.state.telefones.map((telefone, index) => (
                        <div key={index}>
                            <div className="mb-1">
                                <label>{`Telefone ${index + 1}`}</label>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={`Telefone ${index + 1}`} value={telefone} onChange={event => this.handleTelefoneChange(index, event)} />
                            </div>
                        </div>
                    ))}
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