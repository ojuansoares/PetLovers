import Listagem from "./listagem";
import Historico from "../modelo/historico";

export default class ListagemTop5Valor extends Listagem{
    private historicos: Array<Historico>

    constructor(historicos: Array<Historico>){
        super()
        this.historicos = historicos
    }

    public listar(): void {
        let totalPorCliente = new Map<string, number>();

        for (let historico of this.historicos) {
            let total = totalPorCliente.get(historico.getComprador.getNome) || 0;
            totalPorCliente.set(historico.getComprador.getNome, total + Number(historico.getValor));
        }

        let listaClientes = Array.from(totalPorCliente.entries());
        listaClientes.sort((a, b) => b[1] - a[1]);

        let top5Clientes = listaClientes.slice(0, 5);

        console.log("\nTop 5 clientes que mais consumiram (valor):\n");
        for (let [nomeCliente, total] of top5Clientes) {
            let idCliente = this.historicos.find(historico => historico.getComprador.getNome === nomeCliente)?.getComprador.getId;
            console.log(`ID & Cliente: (${idCliente}) ${nomeCliente} - Total Consumido: ${total}`);
        }
        console.log(`\n`);
    }
}