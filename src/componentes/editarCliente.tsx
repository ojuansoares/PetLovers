import { useState, useEffect, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import '../styles/bg17.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Telefone = {
    id: number;
    numero: string;
    ddd: string;
};

type Endereco = {
    id: number;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    codigoPostal: string;
    informacoesAdicionais: string;
};

type Cliente = {
    id: number;
    nome: string;
    nomeSocial: string;
    email: string;
    endereco: Endereco;
    telefones: Telefone[];
};

type InputFieldProps = {
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
    ariaLabel: string;
};

const InputField = ({ value, setValue, placeholder, ariaLabel }: InputFieldProps) => (
    <div className="input-group mb-3">
        <input
            type="text"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            className="form-control"
            placeholder={placeholder}
            aria-label={ariaLabel}
            aria-describedby="basic-addon1"
        />
    </div>
);

export default function EditarCliente(): ReactElement {
    const { id } = useParams<{ id: string }>();
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [email, setEmail] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [info, setInfo] = useState('');
    const [telefones, setTelefones] = useState<Telefone[]>([]);

    useEffect(() => {
        const fetchCliente = async () => {
            const response = await fetch(`http://localhost:32831/cliente/${id}`);
            const data = await response.json();
            setCliente(data);
            setNome(data.nome);
            setNomeSocial(data.nomeSocial);
            setEmail(data.email);
            setRua(data.endereco.rua);
            setNumero(data.endereco.numero);
            setBairro(data.endereco.bairro);
            setCidade(data.endereco.cidade);
            setEstado(data.endereco.estado);
            setCep(data.endereco.codigoPostal);
            setInfo(data.endereco.informacoesAdicionais);
            setTelefones(data.telefones);
        };

        fetchCliente();
    }, [id]);

    if (!cliente) {
        return <div>Carregando...</div>;
    }

    const editar = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('http://localhost:32831/cliente/atualizar', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: cliente.id,
                nome,
                nomeSocial,
                email,
                endereco: {
                    id: cliente.endereco.id,
                    rua,
                    numero,
                    bairro,
                    cidade,
                    estado,
                    codigoPostal: cep,
                    informacoesAdicionais: info
                },
                telefones
            })
        });

        if (response.ok) {
            toast.success('Cliente atualizado com sucesso!');
            setTimeout(() => {
                window.location.href = `/cliente/${id}`;
            }, 1200);
        } else {
            toast.error('Erro ao atualizar o cliente.');
        }
    };

    return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar cliente</h2>
                <hr />
                <form onSubmit={editar}>
                    <InputField value={nome} setValue={setNome} placeholder="Nome" ariaLabel="Nome" />
                    <InputField value={nomeSocial} setValue={setNomeSocial} placeholder="Nome social" ariaLabel="Nome social" />
                    <InputField value={email} setValue={setEmail} placeholder="E-mail" ariaLabel="E-mail" />
                    {telefones.map((telefone, index) => (
                        <div key={index}>
                            <InputField
                                value={telefone.ddd}
                                setValue={(value: string) => {
                                    const updatedTelefones = [...telefones];
                                    updatedTelefones[index] = { ...updatedTelefones[index], ddd: value };
                                    setTelefones(updatedTelefones);
                                }}
                                placeholder="DDD"
                                ariaLabel="DDD"
                            />
                            <InputField
                                value={telefone.numero}
                                setValue={(value: string) => {
                                    const updatedTelefones = [...telefones];
                                    updatedTelefones[index] = { ...updatedTelefones[index], numero: value };
                                    setTelefones(updatedTelefones);
                                }}
                                placeholder="Número"
                                ariaLabel="Número"
                            />
                        </div>
                    ))}
                    <InputField value={rua} setValue={setRua} placeholder="Rua" ariaLabel="Rua" />
                    <InputField value={numero} setValue={setNumero} placeholder="Número" ariaLabel="Número" />
                    <InputField value={bairro} setValue={setBairro} placeholder="Bairro" ariaLabel="Bairro" />
                    <InputField value={cidade} setValue={setCidade} placeholder="Cidade" ariaLabel="Cidade" />
                    <InputField value={estado} setValue={setEstado} placeholder="Estado" ariaLabel="Estado" />
                    <InputField value={cep} setValue={setCep} placeholder="CEP" ariaLabel="CEP" />
                    <InputField value={info} setValue={setInfo} placeholder="Informações Adicionais" ariaLabel="Informações Adicionais" />
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit">Editar</button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" theme="dark" />
        </div>
    );
}
