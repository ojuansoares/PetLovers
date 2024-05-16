import Produto from "../modelo/produto";
import Entrada from "../io/entrada"
import Atualizacao from "./atualizacao"

export default class AtualizacaoProduto extends Atualizacao {
    private produtos: Array<Produto>;
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\nInício da alteração do produto`);
        let id = Number(this.entrada.receberTexto(`Por favor informe o ID do produto que deseja atualizar: `));
        let produtoIndex = this.produtos.findIndex(produto => produto.getId === id);
        if (produtoIndex !== -1) {
            let produto = this.produtos[produtoIndex];
            let novoNome: string;
            let nomeExistente: boolean;
            do {
                novoNome = this.entrada.receberTexto(`Informe o novo nome do produto (deixe em branco para não atualizar): `);
                if (novoNome === '') {
                    break;
                }
                if (novoNome !== '' && (/\d/.test(novoNome) || /[^a-zA-Z\s]/.test(novoNome))) {
                    console.log("Nome inválido. Por favor, insira um nome válido.");
                }
                nomeExistente = this.produtos.some(produto => produto.getNome === novoNome);
                if (nomeExistente) {
                    console.log("Já existe um produto com este nome. Por favor, insira um nome diferente.");
                }
            } while (novoNome !== '' && (/\d/.test(novoNome) || /[^a-zA-Z\s]/.test(novoNome) || nomeExistente));
            if (novoNome !== '') {
                produto.setNome(novoNome);
            }

            let novaDescricao: string;
            do {
                novaDescricao = this.entrada.receberTexto(`Informe a nova descrição do produto (deixe em branco para não atualizar): `);
                if (novaDescricao === '') {
                    break;
                }
                if (novaDescricao !== '' && (/[^a-zA-Z\s]/.test(novaDescricao))) {
                    console.log("Nome inválido. Por favor, insira um nome válido.");
                }
            } while (novaDescricao !== '' && (/[^a-zA-Z\s]/.test(novaDescricao)));
            if (novaDescricao !== '') {
                produto.setDescricao(novaDescricao);
            }

            let novoValor: string;
            do {
                novoValor = this.entrada.receberTexto(`Digite o valor do produto: `);
                if (novoValor === '') {
                    break;
                }
                if (!/^\d+,\d{2}$/.test(novoValor)) {
                    console.log("Valor inválido. Por favor, insira um valor válido (ex: 20,99).");
                }
            } while (novoValor !== '' && !/^\d+,\d{2}$/.test(novoValor));
            if (novoValor !== '') {
                novoValor = novoValor.replace(',', '.');
                produto.setValor(novoValor);
            }

            console.log(`Produto com ID ${id} foi atualizado com sucesso.\n`);
        } else {
            console.log(`Produto com ID ${id} não foi encontrado.\n`);
        }
    }
}