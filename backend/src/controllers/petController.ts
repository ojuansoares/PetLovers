import { Request, Response } from "express";
import Pet from "../modelo/pet";
import Cliente from "../modelo/cliente";

export default class PetController {
    private pets: Array<Pet>;
    private clientes: Array<Cliente>;
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        this.pets = pets;
        this.clientes = clientes;
    }

    public listarPets(req: Request, res: Response) {
        res.json(this.pets);
    }

    public consultarPet(req: Request, res: Response): void {
        try {
            const id = req.params.id;
            let petAlvo = this.pets.find(pet => pet.getId === Number(id));
            if (petAlvo) {
                res.send({ informacoes: petAlvo });
            } else {
                res.status(404).send("Pet não encontrado");
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public cadastrarPet(req: Request, res: Response): void {
        try {
            const dados = req.body.dados;

            // Gerar ID baseado no comprimento da lista de pets
            const id = this.pets.length + 1;
            let pet = new Pet(id, dados.nome, dados.raca, dados.genero, dados.tipo, dados.iddono);

            const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === dados.iddono);

            if (!cliente) {
                res.status(404).send("Cliente não encontrado!");
                return;
            }

            // Adicionar o pet à lista de pets do cliente
            cliente.getPets.push(pet);
            this.pets.push(pet);
            res.send(pet);
        } catch (error) {
            res.send(error);
        }
    }

    public async atualizarPet(req: Request, res: Response): Promise<void> {
        try {
            const dados = req.body.dados;
            const id = parseInt(req.params.id, 10);
    
            let petAlvo = this.pets.find(pet => pet.getId === id);
            if (!petAlvo) {
                res.status(404).send("Pet não encontrado");
                return;
            }
    
            // Guardar o CPF do dono original
            const originalCpf = petAlvo.getIdDono;
    
            // Atualizar informações do pet
            petAlvo.setNome = dados.nome;
            petAlvo.setRaca = dados.raca;
            petAlvo.setGenero = dados.genero;
            petAlvo.setTipo = dados.tipo;
    
            // Verificar se o dono mudou
            if (originalCpf !== dados.iddono) {
                // Remover pet da lista do dono original
                let clienteOriginal = this.clientes.find(cliente => cliente.getCpf.getValor === originalCpf);
                if (clienteOriginal) {
                    const indexPetCliente = clienteOriginal.getPets.findIndex(pet => pet.getId === id);
                    if (indexPetCliente !== -1) {
                        clienteOriginal.getPets.splice(indexPetCliente, 1);
                        console.log("pet removido do antigo dono");
                    } else {
                        console.log("pet não encontrado na lista de pets do cliente original");
                    }
                } else {
                    console.log("cliente original não encontrado");
                    return;
                }
    
                // Adicionar pet na lista do novo dono
                let novoCliente = this.clientes.find(cliente => cliente.getCpf.getValor === dados.iddono);
                if (novoCliente) {
                    novoCliente.getPets.push(petAlvo);
                    petAlvo.setIdDono = dados.iddono;
                    console.log("pet adicionado ao novo dono")
                } else {
                    res.status(404).send("Novo cliente não encontrado");
                    return;
                }
            }
    
            res.send("Pet atualizado com sucesso");
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public removerPet(req: Request, res: Response): void {
        try {
            const id: number = req.body.id;
            const index = this.pets.findIndex(pet => pet.getId === id);
            if (index !== -1) {
                // Encontrar o cliente que é o dono do pet
                const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === this.pets[index].getIdDono);
                if (cliente) {
                    // Remover o pet da lista de pets do cliente
                    const indexPetCliente = cliente.getPets.findIndex(pet => pet.getId === id);
                    if (indexPetCliente !== -1) {
                        cliente.getPets.splice(indexPetCliente, 1);
                    }
                }
                // Remover o pet da lista de pets
                this.pets.splice(index, 1);
                res.send("Pet removido com sucesso");
            } else {
                res.send("Pet não encontrado");
            }
        } catch (error) {
            res.send(error);
        }
    }

    public removerPetsPorCliente(cpfCliente: string): void {
        this.pets = this.pets.filter(pet => pet.getIdDono !== cpfCliente);
    }
}
