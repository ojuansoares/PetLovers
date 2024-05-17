import Pet from './pet';
import Cliente from './cliente';

export default class Historico {
    private comprador: Cliente;
    private compra: string;
    private pet: Pet | undefined;
    private valor: string;
    private id: number;
    private data: string;
    private hora: string;
    private tipoCompra: string;

    constructor(id: number, comprador: Cliente, compra: string, pet: Pet | undefined, valor: string, data: string, hora: string, tipoCompra: string) {
        this.comprador = comprador;
        this.id = id;
        this.compra = compra;
        this.pet = pet;
        this.valor = valor;
        this.data = data;
        this.hora = hora;
        this.tipoCompra = tipoCompra;
    }

    public get getId() {
        return this.id
    }
    public get getComprador() {
        return this.comprador
    }
    public get getCompra() {
        return this.compra
    }
    public get getPet() {
        return this.pet
    }
    public get getValor() {
        return this.valor
    }
    public get getData() {
        return this.data
    }
    public get getHora() {
        return this.hora
    }
    public get getTipoCompra() { 
        return this.tipoCompra;
    }
}