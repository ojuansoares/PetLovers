import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes
        this.pets = pets
    }
    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        this.clientes.forEach(cliente => {
            const petsDoCliente = this.pets.filter(pet => pet.getIdDono === cliente.id);
            if (petsDoCliente.length > 0) {
                console.log(`Dono: ${cliente.nome} (${cliente.id})`);
                petsDoCliente.forEach((pet, index) => {
                    console.log(`Pet ${index + 1}:`);
                    console.log(`ID: ` + pet.getId);
                    console.log(`Nome: ` + pet.getNome);
                    console.log(`Raça: ` + pet.getRaca);
                    console.log(`Gênero: ` + pet.getGenero);
                    console.log(`Tipo: ` + pet.getTipo);
                    console.log(`--------------------------------------`);
                });
            }
        });
        console.log(`\n`);
    }
}