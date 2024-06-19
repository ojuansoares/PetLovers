import React, { useState, useEffect } from 'react';
import "../index.css";
import "../styles/bg13.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../services/axios';

export default function CadastroPet() {
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [genero, setGenero] = useState('');
    const [tipo, setTipo] = useState('');
    const [iddono, setIdDono] = useState('');
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get('/clientesComCpf');
                setClientes(response.data);
            } catch (error) {
                toast.error("Erro ao carregar lista de clientes!");
            }
        };

        fetchClientes();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'nome':
                setNome(value);
                break;
            case 'raca':
                setRaca(value);
                break;
            case 'genero':
                setGenero(value);
                break;
            case 'tipo':
                setTipo(value);
                break;
            case 'iddono':
                setIdDono(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dados = {
            nome: nome,
            raca: raca,
            genero: genero,
            tipo: tipo,
            iddono: iddono
        };

        try {
            await axios.post('/cadastrarPet', { dados });
            toast.success("Pet cadastrado com sucesso!");
            setTimeout(() => {
                window.location.href = '/cadastrar';
            }, 1200);
        } catch (error) {
            toast.error("Erro ao cadastrar o pet!");
        }
    };

    const handleCancel = (event) => {
        event.preventDefault();
        window.location.href = '/cadastrar';
    };

    return (
        <div>
            <div className="bg13"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastro de Pet</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Nome" aria-describedby="basic-addon1" name="nome" value={nome} onChange={handleInputChange} required />
                    </div>
                    <label>Raça</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Raça" aria-describedby="basic-addon1" name="raca" value={raca} onChange={handleInputChange} required />
                    </div>
                    <label>Gênero</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Gênero" aria-describedby="basic-addon1" name="genero" value={genero} onChange={handleInputChange} required />
                    </div>
                    <label>Tipo</label>
                    <div className="input-group mb-3">
                        <select className="form-control" name="tipo" value={tipo} onChange={handleInputChange} required>
                            <option value="" disabled></option>
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                        </select>
                    </div>
                    <label>Selecione o Dono</label>
                    <div className="input-group mb-3">
                        <select className="form-control" name="iddono" value={iddono} onChange={handleInputChange} required>
                            <option value="" disabled></option>
                            {clientes.map((cliente, index) => (
                                <option key={index} value={cliente.cpf}>{cliente.nome} - {cliente.cpf}</option>
                            ))}
                        </select>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" theme="dark" />
        </div>
    );
}
