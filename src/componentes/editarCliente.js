import React, { useState } from 'react';
import "../index.css"
import "../styles/bg17.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditarCliente() {
    const [state, setState] = useState({
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
    });

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    const handleRgChange = (index, event) => {
        const newRgs = state.rgs.map((rg, rgIndex) => {
            if (index !== rgIndex) return rg;
            return { ...rg, [event.target.name]: event.target.value };
        });

        setState(prevState => ({ ...prevState, rgs: newRgs }));
    }

    const handleTelefoneChange = (index, event) => {
        const newTelefones = state.telefones.map((telefone, telefoneIndex) => {
            if (index !== telefoneIndex) return telefone;
            return event.target.value;
        });

        setState(prevState => ({ ...prevState, telefones: newTelefones }));
    }

    const handleSave = (event) => {
        event.preventDefault();
        const notify = () => toast.success("Cliente editado com sucesso!");
        notify();
        setTimeout(() => {
            window.location.href = '/cliente/id:';
        }, 1200);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        window.location.href = '/cliente/id:';
    };

    return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Cliente</h2>
                <hr></hr>
                <form>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" name="nome" value={state.nome} onChange={handleInputChange} />
                    </div>
                    <label>Nome Social</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome Social" name="nomeSocial" value={state.nomeSocial} onChange={handleInputChange} />
                    </div>
                    <label>CPF</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" name="cpf" value={state.cpf} onChange={handleInputChange} />
                    </div>
                    <label>Data de Emissão do CPF</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Data de Emissão do CPF" name="dataEmissaoCpf" value={state.dataEmissaoCpf} onChange={handleInputChange} />
                    </div>
                    {state.rgs.map((rg, index) => (
                        <div key={index}>
                            <label>RG {index + 1}</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={`RG ${index + 1}`} name="rg" value={rg.rg} onChange={event => handleRgChange(index, event)} />
                            </div>
                            <label>Data de Emissão do RG {index + 1}</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={`Data de Emissão do RG ${index + 1}`} name="dataEmissao" value={rg.dataEmissao} onChange={event => handleRgChange(index, event)} />
                            </div>
                        </div>
                    ))}
                    {state.telefones.map((telefone, index) => (
                        <div key={index}>
                            <label>Telefone {index + 1}</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={`Telefone ${index + 1}`} value={telefone} onChange={event => handleTelefoneChange(index, event)} />
                            </div>
                        </div>
                    ))}
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="button" onClick={handleSave}>Salvar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={handleCancel}>Cancelar</button>
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