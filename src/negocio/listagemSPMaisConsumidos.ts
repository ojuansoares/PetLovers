import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Entrada from "../io/entrada"

export default class ListagemMaisConsumidos extends Listagem{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
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
                        this.listarProdutosMaisConsumidos();
                        opcao = 0
                        break;
                    case 2:
                        this.listarServicosMaisConsumidos();
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

    private listarProdutosMaisConsumidos(): void {
        let contadorProdutos: { [nome: string]: number } = {};
    
        this.clientes.forEach(cliente => {
            let produtosCliente = cliente.produtosMaisConsumidos;
            for (let nome in produtosCliente) {
                if (contadorProdutos[nome]) {
                    contadorProdutos[nome] += produtosCliente[nome];
                } else {
                    contadorProdutos[nome] = produtosCliente[nome];
                }
            }
        });
    
        let produtosOrdenados = Object.entries(contadorProdutos).sort((a, b) => b[1] - a[1]);
    
        console.log("\nProdutos mais consumidos:\n");
        produtosOrdenados.forEach(([nome, quantidade]) => {
            console.log(`Produto: ${nome} - Quantidade Consumida: ${quantidade}`);
        });
        console.log(`\n`);
    }

    private listarServicosMaisConsumidos(): void {
        let contadorServicos: { [nome: string]: number } = {};
    
        this.clientes.forEach(cliente => {
            let servicosCliente = cliente.servicosMaisConsumidos;
            for (let nome in servicosCliente) {
                if (contadorServicos[nome]) {
                    contadorServicos[nome] += servicosCliente[nome];
                } else {
                    contadorServicos[nome] = servicosCliente[nome];
                }
            }
        });
    
        let servicosOrdenados = Object.entries(contadorServicos).sort((a, b) => b[1] - a[1]);
    
        console.log("\nServiços mais consumidos:\n");
        servicosOrdenados.forEach(([nome, quantidade]) => {
            console.log(`Serviço: ${nome} - Quantidade Consumida: ${quantidade}`);
        });
        console.log(`\n`);
    }
}