import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Delecao from "./delecao"

export default class DelecaoProduto extends Delecao{
    private entrada: Entrada
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nInício da deleção do produto`);
        let id = Number(this.entrada.receberTexto(`Por favor informe o ID do produto que deseja deletar: `));
        let index = this.produtos.findIndex(produto => produto.getId == id);
        if (index !== -1) {
            let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja deletar o produto ${id}? (S/N): `);
            if (confirmacao.toLowerCase() === 's') {
                this.produtos.splice(index, 1);
                console.log(`Produto com ID ${id} foi deletado com sucesso.\n`);
            } else {
                console.log(`Deleção do produto com ID ${id} foi cancelada.\n`);
            }
        } else {
            console.log(`Produto com ID ${id} não foi encontrado.\n`);
        }
    }
}