
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemTop10Quantidade extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){ // Modify this line
        super()
        this.clientes = clientes // Add this line
    }

    public listar(): void {
        console.log(`\nListagem dos 10 clientes que mais consumiram (quantidade):\n`);
        let clientesCopy = [...this.clientes];

        clientesCopy.sort((a, b) => b.totalQuantidadeConsumida - a.totalQuantidadeConsumida);

        let top10Clientes = clientesCopy.slice(0, 10);

        top10Clientes.forEach(cliente => {
            console.log(`Cliente: ${cliente.getNome} (ID: ${cliente.getId}) - Total Consumido: ${cliente.totalQuantidadeConsumida}`);
        });
        console.log(`\n`);
    }
}