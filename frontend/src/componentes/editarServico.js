import React, { useState, useEffect } from 'react';
import "../index.css";
import "../styles/bg10.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../services/axios';
import { useParams } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

export default function EditarServico() {
    const [servico, setServico] = useState({
        nome: '',
        descricao: '',
        valor: 0,
    });
    const { id } = useParams();

    useEffect(() => {
        const fetchServico = async () => {
            try {
                const response = await axios.get(`/servico/${id}`);
                setServico(response.data);
            } catch (error) {
                toast.error('Erro ao buscar serviço');
            }
        };
        fetchServico();
    }, [id]);

    const handleInputChange = (name, value) => {
        setServico({
            ...servico,
            [name]: value
        });
    };

    const handleSave = async (event) => {
        event.preventDefault();

        if (servico.valor <= 0) {
            toast.error('O valor do serviço deve ser maior que 0!');
            return;
        }

        try {
            await axios.post(`/atualizarServico`, { id: servico.id, dados: servico });
            toast.success('Serviço editado com sucesso!');
            console.log("Serviço editado com sucesso")
            setTimeout(() => {
                window.location.href = `/servico/${id}`;
            }, 1200);
        } catch (error) {
            toast.error('Erro ao editar serviço');
        }
    };

    const handleCancel = (event) => {
        event.preventDefault();
        window.location.href = `/servico/${id}`;
    };

    return (
        <div>
            <div className="bg10"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Serviço</h2>
                <hr></hr>
                <form onSubmit={handleSave}>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            aria-label="Nome" 
                            aria-describedby="basic-addon1" 
                            name="nome" 
                            value={servico.nome}
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
                            value={servico.descricao}
                            onChange={e => handleInputChange(e.target.name, e.target.value)}
                            required
                        />
                    </div>
                    <label>Valor do serviço</label>
                    <div className="input-group mb-3">
                        <NumericFormat
                            value={servico.valor}
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
                            aria-label="Valor do serviço"
                            aria-describedby="basic-addon1"
                            name="valor"
                            required
                        />
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="submit">Salvar</button>
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