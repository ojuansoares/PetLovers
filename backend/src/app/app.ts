import express from 'express'
import cors from 'cors'

//Import das classes necessárias
import Empresa from '../modelo/empresa'
import ClienteController from '../controllers/clienteController'
import PetController from '../controllers/petController'
import ProdutoController from '../controllers/produtoController'
import ServicoController from '../controllers/servicoController'
import CompraController from '../controllers/compraController'

//Configurações do express
const app = express()
const port = 8080;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ 
    origin: 'http://localhost:3000'
}))

const empresa = new Empresa()
const clienteController = new ClienteController(empresa.getClientes, empresa.getPets)
const petController = new PetController(empresa.getPets, empresa.getClientes)
const produtoController = new ProdutoController(empresa.getProdutos)
const servicoController = new ServicoController(empresa.getServicos)
const compraController = new CompraController(empresa.getClientes, empresa.getProdutos, empresa.getServicos)

//--- Rotas de clientes ---
//Listagem geral dos clientes
app.get('/clientes', (req, res) => clienteController.listarClientes(req, res))
//Cadastro de clientes
app.post('/cadastrarCliente', (req, res) => clienteController.cadastrarCliente(req, res))
//Update de clientes
app.post('/atualizarCliente', (req, res) => clienteController.atualizarCliente(req, res))
//Remover um cliente
app.post('/removerCliente', (req, res) => clienteController.removerCliente(req, res))
//Remover um cliente com seus pets
app.post('/removerClienteComPets', (req, res) => clienteController.removerClienteComPets(req, res));
//Informações de um cliente
app.get('/cliente/:id', (req, res) => clienteController.consultarCliente(req, res))
//Documentos existentes
app.get('/cpfs', (req, res) => clienteController.cpfExistentes(req, res))
//Se cliente possui pets
app.get('/clientesComPets', clienteController.clientesComPets);
//Listar nome e cpf do cliente
app.get('/clientesComCpf', clienteController.listarClientesComCpf.bind(clienteController))


//--- Rotas de pets ---
//Listagem de pets
app.get('/pets', (req, res) => petController.listarPets(req, res))
//Informações do pet
app.get('/pet/:id', (req, res) => petController.consultarPet(req,res))
//Cadastro de pets
app.post('/cadastrarPet', (req, res) => petController.cadastrarPet(req, res))
//Atualização de pets
app.put('/atualizarPet/:id', (req, res) => petController.atualizarPet(req, res));
//Remoção de um pet
app.post('/removerPet', (req, res) => petController.removerPet(req, res))


//--- Rotas de produtos ---
//Listagem geral dos produtos
app.get('/produtos', (req, res) => produtoController.listarProdutos(req, res))
//Cadastro de produtos
app.post('/cadastrarProduto', (req, res) => produtoController.cadastrarProduto(req, res))
//Update de produtos
app.post('/atualizarProduto', (req, res) => produtoController.atualizarProduto(req, res))
//Remover um produto
app.post('/removerProduto', (req, res) => produtoController.removerProduto(req, res))
//Informações de um produto
app.get('/produto/:id', (req, res) => produtoController.consultarProduto(req, res))


//--- Rotas de serviços ---
//Listagem geral dos serviços
app.get('/servicos', (req, res) => servicoController.listarServicos(req, res))
//Cadastro de serviços
app.post('/cadastrarServico', (req, res) => servicoController.cadastrarServico(req, res))
//Update de serviços
app.post('/atualizarServico', (req, res) => servicoController.atualizarServico(req, res))
//Remover um serviço
app.post('/removerServico', (req, res) => servicoController.removerServico(req, res))
//Informações de um serviço
app.get('/servico/:id', (req, res) => servicoController.consultarServico(req, res))


//--- Rotas de compra ---
//Rota de compra de produtos
app.post('/comprarProduto', (req, res) => compraController.compraProduto(req, res))
//Rota de compra de serviços
app.post('/comprarServico', (req, res) => compraController.compraServico(req, res))


// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});