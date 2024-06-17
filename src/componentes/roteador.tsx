import { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import ListaCadastrar from "./listaCadastrar";
import CadastroCliente from './cadastroCliente';
import Cliente from "./cliente";
import EditarCliente from "./editarCliente";
import Home from "./home";

export default class Roteador extends Component {
    render() {
        return (
            <>
                <BarraNavegacao />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastrocliente" element={<CadastroCliente />} />
                    <Route path="/clientes" element={<ListaCliente />} />
                    <Route path="/cadastrar" element={<ListaCadastrar />} />
                    <Route path="/cliente/:id" element={<Cliente />} />
                    <Route path="/editarcliente/:id" element={<EditarCliente />} />
                </Routes>
            </>
        )
    }
}