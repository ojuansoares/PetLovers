import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Delecao from "./delecao"

export default class DelecaoServico extends Delecao{
    private entrada: Entrada
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log(`\nInício da deleção do serviço`);
        let id = Number(this.entrada.receberTexto(`Por favor informe o ID do serviço que deseja deletar: `));
        let index = this.servicos.findIndex(servico => servico.getId == id);
        if (index !== -1) {
            let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja deletar o serviço ${id}? (S/N): `);
            if (confirmacao.toLowerCase() === 's') {
                this.servicos.splice(index, 1);
                console.log(`Serviço com ID ${id} foi deletado com sucesso.\n`);
            } else {
                console.log(`Deleção do serviço com ID ${id} foi cancelada.\n`);
            }
        } else {
            console.log(`Serviço com ID ${id} não foi encontrado.\n`);
        }
    }
}