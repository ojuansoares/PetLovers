import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import Cliente from "./cliente";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";
import ListaCadastrar from "./listaCadastrar";
import ListaClientes from "./listaClientes";
import ListaPets from "./listaPets";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import ListaListagens from "./listaListagens";
import MaisConsumidos from "./listaMaisConsumidos";
import HistoricoCompras from "./historicoCompras";
import Top10ClientesQuantidade from "./top10ClientesQuantidade";
import Top5ClientesValor from "./top5ClientesValor";
import MaisConsumidosPorTipoERaca from "./listaMaisConsumidosPorTipoERaca";
import CadastroCliente from './cadastroCliente';
import CadastroCompra from "./cadastroCompra";
import CadastroPet from "./cadastroPet";
import CadastroProduto from "./cadastroProduto";
import CadastroServico from "./cadastroServico";
import EditarCliente from "./editarCliente";
import EditarPet from "./editarPet";
import EditarProduto from "./editarProduto";
import EditarServico from "./editarServico";

export default function Roteador() {
    return (
        <Router>
            <BarraNavegacao />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastrocliente" element={<CadastroCliente />} />
                <Route path="/registrarcompra" element={<CadastroCompra />} />
                <Route path="/cadastropet" element={<CadastroPet />} />
                <Route path="/cadastroproduto" element={<CadastroProduto />} />
                <Route path="/cadastroservico" element={<CadastroServico />} />
                <Route path="/editarpet/:id" element={<EditarPet />} />
                <Route path="/editarcliente/:id" element={<EditarCliente />} />
                <Route path="/editarproduto/:id" element={<EditarProduto />} />
                <Route path="/editarservico/:id" element={<EditarServico />} />
                <Route path="/cadastrar" element={<ListaCadastrar />} />
                <Route path="/clientes" element={<ListaClientes />} />
                <Route path="/pets" element={<ListaPets />} />
                <Route path="/produtos" element={<ListaProdutos />} />
                <Route path="/servicos" element={<ListaServicos />} />
                <Route path="/listagens" element={<ListaListagens />} />
                <Route path="/maisconsumidos" element={<MaisConsumidos />} />
                <Route path="/historicocompras" element={<HistoricoCompras />} />
                <Route path="/top10quantidade" element={<Top10ClientesQuantidade />} />
                <Route path="/top5valor" element={<Top5ClientesValor />} />
                <Route path="/maisconsumidosportipoeraca" element={<MaisConsumidosPorTipoERaca />} />
                <Route path="/cliente/:id" element={<Cliente />} />
                <Route path="/pet/:id" element={<Pet />} />
                <Route path="/produto/:id" element={<Produto />} />
                <Route path="/servico/:id" element={<Servico />} />
            </Routes>
        </Router>
    )
}