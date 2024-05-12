export default class Telefone {
    private ddd: string
    private numero: string
    private telefoneFormatado: string
    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
        this.telefoneFormatado = `(${this.ddd}) ${this.numero}`;
    }
    public get getDdd(): string {
        return this.ddd
    }
    public get getNumero(): string {
        return this.numero
    }
    public get getTelefoneFormatado(): string {
        return this.telefoneFormatado;
    }
}