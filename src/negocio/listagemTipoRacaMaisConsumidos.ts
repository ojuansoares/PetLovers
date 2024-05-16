import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Entrada from "../io/entrada"

export default class ListagemPorTipoRaca extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
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
    
            switch (opcao) {
                case 1:
                    console.log("\nListagem de Produtos:");
                    this.listarProdutosMaisConsumidosPorTipoRaca();
                    this.listarProdutosMaisConsumidosPorTipo();
                    opcao = 0
                    break;
                case 2:
                    console.log("\nListagem de Serviços:");
                    this.listarServicosMaisConsumidosPorTipoRaca();
                    this.listarServicosMaisConsumidosPorTipo();
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

    private listarProdutosMaisConsumidosPorTipoRaca(): void {
        let contadorProdutos: { [tipoRaca: string]: { [nome: string]: number } } = {};

        this.clientes.forEach(cliente => {
            let produtosCliente = cliente.produtosMaisConsumidos;
            cliente.getPets.forEach(pet => {
                let tipoRaca = `${pet.getTipo}-${pet.getRaca}`;
                if (!contadorProdutos[tipoRaca]) {
                    contadorProdutos[tipoRaca] = {};
                }
                for (let nome in produtosCliente) {
                    if (contadorProdutos[tipoRaca][nome]) {
                        contadorProdutos[tipoRaca][nome] += produtosCliente[nome];
                    } else {
                        contadorProdutos[tipoRaca][nome] = produtosCliente[nome];
                    }
                }
            });
        });

        console.log("\nProdutos mais consumidos por tipo e raça de pet:\n");
        for (let tipoRaca in contadorProdutos) {
            console.log(`Tipo e Raça: ${tipoRaca}`);
            let produtosOrdenados = Object.entries(contadorProdutos[tipoRaca]).sort((a, b) => b[1] - a[1]);
            produtosOrdenados.forEach(([nome, quantidade]) => {
                console.log(`Produto: ${nome} - Quantidade Consumida: ${quantidade}`);
            });
            console.log(`-------------------------`);
        }
        console.log(`\n`)
    }

    private listarServicosMaisConsumidosPorTipoRaca(): void {
        let contadorServicos: { [tipoRaca: string]: { [nome: string]: number } } = {};

        this.clientes.forEach(cliente => {
            let servicosCliente = cliente.servicosMaisConsumidos;
            cliente.getPets.forEach(pet => {
                let tipoRaca = `${pet.getTipo}-${pet.getRaca}`;
                if (!contadorServicos[tipoRaca]) {
                    contadorServicos[tipoRaca] = {};
                }
                for (let nome in servicosCliente) {
                    if (contadorServicos[tipoRaca][nome]) {
                        contadorServicos[tipoRaca][nome] += servicosCliente[nome];
                    } else {
                        contadorServicos[tipoRaca][nome] = servicosCliente[nome];
                    }
                }
            });
        });

        console.log("\nServiços mais consumidos por tipo e raça de pet:\n");
        for (let tipoRaca in contadorServicos) {
            console.log(`Tipo e Raça: ${tipoRaca}`);
            let servicosOrdenados = Object.entries(contadorServicos[tipoRaca]).sort((a, b) => b[1] - a[1]);
            servicosOrdenados.forEach(([nome, quantidade]) => {
                console.log(`Serviço: ${nome} - Quantidade Consumida: ${quantidade}`);
            });
            console.log(`-------------------------`);
        }
        console.log(`\n`);
    }

    private listarProdutosMaisConsumidosPorTipo(): void {
        let contadorProdutos: { [tipo: string]: { [nome: string]: number } } = {};
    
        this.clientes.forEach(cliente => {
            let produtosCliente = cliente.produtosMaisConsumidos;
            cliente.getPets.forEach(pet => {
                let tipo = pet.getTipo;
                if (!contadorProdutos[tipo]) {
                    contadorProdutos[tipo] = {};
                }
                for (let nome in produtosCliente) {
                    if (contadorProdutos[tipo][nome]) {
                        contadorProdutos[tipo][nome] += produtosCliente[nome];
                    } else {
                        contadorProdutos[tipo][nome] = produtosCliente[nome];
                    }
                }
            });
        });
    
        console.log("\nProdutos mais consumidos por tipo de pet:\n");
        for (let tipo in contadorProdutos) {
            console.log(`Tipo: ${tipo}`);
            let produtosOrdenados = Object.entries(contadorProdutos[tipo]).sort((a, b) => b[1] - a[1]);
            produtosOrdenados.forEach(([nome, quantidade]) => {
                console.log(`Produto: ${nome} - Quantidade Consumida: ${quantidade}`);
            });
            console.log(`-------------------------`);
        }
        console.log(`\n`); 
    }
    
    private listarServicosMaisConsumidosPorTipo(): void {
        let contadorServicos: { [tipo: string]: { [nome: string]: number } } = {};
    
        this.clientes.forEach(cliente => {
            let servicosCliente = cliente.servicosMaisConsumidos;
            cliente.getPets.forEach(pet => {
                let tipo = pet.getTipo;
                if (!contadorServicos[tipo]) {
                    contadorServicos[tipo] = {};
                }
                for (let nome in servicosCliente) {
                    if (contadorServicos[tipo][nome]) {
                        contadorServicos[tipo][nome] += servicosCliente[nome];
                    } else {
                        contadorServicos[tipo][nome] = servicosCliente[nome];
                    }
                }
            });
        });
    
        console.log("\nServiços mais consumidos por tipo de pet:\n");
        for (let tipo in contadorServicos) {
            console.log(`Tipo: ${tipo}`);
            let servicosOrdenados = Object.entries(contadorServicos[tipo]).sort((a, b) => b[1] - a[1]);
            servicosOrdenados.forEach(([nome, quantidade]) => {
                console.log(`Serviço: ${nome} - Quantidade Consumida: ${quantidade}`);
            });
            console.log(`-------------------------`);
        }
        console.log(`\n`);
    }
}