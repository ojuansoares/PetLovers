export default class ID {
    private valor: number
    constructor(valor: number) {
        this.valor = valor
    }
    public get getId(): number {
        return this.valor
    }
}