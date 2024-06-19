import React, { useState, useEffect } from 'react';
import "../index.css";
import "../styles/bg17.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../services/axios';
import InputMask from 'react-input-mask';
import { useParams } from 'react-router-dom';

export default function EditarCliente() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [cpf, setCpf] = useState({ valor: '', dataEmissao: '' });
    const [originalCpf, setOriginalCpf] = useState('');
    const [numRgs, setNumRgs] = useState(1);
    const [rgs, setRgs] = useState([{ rg: '', dataEmissao: '' }]);
    const [numTelefones, setNumTelefones] = useState(1);
    const [telefones, setTelefones] = useState([{ ddd: '', numero: '' }]);
    const [cpfsExistente, setCpfsExistente] = useState([]);

    useEffect(() => {
        async function fetchCliente() {
            try {
                const response = await axios.get(`/cliente/${id}`);
                console.log("Dados do cliente:", response.data);
                const cliente = response.data.informacoes;

                setNome(cliente.nome || '');
                setNomeSocial(cliente.nomeSocial || '');
                setCpf(cliente.cpf || { valor: '', dataEmissao: '' });
                setOriginalCpf(cliente.cpf.valor || ''); // Armazenar o CPF original
                setRgs(cliente.rgs && cliente.rgs.length > 0 ? cliente.rgs.map(rg => ({ rg: rg.valor, dataEmissao: rg.dataEmissao })) : [{ rg: '', dataEmissao: '' }]);
                setTelefones(cliente.telefones && cliente.telefones.length > 0 ? cliente.telefones.map(tel => ({ ddd: tel.ddd, numero: tel.numero })) : [{ ddd: '', numero: '' }]);
                setNumRgs(cliente.rgs ? cliente.rgs.length : 1);
                setNumTelefones(cliente.telefones ? cliente.telefones.length : 1);
            } catch (error) {
                console.error("Erro ao buscar cliente:", error);
            }
        }

        fetchCliente();

        async function getCpfExistentes() {
            const response = await axios.get('/cpfs');
            setCpfsExistente(response.data);
        }

        getCpfExistentes();
    }, [id]);

    useEffect(() => {
        setRgs(Array.from({ length: numRgs }, (_, index) => rgs[index] || { rg: '', dataEmissao: '' }));
    }, [numRgs]);

    useEffect(() => {
        setTelefones(Array.from({ length: numTelefones }, (_, index) => telefones[index] || { ddd: '', numero: '' }));
    }, [numTelefones]);

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
                setCpf({ ...cpf, valor: value });
                break;
            case 'dataEmissaoCpf':
                setCpf({ ...cpf, dataEmissao: value });
                break;
            case 'numRgs':
                const numRgsValue = parseInt(value, 10);
                if (numRgsValue > 0 && numRgsValue <= 30) {
                    setNumRgs(numRgsValue);
                }
                break;
            case 'numTelefones':
                const numTelefonesValue = parseInt(value, 10);
                if (numTelefonesValue > 0 && numTelefonesValue <= 30) {
                    setNumTelefones(numTelefonesValue);
                }
                break;
            default:
                break;
        }
    };

    const handleRgChange = (index, event) => {
        const { name, value } = event.target;
        const newRgs = [...rgs];
        newRgs[index][name] = value;
        setRgs(newRgs);
    };

    const handleTelefoneChange = (index, event) => {
        const { name, value } = event.target;
        const newTelefones = [...telefones];
        if (name === "telefone") {
            const ddd = value.substring(1, 3);
            const numero = value.substring(5).replace('-', '');
            newTelefones[index]["ddd"] = ddd;
            newTelefones[index]["numero"] = numero;
        } else {
            newTelefones[index][name] = value;
        }
        setTelefones(newTelefones);
    };

    const validaForm = () => {
        const cpfJaCadastrado = cpf.valor !== originalCpf && cpfsExistente.includes(cpf.valor);
        const cpfIncompleto = cpf.valor.length !== 14; // '999.999.999-99'
        const rgIncompleto = rgs.some(rg => rg.rg.length !== 12); // '99.999.999-9'
        const telefoneIncompleto = telefones.some(telefone => telefone.numero.length < 8);

        if (cpfJaCadastrado) {
            toast.error('CPF já cadastrado');
            return false;
        } else if (cpfIncompleto) {
            toast.error('CPF incompleto!');
            return false;
        } else if (rgIncompleto) {
            toast.error('RG incompleto!');
            return false;
        } else if (telefoneIncompleto) {
            toast.error('Telefone incompleto!');
            return false;
        } else {
            return true;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validaForm()) {
            const dados = {
                nome: nome,
                nomeSocial: nomeSocial,
                cpf: { valor: cpf.valor, dataEmissao: cpf.dataEmissao }, // Modifiquei aqui
                rgs: rgs.map((rg, index) => ({ id: index + 1, valor: rg.rg, dataEmissao: rg.dataEmissao })),
                telefones: telefones.map((telefone, index) => ({ id: index + 1, ddd: telefone.ddd, numero: telefone.numero }))
            };

            await axios.post('/atualizarCliente', { dados: dados, id }).then((response) => {
                toast.success('Cliente editado com sucesso!');
                setTimeout(() => {
                    window.location.href = '/clientes';
                }, 1200);
            });
        }
    };

    const handleCancel = (event) => {
        event.preventDefault();
        window.location.href = `/cliente/${id}`;
    };

    return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Cliente</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Nome" name="nome" value={nome} onChange={handleInputChange} required />
                    </div>
                    <label>Nome social</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Nome social" name="nomeSocial" value={nomeSocial} onChange={handleInputChange} required />
                    </div>
                    <label>CPF (Fixo)</label>
                    <div className="input-group mb-3">
                        <InputMask className="form-control" aria-label="CPF" name="cpf" value={cpf.valor} onChange={handleInputChange} mask="999.999.999-99" required readOnly/>
                    </div>
                    <label>Data de emissão do CPF (Fixo)</label>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" aria-label="Data de emissão do CPF" name="dataEmissaoCpf" value={cpf.dataEmissao} onChange={handleInputChange} required readOnly/>
                    </div>
                    <label>Quantos RGs quer adicionar?</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantos RGs quer adicionar?" aria-label="Quantos RGs quer adicionar?" name="numRgs" value={numRgs} onChange={handleInputChange} required />
                    </div>
                    {rgs.map((rg, index) => (
                        <div key={index}>
                            <label>RG {index + 1}</label>
                            <div className="input-group mb-3">
                                <InputMask className="form-control" aria-label="RG" name="rg" value={rg.rg} onChange={(event) => handleRgChange(index, event)} mask="99.999.999-9" required />
                            </div>
                            <label>Data de emissão do RG</label>
                            <div className="input-group mb-3">
                                <input type="date" className="form-control" aria-label="Data de emissão do RG" name="dataEmissao" value={rg.dataEmissao} onChange={(event) => handleRgChange(index, event)} required />
                            </div>
                        </div>
                    ))}
                    <label>Quantos Telefones quer adicionar?</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantos Telefones quer adicionar?" aria-label="Quantos Telefones quer adicionar?" name="numTelefones" value={numTelefones} onChange={handleInputChange} required />
                    </div>
                    {telefones.map((telefone, index) => (
                        <div key={index}>
                            <label>Telefone {index + 1}</label>
                            <div className="input-group mb-3">
                                <InputMask className="form-control" aria-label="Telefone" name="telefone" value={`(${telefone.ddd}) ${telefone.numero}`} onChange={(event) => handleTelefoneChange(index, event)} mask="(99) 9999-9999" required />
                            </div>
                        </div>
                    ))}

                    <div className="gap-2 d-flex">
                        <button type="submit" className="btn btn-outline-secondary">Editar</button>
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
