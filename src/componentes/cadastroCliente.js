import React, { useState } from 'react';
import "../index.css"
import "../styles/bg17.css"

export default function CadastroCliente() {
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState('');
    const [numRgs, setNumRgs] = useState(1);
    const [rgs, setRgs] = useState([{ rg: '', dataEmissao: '' }]);
    const [numTelefones, setNumTelefones] = useState(1);
    const [telefones, setTelefones] = useState(['']);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'nome':
                setNome(value);
                break;
            case 'nomeSocial':
                setNomeSocial(value);
                break;
            case 'cpf':
                setCpf(value);
                break;
            case 'dataEmissaoCpf':
                setDataEmissaoCpf(value);
                break;
            case 'numRgs':
                setNumRgs(value);
                break;
            case 'numTelefones':
                setNumTelefones(value);
                break;
            default:
                break;
        }
    }

    const handleRgChange = (index, event) => {
        const newRgs = rgs.map((rg, rgIndex) => {
            if (index !== rgIndex) return rg;
            return { ...rg, [event.target.name]: event.target.value };
        });

        setRgs(newRgs);
    }

    const handleTelefoneChange = (index, event) => {
        const newTelefones = telefones.map((telefone, telefoneIndex) => {
            if (index !== telefoneIndex) return telefone;
            return event.target.value;
        });

        setTelefones(newTelefones);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode lidar com a submissão do formulário
    };

    const handleCancel = (event) => {
        event.preventDefault();
        window.location.href = '/cadastrar';
    };

    return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastro de Cliente</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" name="nome" onChange={handleInputChange} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" name="nomeSocial" onChange={handleInputChange} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" name="cpf" onChange={handleInputChange} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Data de emissão do CPF" aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" name="dataEmissaoCpf" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} onChange={handleInputChange} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantos RGs quer adicionar?" aria-label="Quantos RGs quer adicionar?" aria-describedby="basic-addon1" name="numRgs" onChange={handleInputChange} />
                    </div>
                    {rgs.map((rg, index) => (
                        <div key={index}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" name="rg" onChange={(event) => handleRgChange(index, event)} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Data de emissão do RG" aria-label="Data de emissão do RG" aria-describedby="basic-addon1" name="dataEmissao" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} onChange={(event) => handleRgChange(index, event)} />
                            </div>
                        </div>
                    ))}
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantos Telefones quer adicionar?" aria-label="Quantos Telefones quer adicionar?" aria-describedby="basic-addon1" name="numTelefones" onChange={handleInputChange} />
                    </div>
                    {telefones.map((telefone, index) => (
                        <div className="input-group mb-3" key={index}>
                            <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" name="telefone" onChange={(event) => handleTelefoneChange(index, event)} />
                        </div>
                    ))}
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}