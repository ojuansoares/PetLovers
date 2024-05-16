import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro{
    private entrada: Entrada
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`Iniciando o cadastro de um produto`);

        let id = Number(this.produtos.length + 1)

        let nome: string;
        let nomeExistente: boolean;
        do {
            nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
            if (nome === '' || /\d/.test(nome) || /[^a-zA-Z\s]/.test(nome)) {
                console.log("Nome inválido. Por favor, insira um nome válido.");
            }
            nomeExistente = this.produtos.some(produto => produto.getNome === nome);
            if (nomeExistente) {
                console.log("Já existe um produto com este nome. Por favor, insira um nome diferente.");
            }
        } while (nome === '' || /\d/.test(nome) || /[^a-zA-Z\s]/.test(nome) || nomeExistente);

        let descricao: string;
        do {
            descricao = this.entrada.receberTexto(`Por favor informe a descrição do produto: `);
            if (descricao === '' || /\d/.test(descricao) || /[^a-zA-Z\s]/.test(descricao)) {
                console.log("Descrição inválida. Por favor, insira uma descrição válida.");
            }
        } while (descricao === '' || /\d/.test(descricao) || /[^a-zA-Z\s]/.test(descricao));

        let valor: string;
        do {
            valor = this.entrada.receberTexto(`Digite o valor do produto: `);
            if (!/^\d+,\d{2}$/.test(valor)) {
                console.log("Valor inválido. Por favor, insira um valor válido (ex: 20,99).");
            }
        } while (!/^\d+,\d{2}$/.test(valor));
        valor = valor.replace(',', '.');

        let produto = new Produto(id, nome, descricao, valor);
        this.produtos.push(produto);
    }
}