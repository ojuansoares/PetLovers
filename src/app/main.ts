import { log } from "console";
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroPet from "../negocio/cadastroPet";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemPets from "../negocio/listagemPets";
import DelecaoPet from "../negocio/delecaoPet";
import DelecaoCliente from "../negocio/delecaoCliente";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastro`);
    console.log(`2 - Listagem`);
    console.log(`3 - Editar`);
    console.log(`4 - Deletar`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let subOpcao: number;
            do {
                console.log(`1 - Cadastrar cliente`);
                console.log(`2 - Cadastrar produto`);
                console.log(`3 - Cadastrar pet`);
                console.log(`0 - Voltar`);
                
                subOpcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (subOpcao) {
                    case 1:
                        let cadastro = new CadastroCliente(empresa.getClientes)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                        cadastroProduto.cadastrar()
                        break;
                    case 3:
                        let cadastroPet = new CadastroPet(empresa.getPets, empresa.getClientes)
                        cadastroPet.cadastrar()
                        break;
                    case 0:
                        console.log(`Voltando ao menu principal`)
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            } while (subOpcao != 0)
            break;

        case 2:
            let subOpcao2: number;
            do {
                console.log(`1 - Listar todos os clientes`);
                console.log(`2 - Listar todos os pets`);
                console.log(`3 - Todos os produtos`);
                console.log(`0 - Voltar`);
                
                subOpcao2 = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (subOpcao2) {
                    case 1:
                        let listagem = new ListagemClientes(empresa.getClientes)
                        listagem.listar()
                        break;
                    case 2:
                        let listagemPets = new ListagemPets(empresa.getClientes, empresa.getPets)
                        listagemPets.listar()
                        break;
                    case 3:
                        let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
                        listagemProdutos.listar()
                        break;
                    case 0:
                        console.log(`Voltando ao menu principal`)
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            } while (subOpcao2 != 0)
            break;

        case 3:

        case 4:
            let subOpcao4: number;
            do {
                console.log(`1 - Deletar cliente`);
                console.log(`2 - Deletar pet`);
                console.log(`3 - Deletar produto`);
                console.log(`3 - Deletar serviço`);
                console.log(`0 - Voltar`);
                
                subOpcao4 = entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (subOpcao4) {
                    case 1:
                        let delecaoCliente = new DelecaoCliente(empresa.getClientes, empresa.getPets)
                        delecaoCliente.deletar()
                        break;
                    case 2:
                        let delecaoPet = new DelecaoPet(empresa.getPets, empresa.getClientes)
                        delecaoPet.deletar()
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 0:
                        console.log(`Voltando ao menu principal`)
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            } while (subOpcao4 != 0)
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}