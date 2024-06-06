import React, { useState } from 'react';
import "../styles/bg5.css"
import "../index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CadastroProduto() {
    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        valor: 0,
    });

    const handleInputChange = (event) => {
        setProduto({
            ...produto,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const notify = () => toast.success("Produto cadastrado com sucesso!");
        notify();
        setTimeout(() => {
            window.location.href = '/cadastrar';
        }, 1200);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        window.location.href = '/cadastrar';
    };

    return (
        <div>
            <div className="bg5"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastro de Produto</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" name="nome" onChange={handleInputChange}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" name="descricao" onChange={handleInputChange}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Valor do produto" aria-label="Valor do produto" aria-describedby="basic-addon1" name="valor" onChange={handleInputChange}/>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
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