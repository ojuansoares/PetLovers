
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemTop5Valor extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){ // Modify this line
        super()
        this.clientes = clientes // Add this line
    }

    public listar(): void {
        console.log(`\nListagem dos 5 clientes que mais consumiram (valor):\n`);
        let clientesCopy = [...this.clientes];
    
        clientesCopy.sort((a, b) => b.valorTotalConsumido - a.valorTotalConsumido);
    
        let top5Clientes = clientesCopy.slice(0, 5);
    
        top5Clientes.forEach(cliente => {
            console.log(`Cliente: ${cliente.getNome} (ID: ${cliente.getId}) - Total Consumido em Valor: ${cliente.valorTotalConsumido}`);
        });
        console.log(`\n`);
    }
}