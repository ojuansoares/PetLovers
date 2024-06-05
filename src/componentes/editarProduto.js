import React, { useState } from 'react';
import "../index.css"
import "../styles/bg5.css"

export default function EditarProduto() {
    const [produto, setProduto] = useState({
        nome: 'Produto Exemplo',
        descricao: 'Descrição do Produto',
        valor: 100,
    });

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduto(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSave = (event) => {
        event.preventDefault();
        window.location.href = '/produto/id:';
    };

    const handleCancel = (event) => {
        event.preventDefault();
        window.location.href = '/produto/id:';
    };

    return (
        <div>
            <div className="bg5"></div>
            <div className="container-fluid fundo-escuro">
                <h2>Editar Produto</h2>
                <hr></hr>
                <form>
                    <label>Nome</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" name="nome" value={produto.nome} onChange={handleInputChange} />
                    </div>
                    <label>Descrição</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Descrição" name="descricao" value={produto.descricao} onChange={handleInputChange} />
                    </div>
                    <label>Valor</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Valor" name="valor" value={produto.valor} onChange={handleInputChange} />
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary" type="button" onClick={handleSave}>Salvar</button>
                        <button className="btn btn-outline-danger" type="button" onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}