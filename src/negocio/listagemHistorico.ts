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
            console.log(`Nome do Comprador: ` + historico.getComprador);
            console.log(`Nome do Item: ` + historico.getCompra);
            console.log(`Nome do Pet: ` + historico.getPet);
            console.log(`Valor: ` + historico.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}