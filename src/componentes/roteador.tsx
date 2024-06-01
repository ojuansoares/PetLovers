import { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import ListaPets from "./listaPets";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import ListaCadastrar from "./listaCadastrar";
import CadastroCliente from './cadastroCliente';
import CadastroPet from './cadastroPet';
import CadastroProduto from './cadastroProduto';
import CadastroServico from './cadastroServico';
import CadastroCompra from "./cadastroCompra";
import ListaListagens from "./listaListagens";
import HistoricoCompras from "./historicoCompras";
import Top10ClientesQuantidade from "./top10ClientesQuantidade";
import Top5ClientesValor from "./top5ClientesValor";
import MaisConsumidos from "./listaMaisConsumidos";
import MaisConsumidosPorTipoERaca from "./listaMaisConsumidosPorTipoERaca";
import Cliente from "./cliente";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";
import EditarProduto from "./editarProduto";
import EditarServico from "./editarServico";
import EditarCliente from "./editarCliente";
import EditarPet from "./editarPet";
import Home from "./home";

export default class Roteador extends Component {
    render() {
        return (
            <>
                <BarraNavegacao />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastrocliente" element={<CadastroCliente />} />
                    <Route path="/cadastropet" element={<CadastroPet />} />
                    <Route path="/cadastroproduto" element={<CadastroProduto />} />
                    <Route path="/cadastroservico" element={<CadastroServico />} />
                    <Route path="/registrarcompra" element={<CadastroCompra />} />
                    <Route path="/clientes" element={<ListaCliente />} />
                    <Route path="/pets" element={<ListaPets />} />
                    <Route path="/produtos" element={<ListaProdutos />} />
                    <Route path="/servicos" element={<ListaServicos />} />
                    <Route path="/cadastrar" element={<ListaCadastrar />} />
                    <Route path="/listagens" element={<ListaListagens />} />
                    <Route path="/historicocompras" element={<HistoricoCompras />} />
                    <Route path="/top10quantidade" element={<Top10ClientesQuantidade />} />
                    <Route path="/top5valor" element={<Top5ClientesValor />} />
                    <Route path="/maisconsumidos" element={<MaisConsumidos />} />
                    <Route path="/maisconsumidosportipoeraca" element={<MaisConsumidosPorTipoERaca />} />
                    <Route path="/cliente/:id" element={<Cliente />} />
                    <Route path="/pet/:id" element={<Pet />} />
                    <Route path="/servico/:id" element={<Servico />} />
                    <Route path="/produto/:id" element={<Produto />} />
                    <Route path="/editarservico/:id" element={<EditarServico />} />
                    <Route path="/editarproduto/:id" element={<EditarProduto />} />
                    <Route path="/editarcliente/:id" element={<EditarCliente />} />
                    <Route path="/editarpet/:id" element={<EditarPet />} />
                </Routes>
            </>
        )
    }
}