import Listagem from "./listagem";
import Historico from "../modelo/historico";
import Entrada from "../io/entrada"

export default class ListagemMaisConsumidos extends Listagem{
    private historicos: Array<Historico>

    constructor(historicos: Array<Historico>){
        super()
        this.historicos = historicos
    }

    public listar(): void {
        let entrada = new Entrada()
        let opcao: number;
        do {
            console.log(`\nListagem dos produtos ou serviços mais consumidos:`);
            console.log(`\nOpções:`);
            console.log(`1 - Produtos`);
            console.log(`2 - Serviços`);
            console.log(`0 - Voltar\n`);
            
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch(opcao) {
                case 1:
                    this.listarItensMaisConsumidos("produto");
                    opcao = 0
                    break;
                case 2:
                    this.listarItensMaisConsumidos("servico");
                    opcao = 0
                    break;
                case 0:
                    console.log(`Voltando ao menu principal`)
                    break;
                default:
                    console.log(`\nOperação não entendida :(`)
            }
        } while (opcao != 0)
    }

    private listarItensMaisConsumidos(tipoCompra: string): void {
        let contadorItens = new Map<string, number>();

        for (let historico of this.historicos) {
            if (historico.getTipoCompra === tipoCompra) {
                let total = contadorItens.get(historico.getCompra) || 0;
                contadorItens.set(historico.getCompra, total + 1);
            }
        }

        let itensOrdenados = Array.from(contadorItens.entries()).sort((a, b) => b[1] - a[1]);

        console.log(`\n${tipoCompra.charAt(0).toUpperCase() + tipoCompra.slice(1)}s mais consumidos:\n`);
        itensOrdenados.forEach(([nome, quantidade]) => {
            console.log(`${tipoCompra.charAt(0).toUpperCase() + tipoCompra.slice(1)}: ${nome} - Quantidade Consumida: ${quantidade}`);
        });
        console.log(`\n`);
    }
}