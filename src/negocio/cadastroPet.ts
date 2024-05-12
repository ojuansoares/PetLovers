import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Entrada from "../io/entrada"
import Cadastro from "./cadastro"

export default class CadastroPet extends Cadastro {
    private pets: Array<Pet>;
    private clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super()
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let raca = this.entrada.receberTexto(`Digite a raça do pet: `)
        let genero = this.entrada.receberTexto(`Digite o gênero do pet: `)
        let tipo = this.entrada.receberTexto(`Digite o tipo do pet: `)
        let id = Number(this.pets.length + 1)
        let idDono: number;
        let cliente;
        do {
            idDono = Number(this.entrada.receberTexto(`Digite o ID do dono do pet (Digite 0 para cancelar): `))
            if (idDono === 0) {
                console.log(`\nCadastro cancelado.\n`);
                break;
            }
            cliente = this.clientes.find(cliente => cliente.id == idDono)
            if (!cliente) {
                console.log(`\nCliente não encontrado. Tente novamente.\n`);
            }
        } while (!cliente)
        if (cliente) {
            let pet = new Pet(id, nome, raca, genero, tipo, idDono);
            this.pets.push(pet);
            cliente.addPet(pet);
            console.log(`\nPet cadastrado com sucesso!\n`);
        }
    }
}