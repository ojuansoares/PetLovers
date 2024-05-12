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
        this.produtos.forEach(p =>{
            console.log(`Nome: ${p.nome}`);
        })
    }
}