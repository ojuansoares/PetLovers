import { Request, Response } from "express"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Pet from "../modelo/pet"
import Telefone from "../modelo/telefone"
import PetController from "./petController"

export default class ClienteController {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private petController: PetController

    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        this.clientes = clientes
        this.pets = pets
        this.petController = new PetController(pets, clientes)
    }

    public listarClientes(req: Request, res: Response) {
        res.json(this.clientes)
    }

    public cadastrarCliente(req: Request, res: Response): void {
        try {
            const dados = req.body.dados

            // CPF
            let cpf = new CPF(dados.cpf.valor, dados.cpf.dataEmissao)

            // RGS
            let rgs: RG[] = []
            for (let i = 0; i < dados.rgs.length; i++) {
                let rg = new RG(dados.rgs[i].valor, dados.rgs[i].dataEmissao)
                rgs.push(rg)
            }

            // TELEFONES
            let telefones: Telefone[] = []
            for (let i = 0; i < dados.telefones.length; i++) {
                let telefone = new Telefone(dados.telefones[i].ddd, dados.telefones[i].numero)
                telefones.push(telefone)
            }

            let cliente = new Cliente(dados.nome, dados.nomeSocial, cpf, rgs, new Date(), telefones, [])
            this.clientes.push(cliente)
            res.send(cliente)

        } catch (error) {
            res.send(error)
        }

    }

    public atualizarCliente(req: Request, res: Response): void {
        try {
            const dados = req.body.dados
            const id: number = req.body.id

            let clienteAlvo = this.clientes[Number(id) - 1]
            if (clienteAlvo) {
                // Atualização dos dados
                clienteAlvo.nome = dados.nome
                clienteAlvo.nomeSocial = dados.nomeSocial

                let rgs: RG[] = []
                for (let i = 0; i < dados.rgs.length; i++) {
                    let rg = new RG(dados.rgs[i].valor, dados.rgs[i].dataEmissao)
                    rgs.push(rg)
                }
                clienteAlvo.setRgs = rgs

                let telefones: Telefone[] = []
                for (let i = 0; i < dados.telefones.length; i++) {
                    let telefone = new Telefone(dados.telefones[i].ddd, dados.telefones[i].numero)
                    telefones.push(telefone)
                }
                clienteAlvo.setTelefones = telefones

                res.send(`Cliente atualizado com sucesso`)
            } else {
                res.send(`Cliente não encontrado`)
            }

        } catch (error) {
            res.send(error)
        }

    }

    public removerCliente(req: Request, res: Response): void {
        try {
            const id: number = req.body.id

            this.clientes.splice((id - 1), 1)
            res.send('Cliente removido com sucesso')

        } catch (error) {
            res.send(error)
        }
    }

    public consultarCliente(req: Request, res: Response) {
        try {
            const id = req.params.id

            let clienteAlvo = this.clientes[Number(id) - 1]
            if (clienteAlvo) {
                let comprasCliente: (Produto | Servico)[] = []

                let produtosConsumidos = clienteAlvo.getProdutosConsumidos
                produtosConsumidos.forEach(produto => comprasCliente.push(produto))

                let servicosConsumidos = clienteAlvo.getServicosConsumidos
                servicosConsumidos.forEach(servico => comprasCliente.push(servico))

                res.send({ informacoes: clienteAlvo, compras: comprasCliente })
            } else {
                res.send(`Cliente não encontrado`)
            }
        } catch (error) {

        }
    }

    public cpfExistentes(request: Request, res: Response) {

        const listaCpfs: Array<string> = []
        this.clientes.forEach(cliente => {
            const cpf = cliente.getCpf.getValor
            listaCpfs.push(cpf)
        })

        res.send(listaCpfs)
    }

    public clientesComPets(request: Request, res: Response) {
        const clientesComPets: Array<string> = []
        this.clientes.forEach(cliente => {
            if (cliente.getPets && cliente.getPets.length > 0) {
                clientesComPets.push(cliente.nome)
            }
        })

        res.send(clientesComPets)
    }

    public listarClientesComCpf(req: Request, res: Response) {
        const listaClientes = this.clientes.map(cliente => ({
            nome: cliente.nome,
            cpf: cliente.getCpf.getValor
        }));
        res.json(listaClientes);
    }

    public removerClienteComPets(req: Request, res: Response): void {
        try {
            const id: number = Number(req.body.id);
            const clienteAlvo = this.clientes[id - 1];

            if (!clienteAlvo) {
                res.status(404).send('Cliente não encontrado');
                return;
            }

            // Remover os pets associados ao cliente
            const cpfCliente = clienteAlvo.getCpf.getValor;
            const petsDoCliente = this.pets.filter(pet => pet.getIdDono === cpfCliente);

            petsDoCliente.forEach(pet => {
                const reqPet = { body: { id: pet.getId } } as Request;
                const resPet = { send: (message: string) => {} } as Response; // mock response object
                this.petController.removerPet(reqPet, resPet);
            });

            // Remover o cliente
            this.clientes.splice(id - 1, 1);

            res.send('Cliente e seus pets removidos com sucesso');
        } catch (error) {
            res.send(error);
        }
    }
}
