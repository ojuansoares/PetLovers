import Listagem from "./listagem";
import Historico from "../modelo/historico";
import Entrada from "../io/entrada"

export default class ListagemTipoRacaMaisConsumidos extends Listagem{
    private historicos: Array<Historico>

    constructor(historicos: Array<Historico>){
        super()
        this.historicos = historicos
    }

    public listar(): void {
        let entrada = new Entrada()
        let opcao: number;
        do {
            console.log(`\nListagem dos produtos ou serviços mais consumidos por tipo e raça de pet:`);
            console.log(`\nOpções:`);
            console.log(`1 - Produtos`);
            console.log(`2 - Serviços`);
            console.log(`0 - Voltar\n`);
            
            opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch(opcao) {
                case 1:
                    console.log("\nListagem de Produtos:");
                    this.listarItensMaisConsumidosPorTipoRaca("produto");
                    this.listarItensMaisConsumidosPorTipo("produto");
                    opcao = 0
                    break;
                case 2:
                    console.log("\nListagem de Serviços:");
                    this.listarItensMaisConsumidosPorTipoRaca("servico");
                    this.listarItensMaisConsumidosPorTipo("servico");
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

    private listarItensMaisConsumidosPorTipoRaca(tipoCompra: string): void {
        let contadorItens = new Map<string, Map<string, number>>();
    
        for (let historico of this.historicos) {
            if (historico.getTipoCompra === tipoCompra) {
                let compra = historico.getCompra;
                let pet = historico.getPet;
                if (pet !== undefined) {
                    let contadorPorRaca = contadorItens.get(pet.getRaca) || new Map<string, number>();
                    let total = contadorPorRaca.get(compra) || 0;
                    contadorPorRaca.set(compra, total + 1);
                    contadorItens.set(pet.getRaca, contadorPorRaca);
                }
            }
        }
    
        console.log(`${tipoCompra.charAt(0).toUpperCase() + tipoCompra.slice(1)}s mais consumidos por raça de pet:\n`);
        for (let [raca, contadorPorRaca] of contadorItens.entries()) {
            console.log(`Raça: ${raca}`);
            let itensOrdenados = Array.from(contadorPorRaca.entries()).sort((a, b) => b[1] - a[1]);
            itensOrdenados.forEach(([nome, quantidade]) => {
                console.log(`${tipoCompra.charAt(0).toUpperCase() + tipoCompra.slice(1)}: ${nome} - Quantidade: ${quantidade}`);
            });
            console.log(`-------------------------`);
        }
        console.log(`\n`);
    }

    private listarItensMaisConsumidosPorTipo(tipoCompra: string): void {
        let contadorItens = new Map<string, Map<string, number>>();
    
        for (let historico of this.historicos) {
            if (historico.getTipoCompra === tipoCompra) {
                let compra = historico.getCompra;
                let pet = historico.getPet;
                if (pet !== undefined) {
                    let contadorPorTipo = contadorItens.get(pet.getTipo) || new Map<string, number>();
                    let total = contadorPorTipo.get(compra) || 0;
                    contadorPorTipo.set(compra, total + 1);
                    contadorItens.set(pet.getTipo, contadorPorTipo);
                }
            }
        }
    
        console.log(`${tipoCompra.charAt(0).toUpperCase() + tipoCompra.slice(1)}s mais consumidos por tipo de pet:\n`);
        for (let [tipo, contadorPorTipo] of contadorItens.entries()) {
            console.log(`Tipo: ${tipo}`);
            let itensOrdenados = Array.from(contadorPorTipo.entries()).sort((a, b) => b[1] - a[1]);
            itensOrdenados.forEach(([nome, quantidade]) => {
                console.log(`${tipoCompra.charAt(0).toUpperCase() + tipoCompra.slice(1)}: ${nome} - Quantidade: ${quantidade}`);
            });
            console.log(`-------------------------`);
        }
        console.log(`\n`);
    }
}