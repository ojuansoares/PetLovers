import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServico extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nListagem dos serviços:`);
        this.servicos.forEach(servicos =>{
            console.log(`ID: ` + servicos.getId);
            console.log(`Nome: ` + servicos.getNome);
            console.log(`Descrição: ` + servicos.getDescricao);
            console.log(`Valor: ` + servicos.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}