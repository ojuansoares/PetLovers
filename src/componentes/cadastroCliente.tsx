import { SetStateAction, useState, FormEvent } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../index.css";
import "../styles/bg17.css";

export default function CadastroCliente() {
    const [nome, setNome] = useState<string>('');
    const [nomeSocial, setNomeSocial] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [rua, setRua] = useState<string>('');
    const [numero, setNumero] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [estado, setEstado] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [infos, setInfos] = useState<string>('');
    const [ddd, setDdd] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');

    const cadastrar = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!nome || !email || !rua || !numero || !bairro || !cidade || !estado || !cep || !ddd || !telefone || !infos) {
            toast.error('Todos os campos são obrigatórios');
            return;
        }

        fetch('http://localhost:32831/cliente/cadastrar', {
            method: 'POST',
            body: JSON.stringify({
                nome,
                nomeSocial,
                email,
                endereco: {
                    rua,
                    numero,
                    bairro,
                    cidade,
                    estado,
                    codigoPostal: cep,
                    informacoesAdicionais: infos
                },
                telefones: [
                    {
                        numero: telefone,
                        ddd
                    }
                ]
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            const text = await res.text();
            return text ? JSON.parse(text) : {};
        })
        .then((data) => {
            setNome('');
            setNomeSocial('');
            setEmail('');
            setRua('');
            setNumero('');
            setBairro('');
            setCidade('');
            setEstado('');
            setCep('');
            setDdd('');
            setTelefone('');
            setInfos('');
            console.log('Cliente Cadastrado', data);
            toast.success('Cliente cadastrado com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao cadastrar cliente', err);
            toast.error('Erro ao cadastrar cliente');
        });
    };

    return (
        <div>
            <div className="bg17"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Cadastrar cliente</h2>
                <hr />
                <form onSubmit={cadastrar}>
                    {[
                        { placeholder: "Nome", value: nome, setValue: setNome, ariaLabel: "Nome" },
                        { placeholder: "Nome social", value: nomeSocial, setValue: setNomeSocial, ariaLabel: "Nome social" },
                        { placeholder: "E-mail", value: email, setValue: setEmail, ariaLabel: "E-mail", inputType: "text", prefix: "@" },
                        { placeholder: "DDD", value: ddd, setValue: setDdd, ariaLabel: "DDD" },
                        { placeholder: "Telefone", value: telefone, setValue: setTelefone, ariaLabel: "Telefone" },
                        { placeholder: "Rua", value: rua, setValue: setRua, ariaLabel: "Rua" },
                        { placeholder: "Número", value: numero, setValue: setNumero, ariaLabel: "Número" },
                        { placeholder: "Bairro", value: bairro, setValue: setBairro, ariaLabel: "Bairro" },
                        { placeholder: "Cidade", value: cidade, setValue: setCidade, ariaLabel: "Cidade" },
                        { placeholder: "Estado", value: estado, setValue: setEstado, ariaLabel: "Estado" },
                        { placeholder: "CEP", value: cep, setValue: setCep, ariaLabel: "CEP" },
                        { placeholder: "Informações Adicionais", value: infos, setValue: setInfos, ariaLabel: "Informações Adicionais" }
                    ].map((field, index) => (
                        <div className="input-group mb-3" key={index}>
                            {field.prefix && <span className="input-group-text" id={`prefix-${index}`}>{field.prefix}</span>}
                            <input
                                type={field.inputType || "text"}
                                value={field.value}
                                onChange={(e: { target: { value: SetStateAction<string>; }; }) => field.setValue(e.target.value)}
                                className="form-control"
                                placeholder={field.placeholder}
                                aria-label={field.ariaLabel}
                                aria-describedby={`basic-addon${index}`}
                            />
                        </div>
                    ))}
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
            <ToastContainer position="top-center" theme="dark" />
        </div>
    );
}
