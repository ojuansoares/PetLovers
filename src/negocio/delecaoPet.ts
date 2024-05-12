import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada"
import Delecao from "./delecao"

export default class DelecaoPet extends Delecao {
    private pets: Array<Pet>;
    private clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nInício da deleção do pet`);
        let id = Number(this.entrada.receberTexto(`Por favor informe o ID do pet que deseja deletar: `));
        let petIndex = this.pets.findIndex(pet => pet.getId == id);
    
        if (petIndex !== -1) {
            let pet = this.pets[petIndex];
            let dono = this.clientes.find(cliente => cliente.getId === pet.getIdDono);
            if (dono) {
                let petDonoIndex = dono.getPets.findIndex(petDono => petDono.getId === id);
                if (petDonoIndex !== -1) {
                    let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja deletar o pet ${id}? (S/N): `);
                    if (confirmacao.toLowerCase() === 's') {
                        dono.getPets.splice(petDonoIndex, 1);
                        this.pets.splice(petIndex, 1);
                        console.log(`Pet com ID ${id} foi deletado com sucesso.\n`);
                    } else {
                        console.log(`Deleção do pet com ID ${id} foi cancelada.\n`);
                    }
                }
            }
        } else {
            console.log(`Não foi encontrado um pet com o ID ${id}.\n`);}
    }  
}