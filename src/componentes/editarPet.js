import React, { useState } from 'react';
import "../index.css"
import "../styles/bg13.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditarPet() {
    const [pet, setPet] = useState({
        nome: 'Rex',
        raca: 'Pitbull',
        genero: 'Macho',
        tipo: 'Cachorro',
        idDono: 1,
    });

    const handleInputChange = (event) => {
        setPet({
            ...pet,
            [event.target.name]: event.target.value
        });
    }

    const handleSave = (event) => {
        event.preventDefault();
        const notify = () => toast.success("Pet editado com sucesso!");
        notify();
        setTimeout(() => {
            window.location.href = '/pet/id:';
        }, 1200);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        window.location.href = '/pet/id:';
    };

    return (
        <div>
            <div className="bg13"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Pet</h2>
                <hr></hr>
                <form>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" name="nome" value={pet.nome} onChange={handleInputChange} />
                    </div>
                    <label>Raça</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça" name="raca" value={pet.raca} onChange={handleInputChange} />
                    </div>
                    <label>Gênero</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Gênero" name="genero" value={pet.genero} onChange={handleInputChange} />
                    </div>
                    <label>Tipo</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo" name="tipo" value={pet.tipo} onChange={handleInputChange} />
                    </div>
                    <label>ID do Dono</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="ID do Dono" name="idDono" value={pet.idDono} onChange={handleInputChange} />
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