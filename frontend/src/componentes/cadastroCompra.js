import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/bg8.css";
import "../index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CadastroCompra() {
    const [clientes, setClientes] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [idComprador, setIdComprador] = useState('');
    const [tipoCompra, setTipoCompra] = useState('');
    const [produtoServico, setProdutoServico] = useState('');
    const [idPet, setIdPet] = useState('');
    const [valorCompra, setValorCompra] = useState(null);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/clientesComCpf');
                setClientes(response.data);
            } catch (error) {
                toast.error("Erro ao carregar lista de clientes!");
            }
        };

        const fetchProdutosServicos = async () => {
            try {
                const [produtosResponse, servicosResponse] = await Promise.all([
                    axios.get('http://localhost:8080/produtos'),
                    axios.get('http://localhost:8080/servicos')
                ]);
                setProdutos(produtosResponse.data);
                setServicos(servicosResponse.data);
            } catch (error) {
                toast.error("Erro ao carregar lista de produtos e serviços!");
            }
        };

        fetchClientes();
        fetchProdutosServicos();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'idComprador':
                setIdComprador(value);
                break;
            case 'tipoCompra':
                setTipoCompra(value);
                setProdutoServico('');
                setIdPet('');
                break;
            case 'produtoServico':
                setProdutoServico(Number(value));
                break;
            case 'idPet':
                setIdPet(Number(value));
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                cpfCliente: idComprador,
                tipoCompra,
                idItem: produtoServico,
                idPet: tipoCompra === 'produto' ? null : idPet
            };
            console.log("Dados enviados:", data);
            const response = await axios.post('http://localhost:8080/realizarCompra', data);
            toast.success("Compra cadastrada com sucesso!");
            setValorCompra(response.data.valor);
            setTimeout(() => {
                window.location.href = '/registrarcompra';
            }, 1200);
        } catch (error) {
            console.log("Erro ao cadastrar compra:", error);
            toast.error("Erro ao cadastrar compra!");
        }
    };

    return (
        <div>
            <div className="bg8"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastro de Compra</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <label>Selecione o Cliente</label>
                    <div className="input-group mb-3">
                        <select className="form-control" name="idComprador" value={idComprador} onChange={handleInputChange} required>
                            <option value="" disabled></option>
                            {clientes.map((cliente, index) => (
                                <option key={index} value={cliente.cpf}>{cliente.nome} - {cliente.cpf}</option>
                            ))}
                        </select>
                    </div>
                    <label>Tipo da compra</label>
                    <div className="input-group mb-3">
                        <select className="form-control" name="tipoCompra" value={tipoCompra} onChange={handleInputChange} required>
                            <option value="" disabled></option>
                            <option value="produto">Produto</option>
                            <option value="servico">Serviço</option>
                        </select>
                    </div>
                    <label>Selecione o Produto/Serviço</label>
                    <div className="input-group mb-3">
                        <select className="form-control" name="produtoServico" value={produtoServico} onChange={handleInputChange} required>
                            <option value="" disabled></option>
                            {tipoCompra === 'produto' && produtos.map((produto, index) => (
                                <option key={index} value={produto.id}>{produto.nome}</option>
                            ))}
                            {tipoCompra === 'servico' && servicos.map((servico, index) => (
                                <option key={index} value={servico.id}>{servico.nome}</option>
                            ))}
                        </select>
                    </div>
                    <label>ID do Pet</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="idPet" value={idPet} onChange={handleInputChange} required={tipoCompra === 'servico'} />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
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
