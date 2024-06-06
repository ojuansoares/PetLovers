import React, { useState } from 'react';
import "../styles/bg10.css"
import "../index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditarServico() {
    const [servico, setServico] = useState({
        nome: 'Serviço Exemplo',
        descricao: 'Descrição do Serviço',
        valor: 100,
    });

    const handleInputChange = (event) => {
        setServico({
            ...servico,
            [event.target.name]: event.target.value
        });
    }

    const handleSave = (event) => {
        event.preventDefault();
        const notify = () => toast.success("Serviço editado com sucesso!");
        notify();
        setTimeout(() => {
            window.location.href = '/servico/id:';
        }, 1200);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        window.location.href = '/servico/id:';
    };

    return (
        <div>
            <div className="bg10"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Serviço</h2>
                <hr></hr>
                <form>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" name="nome" value={servico.nome} onChange={handleInputChange} />
                    </div>
                    <label>Descrição</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Descrição" name="descricao" value={servico.descricao} onChange={handleInputChange} />
                    </div>
                    <label>Valor</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Valor" name="valor" value={servico.valor} onChange={handleInputChange} />
                    </div>
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