import Historico from "../modelo/historico";
import Listagem from "./listagem";

export default class ListagemHistorico extends Listagem {
    private historicos: Array<Historico>;

    constructor(historicos: Array<Historico>) {
        super();
        this.historicos = historicos;
    }

    public listar(): void {
        console.log(`\nListagem do histórico de compras:`);
        this.historicos.forEach(historico => {
            console.log(`ID Histórico: ` + historico.getId);
            console.log(`Data do registro: ` + historico.getData + ' às ' + historico.getHora);
            console.log(`ID & Nome do Comprador: (${historico.getComprador.getId}) ${historico.getComprador.getNome}`);
            console.log(`Nome do Item: ` + historico.getCompra);
            if (historico.getPet) {
                console.log(`Nome do Pet: ` + historico.getPet.getNome);
            } else {
                console.log(`Nome do Pet: Sem pet associado`);
            }
            console.log(`Valor: ` + historico.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}