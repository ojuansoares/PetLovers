import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada"
import Alteracao from "./alteracao"

export default class AlteracaoPet extends Alteracao {
    private pets: Array<Pet>;
    private clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public alterar(): void {
        console.log(`\nInício da alteração do pet`);
        let id = Number(this.entrada.receberTexto(`Por favor informe o ID do pet que deseja alterar: `));
        let petIndex = this.pets.findIndex(pet => pet.getId === id);
        if (petIndex !== -1) {
            let pet = this.pets[petIndex];
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
            let novoIdDono = Number(this.entrada.receberTexto(`Informe o novo ID do dono do pet (deixe em branco para não alterar): `));
            if (!isNaN(novoIdDono)) {
                pet.setIdDono(novoIdDono);
            }
            console.log(`Pet com ID ${id} foi alterado com sucesso.\n`);
        } else {
            console.log(`Nenhum pet foi encontrado com o ID ${id}.\n`);
        }
    }
}