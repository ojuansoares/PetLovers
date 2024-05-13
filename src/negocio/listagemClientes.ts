import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`ID: ` + cliente.id);
            console.log(`Data do Cadastro: ` + cliente.getDataCadastro + ' às ' + cliente.getHoraCadastro);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor + ' (' + cliente.getCpf.getDataEmissao.toISOString().split('T')[0] + ')');
            cliente.getRgs.forEach((rg, index) => {
                console.log(`RG ${index + 1}: ` + rg.getValor + ' (' + rg.getDataEmissao.toISOString().split('T')[0] + ')');
            });
            cliente.getTelefones.forEach((telefone, index) => {
                console.log(`Telefone ${index + 1}: ` + telefone.getTelefoneFormatado);
            });
            console.log(`Pets (ID & Nome): ` + cliente.getPets.map(pet => pet.getId + ' ' + pet.getNome).join(', '));
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}