import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro{
    private entrada: Entrada
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`Iniciando o cadastro de um serviço`);
        let nome = this.entrada.receberTexto(`Digite o nome do serviço: `)
        let servico = new Servico()
        servico.nome = nome
        this.servicos.push(servico)
    }
}