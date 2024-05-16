import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada"
import Atualizacao from "./atualizacao"

export default class AtualizacaoPet extends Atualizacao {
    private pets: Array<Pet>;
    private clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\nInício da atualização do pet`);
        let id = Number(this.entrada.receberTexto(`Por favor informe o ID do pet que deseja atualizar: `));
        let petIndex = this.pets.findIndex(pet => pet.getId === id);
        if (petIndex !== -1) {
            let pet = this.pets[petIndex];
            let idDonoAntigo = pet.getIdDono;

            let novoNome: string;
            do {
                novoNome = this.entrada.receberTexto(`Informe o novo nome do pet (deixe em branco para não atualizar): `);
                if (novoNome === '') {
                    break;
                }
                if (novoNome !== '' && (/\d/.test(novoNome) || /[^a-zA-Z\s]/.test(novoNome))) {
                    console.log("Nome inválido. Por favor, insira um nome válido.");
                }
            } while (novoNome !== '' && (/\d/.test(novoNome) || /[^a-zA-Z\s]/.test(novoNome)));
            if (novoNome !== '') {
                pet.setNome(novoNome);
            }

            let novaRaca: string;
            do {
                novaRaca = this.entrada.receberTexto(`Informe a nova raça do pet (deixe em branco para não atualizar): `);
                if (novaRaca === '') {
                    break;
                }
                if (novaRaca !== '' && (/\d/.test(novaRaca) || /[^a-zA-Z\s]/.test(novaRaca))) {
                    console.log("Raça inválida. Por favor, insira uma raça válida.");
                }
            } while (novaRaca !== '' && (/\d/.test(novaRaca) || /[^a-zA-Z\s]/.test(novaRaca)));
            if (novaRaca !== '') {
                pet.setRaca(novaRaca);
            }

            let novoGenero: string;
            do {
                novoGenero = this.entrada.receberTexto(`Informe o novo gênero do pet (deixe em branco para não atualizar): `);
                if (novoGenero === '') {
                    break;
                }
                if (novoGenero !== '' && (/\d/.test(novoGenero) || /[^a-zA-Z\s]/.test(novoGenero))) {
                    console.log("Gênero inválido. Por favor, insira um gênero válido.");
                }
            } while (novoGenero !== '' && (/\d/.test(novoGenero) || /[^a-zA-Z\s]/.test(novoGenero)));
            if (novoGenero !== '') {
                pet.setGenero(novoGenero);
            }

            let novoTipo: string;
            do {
                novoTipo = this.entrada.receberTexto(`Informe o novo tipo do pet (deixe em branco para não atualizar): `);
                if (novoTipo === '') {
                    break;
                }
                if (novoTipo !== '' && (/\d/.test(novoTipo) || /[^a-zA-Z\s]/.test(novoTipo))) {
                    console.log("Tipo inválido. Por favor, insira um tipo válido.");
                }
            } while (novoTipo !== '' && (/\d/.test(novoTipo) || /[^a-zA-Z\s]/.test(novoTipo)));
            if (novoTipo !== '') {
                pet.setTipo(novoTipo);
            }
            
            let novoIdDono: number = 0;
            let clienteNovo;
            do {
                let entrada: string;
                do {
                    entrada = this.entrada.receberTexto(`Digite o ID do novo dono do pet (deixe em branco para não atualizar): `);
                    if (entrada === '') {
                        break;
                    } else if (isNaN(Number(entrada))) {
                        console.log(`\nID inválido. Por favor, insira um ID válido.\n`);
                    }
                } while (isNaN(Number(entrada)));
                if (entrada === '') {
                    break;
                }
                novoIdDono = Number(entrada);
                clienteNovo = this.clientes.find(cliente => cliente.id == novoIdDono)
                if (!clienteNovo) {
                    console.log(`\nCliente não encontrado. Tente novamente.\n`);
                }
            } while (!clienteNovo)

            if (clienteNovo) {
                // Atualização Dono
                pet.setIdDono(novoIdDono);
                clienteNovo.addPet(pet);
                console.log(`\nPet atualizado com sucesso!\n`);

                // Remoção Dono Antigo
                let donoAntigo = this.clientes.find(cliente => cliente.id == idDonoAntigo);
                if (donoAntigo) {
                    let petDonoIndex = donoAntigo.getPets.findIndex(petDono => petDono.getId == id);
                    if (petDonoIndex !== -1) {
                        donoAntigo.getPets.splice(petDonoIndex, 1);
                        console.log(`Pet com ID ${id} foi removido do dono antigo com sucesso.\n`);
                    }
                }
            }

        } else {
            console.log(`Nenhum pet foi encontrado com o ID ${id}.\n`);
        }
    }
}