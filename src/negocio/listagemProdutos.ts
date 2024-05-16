import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`Listagem dos produtos:`);
        this.produtos.forEach(produtos =>{
            console.log(`ID: ` + produtos.getId);
            console.log(`Nome: ` + produtos.getNome);
            console.log(`Descrição: ` + produtos.getDescricao);
            console.log(`Valor: ` + produtos.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}