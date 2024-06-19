import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


import Empresa from '../modelo/empresa';
import ClienteController from '../controllers/clienteController';
import PetController from '../controllers/petController';
import ProdutoController from '../controllers/produtoController';
import ServicoController from '../controllers/servicoController';
import CompraController from '../controllers/compraController';


const myEmpresa = new Empresa();


const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

const empresa = new Empresa();
const clienteController = new ClienteController(empresa.getClientes, empresa.getPets);
const petController = new PetController(empresa.getPets, empresa.getClientes);
const produtoController = new ProdutoController(empresa.getProdutos);
const servicoController = new ServicoController(empresa.getServicos);
const compraController = new CompraController(empresa);

// --- Rotas de clientes ---
app.get('/clientes', (req, res) => clienteController.listarClientes(req, res));
app.post('/cadastrarCliente', (req, res) => clienteController.cadastrarCliente(req, res));
app.post('/atualizarCliente', (req, res) => clienteController.atualizarCliente(req, res));
app.post('/removerCliente', (req, res) => clienteController.removerCliente(req, res));
app.post('/removerClienteComPets', (req, res) => clienteController.removerClienteComPets(req, res));
app.get('/cliente/:id', (req, res) => clienteController.consultarCliente(req, res));
app.get('/cpfs', (req, res) => clienteController.cpfExistentes(req, res));
app.get('/clientesComPets', clienteController.clientesComPets);
app.get('/clientesComCpf', (req, res) => clienteController.listarClientesComCpf(req, res));

// --- Rotas de pets ---
app.get('/pets', (req, res) => petController.listarPets(req, res));
app.get('/pet/:id', (req, res) => petController.consultarPet(req,res));
app.post('/cadastrarPet', (req, res) => petController.cadastrarPet(req, res));
app.put('/atualizarPet/:id', (req, res) => petController.atualizarPet(req, res));
app.post('/removerPet', (req, res) => petController.removerPet(req, res));

// --- Rotas de produtos ---
app.get('/produtos', (req, res) => produtoController.listarProdutos(req, res));
app.post('/cadastrarProduto', (req, res) => produtoController.cadastrarProduto(req, res));
app.post('/atualizarProduto', (req, res) => produtoController.atualizarProduto(req, res));
app.post('/removerProduto', (req, res) => produtoController.removerProduto(req, res));
app.get('/produto/:id', (req, res) => produtoController.consultarProduto(req, res));

// --- Rotas de serviços ---
app.get('/servicos', (req, res) => servicoController.listarServicos(req, res));
app.post('/cadastrarServico', (req, res) => servicoController.cadastrarServico(req, res));
app.post('/atualizarServico', (req, res) => servicoController.atualizarServico(req, res));
app.post('/removerServico', (req, res) => servicoController.removerServico(req, res));
app.get('/servico/:id', (req, res) => servicoController.consultarServico(req, res));

// --- Rotas de compra ---
app.get('/compras', (req, res) => compraController.listarCompra(req, res));
app.post('/realizarCompra', (req, res) => compraController.realizarCompra(req, res));

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Logging de rotas configuradas
app._router.stack.forEach(function(r: { route: { path: any; }; }){
  if (r.route && r.route.path){
    console.log(r.route.path);
  }
});
