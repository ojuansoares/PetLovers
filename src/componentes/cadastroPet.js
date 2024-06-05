import React, { useState } from 'react';
import "../index.css"
import "../styles/bg13.css"

export default function CadastroPet() {
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [genero, setGenero] = useState('');
    const [tipo, setTipo] = useState('');
    const [idDono, setIdDono] = useState(1);

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
            case 'idDono':
                setIdDono(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode lidar com a submissão do formulário
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
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" name="nome" onChange={handleInputChange}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" name="raca" onChange={handleInputChange}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" name="genero" onChange={handleInputChange}/>
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-control" name="tipo" onChange={handleInputChange}>
                            <option value="" disabled selected>Tipo</option>
                            <option value="Cachorro">Cachorro</option>
                            <option value="Gato">Gato</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="form-control" name="idDono" onChange={handleInputChange}>
                            <option value="" disabled selected>ID do Dono do Pet</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="submit">Cadastrar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}