import React, { useState } from 'react';
import "../styles/bg5.css";
import "../index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../services/axios';
import { NumericFormat } from 'react-number-format';

export default function CadastroProduto() {
    const [produto, setProduto] = useState({
        nome: '',
        descricao: '',
        valor: 0,
    });

    const handleInputChange = (name, value) => {
        setProduto({
            ...produto,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (produto.valor <= 0) {
            toast.error('O valor do produto deve ser maior que 0!');
            return;
        }

        await axios.post('/cadastrarProduto', { dados: produto }).then((response) => {
            toast.success('Produto cadastrado com sucesso!')
            setTimeout(() => {
                window.location.href = '/produtos';
            }, 1200);
        });
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
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Nome" 
                            aria-describedby="basic-addon1" 
                            name="nome" 
                            value={produto.nome}
                            onChange={e => handleInputChange(e.target.name, e.target.value)}
                            required
                        />
                    </div>
                    <label>Descrição</label>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Descrição" 
                            aria-describedby="basic-addon1" 
                            name="descricao" 
                            value={produto.descricao}
                            onChange={e => handleInputChange(e.target.name, e.target.value)}
                            required
                        />
                    </div>
                    <label>Valor do produto</label>
                    <div className="input-group mb-3">
                        <NumericFormat
                            value={produto.valor}
                            onValueChange={values => handleInputChange('valor', values.floatValue)}
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            fixedDecimalScale={true}
                            prefix={'R$ '}
                            format={(val) => {
                                const cleaned = val.replace(/[^\d]/g, '');
                                const formattedValue = (Number(cleaned) / 100).toFixed(2).replace('.', ',');
                                return `R$ ${formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
                            }}
                            className="form-control"
                            aria-label="Valor do produto"
                            aria-describedby="basic-addon1"
                            name="valor"
                            required
                        />
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
    );
}
