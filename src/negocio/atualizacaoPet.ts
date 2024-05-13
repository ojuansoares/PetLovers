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
        console.log(`\nInício da alteração do pet`);
        let id = Number(this.entrada.receberTexto(`Por favor informe o ID do pet que deseja alterar: `));
        let petIndex = this.pets.findIndex(pet => pet.getId === id);
        if (petIndex !== -1) {
            let pet = this.pets[petIndex];
            let idDonoAntigo = pet.getIdDono;
            let novoNome = this.entrada.receberTexto(`Informe o novo nome do pet (deixe em branco para não alterar): `);
            if (novoNome !== '') {
                pet.setNome(novoNome);
            }
            let novaRaca = this.entrada.receberTexto(`Informe a nova raça do pet (deixe em branco para não alterar): `);
            if (novaRaca !== '') {
                pet.setRaca(novaRaca);
            }
            let novoGenero = this.entrada.receberTexto(`Informe o novo gênero do pet (deixe em branco para não alterar): `);
            if (novoGenero !== '') {
                pet.setGenero(novoGenero);
            }
            let novoTipo = this.entrada.receberTexto(`Informe o novo tipo do pet (deixe em branco para não alterar): `);
            if (novoTipo !== '') {
                pet.setTipo(novoTipo);
            }
            
            let novoIdDono: number = 0;
            let clienteNovo;
            do {
                let entrada: string;
                do {
                    entrada = this.entrada.receberTexto(`Digite o ID do novo dono do pet (deixe em branco para não alterar): `);
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
                // Atualiza o dono do pet
                pet.setIdDono(novoIdDono);
                clienteNovo.addPet(pet);
                console.log(`\nPet atualizado com sucesso!\n`);

                // Remove o pet do dono antigo
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