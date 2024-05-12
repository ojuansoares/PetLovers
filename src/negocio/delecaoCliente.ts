import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada"
import Delecao from "./delecao"
import Pet from "../modelo/pet";

export default class DelecaoCliente extends Delecao {
    private clientes: Array<Cliente>
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, pets: Array<Pet>) {
        super()
        this.clientes = clientes;
        this.pets = pets
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nInício da deleção do cliente`);
        let id = Number(this.entrada.receberTexto(`Por favor informe o ID do cliente que deseja deletar: `));
        let index = this.clientes.findIndex(cliente => cliente.id == id);
        if (index !== -1) {
            let cliente = this.clientes[index];
            if (cliente.getPets.length > 0) {
                console.log(`Não foi possível a deleção do cliente pois há Pets registrados no seu nome!`);
                let confirmacao = this.entrada.receberTexto(`Deseja deletar o cliente juntamente com seus pets? (S/N): `);
                if (confirmacao.toLowerCase() === 's') {
                    cliente.getPets.forEach(pet => {
                        let petIndex = this.pets.findIndex(p => p.getId === pet.getId);
                        if (petIndex !== -1) {
                            this.pets.splice(petIndex, 1);
                        }});
                    this.clientes.splice(index, 1);
                    console.log(`Cliente com ID ${id} e seus pets foram deletados com sucesso.\n`);
                } else {
                    console.log(`Deleção do cliente com ID ${id} foi cancelada.\n`);
                }
            } else {
                let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja deletar este cliente? (S/N): `);
                if (confirmacao.toLowerCase() === 's') {
                    this.clientes.splice(index, 1);
                    console.log(`Cliente com ID ${id} foi deletado com sucesso.\n`);
                } else {
                    console.log(`Deleção do cliente com ID ${id} foi cancelada.\n`);
                }
            }
        } else {
            console.log(`Cliente com ID ${id} não foi encontrado.\n`);
        }
    }
}