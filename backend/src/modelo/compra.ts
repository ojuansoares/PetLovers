import Cliente from "./cliente";
import Pet from "./pet";
import Produto from "./produto";
import Servico from "./servico";

export default class Compra {
    private clienteNome: string;
    private clienteCpf: string;
    private tipoCompra: string;
    private itemComprado: { nome: string; descricao: string; valor: string; };
    private pet: { nome: string; raca: string; genero: string; tipo: string; } | null;
    private valor: string;
    private dataCompra: Date;

    constructor(clienteNome: string, clienteCpf: string, tipoCompra: string, itemComprado: Produto | Servico, pet: Pet | null, valor: string, dataCompra: Date) {
        this.clienteNome = clienteNome;
        this.clienteCpf = clienteCpf;
        this.tipoCompra = tipoCompra;
        this.itemComprado = { nome: itemComprado.getNome, descricao: itemComprado.getDescricao, valor: itemComprado.getValor };
        this.pet = pet ? { nome: pet.getNome, raca: pet.getRaca, genero: pet.getGenero, tipo: pet.getTipo } : null;
        this.valor = valor;
        this.dataCompra = dataCompra;
    }

    get getClienteNome() {
        return this.clienteNome;
    }

    get getClienteCpf() {
        return this.clienteCpf;
    }

    get getTipoCompra() {
        return this.tipoCompra;
    }

    get getItemComprado() {
        return this.itemComprado;
    }

    get getPet() {
        return this.pet;
    }

    get getValor() {
        return this.valor;
    }

    get getDataCompra() {
        return this.dataCompra;
    }
}
