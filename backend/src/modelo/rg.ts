export default class RG {
    private valor: string
    private dataEmissao: Date
    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor
        this.dataEmissao = dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
    public set setValor(novoValor:string){
        this.valor = novoValor
    }

    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
    public set setDataEmissao(novaData: Date) {
        this.dataEmissao = novaData
    }
}